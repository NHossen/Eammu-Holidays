// app/sitemap.js

export default async function sitemap() {
  const baseUrl = "https://eammu-holidays.vercel.app";

  let posts = [];

  try {
    const res = await fetch(`${baseUrl}/api/posts`);
    posts = await res.json();
  } catch (error) {
    console.error("Sitemap API error:", error);
  }

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}