import { useEffect, useRef, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

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

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    const contactInfo = [
        { icon: <FaMapMarkerAlt />, title: 'Our Office', lines: ['123 Hope Street, Sector 44', 'New Delhi, India 110001'] },
        { icon: <FaPhone />, title: 'Phone', lines: ['+91 98765 43210', '+91 11 2345 6789'] },
        { icon: <FaEnvelope />, title: 'Email', lines: ['info@hoperise.org', 'donate@hoperise.org'] },
        { icon: <FaClock />, title: 'Working Hours', lines: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'] }
    ]

    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="page-hero__overlay"></div>
                <div className="container page-hero__content">
                    <h1 className="page-hero__title">Contact Us</h1>
                    <p className="page-hero__subtitle">We'd love to hear from you. Reach out for inquiries, partnerships, or to learn more about our work.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    {/* Contact Info */}
                    <AnimatedSection className="contact-info">
                        <h2 className="section-title">Get in Touch</h2>
                        <span className="title-accent"></span>
                        <p className="contact-info__text">Have questions about our programs, want to volunteer, or interested in partnering with us? We're here to help.</p>
                        <div className="contact-info__cards">
                            {contactInfo.map((item, i) => (
                                <div key={i} className="contact-info__card">
                                    <div className="contact-info__icon">{item.icon}</div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        {item.lines.map((line, j) => <p key={j}>{line}</p>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Contact Form */}
                    <AnimatedSection className="contact-form-wrap">
                        <div className="contact-form-card">
                            <h3 className="contact-form__title">Send Us a Message</h3>
                            <p className="contact-form__subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
                            {submitted && (
                                <div className="contact-form__success">
                                    <FaPaperPlane /> Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="subject">Subject *</label>
                                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help?" />
                                    </div>
                                </div>
                                <div className="contact-form__field">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Your message here..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary contact-form__submit">
                                    <FaPaperPlane /> Send Message
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="contact-map">
                <div className="contact-map__inner">
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536918839504!2d77.21535!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ5LjkiTiA3N8KwMTInNTUuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact
