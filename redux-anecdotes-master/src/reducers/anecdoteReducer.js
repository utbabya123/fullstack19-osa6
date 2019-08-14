const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const voted = state.find(a => a.id === action.id)
      return state.map(a => a.id === action.id ? {...voted, votes: voted.votes + 1} : a)
    case 'CREATE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const voting = (id) => {
  return {
    type: 'VOTE',
    id
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

export default anecdoteReducer