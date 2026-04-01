'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const texts = ['DevOps Engineer', 'Cloud Enthusiast', 'Container Orchestrator', 'CI/CD Specialist', 'Linux Administrator']

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % texts.length
            const fullText = texts[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 50 : 120)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed, texts])

    return (
        <section id="home" className={styles.hero}>
            {/* Decorative elements */}
            <div className={styles.heroBgOrb1}></div>
            <div className={styles.heroBgOrb2}></div>
            <div className={styles.scanLine}></div>

            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.statusBadge}>
                        <span className={styles.statusDot}></span>
                        Available for Opportunities
                    </div>

                    <h1 className={styles.heroTitle}>
                        <span className={styles.greeting}>Hello, I&apos;m</span>
                        <span className={styles.name}>Ayush Raj</span>
                    </h1>

                    <div className={styles.heroSubtitle}>
                        <span className={styles.prefix}>&gt;_</span>
                        <span className={styles.typedText}>{text}</span>
                        <span className={styles.cursor}>|</span>
                    </div>

                    <p className={styles.heroDescription}>
                        Aspiring DevOps Engineer with hands-on experience in <span className={styles.highlight}>Docker</span>,{' '}
                        <span className={styles.highlight}>Kubernetes</span>, <span className={styles.highlight}>AWS</span>,{' '}
                        and <span className={styles.highlight}>CI/CD pipelines</span>.
                        Passionate about building cloud-native solutions and automating infrastructure at scale.
                    </p>

                    <div className={styles.heroButtons}>
                        <a href="#projects" className="btn btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Contact Me
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className={styles.quickStats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>5+</span>
                            <span className={styles.statLabel}>Projects</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Tools & Tech</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>4+</span>
                            <span className={styles.statLabel}>Certifications</span>
                        </div>
                    </div>
                </div>

                {/* Terminal illustration */}
                <div className={styles.heroVisual}>
                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.terminalDots}>
                                <span className={styles.dotRed}></span>
                                <span className={styles.dotYellow}></span>
                                <span className={styles.dotGreen}></span>
                            </div>
                            <span className={styles.terminalTitle}>ayush@devops:~</span>
                        </div>
                        <div className={styles.terminalBody}>
                            <div className={styles.terminalLine}>
                                <span className={styles.termPrompt}>$</span>
                                <span className={styles.termCmd}> kubectl get pods --all-namespaces</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.termOutput}>NAMESPACE  NAME        READY  STATUS</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.termOutput}>default    portfolio   1/1    </span>
                                <span className={styles.termSuccess}>Running ✓</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.termOutput}>devops     jenkins     1/1    </span>
                                <span className={styles.termSuccess}>Running ✓</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.termOutput}>monitor    grafana     1/1    </span>
                                <span className={styles.termSuccess}>Running ✓</span>
                            </div>
                            <div className={styles.terminalLine} style={{ marginTop: '0.75rem' }}>
                                <span className={styles.termPrompt}>$</span>
                                <span className={styles.termCmd}> docker ps | wc -l</span>
                            </div>
                            <div className={styles.terminalLine}>
                                <span className={styles.termOutput}>12 containers running</span>
                            </div>
                            <div className={styles.terminalLine} style={{ marginTop: '0.75rem' }}>
                                <span className={styles.termPrompt}>$</span>
                                <span className={styles.termCursor}>_</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
