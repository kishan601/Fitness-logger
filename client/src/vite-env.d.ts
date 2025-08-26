interface ImportMetaEnv {
  readonly VITE_API_URL?: string
  // add other VITE_ prefixed env vars here if you use them
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}