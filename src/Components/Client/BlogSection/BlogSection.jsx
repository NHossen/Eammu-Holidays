"use client"; // Client-side state & hooks

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Using environment variables for API key and blog ID
  const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
  const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;

  useEffect(() => {
    const fetchBloggerPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=50`
        );
        const data = await response.json();
        if (data?.items) {
          setPosts(data.items);
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error("Blogger API Error:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBloggerPosts();
  }, [API_KEY, BLOG_ID]);

  // Extract high-res image from Blogger post content
  const getHighResImage = (content) => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    if (!match) return "https://via.placeholder.com/800x450?text=Eammu+Holidays";
    let url = match[1];
    return url.replace(/\/(s\d+|w\d+|h\d+)(-[pcb])?\//, "/s1600/");
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost) || [];
  const totalPages = Math.ceil(posts?.length / postsPerPage) || 0;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  if (loading)
    return (
      <div className="grid md:grid-cols-3 gap-8 animate-pulse">
        {[1, 2, 3].map((n) => (
          <div key={n} className="aspect-video bg-gray-100 rounded-3xl shadow-sm"></div>
        ))}
      </div>
    );

  return (
    <section className="py-10" aria-label="Eammu Holidays Travel Blog">
      {currentPosts.length === 0 ? (
        <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg">No stories found at the moment.</p>
        </div>
      ) : (
        <>
          {/* Hidden Keywords for SEO Ranking */}
          <h2 className="sr-only">Latest Travel Guides, Holiday Packages, and Tourism Blog</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500 transform hover:-translate-y-3"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Image Section - SEO */}
                <header className="relative w-full overflow-hidden bg-gray-100 aspect-[16/9]">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={getHighResImage(post.content)}
                    alt={`${post.title} - Eammu Holidays`}
                    fill
                    className="object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      Travel Insights
                    </span>
                  </div>
                </header>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-[1px] bg-green-600"></span>
                    <time
                      dateTime={post.published}
                      itemProp="datePublished"
                      className="text-[11px] font-medium text-gray-400 uppercase tracking-tighter"
                    >
                      {new Date(post.published).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  <h3
                    itemProp="headline"
                    className="font-extrabold text-xl mb-4 line-clamp-2 text-gray-800 group-hover:text-green-700 transition-colors leading-tight"
                  >
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Read more about ${post.title}`}
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p
                    itemProp="description"
                    className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed"
                  >
                    {post.content.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").slice(0, 160)}...
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-green-700 group/link"
                      aria-label={`Read full story: ${post.title}`}
                    >
                      READ FULL STORY
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex justify-center items-center space-x-3 mt-16" aria-label="Blog pagination navigation">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  aria-label={`Maps to page ${i + 1}`}
                  aria-current={currentPage === i + 1 ? "page" : undefined}
                  className={`min-w-[45px] h-[45px] rounded-2xl font-bold transition-all duration-300 shadow-sm ${
                    currentPage === i + 1
                      ? "bg-green-700 text-white scale-110 shadow-green-200"
                      : "bg-white text-gray-400 border border-gray-100 hover:border-green-600 hover:text-green-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          )}
        </>
      )}
    </section>
  );
};

export default BlogSection;