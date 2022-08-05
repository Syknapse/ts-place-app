import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps = {
  onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const value = ref.current!.value
    onAddTodo(value)
    ref.current!.value = ''
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={ref}></input>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo
