import React from 'react';

import './HeroSection.css';
import '../App.css';





let hello = [
    "hello",
    "cześć",
    "hallo",
    "ciao",
    "olá",
    "你好"
];
let i =0;

setInterval (function (){
    document.getElementById("random").innerHTML = hello[i];
    if (i=== (hello.length-1)){
        i=0;
    }else {
        i++;
    }
},1000);


function HeroSection() {
    return (
        <div className='hero-container' id="welcome">
            {/* <video src="/video/welcome.mp4" autoPlay loop muted></video>  */}
            <h1><span id="random"></span></h1>
            <p>this.isMyPortfolio</p>


        </div>
    )
}

export default HeroSection
