'use client'

import { useEffect, useRef } from 'react'
import styles from './CursorGlow.module.css'

export default function CursorGlow() {
    const glowRef = useRef(null)

    useEffect(() => {
        const glow = glowRef.current
        if (!glow) return

        let mouseX = 0, mouseY = 0
        let currentX = 0, currentY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        // Smooth follow with lerp
        function animate() {
            currentX += (mouseX - currentX) * 0.08
            currentY += (mouseY - currentY) * 0.08
            glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`
            requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        animate()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return <div ref={glowRef} className={styles.cursorGlow} />
}
