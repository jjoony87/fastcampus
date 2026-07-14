import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { View } from './pages/View/View'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/view/:id" element={<View />} />
    </Routes>
  )
}
