import './Mascot.css'

function Mascot({ message, size = 'medium' }) {
  const sizeClasses = {
    small: 'mascot-small',
    medium: 'mascot-medium',
    large: 'mascot-large'
  }

  return (
    <div className={`mascot-container ${sizeClasses[size]}`}>
      <div className="mascot">
        <svg viewBox="0 0 200 200" className="mascot-image">
          <defs>
            <radialGradient id="fur" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#808080" />
              <stop offset="100%" stopColor="#606060" />
            </radialGradient>
          </defs>
          
          <ellipse cx="100" cy="130" rx="55" ry="50" fill="url(#fur)" />
          
          <circle cx="100" cy="80" r="50" fill="url(#fur)" />
          
          <polygon points="55,40 70,5 85,45" fill="url(#fur)" />
          <polygon points="145,40 130,5 115,45" fill="url(#fur)" />
          
          <polygon points="60,38 70,15 80,40" fill="#FFE4B5" />
          <polygon points="140,38 130,15 120,40" fill="#FFE4B5" />
          
          <ellipse cx="80" cy="75" rx="15" ry="18" fill="white" />
          <ellipse cx="120" cy="75" rx="15" ry="18" fill="white" />
          
          <circle cx="82" cy="77" r="10" fill="#2c2c2c" />
          <circle cx="122" cy="77" r="10" fill="#2c2c2c" />
          
          <circle cx="85" cy="74" r="4" fill="white" />
          <circle cx="125" cy="74" r="4" fill="white" />
          
          <ellipse cx="100" cy="95" rx="8" ry="6" fill="#FFB6C1" />
          
          <path d="M 92 102 Q 100 110 108 102" stroke="#4a4a4a" strokeWidth="2" fill="none" />
          
          <line x1="50" y1="90" x2="75" y2="88" stroke="#4a4a4a" strokeWidth="1.5" />
          <line x1="50" y1="95" x2="75" y2="95" stroke="#4a4a4a" strokeWidth="1.5" />
          <line x1="50" y1="100" x2="75" y2="102" stroke="#4a4a4a" strokeWidth="1.5" />
          
          <line x1="150" y1="90" x2="125" y2="88" stroke="#4a4a4a" strokeWidth="1.5" />
          <line x1="150" y1="95" x2="125" y2="95" stroke="#4a4a4a" strokeWidth="1.5" />
          <line x1="150" y1="100" x2="125" y2="102" stroke="#4a4a4a" strokeWidth="1.5" />
          
          <path d="M 160 140 Q 180 130 175 110 Q 170 90 150 95" stroke="url(#fur)" strokeWidth="20" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      {message && (
        <div className="mascot-message">
          <div className="message-bubble">
            {message}
          </div>
        </div>
      )}
    </div>
  )
}

export default Mascot
