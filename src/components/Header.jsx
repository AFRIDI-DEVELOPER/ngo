import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container container">
                <Link to="/" className="header__logo">
                    <span className="header__logo-icon">❤️</span>
                    <span className="header__logo-text">
                        <span className="header__logo-name">HopeRise</span>
                        <span className="header__logo-tagline">Foundation</span>
                    </span>
                </Link>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <Link to="/" className={`header__link ${location.pathname === '/' ? 'header__link--active' : ''}`}>Home</Link>
                    <Link to="/about" className={`header__link ${location.pathname === '/about' ? 'header__link--active' : ''}`}>About Us</Link>
                    <Link to="/programs" className={`header__link ${location.pathname === '/programs' ? 'header__link--active' : ''}`}>Our Programs</Link>
                    <Link to="/get-involved" className={`header__link ${location.pathname === '/get-involved' ? 'header__link--active' : ''}`}>Get Involved</Link>
                    <Link to="/contact" className={`header__link ${location.pathname === '/contact' ? 'header__link--active' : ''}`}>Contact Us</Link>
                    <Link to="/donate" className="btn btn-primary header__donate-btn">Donate Now</Link>
                </nav>

                <button className="header__mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    )
}

export default Header
