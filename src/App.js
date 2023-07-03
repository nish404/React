import React, { useState, useRef } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false}])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos([prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false}]
    }])
    todoNameRef.current.value = null
  }
  return (
    <>
      {/* render the TodoList component */}
      <TodoList todos={todos} />

      {/* input field for adding new todos */}
      <input ref={todoNameRef} type="text" />

      {/* button to add a new todo */}
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* button to clear completed todos */}
      <button>Clear Completed Todos</button>

      {/* display the count of todos left to do */}
      <div>0 left to do</div>
    </>
  )
}

export default App;