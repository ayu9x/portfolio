'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Certifications.module.css'

export default function Certifications() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    const certs = [
        {
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "Expected 2024",
            badges: "☁️",
            color: "var(--accent-cyan)"
        },
        {
            title: "Certified Kubernetes Administrator",
            issuer: "CNCF",
            date: "In Progress",
            badges: "☸️",
            color: "var(--accent-purple)"
        },
        {
            title: "HashiCorp Certified: Terraform",
            issuer: "HashiCorp",
            date: "Planned",
            badges: "🔧",
            color: "var(--accent-pink)"
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const handleMouseMove = (e, index) => {
        const card = document.getElementById(`cert-card-${index}`)
        if (!card) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const rotateX = ((y - centerY) / centerY) * -15
        const rotateY = ((x - centerX) / centerX) * 15

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }

    const handleMouseLeave = (index) => {
        const card = document.getElementById(`cert-card-${index}`)
        if (!card) return
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    }

    return (
        <section id="certifications" className={styles.certifications} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;certifications&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        Licenses & <span className={styles.gradient}>Accreditations</span>
                    </h2>
                    <p className={styles.sectionDesc}>Continuous learning and validation of skills</p>
                </div>

                <div className={styles.certGrid}>
                    {certs.map((cert, index) => (
                        <div 
                            key={index}
                            className={`${styles.certWrapper} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div 
                                id={`cert-card-${index}`}
                                className={styles.certCard}
                                onMouseMove={(e) => handleMouseMove(e, index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                style={{ '--card-color': cert.color }}
                            >
                                <div className={styles.cardGlow}></div>
                                <div className={styles.flexHeader}>
                                    <div className={styles.certBadge}>{cert.badges}</div>
                                    <span className={styles.certDate}>{cert.date}</span>
                                </div>
                                <h3 className={styles.certTitle}>{cert.title}</h3>
                                <p className={styles.certIssuer}>{cert.issuer}</p>
                                
                                <div className={styles.cardFooter}>
                                    <span className={styles.verifyLink}>Verify Credential ↗</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
