import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

import InfoCard from '../InfoCard'

const MainContent =() => {
  return (
    <div class="col-md-9 info-col">
      <div>
        <div class="container main">
          <h1>Bookings</h1>
          <h5>Your current upcoming stays</h5>
          <p>
            Please update with the properity if your travel plans should change or if you wish to make any changes to
            your stay.
          </p>
          <a href="/#"><span className="icon"><FontAwesomeIcon icon={faAngleRight}/></span>Learn more about our premium subscription</a>
          <InfoCard></InfoCard>
        </div>
      </div>
    </div> 
  )
}

export default MainContent