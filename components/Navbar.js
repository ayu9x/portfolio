'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            setIsDark(true)
            document.documentElement.setAttribute('data-theme', 'dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        if (newTheme) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.removeAttribute('data-theme')
            localStorage.setItem('theme', 'light')
        }
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navContainer}>
                    <div className={styles.logo}>AYUSH RAJ</div>

                    <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                        <li><a onClick={() => scrollToSection('home')} className={styles.navLink}>Home</a></li>
                        <li><a onClick={() => scrollToSection('skills')} className={styles.navLink}>Skills</a></li>
                        <li><a onClick={() => scrollToSection('experience')} className={styles.navLink}>Experience</a></li>
                        <li><a onClick={() => scrollToSection('projects')} className={styles.navLink}>Projects</a></li>
                        <li><a onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</a></li>
                    </ul>

                    <div className={styles.navRight}>
                        <button
                            onClick={toggleTheme}
                            className={`${styles.themeToggle} ${isDark ? styles.active : ''}`}
                            aria-label="Toggle theme"
                        >
                        </button>

                        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
