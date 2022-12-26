/** @type {import('next').NextConfig} */

const path = require("path");
const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        has: [
          {
            type: "query",
            key: "page",
          },
        ],
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=:page`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
