import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../css/navbar.css';
import Logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faBook, faKey, faUsers, faCalendar, faFlag } from '@fortawesome/fontawesome-free-solid';
import Courses from './Courses';
import Home from './Home';
import Members from './Members';
import Dashboard from './Dashboard';

function Navbar() {
  return (
    <div className='container-fluid'>
        <div className='nav-top'>
            <img src={Logo} alt="logo" />
            <div className='search-input'>
              <FontAwesomeIcon icon={faSearch} style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 11,
                  color: '#626262',
              }}/>
              <input type="search" placeholder="Search"/>
            </div>
            <div className='nav-button'>
              <a href='#'>Sign in</a>
              <a href='#' className=''>Sign up</a>
            </div>
        </div>
        <Router>
        <div className='nav-side' id='navbar-side'>
          <ul>
            <li>
              <a href='/' className='list-btn active'>
                  <FontAwesomeIcon icon={faHome} style={{
                        marginRight: 10,
                  }}/>
                  <span>Home</span>
              </a>
            </li>
            <li>
              <a href='/courses' className='list-btn'>
                  <FontAwesomeIcon icon={faBook}  style={{
                    marginRight: 10,
                  }}/>
                  <span>Courses</span>
                </a>
            </li>
            <li>
              <a href='/dashboard' className='list-btn'>
                  <FontAwesomeIcon icon={faKey}  style={{
                    marginRight: 10,
                  }}/>
                  <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href='/members' className='list-btn'>
                  <FontAwesomeIcon icon={faUsers}  style={{
                      marginRight: 10,
                  }}/>
                  <span>Members</span>
              </a>
            </li>
            <li>
              <a href="/" className='list-btn'>
                  <FontAwesomeIcon icon={faCalendar}  style={{
                    marginRight: 10,
                  }}/>
                  <span>Membership Catalog</span>
              </a>
            </li>
            <li>
              <a href='/' className='list-btn'>
                  <FontAwesomeIcon icon={faFlag}  style={{
                      marginRight: 10,
                  }}/>
                  <span>Terms of Service</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/members" element={<Members />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
        </Router>
    </div>
  )
}


export default Navbar