import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHandsHelping, FaUsers, FaBirthdayCake, FaPlane, FaCalendarAlt, FaBriefcase, FaArrowRight } from 'react-icons/fa'
import volunteerImage from '../assets/images/volunteer_image.png'
import './GetInvolved.css'

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>{children}</div>
}

const ways = [
    { icon: <FaHandsHelping />, title: 'Volunteer', desc: 'Join us on the ground. Share your skills and time with communities that need it most. We have opportunities across India.' },
    { icon: <FaUsers />, title: 'Start a Chapter', desc: 'Organize a local chapter in your city to spread awareness, host events, and fundraise for our programs.' },
    { icon: <FaBirthdayCake />, title: 'Birthday Fundraiser', desc: 'Turn your birthday into a celebration of giving. Set up a fundraiser and ask friends to donate instead of gifts.' },
    { icon: <FaPlane />, title: 'Mission Trip', desc: 'Join an immersive mission trip to visit our program sites, meet the communities, and see the impact firsthand.' },
    { icon: <FaCalendarAlt />, title: 'Join an Event', desc: 'Attend our galas, charity runs, cultural events, and community gatherings to support and raise awareness.' },
    { icon: <FaBriefcase />, title: 'Corporate Partnership', desc: 'Partner with us through CSR initiatives, employee engagement programs, and matching gift campaigns.' }
]

function GetInvolved() {
    return (
        <div className="getinvolved-page">
            <section className="page-hero">
                <div className="page-hero__overlay"></div>
                <div className="container page-hero__content">
                    <h1 className="page-hero__title">Get Involved</h1>
                    <p className="page-hero__subtitle">There are many ways to be part of the change. Find your way to make a difference.</p>
                </div>
            </section>

            {/* Hero CTA */}
            <section className="section gi-hero-section">
                <div className="container gi-hero__grid">
                    <AnimatedSection className="gi-hero__image-wrap">
                        <img src={volunteerImage} alt="Volunteers working with children" className="gi-hero__image" />
                    </AnimatedSection>
                    <AnimatedSection className="gi-hero__content">
                        <span className="gi-hero__label">Make an Impact</span>
                        <h2 className="section-title">Your Actions<br />Create Change</h2>
                        <span className="title-accent"></span>
                        <p className="gi-hero__text">Whether you give your time, talent, or resources — every contribution makes a real difference in the lives of those who need it most. Join our growing community of changemakers.</p>
                        <p className="gi-hero__text">From volunteering in local communities to organizing fundraisers, there's a place for everyone in the HopeRise family.</p>
                        <Link to="/donate" className="btn btn-primary">Donate Now <FaArrowRight /></Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Ways to Get Involved */}
            <section className="section gi-ways-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Ways to Get Involved</h2>
                        <p className="section-subtitle section-subtitle-center">Choose the path that resonates with you and start making a difference today.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="gi-ways__grid">
                        {ways.map((way, i) => (
                            <AnimatedSection key={i} className="gi-way-card">
                                <div className="gi-way-card__icon">{way.icon}</div>
                                <h3 className="gi-way-card__title">{way.title}</h3>
                                <p className="gi-way-card__desc">{way.desc}</p>
                                <span className="gi-way-card__link">Learn More <FaArrowRight /></span>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="gi-cta">
                <div className="container gi-cta__inner">
                    <AnimatedSection>
                        <h2>Ready to Make a Difference?</h2>
                        <p>Join thousands of volunteers and supporters who are already changing lives across India.</p>
                        <div className="gi-cta__actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us <FaArrowRight /></Link>
                            <Link to="/donate" className="btn btn-white btn-lg">Donate Now</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default GetInvolved
