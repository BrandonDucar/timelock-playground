/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ohara-assets.s3.us-east-2.amazonaws.com',
            },
        ],
    },
    outputFileTracingExcludes: {
        '*': ['./node_modules/@metamask/sdk/dist/browser/**'],
    },
};

export default nextConfig;
