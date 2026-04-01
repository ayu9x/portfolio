'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'

export default function Projects() {
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

    const projects = [
        {
            title: 'Generative AI Contract Drafting & Review Platform',
            date: 'Jan 2026 – Mar 2026',
            status: 'Completed',
            tech: ['FastAPI', 'React.js', 'Docker', 'PostgreSQL', 'OpenAI GPT-4', 'Redis', 'JWT'],
            description: 'Built an AI-powered platform for automated contract drafting and risk analysis using GPT-4. Developed REST APIs with FastAPI and implemented secure JWT authentication. Containerized the application using Docker for scalable deployment. Integrated PostgreSQL and Redis for data management and performance.',
            github: 'https://github.com/ayu9x',
            features: ['AI-Powered Drafting', 'Risk Analysis', 'JWT Auth', 'Docker Deployment'],
        },
        {
            title: 'ArtGenesis – NFT Marketplace',
            date: 'Jan 2025 – May 2025',
            status: 'Completed',
            tech: ['React.js', 'Node.js', 'MongoDB', 'AWS EC2', 'Docker', 'Polygon', 'Web3.js', 'IPFS'],
            description: 'Developed a decentralized NFT marketplace with React.js and Node.js. Deployed on AWS EC2 with Docker containerization. Integrated Polygon blockchain for NFT minting and smart contract interactions. Implemented MetaMask wallet login and IPFS for secure NFT metadata storage.',
            github: 'https://github.com/ayu9x',
            features: ['Blockchain Integration', 'MetaMask Login', 'IPFS Storage', 'AWS Deployment'],
        },
        {
            title: 'Web Scraping – Automated Data Extraction',
            date: 'Jan 2025',
            status: 'Completed',
            tech: ['Node.js', 'Puppeteer', 'Python', 'Flask', 'Docker'],
            description: 'Built a containerized web scraping solution using Node.js with Puppeteer for browser automation. Integrated Flask backend for content storage. Automated data extraction with efficient browser control and Docker-based lightweight deployment.',
            github: 'https://github.com/ayu9x',
            features: ['Browser Automation', 'Containerized', 'API Integration', 'Scalable'],
        }
    ]

    return (
        <section id="projects" className={styles.projects} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;projects&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        Featured <span className={styles.gradient}>Projects</span>
                    </h2>
                    <p className={styles.sectionDesc}>Things I&apos;ve built that I&apos;m proud of</p>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.projectCard} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Top accent line */}
                            <div className={styles.cardAccent}></div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardTop}>
                                    <div className={styles.folderIcon}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </div>
                                    <div className={styles.cardTopRight}>
                                        <span className={styles.statusBadge}>{project.status}</span>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink} aria-label="GitHub">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <span className={styles.projectDate}>{project.date}</span>

                                <p className={styles.projectDescription}>{project.description}</p>

                                {/* Feature highlights */}
                                <div className={styles.features}>
                                    {project.features.map((feat, i) => (
                                        <span key={i} className={styles.featureBadge}>
                                            <span className={styles.featureDot}></span>
                                            {feat}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.techStack}>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className={styles.techBadge}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <span className={styles.sectionTagClose}>&lt;/projects&gt;</span>
            </div>
        </section>
    )
}
