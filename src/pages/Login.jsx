import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import Mascot from '../components/Mascot'
import './Login.css'

function Login({ isRegister = false }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useApp()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('В разработке! Для демо войдите с любым email.')
    if (email) {
      login({ name: name || email.split('@')[0], email })
      navigate('/profile')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <Mascot 
          message={isRegister ? "Регистрируемся!" : "С возвращением!"} 
          size="medium"
        />
        <div className="login-card">
          <h1 className="login-title">
            {isRegister ? 'Регистрация' : 'Вход'}
          </h1>
          <p className="login-subtitle">
            <span className="dev-badge">В разработке</span>
            Используйте любой email для демо
          </p>
          <form onSubmit={handleSubmit} className="login-form">
            {isRegister && (
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="form-input"
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              {isRegister ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </form>
          <div className="login-footer">
            {isRegister ? (
              <p>
                Уже есть аккаунт? <Link to="/login">Войти</Link>
              </p>
            ) : (
              <p>
                Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
