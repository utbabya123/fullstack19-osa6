import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const { notification } = props
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification.length) {
    return (
    <div style={style}>
      {notification}
    </div>
    )
  }
  
  return (
    null
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps,
  null
)(Notification)

export default ConnectedNotification