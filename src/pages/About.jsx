import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBullseye, FaEye, FaHeart, FaHandsHelping, FaLightbulb, FaBalanceScale, FaArrowRight } from 'react-icons/fa'
import aboutImage from '../assets/images/about_image.png'
import volunteerImage from '../assets/images/volunteer_image.png'
import './About.css'

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])
    return (
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}>
            {children}
        </div>
    )
}

function About() {
    return (
        <div className="about-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="page-hero__overlay"></div>
                <div className="container page-hero__content">
                    <h1 className="page-hero__title">About Us</h1>
                    <p className="page-hero__subtitle">Driven by compassion, powered by community — transforming lives since 2005.</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container about-mv__grid">
                    <AnimatedSection className="about-mv__image-wrap">
                        <img src={aboutImage} alt="Community" className="about-mv__image" />
                    </AnimatedSection>
                    <AnimatedSection className="about-mv__content">
                        <span className="about-mv__label">Our Story</span>
                        <h2 className="section-title">A Journey of<br />Hope and Impact</h2>
                        <span className="title-accent"></span>
                        <p className="about-mv__text">
                            Founded in 2005, HopeRise Foundation began with a simple yet powerful vision: to ensure that every child in India has access to education, healthcare, and a chance at a better future. What started as a small initiative in rural communities has grown into a nationwide movement.
                        </p>
                        <p className="about-mv__text">
                            Today, we work across 25 states and union territories, partnering with over 356 NGOs and community organizations to deliver programs that create lasting, measurable change. Our evidence-based approach and deep community engagement have helped us impact over 12.5 million lives.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="section about-mvv-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Mission, Vision & Values</h2>
                        <p className="section-subtitle section-subtitle-center">The guiding principles that drive everything we do.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="about-mvv__grid">
                        <AnimatedSection className="about-mvv__card">
                            <div className="about-mvv__icon"><FaBullseye /></div>
                            <h3>Our Mission</h3>
                            <p>To catalyze social and economic change in India through high-impact programs in education, livelihoods, and public health, empowering communities to thrive independently.</p>
                        </AnimatedSection>
                        <AnimatedSection className="about-mvv__card">
                            <div className="about-mvv__icon"><FaEye /></div>
                            <h3>Our Vision</h3>
                            <p>A world where every individual has equal access to opportunities, where poverty is eliminated, and where communities are empowered to shape their own futures.</p>
                        </AnimatedSection>
                        <AnimatedSection className="about-mvv__card about-mvv__card--values">
                            <div className="about-mvv__icon"><FaHeart /></div>
                            <h3>Our Values</h3>
                            <div className="about-mvv__values-list">
                                <div className="about-mvv__value"><FaHandsHelping /> <span>Community First</span></div>
                                <div className="about-mvv__value"><FaLightbulb /> <span>Innovation & Learning</span></div>
                                <div className="about-mvv__value"><FaBalanceScale /> <span>Transparency & Trust</span></div>
                                <div className="about-mvv__value"><FaHeart /> <span>Compassion & Dignity</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Our Leadership</h2>
                        <p className="section-subtitle section-subtitle-center">Meet the passionate individuals who lead our mission forward.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="team-grid">
                        {[
                            { name: 'Dr. Ananya Sharma', role: 'Founder & CEO', initials: 'AS' },
                            { name: 'Rajesh Patel', role: 'Director of Programs', initials: 'RP' },
                            { name: 'Priya Mehta', role: 'Head of Operations', initials: 'PM' },
                            { name: 'Vikram Singh', role: 'Chief Financial Officer', initials: 'VS' }
                        ].map((member, i) => (
                            <AnimatedSection key={i} className="team-card">
                                <div className="team-card__avatar">{member.initials}</div>
                                <h3 className="team-card__name">{member.name}</h3>
                                <p className="team-card__role">{member.role}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="about-cta__bg">
                    <img src={volunteerImage} alt="Volunteers" />
                    <div className="about-cta__overlay"></div>
                </div>
                <div className="about-cta__content container">
                    <AnimatedSection>
                        <h2>Join Us in Making a Difference</h2>
                        <p>Whether you volunteer, donate, or spread the word — every action counts.</p>
                        <div className="about-cta__actions">
                            <Link to="/get-involved" className="btn btn-primary btn-lg">Get Involved <FaArrowRight /></Link>
                            <Link to="/donate" className="btn btn-white btn-lg">Donate Now</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default About
