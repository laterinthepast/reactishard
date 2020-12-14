import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards" id="projects">
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/images/1.jpg"
                            text="First website done for Bry"
                            label="Tattoo website"
                            path="https://mail.google.com/mail/u/0/"
                            pathgithub="https://github.com/laterinthepast/reactishard"
                           
                        />
                        <CardItem
                            src="/images/2.jpg"
                            text="First website done for Bry First website done for Bry First website done for Bry First website done for Bry First website done for BryFirst website done for BryFirst website done for BryFirst website done for BryFirst website done for Bry"
                            label="Great project for a friend"
                            path=""
                            pathgithub="https://github.com/laterinthepast/reactishard"
                        />
                        
                    </ul>
                    <ul>
                        <CardItem
                            src="/images/2.jpg"
                            text="First website done for Bry First website done for Bry First website done for Bry First website done for Bry First website done for BryFirst website done for BryFirst website done for BryFirst website done for BryFirst website done for Bry"
                            label="Great project for a friend"
                            path="/"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="/images/1.jpg"
                            text="First website done for Bry"
                            label="Tattoo website"
                            path="/"
                        />
                        <CardItem
                            src="/images/2.jpg"
                            text="First website done for Bry First website done for Bry First website done for Bry First website done for Bry First website done for BryFirst website done for BryFirst website done for BryFirst website done for BryFirst website done for Bry"
                            label="Great project for a friend"
                            path="/"
                        />
                        <CardItem
                            src="/images/2.jpg"
                            text="First website done for Bry First website done for Bry First website done for Bry First website done for Bry First website done for BryFirst website done for BryFirst website done for BryFirst website done for BryFirst website done for Bry"
                            label="Great project for a friend"
                            path="/"
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
