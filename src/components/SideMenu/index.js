import React from 'react';

import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faBed, faUserCog, faLifeRing, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import ToggleSwitch from '../ToggleSwitch';

const SideMenu =() => {
  return (
    <div className="col-md-3 nav-col d-flex">
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-height">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-height" id="navbarSupportedContent">
            <ul className="nav navbar-nav nav-height">
              <li className="nav-item">
                <svg width="70" height="70">
                  <rect x="10" y="10" rx="10" ry="10" width="50px" height="50px"
                    style={{fill:'#7C60FF', stroke:'none', transform: 'rotate(45deg)', transformOrigin: '50% 50%',}} />
                  <text x="50%" y="50%" text-anchor="middle" stroke="white" stroke-width="2px" dy=".3em">JD</text>
                </svg>
              </li>
              <li className="nav-item semi-bold" style={{color: '#000'}}>
                John Doe
              </li>
              <li className="nav-item">
                Premium Nomad
              </li>
              <li className="nav-item active semi-bold">
                <a className="nav-link text-white" href="/#"><span className="icon"><FontAwesomeIcon icon={faInbox} /></span>Bookings</a>
              </li>
              <li className="nav-item semi-bold">
                <a className="nav-link" href="/#"><span className="icon"><FontAwesomeIcon icon={faBed}/></span>Refer and Earn</a>
              </li>
              <li className="nav-item semi-bold">
                <a className="nav-link" href="/#"><span className="icon"><FontAwesomeIcon icon={faUserCog}/></span>Account Settings</a>
              </li>
              <li className="nav-item semi-bold">
                <p>Support</p>
              </li>
              <li className="nav-item semi-bold">
                <a className="nav-link" href="/#"><span className="icon"><FontAwesomeIcon icon={faLifeRing}/></span>Contact Us</a>
              </li>
              <li className="nav-item semi-bold">
                <a className="nav-link" href="/#"><span className="icon"><FontAwesomeIcon icon={faExternalLinkSquareAlt}/></span>FAQ</a>
              </li>
              <li className="nav-item mt-auto semi-bold">
                <a className="nav-link" href="/#">
                  <span className="icon"><ToggleSwitch></ToggleSwitch></span>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )
}

export default SideMenu