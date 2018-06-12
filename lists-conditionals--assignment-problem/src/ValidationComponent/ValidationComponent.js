import React from 'react'

const validationComponent = (props) => {
  const shortTextMsg = 'Text too short'
  const longTextMsg = 'Text long enough'
  return (
    <div>
      <p>
        {props.textLength <= 5 ? shortTextMsg : longTextMsg}
      </p>
    </div>

  )
}

export default validationComponent
