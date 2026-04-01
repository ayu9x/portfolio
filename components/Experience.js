'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'

export default function Experience() {
    const [visibleItems, setVisibleItems] = useState(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]))
                    }
                })
            },
            { threshold: 0.2 }
        )

        const items = document.querySelectorAll('[data-timeline-item]')
        items.forEach((item) => observer.observe(item))
        return () => observer.disconnect()
    }, [])

    const workExperience = [
        {
            title: 'DevOps Engineer Intern',
            company: 'Prevoyance IT Solutions Pvt. Ltd., Nagpur',
            period: 'Jan 2025 – Present',
            description: [
                'Deployed containerized applications using Docker and Docker Compose',
                'Built and maintained CI/CD pipelines using Jenkins and GitHub Actions',
                'Assisted in deploying and managing applications on AWS EC2 instances',
                'Managed Linux servers by monitoring logs and troubleshooting system issues',
                'Automated deployment workflows and collaborated with development teams',
            ],
            skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS EC2', 'GitHub Actions', 'Linux'],
            icon: '🐳',
        }
    ]

    const education = [
        {
            title: 'B.Tech – Computer Science & Engineering',
            institution: 'Parul Institute of Technology, Vadodara',
            period: 'Expected June 2026',
            icon: '🎓',
        },
        {
            title: 'Senior Secondary School',
            institution: 'Ram Prasad College, Hajipur, Bihar',
            period: '2020 – 2022',
            icon: '📚',
        }
    ]


    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;experience&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        Work <span className={styles.gradient}>Experience</span>
                    </h2>
                </div>

                {/* Work Experience */}
                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    {workExperience.map((exp, i) => (
                        <div
                            key={i}
                            className={styles.timelineEntry}
                            data-timeline-item
                            data-index={`work-${i}`}
                        >
                            <div className={`${styles.timelineCard} ${visibleItems.has(`work-${i}`) ? styles.visible : ''}`}>
                                <div className={styles.timelineIcon}>
                                    <span>{exp.icon}</span>
                                </div>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3 className={styles.cardTitle}>{exp.title}</h3>
                                        <p className={styles.cardCompany}>{exp.company}</p>
                                    </div>
                                    <span className={styles.cardPeriod}>{exp.period}</span>
                                </div>
                                <ul className={styles.cardList}>
                                    {exp.description.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                                <div className={styles.cardSkills}>
                                    {exp.skills.map((skill, j) => (
                                        <span key={j} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <h2 className={styles.subsectionTitle}>
                    <span className={styles.gradient}>Education</span>
                </h2>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    {education.map((edu, i) => (
                        <div
                            key={i}
                            className={styles.timelineEntry}
                            data-timeline-item
                            data-index={`edu-${i}`}
                        >
                            <div className={`${styles.timelineCard} ${visibleItems.has(`edu-${i}`) ? styles.visible : ''}`}>
                                <div className={styles.timelineIcon}>
                                    <span>{edu.icon}</span>
                                </div>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3 className={styles.cardTitle}>{edu.title}</h3>
                                        <p className={styles.cardCompany}>{edu.institution}</p>
                                    </div>
                                    <span className={styles.cardPeriod}>{edu.period}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <span className={styles.sectionTagClose}>&lt;/experience&gt;</span>
            </div>
        </section>
    )
}
