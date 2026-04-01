import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'Ayush Raj | DevOps Engineer & Cloud Enthusiast',
  description: 'Portfolio of Ayush Raj, an aspiring DevOps Engineer specializing in container orchestration, cloud platforms, and CI/CD pipelines.',
  keywords: 'DevOps, Cloud Engineer, Docker, Kubernetes, AWS, CI/CD, Fresher, Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
