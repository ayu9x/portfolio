'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef(null)
    const mouseRef = useRef({ x: -1000, y: -1000 })
    const animationRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()

        // Reduced particle count for smooth performance
        const particlesArray = []
        const numberOfParticles = Math.min(40, Math.floor(window.innerWidth / 40))

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 1.5 + 0.5
                this.speedX = (Math.random() - 0.5) * 0.3
                this.speedY = (Math.random() - 0.5) * 0.3
                this.opacity = Math.random() * 0.3 + 0.1
                this.hue = Math.random() > 0.5 ? 190 : 270
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // Wrap around edges
                if (this.x > canvas.width) this.x = 0
                else if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                else if (this.y < 0) this.y = canvas.height
            }

            draw() {
                ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle())
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update()
                particlesArray[i].draw()

                // Only check nearby particles (reduced connection distance)
                for (let j = i + 1; j < particlesArray.length; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x
                    const dy = particlesArray[i].y - particlesArray[j].y
                    const distSq = dx * dx + dy * dy

                    // Use squared distance to avoid expensive sqrt
                    if (distSq < 14400) { // 120^2
                        const opacity = (1 - Math.sqrt(distSq) / 120) * 0.08
                        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                        ctx.stroke()
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => resize()
        window.addEventListener('resize', handleResize, { passive: true })

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.5
            }}
        />
    )
}
