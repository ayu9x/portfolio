'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Services.module.css'

export default function Services() {
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

    const services = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 12H2" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                    <line x1="6" y1="16" x2="6.01" y2="16" /><line x1="10" y1="16" x2="10.01" y2="16" />
                </svg>
            ),
            title: 'Infrastructure & Cloud',
            description: 'Design and deploy scalable cloud infrastructure on AWS, GCP, and Azure. EC2, S3, IAM, VPC, and CloudFormation expertise.',
            tags: ['AWS', 'GCP', 'Azure', 'CloudFormation'],
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v18" /><path d="M8 6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3" />
                    <path d="M16 6h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3" />
                    <path d="M8 14H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3" />
                    <path d="M16 14h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3" />
                </svg>
            ),
            title: 'Container Orchestration',
            description: 'Containerize applications with Docker and orchestrate at scale with Kubernetes. Helm charts, service mesh, and auto-scaling.',
            tags: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
            ),
            title: 'CI/CD Pipeline Design',
            description: 'Build automated CI/CD pipelines using Jenkins, GitHub Actions, and ArgoCD. Automated testing, building, and deployment workflows.',
            tags: ['Jenkins', 'GitHub Actions', 'ArgoCD'],
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                </svg>
            ),
            title: 'Monitoring & Observability',
            description: 'Set up monitoring stacks with Prometheus and Grafana. Log aggregation, alerting, and performance dashboards.',
            tags: ['Prometheus', 'Grafana', 'ELK Stack'],
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'Linux Administration',
            description: 'Server setup, management, and hardening on Linux. Shell scripting, cron jobs, networking, and security configurations.',
            tags: ['Linux', 'Bash', 'Nginx', 'Security'],
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            title: 'Infrastructure as Code',
            description: 'Automate infrastructure provisioning with Terraform and Ansible. Reproducible, version-controlled environments.',
            tags: ['Terraform', 'Ansible', 'CloudFormation'],
        },
    ]

    return (
        <section id="services" className={styles.services} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>&lt;services&gt;</span>
                    <h2 className={styles.sectionTitle}>
                        What I <span className={styles.gradient}>Do</span>
                    </h2>
                    <p className={styles.sectionDesc}>Core competencies and areas of expertise</p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${styles.serviceCard} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDesc}>{service.description}</p>
                            <div className={styles.serviceTags}>
                                {service.tags.map((tag, i) => (
                                    <span key={i} className={styles.serviceTag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <span className={styles.sectionTagClose}>&lt;/services&gt;</span>
            </div>
        </section>
    )
}
