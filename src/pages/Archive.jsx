import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import Mascot from '../components/Mascot'
import './Archive.css'

function Archive() {
  const { user, words, addWord, updateWord, deleteWord, toggleWordLearned } = useApp()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingWord, setEditingWord] = useState(null)
  const [newWord, setNewWord] = useState({
    balkar: '',
    russian: '',
    transcription: ''
  })

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) return null

  const filteredWords = words.filter(word => {
    const matchesSearch = 
      word.balkar.toLowerCase().includes(search.toLowerCase()) ||
      word.russian.toLowerCase().includes(search.toLowerCase())
    
    if (filter === 'learned') return matchesSearch && word.learned
    if (filter === 'not-learned') return matchesSearch && !word.learned
    return matchesSearch
  })

  const handleAddWord = (e) => {
    e.preventDefault()
    if (editingWord) {
      updateWord(editingWord.id, newWord)
      setEditingWord(null)
    } else {
      addWord(newWord)
    }
    setNewWord({ balkar: '', russian: '', transcription: '' })
    setShowAddModal(false)
  }

  const handleEditWord = (word) => {
    setEditingWord(word)
    setNewWord({
      balkar: word.balkar,
      russian: word.russian,
      transcription: word.transcription || ''
    })
    setShowAddModal(true)
  }

  const handleExport = () => {
    const data = JSON.stringify(words, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'echolinguist-words.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportCSV = () => {
    const headers = ['Балкарский', 'Русский', 'Транскрипция', 'Изучено']
    const rows = words.map(w => [
      w.balkar,
      w.russian,
      w.transcription || '',
      w.learned ? 'Да' : 'Нет'
    ])
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'echolinguist-words.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="archive-page">
      <div className="container">
        <div className="archive-header">
          <Mascot message="Твой личный словарный архив!" size="medium" />
          <div>
            <h1>Архив слов</h1>
            <p>Всего: {words.length} слов</p>
          </div>
        </div>

        <div className="archive-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Поиск слов..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Все
            </button>
            <button
              className={`filter-btn ${filter === 'learned' ? 'active' : ''}`}
              onClick={() => setFilter('learned')}
            >
              Изученные
            </button>
            <button
              className={`filter-btn ${filter === 'not-learned' ? 'active' : ''}`}
              onClick={() => setFilter('not-learned')}
            >
              Не изученные
            </button>
          </div>
          <div className="action-buttons">
            <button onClick={() => setShowAddModal(true)} className="btn btn-primary">
              + Добавить слово
            </button>
            <button onClick={handleExport} className="btn btn-secondary">
              📥 JSON
            </button>
            <button onClick={exportCSV} className="btn btn-secondary">
              📥 CSV
            </button>
          </div>
        </div>

        <div className="dev-features">
          <div className="dev-feature">
            <span className="dev-badge">В разработке</span>
            <button className="btn btn-disabled">📖 Фольклор</button>
          </div>
          <div className="dev-feature">
            <span className="dev-badge">В разработке</span>
            <button className="btn btn-disabled">🎬 Видео</button>
          </div>
        </div>

        <div className="words-grid">
          {filteredWords.length === 0 ? (
            <div className="empty-state">
              <Mascot message="Здесь будут твои слова!" size="medium" />
              <p>Пока нет слов. Добавь первое!</p>
              <button onClick={() => setShowAddModal(true)} className="btn btn-primary">
                Добавить слово
              </button>
            </div>
          ) : (
            filteredWords.map((word) => (
              <div key={word.id} className={`word-card ${word.learned ? 'learned' : ''}`}>
                <div className="word-main">
                  <div className="word-balkar">{word.balkar}</div>
                  <div className="word-russian">{word.russian}</div>
                  {word.transcription && (
                    <div className="word-transcription">[{word.transcription}]</div>
                  )}
                </div>
                <div className="word-actions">
                  <button
                    onClick={() => toggleWordLearned(word.id)}
                    className={`action-btn ${word.learned ? 'active' : ''}`}
                    title={word.learned ? 'Отметить как не изученное' : 'Отметить как изученное'}
                  >
                    {word.learned ? '✓' : '○'}
                  </button>
                  <button
                    onClick={() => handleEditWord(word)}
                    className="action-btn"
                    title="Редактировать"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Удалить слово?')) {
                        deleteWord(word.id)
                      }
                    }}
                    className="action-btn delete"
                    title="Удалить"
                  >
                    🗑️
                  </button>
                </div>
                {word.isCustom && (
                  <div className="custom-badge">Добавлено вами</div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => {
          setShowAddModal(false)
          setEditingWord(null)
          setNewWord({ balkar: '', russian: '', transcription: '' })
        }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingWord ? 'Редактировать слово' : 'Добавить слово'}</h2>
              <button
                className="close-btn"
                onClick={() => {
                  setShowAddModal(false)
                  setEditingWord(null)
                  setNewWord({ balkar: '', russian: '', transcription: '' })
                }}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleAddWord} className="modal-content">
              <div className="form-group">
                <label>Балкарский</label>
                <input
                  type="text"
                  value={newWord.balkar}
                  onChange={(e) => setNewWord({ ...newWord, balkar: e.target.value })}
                  required
                  placeholder="Слово на балкарском"
                />
              </div>
              <div className="form-group">
                <label>Русский</label>
                <input
                  type="text"
                  value={newWord.russian}
                  onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
                  required
                  placeholder="Перевод на русский"
                />
              </div>
              <div className="form-group">
                <label>Транскрипция (необязательно)</label>
                <input
                  type="text"
                  value={newWord.transcription}
                  onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
                  placeholder="Транскрипция"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false)
                    setEditingWord(null)
                    setNewWord({ balkar: '', russian: '', transcription: '' })
                  }}
                  className="btn btn-secondary"
                >
                  Отмена
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingWord ? 'Сохранить' : 'Добавить'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Archive
