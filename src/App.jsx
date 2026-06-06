import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Lessons from './pages/Lessons'
import Lesson from './pages/Lesson'
import Archive from './pages/Archive'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login isRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
