'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef(null)

    const testimonials = [
        {
            quote: "Ayush showed an incredible aptitude for container orchestration during his time with us. He quickly grasped complex Kubernetes concepts and deployed scalable pipelines with zero downtime.",
            name: "Senior DevOps Engineer",
            role: "Prevoyance",
            image: "👨‍💻",
        },
        {
            quote: "His ability to automate tedious infrastructure tasks using Ansible and Terraform saved our team countless hours. He writes exceptionally clean and maintainable infrastructure code.",
            name: "Cloud Architect",
            role: "Tech Startup",
            image: "👩‍💼",
        },
        {
            quote: "One of the most dedicated and fast-learning freshers I've worked with. Ayush doesn't just deploy code; he ensures the entire pipeline is secure, monitored, and highly available.",
            name: "Lead Platform Engineer",
            role: "Enterprise Solution",
            image: "👨‍💼",
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [testimonials.length])

    return (
        <section className={styles.testimonials} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;recommendations&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        What People <span className={styles.gradient}>Say</span>
                    </h2>
                    <p className={styles.sectionDesc}>Feedback from peers and mentors</p>
                </div>

                <div className={`${styles.sliderWrapper} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.sliderContent} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {testimonials.map((t, index) => (
                            <div key={index} className={styles.slide}>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent-cyan)" opacity="0.2">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                    <p className={styles.quoteText}>&quot;{t.quote}&quot;</p>
                                    <div className={styles.authorProfile}>
                                        <div className={styles.authorAvatar}>{t.image}</div>
                                        <div className={styles.authorInfo}>
                                            <h4 className={styles.authorName}>{t.name}</h4>
                                            <p className={styles.authorRole}>{t.role}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Neon border glow effect */}
                                    <div className={styles.glowLine}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.sliderControls}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
