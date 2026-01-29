'use client'

import styles from './Skills.module.css'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
                { name: 'YAML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg' },
            ]
        },
        {
            title: 'Version Control & CI/CD',
            skills: [
                { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
            ]
        },
        {
            title: 'DevOps & Cloud-Native Tools',
            skills: [
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
            ]
        },
        {
            title: 'Cloud Platforms',
            skills: [
                { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                { name: 'OAuth 2.0', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg' }
            ]
        }
    ]

    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.skillsContainer}>
                <div className={styles.sectionNumber}>03</div>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.outlined}>My</span> Skills
                </h2>

                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className={styles.skillCategory}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillsGrid}>
                            {category.skills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillIcon}>
                                        <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.skillName}>{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className={styles.softSkills}>
                    <h3 className={styles.categoryTitle}>Soft Skills</h3>
                    <div className={styles.softSkillsList}>
                        <span className={styles.softSkillBadge}>Problem Solving</span>
                        <span className={styles.softSkillBadge}>Collaboration</span>
                        <span className={styles.softSkillBadge}>Agile Workflow</span>
                        <span className={styles.softSkillBadge}>Time Management</span>
                        <span className={styles.softSkillBadge}>Communication</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
