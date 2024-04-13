import React from 'react';
import { lightTheme } from './Colors';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer style={{
            backgroundColor: lightTheme.secondaryColor
        }}>
            <div className="footer-row">

                <div className="footer-col">
                    <h4>Quick Link</h4>
                    <ul>
                        <li><NavLink>Contact Us</NavLink></li>
                        <li><NavLink>Cart</NavLink></li>
                        <li><NavLink>Ayurvedic</NavLink></li>
                        <li><NavLink>Personal Care</NavLink></li>
                        <li><NavLink>Baby Care</NavLink></li>
                        <li><NavLink>Medical Supplies</NavLink></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Policies</h4>
                    <ul>
                        <li><NavLink>Privacy Policy</NavLink></li>
                        <li><NavLink>Terms and Conditions</NavLink></li>
                        <li><NavLink>Shipping and Return Policy</NavLink></li>
                    </ul>
                </div>

                <hr />

                <div className="footer-col">
                    <h4>Mail Us</h4>
                    <p>Email: <a rel='noreferrer' target='_blank' href="mailto:support@rxpress.com">support@rxpress.com</a></p>
                    <p>Address: Marthoma, Ayur, 691533, Kollam, Kerala, India</p>
                </div>

                <div className="footer-col">
                    <h4>Office Address</h4>
                    <p>Marthoma, Ayur, 691533, Kollam, Kerala, India</p>
                    <p>Telephone: <a rel='noreferrer' target='_blank' href="tel:047 00000000">047 00000000</a></p>
                </div>

            </div>
        </footer>

    );
};

export default Footer;