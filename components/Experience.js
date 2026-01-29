'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'
import Image from 'next/image'

export default function Experience() {
    const [visibleItems, setVisibleItems] = useState(new Set())
    const timelineRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]))
                    }
                })
            },
            { threshold: 0.3 }
        )

        const items = document.querySelectorAll('[data-timeline-item]')
        items.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.experienceContainer}>
                <h2 className={styles.sectionTitle}>Work Experience</h2>

                <div className={styles.timelineWrapper} ref={timelineRef}>
                    <div className={styles.timelineLine}></div>

                    <div
                        className={styles.timeline}
                        data-timeline-item
                        data-index="0"
                    >
                        <div className={`${styles.timelineItem} ${visibleItems.has('0') ? styles.visible : ''}`}>
                            <div className={styles.timelineIcon}>
                                <Image
                                    src="/kubernetes-icon.png"
                                    alt="Kubernetes"
                                    width={40}
                                    height={40}
                                    className={styles.iconImage}
                                />
                            </div>
                            <div className={styles.timelineDate}>Jan 2025 - Present</div>
                            <div className={styles.timelineContent}>
                                <h3>Cloud Developer & DevOps Engineer</h3>
                                <h4>One Frequency (Remote)</h4>
                                <p>Building cloud-native solutions, automating deployments, and managing Kubernetes, Docker, Jenkins, Kafka, and AWS infrastructure.</p>
                                <div className={styles.skills}>
                                    <span>Kubernetes</span>
                                    <span>Docker</span>
                                    <span>Jenkins</span>
                                    <span>AWS</span>
                                    <span>Kafka</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className={styles.sectionTitle} style={{ marginTop: '4rem' }}>Education</h2>

                <div className={styles.timelineWrapper}>
                    <div className={styles.timelineLine}></div>

                    <div
                        className={styles.timeline}
                        data-timeline-item
                        data-index="1"
                    >
                        <div className={`${styles.timelineItem} ${visibleItems.has('1') ? styles.visible : ''}`}>
                            <div className={styles.timelineIcon}>
                                <span className={styles.iconEmoji}>🎓</span>
                            </div>
                            <div className={styles.timelineDate}>Expected June 2026</div>
                            <div className={styles.timelineContent}>
                                <h3>Bachelor of Technology</h3>
                                <h4>Parul Institute of Technology</h4>
                                <p>Vadodara, Gujarat</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={styles.timeline}
                        data-timeline-item
                        data-index="2"
                    >
                        <div className={`${styles.timelineItem} ${visibleItems.has('2') ? styles.visible : ''}`}>
                            <div className={styles.timelineIcon}>
                                <span className={styles.iconEmoji}>📚</span>
                            </div>
                            <div className={styles.timelineDate}>April 2020 - May 2022</div>
                            <div className={styles.timelineContent}>
                                <h3>Senior Secondary School</h3>
                                <h4>Ram Prasad College</h4>
                                <p>Hajipur, Bihar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className={styles.sectionTitle} style={{ marginTop: '4rem' }}>Certifications</h2>

                <div className={styles.certGrid}>
                    <div className={styles.certCard}>
                        <div className={styles.certIcon}>☁️</div>
                        <h4>AWS Workshop</h4>
                        <p>Cloud fundamentals and hands-on practical labs</p>
                    </div>
                    <div className={styles.certCard}>
                        <div className={styles.certIcon}>📊</div>
                        <h4>Tableau Workshop</h4>
                        <p>Data visualization and interactive dashboards</p>
                    </div>
                    <div className={styles.certCard}>
                        <div className={styles.certIcon}>💻</div>
                        <h4>NPTEL TOC</h4>
                        <p>Theory of Computation course</p>
                    </div>
                    <div className={styles.certCard}>
                        <div className={styles.certIcon}>🌐</div>
                        <h4>Cisco Networking</h4>
                        <p>Network protocols and architecture fundamentals</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
