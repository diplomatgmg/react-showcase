import React, { type ChangeEvent, type FormEvent, type ReactElement, useRef, useState } from 'react'
import Card from '../components/Card'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { uniqueId } from 'lodash'

interface Todo {
  id: number
  text: string
  isEditing: boolean
}

const TodoList = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [todoItems, setTodoItems] = useState<Todo[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleInputTodo = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (inputValue.trim() === '') {
      setErrorMessage('Поле не может быть пустым!')
      return
    }

    setErrorMessage('')

    const todo: Todo = {
      id: Number(uniqueId()),
      text: inputValue,
      isEditing: false
    }

    setTodoItems((prevState) => [todo, ...prevState])
    setInputValue('')
    inputRef.current?.focus()
  }

  const handleRemoveTodo = (idToRemove: number) => () => {
    setTodoItems((prevState => prevState.filter(({ id }) => id !== idToRemove)))
  }

  const updateTodoItems = (id: number, updater: (item: Todo) => Todo): void => {
    setTodoItems((prev) => prev.map((item) => (item.id === id ? updater(item) : item)))
  }

  const handleToggleRenameTodo = (id: number) => () => {
    updateTodoItems(id, (item) => ({ ...item, isEditing: true }))
  }

  const handleCancelTodo = (id: number) => () => {
    updateTodoItems(id, (item) => ({ ...item, isEditing: false }))
  }

  const handleSaveRenamedTodo = (id: number) => (newName: string) => {
    updateTodoItems(id, (item) => ({ ...item, isEditing: false, text: newName }))
  }

  const renderTodoItems = (): ReactElement | null => {
    if (todoItems.length === 0) {
      return null
    }

    return (
      <ul className="list-group">
        {todoItems.map(({ id, ...rest }) => (
          <TodoItem key={id}
                    onRemove={handleRemoveTodo(id)}
                    onRename={handleToggleRenameTodo(id)}
                    onCancel={handleCancelTodo(id)}
                    onSave={handleSaveRenamedTodo(id)}
                    {...rest}/>
        ))}
      </ul>
    )
  }

  return (
    <Card name={'TodoList'} widthClass={'col-md-4'}>
      <TodoForm onAddTodo={handleAddTodo}
                inputValue={inputValue}
                errorMessage={errorMessage}
                onInputTodo={handleInputTodo}
                inputRef={inputRef}/>

      {renderTodoItems()}
    </Card>
  )
}

export default TodoList
export { type Todo }
