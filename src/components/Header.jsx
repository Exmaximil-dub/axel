import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import './Header.css'

function Header() {
  const { user, logout } = useApp()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🐱</span>
          <span className="logo-text">Эхолингв</span>
        </Link>
        <nav className="nav">
          {user ? (
            <>
              <Link to="/lessons" className="nav-link">Уроки</Link>
              <Link to="/archive" className="nav-link">Архив</Link>
              <Link to="/profile" className="nav-link">Профиль</Link>
              <button onClick={handleLogout} className="nav-link nav-link-btn">
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Войти</Link>
              <Link to="/register" className="nav-link nav-link-primary">Регистрация</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
