import React from 'react'

import './index.scss'

const ToogleSwitch =() => {
  return (
    <label className="switch">
      <input type="checkbox" checked/>
      <span className="slider round"></span>
    </label>
  )
}

export default ToogleSwitch