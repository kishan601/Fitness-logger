# FitTrack - Fitness Tracking Application

A modern full-stack fitness tracking application built with React, Express.js, and PostgreSQL. Track your workouts, visualize progress with beautiful charts, and achieve your fitness goals with an intuitive and elegant interface.

## ✨ Features

- **📊 Weekly Progress Charts** - Visual progress tracking with dynamic scaling based on your actual workout data
- **💪 Workout Logging** - Log various exercise types (running, strength, yoga, cycling, swimming, HIIT)
- **📱 Responsive Design** - Beautiful interface that works on desktop and mobile
- **🌙 Dark/Light Theme** - Switch between themes with smooth transitions
- **⚡ Real-time Data** - Instant updates with optimistic UI using React Query
- **✏️ Inline Editing** - Edit workout calories directly in the activity list
- **🎨 Luxury Design** - Glass morphism effects and gradient styling
- **📈 Progress Analytics** - Combine calories and duration data for activity scoring
- **🔄 Beautiful Scrollbars** - Custom-styled scrollbars with hover effects

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling with custom design system
- **Radix UI** for accessible components
- **TanStack React Query** for server state management
- **React Hook Form** with Zod validation
- **Wouter** for lightweight routing
- **Framer Motion** for animations

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** with Neon serverless database
- **Session management** with Express sessions
- **RESTful API** design

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fittrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   SESSION_SECRET=your_session_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   This starts both the frontend (Vite) and backend (Express) servers.

5. **Open your browser**
   Navigate to `http://localhost:5000` to see the application.

## 📊 Usage

1. **Add Workouts** - Use the workout form to log your exercises
2. **View Progress** - Check your weekly progress chart to see visual feedback
3. **Edit Data** - Click the edit icon next to calories to make quick adjustments
4. **Switch Themes** - Toggle between light and dark modes
5. **Track Goals** - Monitor your fitness journey with the activity scoring system

## 🏗️ Project Structure

```
fittrack/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Express.js backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage interface
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schemas and types
└── package.json         # Project dependencies
```

## 🎨 Design System

The application features a luxury design system with:
- **Custom color palette** with blue and coral accent colors
- **Glass morphism effects** for modern visual appeal
- **Gradient backgrounds** and smooth transitions
- **Beautiful scrollbars** with hover effects and animations
- **Responsive layouts** optimized for all screen sizes

## 🔧 API Endpoints

- `GET /api/workouts` - Get all workouts
- `POST /api/workouts` - Create a new workout
- `PATCH /api/workouts/:id` - Update a workout
- `GET /api/workouts/weekly` - Get weekly workout data
- `GET /api/exercises` - Get available exercise types

## 📦 Building for Production

```bash
npm run build
```

This creates optimized builds for both frontend and backend in their respective directories.

## 🚀 Deployment

### Replit (Recommended)
This project is optimized for Replit deployment with automatic workflows.

### Other Platforms
For deployment on other platforms like Vercel, Railway, or Render, you may need to:
1. Configure environment variables
2. Set up the PostgreSQL database
3. Adjust build scripts for the specific platform
4. Configure static file serving

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- UI components powered by Radix UI
- Icons by Lucide React
- Styling with TailwindCSS