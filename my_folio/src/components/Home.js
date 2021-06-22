import React from 'react';
import '../styles/home.scss'
import Image from 'react-bootstrap/Image'
import Tilt from "react-parallax-tilt";

export default function Home(){
    return (
    <div className='home_content transitions'>
        <section className='home_img'>
             <Image fluid/>
        </section>
        <Tilt>
            <section className='bio'>
            <span>Hello, my name is Conary,
                I am a Front-End Web Developer with knowledge of<br/>
                the Back-End. What can we create together?
            </span><br/>
            </section>
        </Tilt>
     </div>
        
        
        
        )
}