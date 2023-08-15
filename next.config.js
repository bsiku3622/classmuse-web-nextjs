/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["xdqvbnclquqydqsfmfff.supabase.co"],
  },
};

module.exports = nextConfig;
