/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'about.meta.com',
                port: '',
                pathname: '/**',
              },
        ]
    },
    async redirects() {
        return [
            {
                source: "/home",
                destination: "/",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
