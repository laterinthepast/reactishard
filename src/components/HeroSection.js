import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/video/welcome.mp4" autoPlay loop muted></video> 
                <h1>zero</h1>
                <p>web development</p>
                <div className=".hero-btns">
                </div>

        </div>
    )
}

export default HeroSection