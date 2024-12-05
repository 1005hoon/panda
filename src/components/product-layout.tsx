import { Outlet } from 'react-router-dom'

export default function ProductLayout() {
  return (
    <div>
      <header>상단 네비게이션 바</header>
      <Outlet />
    </div>
  )
}
