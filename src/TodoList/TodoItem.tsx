import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import clsx from 'clsx'

interface TodoItemProps {
  text: string
  onRemove: () => void
  onRename: () => void
  onCancel: () => void
  onSave: (newName: string) => void
  isEditing: boolean
}

const TodoItem: FC<TodoItemProps> = ({ text, onRemove, onRename, onCancel, onSave, isEditing }): ReactElement => {
  const [inputValue, setInputValue] = useState<string>(text)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const handleSaveTodo = (): void => {
    if (inputValue.trim() === '') {
      setErrorMessage('Поле не может быть пустым!')
      return
    }

    setErrorMessage('')
    onSave(inputValue)
  }

  const renderEditingMode = (): ReactElement => {
    const inputClass = clsx('form-control', {
      'is-invalid': errorMessage.length !== 0
    })

    return (
      <>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputValue}
            className={inputClass}
            autoFocus
            onFocus={(e) => e.target.select()}
          />
          {errorMessage.length !== 0 && (
            <div className="invalid-feedback">
              {errorMessage}
            </div>
          )}
        </div>

        <div className="d-flex ms-2">
          <button className="btn btn-success btn-sm" onClick={handleSaveTodo}>
            Save
          </button>
          <button className="btn btn-secondary btn-sm ms-2" onClick={onCancel}>
            Cancel
          </button>

        </div>

      </>
    )
  }

  const renderViewMode = (): ReactElement => (
    <>
    {text}
      <div className="d-flex">
        <button className="btn btn-primary btn-sm" onClick={onRename}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm ms-2" onClick={onRemove}>
          Delete
        </button>
      </div>
    </>
  )

  return (
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      {isEditing ? renderEditingMode() : renderViewMode()}
    </li>
  )
}

export default TodoItem
