import React from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <div class = 'nav'>
            <h1 className='title'>Games market Place</h1>   
            <Link to = '/'>Home</Link>

        
        </div>
    );
}

export default Nav;
