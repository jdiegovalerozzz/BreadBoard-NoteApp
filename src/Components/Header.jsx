import React from 'react'
import { useAuth } from '../AuthContext'

const Header = () => {

  const { logout } = useAuth()

  return (
    <div className='header'>
        <a href='/' className='title'>BreadBoard</a>
        <button 
  onClick={logout}
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '20px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1.9rem',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#e0e0e0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }
  }}
>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
  Log out
</button>
    </div>
  )
}

export default Header
