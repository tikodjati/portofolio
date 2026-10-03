/** @type {import('next').NextConfig} */
// output: "export" menghasilkan folder /out (static), cocok untuk GitHub Pages.
// Hapus baris itu kalau deploy ke Vercel dan ingin fitur server.
const nextConfig = { output: "export", images: { unoptimized: true } };
export default nextConfig;
