import React, { useRef } from 'react'

const NewTodo: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const value = ref.current!.value
    console.log(value)
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
