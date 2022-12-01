import React from 'react'
import Err from '../assets/error.png'

function Error() {
  return (
    <div>
      <img src={Err} alt="error 404" className='errorpage' />
    </div>
  )
}

export default Error