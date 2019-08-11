import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    store.dispatch(createAnecdote(event.target.content.value))
    event.target.content.value = ''
  }
  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="content"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm