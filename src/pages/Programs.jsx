import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaHandHoldingHeart, FaHeartbeat, FaChild, FaHome, FaFemale, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import educationImage from '../assets/images/education_program.png'
import livelihoodImage from '../assets/images/livelihood_program.png'
import healthImage from '../assets/images/health_program.png'
import './Programs.css'

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

const programs = [
    {
        id: 'education',
        icon: <FaGraduationCap />,
        title: 'Education',
        subtitle: 'Unlocking potential through learning',
        image: educationImage,
        description: 'Our education programs focus on providing quality learning opportunities to children and youth in underserved communities. From digital classrooms to scholarship programs, we ensure no child is left behind.',
        initiatives: [
            { name: 'Digital Equalizer', desc: 'Bringing technology-enabled learning to rural schools' },
            { name: 'Learning & Migration Program', desc: 'Supporting education for migrant children' },
            { name: 'Scholarship Fund', desc: 'Merit-based scholarships for underprivileged students' },
            { name: 'Teacher Training', desc: 'Capacity building for educators in rural areas' }
        ],
        stats: { number: '4.2M', label: 'Students Reached' }
    },
    {
        id: 'livelihood',
        icon: <FaHandHoldingHeart />,
        title: 'Livelihood',
        subtitle: 'Building sustainable futures',
        image: livelihoodImage,
        description: 'We empower women and youth with vocational skills, micro-enterprise support, and market-aligned training to build sustainable livelihoods and break the cycle of poverty.',
        initiatives: [
            { name: 'Ability Based Livelihood', desc: 'Skills training for persons with disabilities' },
            { name: 'Market Aligned Skills Training', desc: 'Industry-ready vocational programs' },
            { name: 'Women Entrepreneurship', desc: 'Micro-enterprise support for rural women' },
            { name: 'Agriculture Innovation', desc: 'Modern farming techniques and support' }
        ],
        stats: { number: '2.8M', label: 'Lives Empowered' }
    },
    {
        id: 'health',
        icon: <FaHeartbeat />,
        title: 'Public Health',
        subtitle: 'Healthy communities, stronger futures',
        image: healthImage,
        description: 'Our public health programs focus on maternal and child health, nutrition, and community health education to improve health outcomes in India\'s most vulnerable communities.',
        initiatives: [
            { name: 'Maternal & Newborn Health', desc: 'Supporting safe pregnancies and healthy births' },
            { name: 'Nutrition Programs', desc: 'Combating malnutrition in children under 5' },
            { name: 'Community Health Workers', desc: 'Training local health advocates' },
            { name: 'Clean Water Access', desc: 'Providing clean drinking water to villages' }
        ],
        stats: { number: '5.5M', label: 'Health Outcomes Improved' }
    }
]

const additionalPrograms = [
    { icon: <FaChild />, title: 'Child Welfare', desc: 'Protecting children\'s rights and providing safe environments for growth and development.' },
    { icon: <FaHome />, title: 'Community Development', desc: 'Building infrastructure, sanitation, and community spaces for holistic village development.' },
    { icon: <FaFemale />, title: 'Women Empowerment', desc: 'Leadership programs, self-help groups, and gender equality initiatives across communities.' }
]

function Programs() {
    return (
        <div className="programs-page">
            <section className="page-hero">
                <div className="page-hero__overlay"></div>
                <div className="container page-hero__content">
                    <h1 className="page-hero__title">Our Programs</h1>
                    <p className="page-hero__subtitle">Comprehensive programs designed to create lasting impact across education, livelihood, and public health.</p>
                </div>
            </section>

            {/* Program Sections */}
            {programs.map((program, index) => (
                <section key={program.id} className={`section program-detail ${index % 2 !== 0 ? 'program-detail--alt' : ''}`}>
                    <div className="container program-detail__grid" style={{ direction: index % 2 !== 0 ? 'rtl' : 'ltr' }}>
                        <AnimatedSection className="program-detail__image-wrap" style={{ direction: 'ltr' }}>
                            <img src={program.image} alt={program.title} className="program-detail__image" />
                            <div className="program-detail__stat">
                                <span className="program-detail__stat-number">{program.stats.number}</span>
                                <span className="program-detail__stat-label">{program.stats.label}</span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="program-detail__content" style={{ direction: 'ltr' }}>
                            <div className="program-detail__icon-title">
                                <div className="program-detail__icon">{program.icon}</div>
                                <div>
                                    <h2 className="program-detail__title">{program.title}</h2>
                                    <p className="program-detail__subtitle">{program.subtitle}</p>
                                </div>
                            </div>
                            <span className="title-accent"></span>
                            <p className="program-detail__desc">{program.description}</p>
                            <div className="program-detail__initiatives">
                                <h4>Key Initiatives</h4>
                                {program.initiatives.map((ini, i) => (
                                    <div key={i} className="program-detail__initiative">
                                        <FaCheckCircle className="program-detail__check" />
                                        <div>
                                            <strong>{ini.name}</strong>
                                            <p>{ini.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            ))}

            {/* Additional Programs */}
            <section className="section programs-additional">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Additional Programs</h2>
                        <p className="section-subtitle section-subtitle-center">Beyond our core areas, we also address critical needs through specialized programs.</p>
                        <span className="title-accent title-accent-center"></span>
                    </AnimatedSection>
                    <div className="programs-additional__grid">
                        {additionalPrograms.map((prog, i) => (
                            <AnimatedSection key={i} className="programs-additional__card">
                                <div className="programs-additional__icon">{prog.icon}</div>
                                <h3>{prog.title}</h3>
                                <p>{prog.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="programs-cta">
                <div className="container programs-cta__inner">
                    <AnimatedSection>
                        <h2>Support Our Programs</h2>
                        <p>Your contribution helps us expand our reach and deepen our impact in communities that need it most.</p>
                        <Link to="/donate" className="btn btn-primary btn-lg">Donate Now <FaArrowRight /></Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default Programs
