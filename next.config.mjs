import million from "million/compiler"

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
}

const millionConfig = {
    // auto: true,
    // if your're using RSC (React Server Component):
    auto: { rsc: true, skip: ["App"] },
}

// module.exports = nextConfig
export default million.next(nextConfig, millionConfig)
