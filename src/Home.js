import React from 'react';

function Home(){
    let url='';
    return(
        <div className='home-container'>
            <div className="sideBar-container">
                <span className="sideBar">
                    <a href={url}>
                        <div className="my-active"><i className="fa-solid fa-house"></i> Home</div>
                    </a>
                    <a href={url}>
                        <div><i className="fa-solid fa-book"></i> Courses</div>
                    </a>
                    <a href={url}>
                        <div><i className="fa-solid fa-gauge"></i> Dashboard</div>
                    </a>
                    <a href={url}>
                        <div><i className="fa-solid fa-address-book"></i> Members</div>
                    </a>
                    <a href={url}>    
                        <div><i className="fa-solid fa-certificate"></i> Membership Catalog</div>
                    </a>
                    <a href={url}>
                        <div><i className="fa-solid fa-flag"></i> Terms Of Service</div>
                    </a>
                    <a href={url}>
                        <div><i className="fa-solid fa-power-off"></i> Sign Out</div>
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Home;