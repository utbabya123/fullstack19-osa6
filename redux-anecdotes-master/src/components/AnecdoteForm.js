import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createAnecdote(event.target.content.value)
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

const ConnectedAnecdoteForm = connect(
  null,
  { createAnecdote }
)(AnecdoteForm)

export default ConnectedAnecdoteForm