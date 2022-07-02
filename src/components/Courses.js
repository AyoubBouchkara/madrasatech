import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faList, faTh } from '@fortawesome/fontawesome-free-solid';
import '../css/content.css';
import image from '../img/courses/image_1.png';
import security from '../img/courses/security.png';
import calcul from '../img/courses/calcul.jpg';

function courses() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-6 page_title">
                <h2>Course Catalog</h2>
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
                <h6>All Courses <span>4</span></h6>
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
                    <option>All Subjects</option>
                    <option>Math</option>
                    <option>SVT</option>
                    <option>PC</option>
                </select>

                <select>
                    <option>All Levels</option>
                    <option>1 bac</option>
                    <option>2 bac</option>
                    <option>5 eme</option>
                    <option>4 eme</option>
                </select>
            </div>
        </div>

        <div className="row course_box">
            <div className="col-lg-3">
                <img src={image} />
                <label>5 Lessons</label>
                <h4>الحركة</h4>
                <label className='prix'>40.00 <span>MAD</span></label>
                <a href="#">+ Buy Now</a>
            </div>
            <div className="col-lg-3">
                <img src={security} />
                <label>17 Lessons</label>
                <h4>Information Security</h4>
                <label className='prix'>100.00 <span>MAD</span></label>
                <a href="#">+ Buy Now</a>
            </div>
            <div className="col-lg-3">
                <img src={calcul} />
                <label>25 Lessons</label>
                <h4>Mental Calculation</h4>
                <label className='prix'>80.00 <span>MAD</span></label>
                <a href="#">+ Buy Now</a>
            </div>
            <div className="col-lg-3">
                <img src={image} />
                <label>5 Lessons</label>
                <h4>الحركة</h4>
                <label className='prix'>40.00 <span>MAD</span></label>
                <a href="#">Start Now</a>
            </div>
        </div>
    </div>
  )
}

export default courses;