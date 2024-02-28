import React, { type ChangeEvent, type FC, type FormEvent, type ReactElement, type RefObject } from 'react'
import clsx from 'clsx'

interface InterfaceProps {
  inputValue: string
  errorMessage: string
  onInputTodo: (e: ChangeEvent<HTMLInputElement>) => void
  onAddTodo: (e: FormEvent<HTMLFormElement>) => void
  inputRef: RefObject<HTMLInputElement>
}

const TodoForm: FC<InterfaceProps> = ({ inputValue, errorMessage, onInputTodo, onAddTodo, inputRef }): ReactElement => {
  const inputClass = clsx('form-control', {
    'is-invalid': errorMessage.length !== 0
  })

  return (
    <form className="input-group mb-3" onSubmit={onAddTodo}>

      <input onChange={onInputTodo}
             value={inputValue}
             ref={inputRef}
             type="text"
             className={inputClass}
             placeholder="Todo name"/>

       <button className="btn btn-primary" type="submit">Add task</button>

      {errorMessage.length !== 0 && (
        <div className="invalid-feedback">
          { errorMessage }
        </div>
      )}

    </form>
  )
}

export default TodoForm
