import { Link } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import Mascot from '../components/Mascot'
import './Home.css'

function Home() {
  const { user, getNextLessonId } = useApp()

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <Mascot message="Привет! Готов изучать балкарский язык?" size="large" />
          <h1 className="hero-title">Изучайте балкарский язык<br />с удовольствием!</h1>
          <p className="hero-subtitle">
            Интерактивные уроки, личный словарный архив и прогресс-отслеживание
          </p>
          <div className="hero-actions">
            {user ? (
              <Link to={`/lesson/${getNextLessonId()}`} className="btn btn-primary btn-lg">
                Продолжить обучение
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-lg">
                  Начать обучение
                </Link>
                <Link to="/login" className="btn btn-secondary btn-lg">
                  Войти
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Почему Эхолингв?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Структурированные уроки</h3>
              <p>5 полноценных уроков с теорией и интерактивными упражнениями</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Личный архив</h3>
              <p>Добавляйте и сохраняйте новые слова в личный словарный архив</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Отслеживание прогресса</h3>
              <p>Следите за своим прогрессом и достижениями</p>
            </div>
          </div>
        </div>
      </section>

      <section className="preview">
        <div className="container">
          <div className="preview-content">
            <div className="preview-text">
              <h2>Начните изучать прямо сейчас</h2>
              <p>
                Балкарский язык — это язык балкарцев, живущих в Кабардино-Балкарии и других регионах Кавказа. 
                Начните изучать этот прекрасный язык с нами!
              </p>
              <ul className="preview-list">
                <li>✅ Приветствия и базовые фразы</li>
                <li>✅ Семья и родственные отношения</li>
                <li>✅ Еда, цвета и прилагательные</li>
                <li>✅ Глаголы движения и состояния</li>
                <li>✅ Фразеологизмы и этикет</li>
              </ul>
            </div>
            <div className="preview-mascot">
              <Mascot message="Давай начнём!" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
