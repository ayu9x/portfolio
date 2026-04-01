'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './FunFacts.module.css'

export default function FunFacts() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    const [counts, setCounts] = useState({ coffee: 0, bugs: 0, commits: 0, hours: 0 })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible) return

        const animateCounters = () => {
            const duration = 2000
            const steps = 50
            const stepTime = Math.abs(Math.floor(duration / steps))

            const targets = { coffee: 842, bugs: 1205, commits: 3450, hours: 5000 }
            let currentStep = 0

            const timer = setInterval(() => {
                currentStep++
                const progress = currentStep / steps
                
                // easeOutQuad
                const easedProgress = progress * (2 - progress)

                setCounts({
                    coffee: Math.floor(targets.coffee * easedProgress),
                    bugs: Math.floor(targets.bugs * easedProgress),
                    commits: Math.floor(targets.commits * easedProgress),
                    hours: Math.floor(targets.hours * easedProgress),
                })

                if (currentStep >= steps) clearInterval(timer)
            }, stepTime)

            return () => clearInterval(timer)
        }

        animateCounters()
    }, [isVisible])

    const facts = [
        { id: 'coffee', icon: '☕', label: 'Cups of Coffee', display: `${counts.coffee}+` },
        { id: 'bugs', icon: '🐛', label: 'Bugs Squashed', display: `${counts.bugs}+` },
        { id: 'commits', icon: '💻', label: 'Git Commits', display: `${counts.commits}+` },
        { id: 'hours', icon: '⏱️', label: 'Hours Coding', display: `${counts.hours}+` },
    ]

    return (
        <section className={styles.funFacts} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Developer <span className={styles.gradient}>Life Stats</span>
                    </h2>
                </div>

                <div className={styles.factsGrid}>
                    {facts.map((fact, i) => (
                        <div 
                            key={i} 
                            className={`${styles.factCard} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className={styles.factIcon}>{fact.icon}</div>
                            <div className={styles.factNumber}>{fact.display}</div>
                            <div className={styles.factLabel}>{fact.label}</div>
                            
                            {/* Decorative scanline for card */}
                            <div className={styles.factScanline}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
