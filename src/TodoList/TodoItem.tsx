import React, { type FC, type ReactElement } from 'react'
import { type Todo } from './TodoList'

const TodoItem: FC<Todo> = ({ text }): ReactElement => {
  return (
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      {text}
      {/* <button className="btn btn-danger btn-sm">Delete</button> TODO */}
    </li>
  )
}

export default TodoItem
