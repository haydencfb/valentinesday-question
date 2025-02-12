import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

// Importing Pages
import App from './App.jsx'
import FirstPage from './pages/first-page'
import SecondPage from './pages/second-page'
import ThirdPage from './pages/third-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement:
    children: [
      {
        index: true,
        element: <FirstPage />
      },
      {
        path: `/Second`,
        element: <SecondPage />
      },
      {
        path: `/Third`,
        element: <ThirdPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
