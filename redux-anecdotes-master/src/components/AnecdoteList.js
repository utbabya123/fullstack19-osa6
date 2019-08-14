import React from 'react'
import { connect } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voting(anecdote.id)
    props.notificationChange(`you voted '${anecdote.content}'`)

    setTimeout(() => {
      props.notificationChange('')
    }, 5000)
  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  return anecdotes
    .filter(a => a.content.toUpperCase().includes(filter.toUpperCase()))
    .sort((a, b) => b.votes - a.votes)
} 

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  { voting, notificationChange }
)(AnecdoteList)

export default ConnectedAnecdoteList