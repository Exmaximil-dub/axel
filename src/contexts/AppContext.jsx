import { createContext, useContext, useState, useEffect } from 'react'
import { lessonsData } from '../data/lessons'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('echolinguist_user')
    return saved ? JSON.parse(saved) : null
  })
  
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('echolinguist_progress')
    return saved ? JSON.parse(saved) : {
      lessonsCompleted: {},
      totalPoints: 0,
      wordsLearned: 0
    }
  })

  const [words, setWords] = useState(() => {
    const saved = localStorage.getItem('echolinguist_words')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('echolinguist_progress', JSON.stringify(userProgress))
  }, [userProgress])

  useEffect(() => {
    localStorage.setItem('echolinguist_words', JSON.stringify(words))
  }, [words])

  const login = (userData) => {
    const newUser = { ...userData, id: Date.now() }
    setUser(newUser)
    localStorage.setItem('echolinguist_user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('echolinguist_user')
  }

  const completeLesson = (lessonId, points) => {
    setUserProgress(prev => ({
      ...prev,
      lessonsCompleted: {
        ...prev.lessonsCompleted,
        [lessonId]: {
          completed: true,
          score: points,
          completedAt: new Date().toISOString()
        }
      },
      totalPoints: prev.totalPoints + points
    }))
  }

  const addWord = (word) => {
    const newWord = {
      ...word,
      id: Date.now(),
      addedAt: new Date().toISOString(),
      learned: false,
      isCustom: true
    }
    setWords(prev => [...prev, newWord])
  }

  const updateWord = (wordId, updates) => {
    setWords(prev => prev.map(word => 
      word.id === wordId ? { ...word, ...updates } : word
    ))
  }

  const deleteWord = (wordId) => {
    setWords(prev => prev.filter(word => word.id !== wordId))
  }

  const toggleWordLearned = (wordId) => {
    setWords(prev => prev.map(word =>
      word.id === wordId ? { ...word, learned: !word.learned } : word
    ))
  }

  const resetProgress = () => {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
      setUserProgress({
        lessonsCompleted: {},
        totalPoints: 0,
        wordsLearned: 0
      })
    }
  }

  const getNextLessonId = () => {
    for (let i = 0; i < lessonsData.length; i++) {
      if (!userProgress.lessonsCompleted[lessonsData[i].id]?.completed) {
        return lessonsData[i].id
      }
    }
    return lessonsData[lessonsData.length - 1].id
  }

  const getLessonStatus = (lessonId) => {
    const lesson = lessonsData.find(l => l.id === lessonId)
    const lessonIndex = lessonsData.findIndex(l => l.id === lessonId)
    
    if (userProgress.lessonsCompleted[lessonId]?.completed) {
      return 'completed'
    }
    
    if (lessonIndex === 0) {
      return 'available'
    }
    
    const previousLesson = lessonsData[lessonIndex - 1]
    if (userProgress.lessonsCompleted[previousLesson.id]?.completed) {
      return 'available'
    }
    
    return 'locked'
  }

  const value = {
    user,
    userProgress,
    words,
    login,
    logout,
    completeLesson,
    addWord,
    updateWord,
    deleteWord,
    toggleWordLearned,
    resetProgress,
    getNextLessonId,
    getLessonStatus
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
