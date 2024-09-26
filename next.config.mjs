/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Permitir cualquier dominio
        },
      ],
    },
  };
  
  export default nextConfig;
  