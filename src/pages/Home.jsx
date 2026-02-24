import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaHandHoldingHeart, FaHeartbeat, FaUsers, FaGlobe, FaHandsHelping, FaDonate, FaArrowRight } from 'react-icons/fa'
import heroBanner from '../assets/images/hero_banner.png'
import aboutImage from '../assets/images/about_image.png'
import educationImage from '../assets/images/education_program.png'
import livelihoodImage from '../assets/images/livelihood_program.png'
import healthImage from '../assets/images/health_program.png'
import donateImage from '../assets/images/donate_image.png'
import './Home.css'

function useInView(ref) {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref])
    return isVisible
}

function CountUp({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isVisible = useInView(ref)

    useEffect(() => {
        if (!isVisible) return
        let startTime = null
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null)
    const isVisible = useInView(ref)
    return (
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}>
            {children}
        </div>
    )
}

function Home() {
    return (
        <div className="home">
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero__bg">
                    <img src={heroBanner} alt="Children in a classroom" />
                    <div className="hero__overlay"></div>
                </div>
                <div className="hero__content container">
                    <span className="hero__badge">🌟 Making a Difference Since 2005</span>
                    <h1 className="hero__title">Their Next<br />School Year<br /><span className="hero__title-accent">Starts With You</span></h1>
                    <p className="hero__subtitle">Join HopeRise Foundation in transforming the lives of underprivileged children and communities through education, healthcare, and sustainable livelihoods.</p>
                    <div className="hero__actions">
                        <Link to="/donate" className="btn btn-primary btn-lg">Donate Now <FaArrowRight /></Link>
                        <Link to="/about" className="btn btn-white btn-lg">Learn More</Link>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT SNIPPET ===== */}
            <section className="section about-snippet">
                <div className="container about-snippet__inner">
                    <AnimatedSection className="about-snippet__image-wrap">
                        <img src={aboutImage} alt="Mother and child" className="about-snippet__image" />
                        <div className="about-snippet__image-badge">
                            <span className="about-snippet__badge-number">18+</span>
                            <span className="about-snippet__badge-text">Years of Impact</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="about-snippet__content">
                        <span className="about-snippet__label">Who We Are</span>
                        <h2 className="section-title">Empowering Communities,<br />Transforming Lives</h2>
                        <span className="title-accent"></span>
                        <p className="about-snippet__text">
                            HopeRise Foundation is dedicated to catalyzing social and economic change in India's most underserved communities. We believe every individual deserves access to quality education, healthcare, and opportunities for sustainable livelihoods.
                        </p>
                        <p className="about-snippet__text">
                            Through our community-driven programs, we have impacted over 1.2 million lives across 25 states, working hand-in-hand with local partners to create lasting, measurable change.
                        </p>
                        <Link to="/about" className="btn btn-outline">More About Us <FaArrowRight /></Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* ===== PROGRAMS ===== */}
            <section className="section programs-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Our Programs</h2>
                        <p className="section-subtitle section-subtitle-center">We work across three critical areas to create holistic impact in communities that need it most.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="programs-grid">
                        <AnimatedSection className="program-card">
                            <div className="program-card__image-wrap">
                                <img src={educationImage} alt="Education program" />
                                <div className="program-card__icon"><FaGraduationCap /></div>
                            </div>
                            <div className="program-card__content">
                                <h3 className="program-card__title">Education</h3>
                                <p className="program-card__text">Empowering children with quality education through digital classrooms, scholarships, and learning programs in rural and urban communities.</p>
                                <Link to="/programs" className="program-card__link">Learn More <FaArrowRight /></Link>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="program-card">
                            <div className="program-card__image-wrap">
                                <img src={livelihoodImage} alt="Livelihood program" />
                                <div className="program-card__icon"><FaHandHoldingHeart /></div>
                            </div>
                            <div className="program-card__content">
                                <h3 className="program-card__title">Livelihood</h3>
                                <p className="program-card__text">Building sustainable livelihoods through vocational training, skill development, and micro-enterprise support for women and youth.</p>
                                <Link to="/programs" className="program-card__link">Learn More <FaArrowRight /></Link>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="program-card">
                            <div className="program-card__image-wrap">
                                <img src={healthImage} alt="Public health program" />
                                <div className="program-card__icon"><FaHeartbeat /></div>
                            </div>
                            <div className="program-card__content">
                                <h3 className="program-card__title">Public Health</h3>
                                <p className="program-card__text">Improving maternal and child health outcomes through community health workers, nutrition programs, and accessible healthcare services.</p>
                                <Link to="/programs" className="program-card__link">Learn More <FaArrowRight /></Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ===== APPROACH ===== */}
            <section className="section approach-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center" style={{ color: '#fff' }}>Our Approach</h2>
                        <p className="section-subtitle section-subtitle-center" style={{ color: 'rgba(255,255,255,0.7)' }}>A proven methodology for creating lasting social impact at scale.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="approach-grid">
                        {[
                            { icon: <FaUsers />, title: 'Design & Research', desc: 'We conduct deep community research to understand real needs and design evidence-based solutions.' },
                            { icon: <FaHandsHelping />, title: 'Local Partnerships', desc: 'We partner with grassroots NGOs, governments, and communities to co-create impactful programs.' },
                            { icon: <FaGlobe />, title: 'Share Knowledge', desc: 'We leverage data and insights to continuously improve and share best practices across regions.' },
                            { icon: <FaDonate />, title: 'Scale Impact', desc: 'Proven programs are scaled through strategic partnerships, technology, and sustainable funding models.' }
                        ].map((item, i) => (
                            <AnimatedSection key={i} className="approach-card">
                                <div className="approach-card__number">{String(i + 1).padStart(2, '0')}</div>
                                <div className="approach-card__icon">{item.icon}</div>
                                <h3 className="approach-card__title">{item.title}</h3>
                                <p className="approach-card__text">{item.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== IMPACT COUNTERS ===== */}
            <section className="section impact-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Our Impact</h2>
                        <p className="section-subtitle section-subtitle-center">Numbers that tell the story of change and hope across India.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="impact-grid">
                        <div className="impact-card">
                            <div className="impact-card__number"><CountUp end={12} suffix=".5M" /></div>
                            <div className="impact-card__label">Lives Impacted</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card__number"><CountUp end={356} suffix="+" /></div>
                            <div className="impact-card__label">NGO Partners</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card__number"><CountUp end={25} suffix="" /></div>
                            <div className="impact-card__label">States & UTs</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card__number"><CountUp end={85} suffix="M" /></div>
                            <div className="impact-card__label">Dollars Raised</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DONATE CTA ===== */}
            <section className="donate-cta-section">
                <div className="donate-cta__bg">
                    <img src={donateImage} alt="Children smiling" />
                    <div className="donate-cta__overlay"></div>
                </div>
                <div className="donate-cta__content container">
                    <AnimatedSection>
                        <h2 className="donate-cta__title">Let Your Generosity<br />Change a Life Today</h2>
                        <p className="donate-cta__text">Every contribution, no matter how small, helps us provide education, healthcare, and hope to those who need it most.</p>
                        <div className="donate-cta__actions">
                            <Link to="/donate" className="btn btn-primary btn-lg">Donate Now <FaArrowRight /></Link>
                            <Link to="/get-involved" className="btn btn-white btn-lg">Get Involved</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default Home
