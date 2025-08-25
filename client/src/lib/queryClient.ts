import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { BASE_URL } from "./config";// import your base URL

// Helper to throw an error if response is not ok
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// General API request function
export async function apiRequest(
  method: string,
  endpoint: string,
  data?: unknown | undefined,
): Promise<Response> {
  try {
    const url = `${BASE_URL}${endpoint}`; // prepend Railway backend URL

    const res = await fetch(url, {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include", // ensures cookies/session info is sent
    });

    await throwIfResNotOk(res);
    return res;
  } catch (error) {
    console.error(`API request failed: ${method} ${endpoint}`, error);
    throw error;
  }
}

// Query function for React Query
type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    try {
      // join queryKey into URL and prepend BASE_URL
      const endpoint = queryKey.join("/").replace(/^\/+/, "");
      const url = `${BASE_URL}/${endpoint}`;

      const res = await fetch(url, { credentials: "include" });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    } catch (error) {
      // Log the actual error for debugging
      console.error(`Query failed for ${queryKey.join("/")}:`, error);
      // Re-throw to let React Query handle it properly
      throw error;
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "returnNull" }), // Change to returnNull to be more forgiving
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
