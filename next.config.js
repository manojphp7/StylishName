/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false, // Important to allow `.html/` folder to map to .html route
};


module.exports = nextConfig;