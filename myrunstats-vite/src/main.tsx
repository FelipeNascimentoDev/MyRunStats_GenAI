import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Import to use routing
import './index.css'
import App from './App.tsx'
import TopMenu from './TopMenu.tsx'
import NotFoundPage from './NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TopMenu />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/app',
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider to enable routing in the application */}
  </StrictMode>
)
