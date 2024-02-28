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
  const [taskItems, setTaskItems] = useState<Todo[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleInputTask = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const handleAddTask = (e: FormEvent<HTMLFormElement>): void => {
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

    setTaskItems((prevState) => [todo, ...prevState])
    setInputValue('')
    inputRef.current?.focus()
  }

  const handleRemoveTask = (idToRemove: number) => () => {
    setTaskItems((prevState => prevState.filter(({ id }) => id !== idToRemove)))
  }

  const handleToggleRenameTask = (idToRename: number) => () => {
    setTaskItems((prevState) =>
      prevState.map((item) =>
        item.id === idToRename ? { ...item, isEditing: true } : item
      )
    )
  }

  const handleCancelTask = (idToCancelEdit: number) => () => {
    setTaskItems((prevState) =>
      prevState.map((item) =>
        item.id === idToCancelEdit ? { ...item, isEditing: false } : item
      )
    )
  }

  const handleSaveRenamedTask = (idToRename: number) => (newName: string) => {
    setTaskItems((prevState) =>
      prevState.map((item) =>
        item.id === idToRename ? { ...item, text: newName, isEditing: false } : item
      )
    )
  }

  const renderTodoItems = (): ReactElement | null => {
    if (taskItems.length === 0) {
      return null
    }

    return (
      <ul className="list-group">
        {taskItems.map(({ id, ...rest }) => (
          <TodoItem key={id}
                    onRemove={handleRemoveTask(id)}
                    onRename={handleToggleRenameTask(id)}
                    onCancel={handleCancelTask(id)}
                    onSave={handleSaveRenamedTask(id)}
                    {...rest}/>
        ))}
      </ul>
    )
  }

  return (
    <Card name={'TodoList'} widthClass={'col-md-4'}>
      <TodoForm onAddTask={handleAddTask}
                inputValue={inputValue}
                errorMessage={errorMessage}
                onInputTask={handleInputTask}
                inputRef={inputRef}/>

      {renderTodoItems()}
    </Card>
  )
}

export default TodoList
export { type Todo }
