import React from 'react'
import Temperature from './Temperature/Temperature'
import SearchFilter from './SearchFilter/SearchFilter'
import Registration from './Registration/RegistrationForm'
import Calculator from './Calculator/Calculator'
import TodoList from './TodoList/TodoList'

const App = (): React.ReactElement => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '100px 0px',
    gap: '100px'

  }

  return (
    <div style={containerStyle} data-bs-theme="dark">
      <Temperature/>
      <SearchFilter/>
      <Registration/>
      <Calculator/>
      <TodoList />
    </div>
  )
}

export default App
