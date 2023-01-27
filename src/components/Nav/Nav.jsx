import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css' 
class Nav extends Component {

    render() {
        return (
            <div className='navCont'>
                <div className='navTab'>
                    <Link to='/'> 
                        <h4 >Home</h4>
                    </Link>
                </div>
                <div  className='navTab'>
                    <Link to='/house/create'>
                        <h4>Create House</h4>
                    </Link>
                </div>
            </div>
        );
    };
};

export default Nav;
