import React from 'react'
import Temperature from './Project 3/Temperature'

const App = (): React.ReactElement => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    gap: '100px'
  }

  return (
    <div style={containerStyle} data-bs-theme="dark">
      <Temperature />
    </div>
  )
}

export default App
