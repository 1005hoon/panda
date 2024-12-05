import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { LandingPage } from './pages/landing-page.tsx'
import { LoginPage } from './pages/login.tsx'
import ProductLayout from './components/product-layout.tsx'

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
        element: <LoginPage />
      },
      {
        path: '/products',
        element: <ProductLayout />,
        children: [
          { index: true, element: <div>상품 목록</div> },
          { path: 'create', element: <div>상품 생성</div> },
          { path: 'details/:id', element: <div>상품 상세</div> }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
