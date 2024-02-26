import React from 'react'
import Temperature from './Temperature/Temperature'
import SearchFilter from './SearchFilter/SearchFilter'
import Registration from './Registration/RegistrationForm'
import Calculator from './Calculator/Calculator'

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
      <Temperature/>
      <SearchFilter/>
      <Registration/>
      <Calculator/>
    </div>
  )
}

export default App
