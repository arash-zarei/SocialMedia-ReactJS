import React from 'react';

//CSS
import './NavBar.css'

//Images
import profile from '../../images/Profile.png'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <nav className='container contentNav'>
                <h2>Social Media</h2>
                <input type="search" placeholder='Search For Posts And Hashtags' />
                <div className='profile'>
                    <button className='btn createBtn'>Create</button>
                    <img src={profile} alt="profile" />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;