import './globals.css'

export const metadata = {
  title: 'Ayush Raj - Cloud Developer & DevOps Engineer',
  description: 'Cloud Developer & DevOps Engineer at One Frequency. Building cloud-native solutions with Kubernetes, Docker, AWS, and modern DevOps practices.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
