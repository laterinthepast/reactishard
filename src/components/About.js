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
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham.
            </p>

                <div className="about_section_img">
                    <img src="images/image (5).jpg"></img>
                </div>
                <div className="about_social_wrapper">
                    <h3 className="about_social_heading">
                        You can find me here
                    </h3>
                <a href="" className="about_social">
              <i class='fab fa-instagram' />
            </a>
            </div>
            </section>
            


        </div>
    )
}

export default About;