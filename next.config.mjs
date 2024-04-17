/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // deprecated -> images.domains
        // domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ]
    },
};

export default nextConfig;
