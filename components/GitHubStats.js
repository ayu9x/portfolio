'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './GitHubStats.module.css'

const GITHUB_USERNAME = 'ayu9x'

export default function GitHubStats() {
    const [isVisible, setIsVisible] = useState(false)
    const [stats, setStats] = useState(null)
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
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

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                // Fetch user profile
                const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
                const userData = await userRes.json()

                // Fetch repos to calculate language stats
                const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
                const reposData = await reposRes.json()

                // Calculate language breakdown
                const langMap = {}
                let totalSize = 0
                for (const repo of reposData) {
                    if (repo.language && !repo.fork) {
                        langMap[repo.language] = (langMap[repo.language] || 0) + (repo.size || 1)
                        totalSize += (repo.size || 1)
                    }
                }

                const languages = Object.entries(langMap)
                    .map(([name, size]) => ({ name, size, percent: ((size / totalSize) * 100).toFixed(1) }))
                    .sort((a, b) => b.size - a.size)
                    .slice(0, 6)

                // Get top repos
                const topRepos = reposData
                    .filter(r => !r.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 4)

                // Calculate total stars
                const totalStars = reposData.reduce((sum, r) => sum + r.stargazers_count, 0)
                const totalForks = reposData.reduce((sum, r) => sum + r.forks_count, 0)

                setStats({
                    publicRepos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following,
                    totalStars,
                    totalForks,
                    languages,
                    avatarUrl: userData.avatar_url,
                    bio: userData.bio,
                    createdAt: new Date(userData.created_at).getFullYear(),
                })
                setRepos(topRepos)
            } catch (err) {
                console.error('Failed to fetch GitHub data:', err)
                // Fallback static data
                setStats({
                    publicRepos: 15,
                    followers: 5,
                    following: 10,
                    totalStars: 12,
                    totalForks: 3,
                    languages: [
                        { name: 'JavaScript', percent: '35.2' },
                        { name: 'Python', percent: '25.8' },
                        { name: 'HTML', percent: '15.4' },
                        { name: 'CSS', percent: '12.1' },
                        { name: 'Shell', percent: '6.5' },
                        { name: 'Dockerfile', percent: '5.0' },
                    ],
                    createdAt: 2022,
                })
            } finally {
                setLoading(false)
            }
        }

        fetchGitHubData()
    }, [])

    const langColors = {
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        Python: '#3572A5',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Shell: '#89e051',
        Dockerfile: '#384d54',
        Java: '#b07219',
        'C++': '#f34b7d',
        C: '#555555',
        Go: '#00ADD8',
        Rust: '#dea584',
        Ruby: '#701516',
        PHP: '#4F5D95',
        Swift: '#F05138',
        Kotlin: '#A97BFF',
        HCL: '#844fba',
        Makefile: '#427819',
    }

    const statItems = stats ? [
        { icon: '📦', label: 'Repositories', value: stats.publicRepos },
        { icon: '⭐', label: 'Total Stars', value: stats.totalStars },
        { icon: '🍴', label: 'Total Forks', value: stats.totalForks },
        { icon: '👥', label: 'Followers', value: stats.followers },
    ] : []

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

                {loading ? (
                    <div className={styles.loadingWrapper}>
                        <div className={styles.loadingSpinner}></div>
                        <p className={styles.loadingText}>Fetching GitHub data...</p>
                    </div>
                ) : (
                    <>
                        {/* Stats Overview Cards */}
                        <div className={`${styles.statsOverview} ${isVisible ? styles.visible : ''}`}>
                            {statItems.map((item, i) => (
                                <div
                                    key={i}
                                    className={styles.statMiniCard}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <span className={styles.statMiniIcon}>{item.icon}</span>
                                    <span className={styles.statMiniValue}>
                                        <AnimatedNumber value={item.value} isVisible={isVisible} />
                                    </span>
                                    <span className={styles.statMiniLabel}>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className={`${styles.statsGrid} ${isVisible ? styles.visible : ''}`}>
                            {/* Top Languages Card */}
                            <div className={styles.statCard}>
                                <h3 className={styles.cardTitle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    Top Languages
                                </h3>
                                <div className={styles.languageList}>
                                    {stats?.languages.map((lang, i) => (
                                        <div key={i} className={styles.languageItem}>
                                            <div className={styles.languageInfo}>
                                                <span
                                                    className={styles.langDot}
                                                    style={{ background: langColors[lang.name] || '#8892a8' }}
                                                ></span>
                                                <span className={styles.langName}>{lang.name}</span>
                                                <span className={styles.langPercent}>{lang.percent}%</span>
                                            </div>
                                            <div className={styles.langBarBg}>
                                                <div
                                                    className={styles.langBarFill}
                                                    style={{
                                                        width: isVisible ? `${lang.percent}%` : '0%',
                                                        background: langColors[lang.name] || '#8892a8',
                                                        transitionDelay: `${i * 0.1 + 0.3}s`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Top Repos Card */}
                            <div className={styles.statCard}>
                                <h3 className={styles.cardTitle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    Top Repositories
                                </h3>
                                <div className={styles.repoList}>
                                    {repos.map((repo, i) => (
                                        <a
                                            key={i}
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.repoItem}
                                        >
                                            <div className={styles.repoHeader}>
                                                <span className={styles.repoName}>{repo.name}</span>
                                                <span className={styles.repoStars}>
                                                    ⭐ {repo.stargazers_count}
                                                </span>
                                            </div>
                                            <p className={styles.repoDesc}>
                                                {repo.description || 'No description provided'}
                                            </p>
                                            <div className={styles.repoMeta}>
                                                {repo.language && (
                                                    <span className={styles.repoLang}>
                                                        <span
                                                            className={styles.langDot}
                                                            style={{ background: langColors[repo.language] || '#8892a8' }}
                                                        ></span>
                                                        {repo.language}
                                                    </span>
                                                )}
                                                <span className={styles.repoForks}>🍴 {repo.forks_count}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>


                        {/* GitHub Streak - keeping the working one */}
                        <div className={`${styles.streakCard} ${isVisible ? styles.visible : ''}`}>
                            <img
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=00d4ff&fire=7b2ff7&currStreakLabel=00d4ff&sideLabels=8892a8&dates=5a6478&stroke=1a2035&background=00000000`}
                                alt="GitHub Streak"
                                className={styles.streakImage}
                                loading="lazy"
                            />
                        </div>
                    </>
                )}

                {/* Profile Link */}
                <div className={styles.profileLink}>
                    <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
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

function AnimatedNumber({ value, isVisible }) {
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        if (!isVisible) return

        const duration = 1500
        const steps = 40
        const stepTime = duration / steps
        let current = 0

        const timer = setInterval(() => {
            current++
            const progress = current / steps
            const eased = progress * (2 - progress)
            setDisplay(Math.floor(value * eased))
            if (current >= steps) {
                setDisplay(value)
                clearInterval(timer)
            }
        }, stepTime)

        return () => clearInterval(timer)
    }, [isVisible, value])

    return <>{display}</>
}
