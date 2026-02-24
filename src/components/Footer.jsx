import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top container">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="footer__logo-icon">❤️</span>
                        <span className="footer__logo-text">
                            <span className="footer__logo-name">HopeRise</span>
                            <span className="footer__logo-tagline">Foundation</span>
                        </span>
                    </div>
                    <p className="footer__description">
                        HopeRise Foundation is a registered non-profit organization dedicated to
                        transforming the lives of underprivileged communities through education,
                        livelihood empowerment, and public health initiatives across India.
                    </p>
                    <div className="footer__social">
                        <a href="#" className="footer__social-link" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" className="footer__social-link" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" className="footer__social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" className="footer__social-link" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>

                <div className="footer__links-group">
                    <h4 className="footer__heading">Quick Links</h4>
                    <ul className="footer__links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Our Programs</Link></li>
                        <li><Link to="/get-involved">Get Involved</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer__links-group">
                    <h4 className="footer__heading">Our Programs</h4>
                    <ul className="footer__links">
                        <li><Link to="/programs">Education</Link></li>
                        <li><Link to="/programs">Livelihood</Link></li>
                        <li><Link to="/programs">Public Health</Link></li>
                        <li><Link to="/programs">Community Development</Link></li>
                        <li><Link to="/programs">Women Empowerment</Link></li>
                    </ul>
                </div>

                <div className="footer__links-group">
                    <h4 className="footer__heading">Ways to Give</h4>
                    <ul className="footer__links">
                        <li><Link to="/donate">One-Time Donation</Link></li>
                        <li><Link to="/donate">Monthly Giving</Link></li>
                        <li><Link to="/donate">Start a Fundraiser</Link></li>
                        <li><Link to="/donate">Corporate Partnership</Link></li>
                        <li><Link to="/get-involved">Volunteer</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>© 2025 HopeRise Foundation. All Rights Reserved.</p>
                    <p className="footer__made-with">Made with <FaHeart className="footer__heart" /> for a better world</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
