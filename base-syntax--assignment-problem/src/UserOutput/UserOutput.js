import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>Starting username: {props.userName}</p>
      <p>New username: {props.newUserName}</p>
    </div>
  )
}

export default userOutput
