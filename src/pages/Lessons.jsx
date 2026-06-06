import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import { lessonsData } from '../data/lessons'
import Mascot from '../components/Mascot'
import './Lessons.css'

function Lessons() {
  const { user, userProgress, getLessonStatus } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) return null

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <span className="badge badge-completed">✓ Пройден</span>
      case 'available':
        return <span className="badge badge-available">Доступен</span>
      case 'locked':
        return <span className="badge badge-locked">🔒 Заблокирован</span>
      default:
        return null
    }
  }

  return (
    <div className="lessons-page">
      <div className="container">
        <div className="page-header">
          <Mascot message="Выбери урок!" size="medium" />
          <div>
            <h1>Уроки</h1>
            <p>Пройдите уроки последовательно</p>
          </div>
        </div>

        <div className="lessons-grid">
          {lessonsData.map((lesson, index) => {
            const status = getLessonStatus(lesson.id)
            const lessonProgress = userProgress.lessonsCompleted[lesson.id]

            return (
              <div 
                key={lesson.id} 
                className={`lesson-card ${status}`}
              >
                <div className="lesson-card-header">
                  <div className="lesson-card-number">{index + 1}</div>
                  {getStatusBadge(status)}
                </div>
                <h2 className="lesson-card-title">{lesson.title}</h2>
                <p className="lesson-card-description">{lesson.description}</p>
                <div className="lesson-card-footer">
                  {status !== 'locked' ? (
                    <Link 
                      to={`/lesson/${lesson.id}`} 
                      className="btn btn-primary"
                    >
                      {lessonProgress?.completed ? 'Повторить' : 'Начать'}
                    </Link>
                  ) : (
                    <span className="locked-message">
                      Завершите предыдущий урок
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Lessons
