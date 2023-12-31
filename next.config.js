/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedForwardedHosts: ["localhost:3000/", "https://mvpmgk5d-3000.inc1.devtunnels.ms/"],
            allowedOrigins: ["https://mvpmgk5d-3000.inc1.devtunnels.ms/", "localhost:3000/"]
        }
    }
}

module.exports = nextConfig
