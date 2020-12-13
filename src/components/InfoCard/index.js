import React from 'react'

import './index.scss';

import RoomImg from './package-head__image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock, faCalendarCheck, faFileAlt,faStar, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const InfoCard = () => {
  return (
    <div class="container card mb-10">
      <div class="row">
        <div class="col-md-5 card-img">
          <img src={RoomImg} alt="RoomPic" class="d-inline-block align-top" height="100%"
            width="100%" />
        </div>
        <div class="col-md-7 card-info d-flex flex-column">
          <div class="container card-info-status">
            <h5 class="semi-bold">The Green View</h5>
            <div class="grey"><span className="icon"><FontAwesomeIcon icon={faCheckCircle}/></span>Booking request received</div>
            <div class="inprogress"><span className="icon"><FontAwesomeIcon icon={faClock}/></span>Awaiting confirmation from Hotel</div>
          </div>
          <div class="container card-info-room">
            <h6 class="semi-bold">Superior Premium</h6>
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <p class="grey card-info-room-details"><span className="icon"><FontAwesomeIcon icon={faCalendarCheck}/></span>Check-in:</p>
                  <p class="card-info-room-text">July 9th, 2018</p>
                </div>
                <div class="col-md-6">
                  <p class="grey card-info-room-details"><span className="icon"><FontAwesomeIcon icon={faFileAlt}/></span>Reference:</p>
                  <p class="card-info-room-text">#UC311K</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-auto card-info-btn">
            <button class="btn bg-light w-100 text-left" style={{color: "#42B72A"}}>
            <span className="icon"><FontAwesomeIcon icon={faStar}/></span>Rate your stay
            </button>
            <button class="btn bg-light w-100 text-left grey">
            <span className="icon"><FontAwesomeIcon icon={faPaperPlane}/></span>Email the property
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard