import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faBell, faTachometerAlt, faGraduationCap, faEdit, faUserPlus, faTrophy } from '@fortawesome/fontawesome-free-solid';
import '../css/content.css';

function Dashboard() {
  return (
    <div className='container dashboard'>
        <div className='row dashboard'>
            <div className='col-lg-3 dashboard-list'>
                <ul>
                    <li>
                        <a href='#' className='list-btn active'>
                            <FontAwesomeIcon icon={faTachometerAlt} />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='list-btn'>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <span>My Courses</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='list-btn'>
                            <FontAwesomeIcon icon={faTrophy} />
                            <span>My Achievements</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='list-btn'>
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span>My Memberships</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='list-btn'>
                            <FontAwesomeIcon icon={faBell} />
                            <span>Notifications</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='list-btn'>
                            <FontAwesomeIcon icon={faEdit} />
                            <span>Edit Account</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='list-btn'>
                            <FontAwesomeIcon icon={faPowerOff} />
                            <span>Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='col-lg-8 dashboard-content'>
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard