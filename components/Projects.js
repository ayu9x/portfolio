'use client'

import styles from './Projects.module.css'

export default function Projects() {
    const projects = [
        {
            title: 'Web Scraping – Automated Data Extraction Tool',
            date: 'Jan 2025',
            tech: ['Node.js', 'Puppeteer', 'Python', 'Flask', 'Docker'],
            description: 'Built a containerized web scraping solution using Node.js with Puppeteer for browser automation. Integrated Flask to store the scraped content while maintaining Docker containerization. Automated data extraction with efficient browser control and lightweight server deployment. Ensured modular and scalable architecture for future extensions.',
            github: 'https://github.com/ayu9x'
        },
        {
            title: 'ArtGenesis – NFT Marketplace',
            date: 'Jan 2025 - May 2025',
            tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS EC2', 'Docker', 'Polygon', 'Web3.js', 'JWT', 'IPFS'],
            description: 'Developed a decentralized NFT marketplace web app using React.js, Node.js, and MongoDB. Deployed backend and frontend on AWS EC2 (free tier) with basic Docker containerization. Integrated Polygon (Matic) blockchain to support NFT minting and smart contract interactions via Web3.js. Enabled wallet-based login using MetaMask and secured users with JWT-based authentication. Stored NFT metadata and assets securely using IPFS (InterPlanetary File System). Designed intuitive UI/UX to simplify the NFT creation and listing process.',
            github: 'https://github.com/ayu9x'
        }
    ]

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsContainer}>
                <div className={styles.sectionNumber}>02</div>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.outlined}>My</span> Work
                </h2>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.projectHeader}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <span className={styles.projectDate}>{project.date}</span>
                            </div>

                            <div className={styles.techStack}>
                                {project.tech.map((tech, i) => (
                                    <span key={i} className={styles.techBadge}>{tech}</span>
                                ))}
                            </div>

                            <p className={styles.projectDescription}>{project.description}</p>

                            <div className={styles.projectLinks}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
