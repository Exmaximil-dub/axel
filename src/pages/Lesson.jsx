import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import { lessonsData } from '../data/lessons'
import Mascot from '../components/Mascot'
import './Lesson.css'

function Lesson() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { user, completeLesson, getLessonStatus } = useApp()
  const lesson = lessonsData.find(l => l.id === lessonId)
  const [currentSection, setCurrentSection] = useState(0)
  const [exerciseAnswers, setExerciseAnswers] = useState({})
  const [checkedAnswers, setCheckedAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [totalCorrect, setTotalCorrect] = useState(0)

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    if (!lesson) {
      navigate('/lessons')
      return
    }
    const status = getLessonStatus(lessonId)
    if (status === 'locked') {
      navigate('/lessons')
    }
  }, [user, lesson, lessonId, navigate, getLessonStatus])

  if (!user || !lesson) return null

  const section = lesson.sections[currentSection]
  const isLastSection = currentSection === lesson.sections.length - 1

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().trim().replace(/\s+/g, ' ')
  }

  const checkAnswer = (questionIndex, userAnswer, correctAnswer) => {
    const normalizedUser = normalizeAnswer(userAnswer)
    const normalizedCorrect = normalizeAnswer(correctAnswer)
    const isCorrect = normalizedUser === normalizedCorrect
    setCheckedAnswers(prev => ({
      ...prev,
      [`${currentSection}-${questionIndex}`]: isCorrect
    }))
    return isCorrect
  }

  const handleNext = () => {
    if (isLastSection) {
      calculateAndComplete()
    } else {
      setCurrentSection(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1)
    } else {
      navigate('/lessons')
    }
  }

  const calculateAndComplete = () => {
    let correct = 0
    let total = 0

    lesson.sections.forEach((sec, secIdx) => {
      if (sec.type === 'exercise' && sec.questions) {
        sec.questions.forEach((q, qIdx) => {
          total++
          const key = `${secIdx}-${qIdx}`
          if (checkedAnswers[key]) {
            correct++
          }
        })
      }
    })

    setTotalCorrect(correct)
    setShowResult(true)

    const points = Math.round((correct / Math.max(total, 1)) * 100)
    completeLesson(lessonId, points)
  }

  const renderTheory = () => (
    <div className="theory-section">
      <h2 className="section-title">{section.title}</h2>
      {section.note && (
        <div className="theory-note">
          💡 {section.note}
        </div>
      )}
      <div className="vocab-grid">
        {section.content.map((item, idx) => (
          <div key={idx} className="vocab-card">
            <div className="vocab-balkar">{item.balkar}</div>
            <div className="vocab-russian">{item.russian}</div>
            {item.meaning && (
              <div className="vocab-meaning">→ {item.meaning}</div>
            )}
            {item.examples && (
              <div className="vocab-examples">
                {item.examples.map((ex, i) => (
                  <div key={i} className="vocab-example">{ex}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderDialog = () => (
    <div className="dialog-section">
      <h2 className="section-title">{section.title}</h2>
      {section.dialogs.map((dialog, dIdx) => (
        <div key={dIdx} className="dialog-container">
          {dialog.lines.map((line, lIdx) => (
            <div key={lIdx} className={`dialog-line speaker-${line.speaker}`}>
              <div className="dialog-speaker">
                {line.speaker === 1 ? 'Собеседник 1' : 'Собеседник 2'}
              </div>
              <div className="dialog-text">{line.text}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  const renderReading = () => (
    <div className="reading-section">
      <h2 className="section-title">{section.title}</h2>
      {section.content.map((item, idx) => (
        <div key={idx} className="reading-text">
          <div className="reading-balkar">{item.balkar}</div>
          <div className="reading-russian">{item.russian}</div>
        </div>
      ))}
    </div>
  )

  const renderExercise = () => {
    const exerciseKey = `exercise-${currentSection}`

    const handleAnswerChange = (qIdx, value) => {
      setExerciseAnswers(prev => ({
        ...prev,
        [`${currentSection}-${qIdx}`]: value
      }))
    }

    const handleCheck = (qIdx, correctAnswer) => {
      const userAnswer = exerciseAnswers[`${currentSection}-${qIdx}`]
      checkAnswer(qIdx, userAnswer, correctAnswer)
    }

    const isChecked = (qIdx) => checkedAnswers[`${currentSection}-${qIdx}`] !== undefined
    const isCorrect = (qIdx) => checkedAnswers[`${currentSection}-${qIdx}`]

    return (
      <div className="exercise-section">
        <h2 className="section-title">{section.title}</h2>
        <div className="exercise-list">
          {section.questions.map((question, qIdx) => {
            const answerKey = `${currentSection}-${qIdx}`
            const checked = isChecked(qIdx)
            const correct = isCorrect(qIdx)

            return (
              <div key={qIdx} className="exercise-item">
                <div className="exercise-question">
                  <span className="question-number">{qIdx + 1}.</span>
                  {question.question}
                </div>

                {section.exerciseType === 'multiple-choice' ? (
                  <div className="multiple-choice">
                    {question.options.map((option, oIdx) => (
                      <button
                        key={oIdx}
                        className={`choice-btn ${
                          checked 
                            ? option === question.answer 
                              ? 'correct' 
                              : exerciseAnswers[answerKey] === option 
                                ? 'incorrect' 
                                : ''
                            : ''
                        }`}
                        onClick={() => !checked && handleAnswerChange(qIdx, option)}
                        disabled={checked}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-input-container">
                    <input
                      type="text"
                      value={exerciseAnswers[answerKey] || ''}
                      onChange={(e) => handleAnswerChange(qIdx, e.target.value)}
                      placeholder="Ваш ответ..."
                      className="exercise-input"
                      disabled={checked}
                    />
                  </div>
                )}

                {!checked && (
                  <button
                    className="btn btn-primary btn-small"
                    onClick={() => handleCheck(qIdx, question.answer)}
                  >
                    Проверить
                  </button>
                )}

                {checked && (
                  <div className={`feedback ${correct ? 'correct' : 'incorrect'}`}>
                    {correct ? '✅ Правильно!' : '❌ Неправильно'}
                    {!correct && (
                      <div className="correct-answer">
                        Правильный ответ: <strong>{question.answer}</strong>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (showResult) {
    let totalQuestions = 0
    lesson.sections.forEach(sec => {
      if (sec.type === 'exercise' && sec.questions) {
        totalQuestions += sec.questions.length
      }
    })

    return (
      <div className="lesson-page">
        <div className="container">
          <div className="result-section">
            <Mascot message="Отлично! Урок завершен!" size="large" />
            <h1 className="result-title">🎉 Урок завершен!</h1>
            <div className="result-score">
              <div className="score-value">{totalCorrect}</div>
              <div className="score-label">правильных из {totalQuestions}</div>
            </div>
            <div className="result-points">
              +{Math.round((totalCorrect / Math.max(totalQuestions, 1)) * 100)} очков
            </div>
            <div className="result-actions">
              <button onClick={() => navigate('/lessons')} className="btn btn-secondary btn-lg">
                К урокам
              </button>
              <button onClick={() => navigate('/profile')} className="btn btn-primary btn-lg">
                В профиль
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="lesson-page">
      <div className="container">
        <div className="lesson-header">
          <button onClick={handleBack} className="back-btn">
            ← Назад
          </button>
          <div className="lesson-info">
            <h1>{lesson.title}</h1>
            <div className="lesson-progress">
              Раздел {currentSection + 1} из {lesson.sections.length}
            </div>
          </div>
          <Mascot message="Давай учиться!" size="small" />
        </div>

        <div className="lesson-content">
          {section.type === 'theory' && renderTheory()}
          {section.type === 'dialog' && renderDialog()}
          {section.type === 'reading' && renderReading()}
          {section.type === 'exercise' && renderExercise()}
        </div>

        <div className="lesson-navigation">
          <button
            onClick={handleBack}
            className="btn btn-secondary"
          >
            {currentSection > 0 ? 'Назад' : 'К урокам'}
          </button>
          <div className="progress-dots">
            {lesson.sections.map((_, idx) => (
              <div
                key={idx}
                className={`progress-dot ${idx < currentSection ? 'completed' : idx === currentSection ? 'active' : ''}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="btn btn-primary"
          >
            {isLastSection ? 'Завершить урок' : 'Далее'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Lesson
