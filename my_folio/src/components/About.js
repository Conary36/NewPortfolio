import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/about.scss'

export default function About(){

return (
    <>
    <div id='title' className='transitions'>
         <h1>About</h1>
         <span>Programming a new world one project at a time, this is my passion.</span><br/> 
         <span>My creative abilities come to life</span>

        <Link id='p_btn' to='/projects'>
            <button>Projects</button>
        </Link>
    </div>
    </>
        
 )
}