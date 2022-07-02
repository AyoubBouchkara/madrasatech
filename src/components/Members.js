import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faList, faTh } from '@fortawesome/fontawesome-free-solid';
import '../css/content.css';
import image from '../img/members/default-profil.png';

function courses() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-6 page_title">
                <h2>Members</h2>
            </div>
            <div className="col-lg-6 top_search">
                <div className='field'>
                    <FontAwesomeIcon icon={faSearch} style={{
                        marginLeft: 10,
                        marginRight: 0,
                        marginTop: 6.5,
                        color: '#626262',
                    }}/>
                    <input type='text' placeholder="Search Courses..." />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12 allCourses_title">
                <h6>All Members<span>4</span></h6>
                <hr />
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12 filter_input">
                <label aria-label="Whats up!" data-balloon-pos="up">
                    <span><FontAwesomeIcon icon={faTh} color="gray"/></span>
                    &nbsp;
                    |
                    &nbsp;
                    <span><FontAwesomeIcon icon={faList} color="gray"/></span>
                </label>

                <select>
                    <option>Members Type</option>
                    <option>Student</option>
                    <option>Teacher</option>
                </select>
            </div>
        </div>

        <div className="row member_box">
            <div className="col-lg-3">
                <center>
                    <img src={image} />
                    <br/>
                    <label className='momber-type'>Student</label>
                    <br/>
                    <label className='momber-name'>Ayoub</label>
                    <br/>
                    <label className='momber-rejoindre'>12/01/2022</label>
                </center>
            </div>
            <div className="col-lg-3">
                <center>
                    <img src={image} />
                    <br/>
                    <label className='momber-type'>Student</label>
                    <br/>
                    <label className='momber-name'>Ayoub</label>
                    <br/>
                    <label className='momber-rejoindre'>12/01/2022</label>
                </center>
            </div>
            <div className="col-lg-3">
                <center>
                    <img src={image} />
                    <br/>
                    <label className='momber-type'>Student</label>
                    <br/>
                    <label className='momber-name'>Ayoub</label>
                    <br/>
                    <label className='momber-rejoindre'>12/01/2022</label>
                </center>
            </div>
            <div className="col-lg-3">
                <center>
                    <img src={image} />
                    <br/>
                    <label className='momber-type'>Student</label>
                    <br/>
                    <label className='momber-name'>Ayoub</label>
                    <br/>
                    <label className='momber-rejoindre'>12/01/2022</label>
                </center>
            </div>
        </div>
    </div>
  )
}

export default courses;