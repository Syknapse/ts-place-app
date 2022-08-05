import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { ITodo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodoHandler = (text: string) => setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }])
  const deleteTodoHandler = (id: string) => setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
