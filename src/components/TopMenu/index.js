import React from 'react';
import logo from './nomadrental-logo.png';

import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const topMenu =() => {
  return (
    <div className ="d-flex justify-content-between bg-light fixed-top top-bar">
      <img src={logo} width="143.5" height="38" alt="Logo" class="d-inline-block align-top"/>
      <div>
        <span className="d-flex-text">Choose a city</span>
        <button className="btn btn-light">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  )
}

export default topMenu