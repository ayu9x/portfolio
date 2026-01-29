'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const texts = ['Cloud Developer', 'DevOps Engineer', 'Container Orchestrator']

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % texts.length
            const fullText = texts[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 50 : 150)

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
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.sectionNumber}>01</div>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.outlined}>Hi, I'm</span>
                        <br />
                        Ayush Raj
                    </h1>
                    <div className={styles.heroSubtitle}>
                        <span id="typingText">{text}</span>
                        <span className={styles.cursor}>|</span>
                    </div>
                    <p className={styles.heroDescription}>
                        Passionate about cloud infrastructure, container orchestration, and building scalable DevOps solutions.
                        Currently working as a Cloud Developer & DevOps Engineer at One Frequency.
                    </p>
                    <div className={styles.heroButtons}>
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-primary">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
