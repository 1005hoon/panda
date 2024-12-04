import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { LandingPage } from './pages/landing-page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/login',
        element: <div>Login Page</div>
      },
      {
        path: '/logout',
        element: <div>logout Page</div>
      }
      // {
      //   path: '/products',
      //   element: <div>protected routes</div>,
      //   children: [
      //     { index: true, path: '/', element: <div>products</div> },
      //     { path: '/register', element: <div>신규 프로덕트 등록</div> },
      //     { path: '/details/:id', element: <div>제품 상세 페이지</div> }
      //   ]
      // }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
