import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaCalendarAlt, FaBirthdayCake, FaHandHoldingUsd, FaCreditCard, FaGift, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import donateImage from '../assets/images/donate_image.png'
import './Donate.css'

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

const amounts = [500, 1000, 2500, 5000, 10000, 25000]

function Donate() {
    const [selectedAmount, setSelectedAmount] = useState(2500)
    const [customAmount, setCustomAmount] = useState('')
    const [donationType, setDonationType] = useState('one-time')

    const waysToGive = [
        { icon: <FaCreditCard />, title: 'Online Donation', desc: 'Quick and secure donation through our website with credit/debit card or UPI.' },
        { icon: <FaCalendarAlt />, title: 'Monthly Giving', desc: 'Set up a recurring monthly donation and become a sustaining partner.' },
        { icon: <FaBirthdayCake />, title: 'Birthday Fundraiser', desc: 'Celebrate your special day by raising funds for underprivileged children.' },
        { icon: <FaHandHoldingUsd />, title: 'Corporate Matching', desc: 'Double your impact through your employer\'s matching gift program.' },
        { icon: <FaGift />, title: 'Gift a Donation', desc: 'Honor someone special by making a donation in their name.' },
        { icon: <FaHeart />, title: 'Legacy Giving', desc: 'Leave a lasting legacy by including HopeRise in your estate plans.' }
    ]

    const impactItems = [
        { amount: '₹500', impact: 'Provides school supplies for 1 child for a year' },
        { amount: '₹1,000', impact: 'Sponsors a child\'s mid-day meals for 3 months' },
        { amount: '₹2,500', impact: 'Funds vocational training for a young woman' },
        { amount: '₹5,000', impact: 'Provides healthcare for a family for 6 months' },
        { amount: '₹10,000', impact: 'Sets up a digital classroom for 20 children' },
        { amount: '₹25,000', impact: 'Sponsors a child\'s entire education for a year' }
    ]

    return (
        <div className="donate-page">
            {/* Hero */}
            <section className="donate-hero">
                <div className="donate-hero__bg">
                    <img src={donateImage} alt="Children smiling" />
                    <div className="donate-hero__overlay"></div>
                </div>
                <div className="donate-hero__content container">
                    <h1 className="donate-hero__title">Give the Gift<br />of <span className="donate-hero__accent">Hope</span></h1>
                    <p className="donate-hero__subtitle">Your generosity transforms lives. Every rupee you give goes directly toward creating a brighter future for India's most vulnerable children and communities.</p>
                    <a href="#donate-form" className="btn btn-primary btn-lg">Donate Now <FaArrowRight /></a>
                </div>
            </section>

            {/* Donation Form */}
            <section className="section" id="donate-form">
                <div className="container donate-form-grid">
                    <AnimatedSection className="donate-form-card">
                        <h2 className="donate-form__title">Make a Donation</h2>
                        <p className="donate-form__subtitle">Choose your donation type and amount below.</p>

                        {/* Donation Type Toggle */}
                        <div className="donate-type-toggle">
                            <button className={`donate-type-btn ${donationType === 'one-time' ? 'active' : ''}`} onClick={() => setDonationType('one-time')}>One-Time</button>
                            <button className={`donate-type-btn ${donationType === 'monthly' ? 'active' : ''}`} onClick={() => setDonationType('monthly')}>Monthly</button>
                        </div>

                        {/* Amount Grid */}
                        <div className="donate-amounts">
                            {amounts.map(amount => (
                                <button key={amount} className={`donate-amount-btn ${selectedAmount === amount && !customAmount ? 'active' : ''}`} onClick={() => { setSelectedAmount(amount); setCustomAmount('') }}>
                                    ₹{amount.toLocaleString()}
                                </button>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <div className="donate-custom">
                            <label>Or enter a custom amount:</label>
                            <div className="donate-custom__input-wrap">
                                <span className="donate-custom__currency">₹</span>
                                <input type="number" placeholder="Enter amount" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0) }} />
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="donate-personal">
                            <div className="donate-form__row">
                                <input type="text" placeholder="Full Name *" required />
                                <input type="email" placeholder="Email Address *" required />
                            </div>
                            <div className="donate-form__row">
                                <input type="tel" placeholder="Phone Number" />
                                <input type="text" placeholder="PAN Number (for tax receipt)" />
                            </div>
                        </div>

                        <button className="btn btn-primary donate-submit">
                            <FaHeart /> Donate ₹{customAmount || selectedAmount.toLocaleString()} {donationType === 'monthly' ? '/month' : ''}
                        </button>
                        <p className="donate-secure">🔒 Your donation is 100% secure. Tax deductible under Section 80G.</p>
                    </AnimatedSection>

                    {/* Impact */}
                    <AnimatedSection className="donate-impact">
                        <h3 className="donate-impact__title">Your Impact</h3>
                        <p className="donate-impact__subtitle">See how your donation transforms lives:</p>
                        <div className="donate-impact__list">
                            {impactItems.map((item, i) => (
                                <div key={i} className="donate-impact__item">
                                    <FaCheckCircle className="donate-impact__check" />
                                    <div>
                                        <strong>{item.amount}</strong>
                                        <p>{item.impact}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Ways to Give */}
            <section className="section donate-ways-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">More Ways to Give</h2>
                        <p className="section-subtitle section-subtitle-center">Choose the giving method that works best for you.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="donate-ways__grid">
                        {waysToGive.map((way, i) => (
                            <AnimatedSection key={i} className="donate-way-card">
                                <div className="donate-way-card__icon">{way.icon}</div>
                                <h3>{way.title}</h3>
                                <p>{way.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Donate
