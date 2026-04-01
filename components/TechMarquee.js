'use client'

import styles from './TechMarquee.module.css'

export default function TechMarquee() {
    const techItems = [
        '🐳 Docker', '☸️ Kubernetes', '☁️ AWS', '🔧 Terraform', '⚙️ Jenkins',
        '🔄 GitHub Actions', '📊 Grafana', '🔥 Prometheus', '🐧 Linux', '🔒 Nginx',
        '📦 Helm', '🤖 Ansible', '🚀 ArgoCD', '🔗 Git', '☁️ GCP',
        '💿 MongoDB', '⚡ Redis', '🐍 Python', '📜 Bash', '☁️ Azure',
    ]

    return (
        <div className={styles.marqueeSection}>
            <div className={styles.marqueeTrack}>
                <div className={styles.marqueeContent}>
                    {techItems.map((item, i) => (
                        <span key={i} className={styles.marqueeItem}>{item}</span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {techItems.map((item, i) => (
                        <span key={`dup-${i}`} className={styles.marqueeItem}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
