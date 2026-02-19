# AI Coding Agent Instructions

## Project Overview
This is a **Hotel Management System frontend** built with React using Create React App. It's a single-page application (SPA) with client-side routing for user authentication and dashboard functionality.

**Tech Stack:**
- React 19.2.4 with React Router v7 for navigation
- Axios for HTTP requests (configured but not yet integrated)
- React Testing Library for unit testing
- Create React App for build tooling (no ejected configuration)

## Architecture & Component Structure

### Pages (in `src/pages/`)
Four main pages compose the application, each as a functional React component:

- **LandingPage.js** - Public landing/home page (path: `/`)
- **Login.js** - User authentication page (path: `/login`)
- **Register.js** - User registration page (path: `/register`)
- **Dashboard.js** - Protected user dashboard (path: `/dashboard`)

### Routing Pattern (App.js)
App.js implements client-side routing using React Router's `<BrowserRouter>`, `<Routes>`, and `<Route>` components. There is a simple navigation bar with Links to all routes. **Important:** No route guards or authentication checks currently exist—all pages are publicly accessible.

### Data Flow
- **HTTP Client:** Axios is a dependency but currently unused; expect API integration for:
  - POST /login (authentication)
  - POST /register (user creation)
  - GET requests to dashboard data (hotels, bookings, etc.)
- **State Management:** Currently none (no Redux/Context). Consider implementing authentication context or state when login/register is functional.

## Developer Workflows

### Start Development
```bash
npm start
```
Runs dev server on `http://localhost:3000` with hot reload.

### Build for Production
```bash
npm run build
```
Creates optimized production bundle in `build/` folder.

### Run Tests
```bash
npm test
```
Launches Jest test runner in watch mode. Test files follow `*.test.js` pattern.

## Project Conventions & Patterns

### Component Pattern
All page components follow this simple pattern:
```javascript
function PageName() {
  return <div>...</div>;
}
export default PageName;
```

**No shared component library exists yet**. When building forms (Login, Register) or reusable UI, create components as needed; consider a `src/components/` directory for non-page components.

### Styling
- **App.css** and **index.css** are present but mostly unused; inline styles are used in App.js
- No CSS-in-JS library (styled-components, Tailwind, etc.) is configured
- **Pattern:** Use inline style objects for component-specific styling (as seen in App.js navigation)

### File Organization
```
src/
├── App.js (main routing component)
├── index.js (entry point)
├── pages/ (page-level components)
├── App.css, index.css (global styles)
└── [TODO: add components/, services/, hooks/, utils/ as features grow]
```

## Key Integration Points

### Authentication (Not Yet Implemented)
- Login/Register pages exist but have no form logic
- Axios is ready for HTTP calls to a backend API
- **Future patterns:** Store auth token in localStorage/sessionStorage, implement ProtectedRoute wrapper for dashboard access

### Backend API Connectivity
- No API base URL configured; consider adding in:
  - Environment variables (`.env` file with `REACT_APP_API_URL`)
  - Or an API client module (e.g., `src/services/api.js`)

## Critical Developer Notes

1. **No Authentication Guards:** All routes are public. Implement route protection before deployment.
2. **Incomplete Page Logic:** Login, Register, and Dashboard pages are stubs with minimal content.
3. **Testing:** Test files exist (`setupTests.js`, `App.test.js`) but need expansion as features are built.
4. **Build Tool Locked:** Create React App is in use; ejecting should be avoided unless absolutely necessary.

## Suggested Next Steps
- Implement login form with Axios API call to backend
- Add authentication context or state management
- Create ProtectedRoute component for dashboard access
- Build Dashboard UI with hotel/booking data display
- Add form validation and error handling components
