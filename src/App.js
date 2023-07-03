import React from 'react';
import TodoList from './TodoList'

function App() {
  return (
    <>
      {/* render the TodoList component */}
      <TodoList />

      {/* input field for adding new todos */}
      <input type="text" />

      {/* button to add a new todo */}
      <button>Add Todo</button>

      {/* button to clear completed todos */}
      <button>Clear Completed Todos</button>

      {/* display the count of todos left to do */}
      <div>0 left to do</div>
    </>
  )
}

export default App;