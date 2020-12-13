import React from 'react'
import { Button } from './Button'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-description">
                <p className="footer-subscription-heading">
                    hjeoehlsdfhs;gdfiojsl;fghsflghdf
                </p>
                <p className="footer-subscription-text">
                    ladfhsdflkhsldgkhslkfghlsfkg
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input">
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                        </input>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Footer;
