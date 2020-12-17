import React from "react";
import './About.css';
import '../App.css'

function About() {
    return (
        <div className="about_section" id="about">
            <section className="about_section_wrapper">
                <h1 className="about_section_header">
                    about<span className="dots_title">.</span>
                </h1>
                <p className="about_section_text">
                    hi. I am Rafal. I am a freelance front end developer based in London, UK. I've discovered coding over a year ago and despite having a successful career doing something completely different, I've decided that I want to pursue front end. Since then, I am in a learning phase of my journey. Learning HTML, CSS, JavaScript, Boostrap and recently I've started React. 
                    To be honest. I enjoy it. I enjoy making mistakes and learning from them. 
                    <br/>
                    Since you are here, have a look at my projects I have been working on. If you would like to collaborate, please drop me a message.
                    <br/>
                    Peace 
                    <br/>
                    ...and lets keep coding.  
                </p>
                <div className="about_section_img">
                    <img src="images/image (5).jpg" alt="my"></img>
                </div>
                <div className="about_social_wrapper">
                    <h3 className="about_social_heading">
                        You can find me here
                    </h3>
                    <a href="https://www.instagram.com/apha_vegan/" className="about_social">
                        <i class='fab fa-instagram' />
                    </a>
                </div>
            </section>



        </div>
    )
}

export default About;