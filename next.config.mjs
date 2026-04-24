/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source:      "/sitemap.xml",
        destination: "/sitemap-index",
      },
      // Each shard: /sitemap/0.xml → /sitemaps/0
      {
        source:      "/sitemap/:id.xml",
        destination: "/sitemaps/:id",
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "www.babaaztravels.com", pathname: "/**" },
      { protocol: "https", hostname: "canadiangeographic.ca", pathname: "/**" },
      { protocol: "https", hostname: "travelobiz.com", pathname: "/**" },
      { protocol: "https", hostname: "www.tmtvisaservicephuket.com", pathname: "/**" },
      { protocol: "https", hostname: "umrahtransport.com", pathname: "/**" },
      { protocol: "https", hostname: "www.kkday.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      { protocol: "https", hostname: "www.gokite.travel", pathname: "/**" },
      { protocol: "https", hostname: "myqatarvisacheck.com", pathname: "/**" },
      { protocol: "https", hostname: "www.utilities-me.com", pathname: "/**" },
      { protocol: "https", hostname: "pelicanmigration.com", pathname: "/**" },
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "res.klook.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },   
      { protocol: "https", hostname: "www.alliancealliance.com", pathname: "/**" },
      { protocol: "https", hostname: "d1.awsstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ibb.co", pathname: "/**" },
      { protocol: "https", hostname: "1000logos.net", pathname: "/**" },
      { protocol: "https", hostname: "www.logo.wine", pathname: "/**" },
      { protocol: "https", hostname: "miro.medium.com", pathname: "/**" },
      { protocol: "https", hostname: "via.placeholder.com", pathname: "/**" },
      { protocol: "https", hostname: "eammu.com", pathname: "/**" },
      { protocol: 'https', hostname: 'utilities-me.com', pathname: "/**" },
    ],
  },
  turbopack: { root: 'C:\\Users\\HP\\Desktop\\Armenia Visa\\pass\\Eammu\\eammu-holidays', },
  reactStrictMode: true,
  env: {
    BLOGGER_API_KEY: process.env.BLOGGER_API_KEY,
    BLOGGER_BLOG_ID: process.env.BLOGGER_BLOG_ID,
  },
};

export default nextConfig;