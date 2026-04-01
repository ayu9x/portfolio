'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './GitHubStats.module.css'

export default function GitHubStats() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

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

    return (
        <section id="github" className={styles.github} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;github&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        GitHub <span className={styles.gradient}>Activity</span>
                    </h2>
                    <p className={styles.sectionDesc}>My open source contributions and coding activity</p>
                </div>

                <div className={`${styles.statsGrid} ${isVisible ? styles.visible : ''}`}>
                    {/* GitHub Stats Card */}
                    <div className={styles.statCard}>
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=ayu9x&show_icons=true&theme=transparent&hide_border=true&title_color=00d4ff&text_color=8892a8&icon_color=7b2ff7&bg_color=00000000"
                            alt="GitHub Stats"
                            className={styles.statImage}
                            loading="lazy"
                        />
                    </div>

                    {/* Top Languages */}
                    <div className={styles.statCard}>
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayu9x&layout=compact&theme=transparent&hide_border=true&title_color=00d4ff&text_color=8892a8&bg_color=00000000"
                            alt="Top Languages"
                            className={styles.statImage}
                            loading="lazy"
                        />
                    </div>

                    {/* Streak Stats */}
                    <div className={`${styles.statCard} ${styles.fullWidth}`}>
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=ayu9x&theme=transparent&hide_border=true&ring=00d4ff&fire=7b2ff7&currStreakLabel=00d4ff&sideLabels=8892a8&dates=5a6478&stroke=1a2035&background=00000000"
                            alt="GitHub Streak"
                            className={styles.statImage}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Contribution Graph */}
                <div className={`${styles.contributionCard} ${isVisible ? styles.visible : ''}`}>
                    <img
                        src="https://ghchart.rez.one/00d4ff/ayu9x"
                        alt="GitHub Contribution Graph"
                        className={styles.contributionImage}
                        loading="lazy"
                    />
                </div>

                {/* Profile Link */}
                <div className={styles.profileLink}>
                    <a href="https://github.com/ayu9x" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Full Profile
                    </a>
                </div>

                <span className={styles.sectionTagClose}>&lt;/github&gt;</span>
            </div>
        </section>
    )
}
