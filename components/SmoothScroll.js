'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
    useEffect(() => {
        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth'

        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        // Observe all sections
        const sections = document.querySelectorAll('section')
        sections.forEach((section) => {
            section.classList.add('fade-in-section')
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return null
}
