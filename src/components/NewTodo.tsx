import React, { useRef } from 'react'

type NewTodoProps = {
  onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const ref = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const value = ref.current!.value
    onAddTodo(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={ref}></input>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo
