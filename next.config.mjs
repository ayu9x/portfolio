/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
            },
            {
                protocol: 'https',
                hostname: 'github-readme-stats.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'github-readme-streak-stats.herokuapp.com',
            },
            {
                protocol: 'https',
                hostname: 'ghchart.rез.one',
            },
        ],
    },
}

export default nextConfig
