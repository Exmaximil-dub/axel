import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import { lessonsData } from '../data/lessons'
import Mascot from '../components/Mascot'
import './Profile.css'

function Profile() {
  const { user, userProgress, words, resetProgress, getNextLessonId } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) return null

  const completedLessonsCount = Object.values(userProgress.lessonsCompleted).filter(
    l => l.completed
  ).length

  const wordsLearned = words.filter(w => w.learned).length
  const totalWords = words.length

  const handleResetProgress = () => {
    if (confirm('Вы уверены? Это действие нельзя отменить!')) {
      resetProgress()
    }
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <Mascot message={`Привет, ${user.name}!`} size="medium" />
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <div className="stat-value">{completedLessonsCount}</div>
              <div className="stat-label">Уроков пройдено</div>
              <div className="stat-sub">из {lessonsData.length}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-value">{userProgress.totalPoints}</div>
              <div className="stat-label">Всего очков</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📖</div>
            <div className="stat-content">
              <div className="stat-value">{wordsLearned}</div>
              <div className="stat-label">Слов изучено</div>
              <div className="stat-sub">из {totalWords}</div>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <Link to={`/lesson/${getNextLessonId()}`} className="btn btn-primary btn-lg">
            Продолжить обучение
          </Link>
          <Link to="/lessons" className="btn btn-secondary btn-lg">
            Все уроки
          </Link>
          <Link to="/archive" className="btn btn-secondary btn-lg">
            Архив слов
          </Link>
        </div>

        <div className="progress-section">
          <h2>Прогресс по урокам</h2>
          <div className="lessons-list-small">
            {lessonsData.map((lesson, index) => {
              const status = userProgress.lessonsCompleted[lesson.id]
              const isCompleted = status?.completed
              const isAvailable = index === 0 || 
                userProgress.lessonsCompleted[lessonsData[index - 1].id]?.completed

              return (
                <div 
                  key={lesson.id} 
                  className={`lesson-item-small ${isCompleted ? 'completed' : isAvailable ? 'available' : 'locked'}`}
                >
                  <div className="lesson-number">{index + 1}</div>
                  <div className="lesson-info">
                    <h3>{lesson.title}</h3>
                    {isCompleted && (
                      <span className="lesson-score">
                        ✅ {status.score} очков
                      </span>
                    )}
                  </div>
                  {isAvailable && (
                    <Link to={`/lesson/${lesson.id}`} className="btn btn-small">
                      {isCompleted ? 'Повторить' : 'Начать'}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="settings-section">
          <h2>Настройки</h2>
          <div className="settings-card">
            <div className="setting-item">
              <div>
                <h3>Сбросить прогресс</h3>
                <p>Это удалит всю вашу статистику и прогресс</p>
              </div>
              <button onClick={handleResetProgress} className="btn btn-danger">
                Сбросить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
