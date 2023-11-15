import React, { useState } from 'react'
import tick from './images/icon-success.svg'
import './thankspage.css'
import Subsribe from './Subsribe'

const ThanksPage = (props) => {
  const[state,setState] = useState(true)
  return (
   <div>
   {state? <div className='thanks'>
      <div className='thanks2'>
        <img className='tick' src={tick} alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span>{props.value} </span>
          Please open it and click the button inside to confirm your subscription.</p>
         <button onClick={()=>setState(!state)}>Dismiss message</button>
         </div>
    </div> : <Subsribe/>}
    </div>
  )
}

export default ThanksPage