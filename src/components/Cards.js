import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards" id="projects">
            <h1>projects<span className="dots_title">.</span></h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/images/gig (2).jpg"
                            text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham."
                            label="Tattoo website"
                            path="https://mail.google.com/mail/u/0/"
                            pathgithub="https://github.com/laterinthepast/reactishard"
                           
                        />
                        <CardItem
                            src="/images/gig (1).jpg"
                            text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham."
                            label="Great project for a friend"
                            path="https://mail.google.com/mail/u/0/"
                            pathgithub="https://github.com/laterinthepast/reactishard"
                        />
                        
                    </ul>
                    <ul>
                        <CardItem
                            src="/images/massage.jpg"
                            text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham."
                            label="Great project for a friend"
                            path="https://mail.google.com/mail/u/0/"
                            pathgithub="https://github.com/laterinthepast/reactishard"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="/images/dentist.jpg"
                            text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham."
                            label="Tattoo website"
                            path="https://mail.google.com/mail/u/0/"
                            pathgithub="https://github.com/laterinthepast/reactishard"
                        />
                        <CardItem
                            src="/images/image (1).jpg"
                            text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the 1914 translation by H. Rackham."
                            label="Great project for a friend"
                            path="https://mail.google.com/mail/u/0/"
                            pathgithub="https://github.com/laterinthepast/reactishard"
                        />
                        
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
