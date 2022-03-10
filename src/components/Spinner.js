import React from 'react'
import loading from "./loading.gif"


function Spinner() {
  return (
    <div className='text-center' style={{"padding-top":"12rem"}}>
        <img src={loading} alt="loading" />
    </div>
  )
}

export default Spinner