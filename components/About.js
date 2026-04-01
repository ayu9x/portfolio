'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

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

    const stats = [
        { icon: '🚀', number: '5+', label: 'Projects Built' },
        { icon: '🛠️', number: '20+', label: 'Tools & Technologies' },
        { icon: '📜', number: '4+', label: 'Certifications' },
        { icon: '☁️', number: '3+', label: 'Cloud Platforms' },
    ]

    return (
        <section id="about" className={styles.about} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;about&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        About <span className={styles.gradient}>Me</span>
                    </h2>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={`${styles.aboutText} ${isVisible ? styles.visible : ''}`}>
                        <p className={styles.lead}>
                            I&apos;m a <span className={styles.highlight}>B.Tech Computer Science</span> student at
                            Parul Institute of Technology, Vadodara, graduating in <span className={styles.highlight}>June 2026</span>.
                        </p>
                        <p>
                            With hands-on experience in <span className={styles.highlight}>Docker</span>,{' '}
                            <span className={styles.highlight}>Kubernetes</span>, and{' '}
                            <span className={styles.highlight}>AWS</span>, I specialize in building containerized applications,
                            setting up CI/CD pipelines, and managing cloud infrastructure.
                        </p>
                        <p>
                            I&apos;ve worked as a DevOps Engineer Intern at Prevoyance IT Solutions, where I deployed
                            containerized applications, built CI/CD pipelines using Jenkins and GitHub Actions,
                            and managed AWS EC2 instances. I&apos;m passionate about automation, monitoring, and
                            infrastructure as code.
                        </p>

                        <div className={styles.interestTags}>
                            <span className={styles.tag}>🐳 Containerization</span>
                            <span className={styles.tag}>☸️ Orchestration</span>
                            <span className={styles.tag}>🔄 CI/CD</span>
                            <span className={styles.tag}>☁️ Cloud Computing</span>
                            <span className={styles.tag}>📊 Monitoring</span>
                            <span className={styles.tag}>🔒 Security</span>
                        </div>
                    </div>

                    <div className={`${styles.statsGrid} ${isVisible ? styles.visible : ''}`}>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={styles.statCard}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className={styles.statIcon}>{stat.icon}</div>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <span className={styles.sectionTagClose}>&lt;/about&gt;</span>
            </div>
        </section>
    )
}
