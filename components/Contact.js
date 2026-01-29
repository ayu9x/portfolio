'use client'

import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.sectionNumber}>04</div>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.outlined}>Let's</span> work together
                </h2>

                <div className={styles.contactGrid}>
                    <div className={styles.contactItem}>
                        <div className={styles.contactIcon}>📧</div>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>
                            <a href="mailto:rajayush052@gmail.com">rajayush052@gmail.com</a>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <div className={styles.contactIcon}>📱</div>
                        <div className={styles.contactLabel}>Mobile</div>
                        <div className={styles.contactValue}>
                            <a href="tel:+917061613799">+91 7061613799</a>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <div className={styles.contactIcon}>💼</div>
                        <div className={styles.contactLabel}>LinkedIn</div>
                        <div className={styles.contactValue}>
                            <a href="https://www.linkedin.com/in/ayush-raj" target="_blank" rel="noopener noreferrer">linkedin.com/in/ayush-raj</a>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <div className={styles.contactIcon}>💻</div>
                        <div className={styles.contactLabel}>GitHub</div>
                        <div className={styles.contactValue}>
                            <a href="https://github.com/ayu9x" target="_blank" rel="noopener noreferrer">github.com/ayu9x</a>
                        </div>
                    </div>
                </div>

                <div className={styles.contactCTA} style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Let's Build Something Amazing Together!</h3>
                    <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                    <a href="mailto:rajayush052@gmail.com" className="btn btn-primary">Send Me an Email</a>
                </div>
            </div>
        </section>
    )
}
