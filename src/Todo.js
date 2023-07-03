import React from 'react'

export default function Todo({ todo }) {
  return (
    <div>
        <label>
            <input type="checkbox" checkbox={todo.complete} />
            {todo.name}
        </label>
    </div>
  )
}
