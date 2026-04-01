'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeFilter, setActiveFilter] = useState('all')
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

    const skillCategories = [
        {
            id: 'languages',
            title: 'Languages & Scripting',
            icon: '⌨️',
            color: '#00d4ff',
            skills: [
                { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
                { name: 'YAML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg' },
            ]
        },
        {
            id: 'devops',
            title: 'DevOps & Cloud-Native',
            icon: '🐳',
            color: '#7b2ff7',
            skills: [
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'Helm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg' },
                { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
                { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
            ]
        },
        {
            id: 'cicd',
            title: 'CI/CD & Version Control',
            icon: '🔄',
            color: '#00ff88',
            skills: [
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
                { name: 'ArgoCD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
            ]
        },
        {
            id: 'cloud',
            title: 'Cloud Platforms',
            icon: '☁️',
            color: '#ff2ecb',
            skills: [
                { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            ]
        },
        {
            id: 'monitoring',
            title: 'Monitoring & Observability',
            icon: '📊',
            color: '#ffbd2e',
            skills: [
                { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
                { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
                { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
            ]
        },
        {
            id: 'databases',
            title: 'Databases',
            icon: '🗄️',
            color: '#00d4ff',
            skills: [
                { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
                { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            ]
        },
        {
            id: 'networking',
            title: 'Networking & Infra',
            icon: '🔒',
            color: '#00ff88',
            skills: [
                { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
                { name: 'Apache Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
            ]
        }
    ]

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'devops', label: 'DevOps' },
        { id: 'cloud', label: 'Cloud' },
        { id: 'cicd', label: 'CI/CD' },
        { id: 'monitoring', label: 'Monitoring' },
    ]

    const filteredCategories = activeFilter === 'all'
        ? skillCategories
        : skillCategories.filter(cat => cat.id === activeFilter)

    return (
        <section id="skills" className={styles.skills} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;skills&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        Tech <span className={styles.gradient}>Arsenal</span>
                    </h2>
                    <p className={styles.sectionDesc}>Technologies and tools I work with</p>
                </div>

                {/* Filter Tabs */}
                <div className={styles.filterTabs}>
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`${styles.filterTab} ${activeFilter === filter.id ? styles.filterActive : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className={styles.categoriesWrapper}>
                    {filteredCategories.map((category, catIndex) => (
                        <div
                            key={category.id}
                            className={`${styles.skillCategory} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${catIndex * 0.1}s` }}
                        >
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryIcon}>{category.icon}</span>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                                <span className={styles.categoryCount}>{category.skills.length}</span>
                            </div>
                            <div className={styles.skillsGrid}>
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className={styles.skillItem}
                                        style={{
                                            '--skill-color': category.color
                                        }}
                                    >
                                        <div className={styles.skillIcon}>
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className={styles.skillLogo}
                                            />
                                        </div>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className={`${styles.softSkills} ${isVisible ? styles.visible : ''}`}>
                    <h3 className={styles.softTitle}>Soft Skills</h3>
                    <div className={styles.softGrid}>
                        {['Problem Solving', 'Team Collaboration', 'Agile Workflow', 'Communication', 'Time Management', 'Quick Learner'].map((skill, i) => (
                            <span key={i} className={styles.softBadge}>{skill}</span>
                        ))}
                    </div>
                </div>

                <span className={styles.sectionTagClose}>&lt;/skills&gt;</span>
            </div>
        </section>
    )
}
