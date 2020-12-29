import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards" id="projects">

            
            <div className="cards__container">
                <div className="divider">
                    <img src="images/comp2.png" alt="" />
                </div>
                <h1>projects<span className="dots_title">.</span></h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/images/bry.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum. Quis risus sed vulputate odio ut enim blandit"
                            label="tattoo artist"
                            path="https://master.d1g9j9nfgc6y7s.amplifyapp.com/"
                            pathgithub="https://github.com/laterinthepast/tatoowebsite"

                        />
                        <CardItem
                            src="/images/marta.png"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum. Quis risus sed vulputate odio ut enim blandit"
                            label="massage therapist"
                            path="https://main.d1oyiwpw3wrols.amplifyapp.com/"
                            pathgithub="https://github.com/laterinthepast/m_website"
                        />
                        <CardItem
                            src="/images/1.jpg"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum. Quis risus sed vulputate odio ut enim blandit"
                            label="coming soon"
                            path=""
                            pathgithub=""
                        />
                    </ul>
                    <ul>


                        <h1>More to come...</h1>


                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
