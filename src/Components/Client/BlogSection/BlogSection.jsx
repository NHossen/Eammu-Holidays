"use client";

import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const API_KEY =
  process.env.NEXT_PUBLIC_BLOGGER_API_KEY || "AIzaSyDaASoU9wSSHcetQ3hfwjhUWnrVxdH4aCw";
const BLOG_ID =
  process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID || "2557737482331305704";

/** Extract the highest-res image URL from post HTML content */
const getHighResImage = (content) => {
  if (!content) return "/images/placeholder-travel.jpg";
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  if (!match) return "/images/placeholder-travel.jpg";
  return match[1].replace(/\/(s\d+|w\d+|h\d+)(-[pcb])?\//, "/s1600/");
};

/** Strip HTML tags and decode common entities */
const stripHtml = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

/** Estimated reading time in minutes */
const readingTime = (content = "") => {
  const words = stripHtml(content).split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

/** Build a clean SEO-friendly slug from a URL */
const slugFromUrl = (url = "") => {
  try {
    return new URL(url).pathname.replace(/\/$/, "").split("/").pop();
  } catch {
    return "";
  }
};

/** Format date in a human-friendly way */
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/** Format date for datetime attribute */
const isoDate = (iso) => new Date(iso).toISOString();

// ─── JSON-LD structured data ───────────────────────────────────────────────────

const BlogListingJsonLd = ({ posts }) => {
  const items = posts.map((post, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: post.url,
    name: post.title,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eammu Holidays Travel Blog",
    description:
      "Curated travel guides, holiday packages, and tourism insights from Eammu Holidays.",
    numberOfItems: posts.length,
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const ArticleJsonLd = ({ post }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: stripHtml(post.content).slice(0, 200),
    image: getHighResImage(post.content),
    datePublished: isoDate(post.published),
    dateModified: isoDate(post.updated || post.published),
    author: {
      "@type": "Person",
      name: post.author?.displayName || "Eammu Holidays",
      url: post.author?.url || "https://www.eammuholidays.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Eammu Holidays",
      logo: {
        "@type": "ImageObject",
        url: "https://www.eammuholidays.com/logo.png",
      },
    },
    url: post.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": post.url },
    keywords: post.labels ? post.labels.join(", ") : "",
    articleSection: "Travel",
    inLanguage: "en-GB",
    wordCount: stripHtml(post.content).split(/\s+/).length,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ─── Sub-components ────────────────────────────────────────────────────────────

const TagPill = ({ label }) => (
  <a
    href={`/search/label/${encodeURIComponent(label)}`}
    rel="tag"
    className="tag-pill"
    aria-label={`Browse posts tagged ${label}`}
  >
    {label}
  </a>
);

const AuthorAvatar = ({ author }) => {
  if (!author) return null;
  return (
    <div className="author-row">
      {author.image?.url ? (
        <img
          src={author.image.url}
          alt={`Author: ${author.displayName}`}
          className="author-avatar"
          width={28}
          height={28}
          loading="lazy"
        />
      ) : (
        <div className="author-avatar author-placeholder" aria-hidden="true">
          {(author.displayName || "A")[0].toUpperCase()}
        </div>
      )}
      <span className="author-name">{author.displayName || "Eammu Holidays"}</span>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="skeleton-card" aria-hidden="true">
    <div className="skeleton-img" />
    <div className="skeleton-body">
      <div className="skeleton-line short" />
      <div className="skeleton-line" />
      <div className="skeleton-line medium" />
      <div className="skeleton-line long" />
    </div>
  </div>
);

// ─── Featured Hero Card (first post) ──────────────────────────────────────────

const FeaturedCard = ({ post }) => {
  const img = getHighResImage(post.content);
  const excerpt = stripHtml(post.content).slice(0, 240);
  const mins = readingTime(post.content);

  return (
    <article
      className="featured-card"
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-label={`Featured: ${post.title}`}
    >
      <ArticleJsonLd post={post} />

      <meta itemProp="datePublished" content={isoDate(post.published)} />
      <meta itemProp="dateModified" content={isoDate(post.updated || post.published)} />
      <meta itemProp="image" content={img} />

      <div className="featured-img-wrap">
        <div className="featured-overlay" />
        <img
          src={img}
          alt={`${post.title} – Eammu Holidays featured travel guide`}
          className="featured-img"
          loading="eager"
          fetchPriority="high"
          itemProp="image"
        />
        <div className="featured-badge">
          <span className="badge-dot" aria-hidden="true" />
          Featured Story
        </div>
      </div>

      <div className="featured-content">
        <div className="meta-row">
          <time dateTime={isoDate(post.published)} className="meta-date">
            {formatDate(post.published)}
          </time>
          <span className="meta-sep" aria-hidden="true">·</span>
          <span className="meta-read">{mins} min read</span>
          {post.replies?.totalCount > 0 && (
            <>
              <span className="meta-sep" aria-hidden="true">·</span>
              <span className="meta-comments">
                {post.replies.totalCount} comment{post.replies.totalCount !== "1" ? "s" : ""}
              </span>
            </>
          )}
        </div>

        <h2 className="featured-title" itemProp="headline">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Read: ${post.title}`}
            itemProp="url"
          >
            {post.title}
          </a>
        </h2>

        <p className="featured-excerpt" itemProp="description">
          {excerpt}…
        </p>

        {post.labels && post.labels.length > 0 && (
          <div className="tags-row" aria-label="Post categories">
            {post.labels.slice(0, 4).map((label) => (
              <TagPill key={label} label={label} />
            ))}
          </div>
        )}

        <div className="featured-footer">
          <AuthorAvatar author={post.author} />
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-btn featured-read-btn"
            aria-label={`Read full article: ${post.title}`}
          >
            Read Full Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

// ─── Regular Post Card ─────────────────────────────────────────────────────────

const PostCard = ({ post }) => {
  const img = getHighResImage(post.content);
  const excerpt = stripHtml(post.content).slice(0, 130);
  const mins = readingTime(post.content);
  const slug = slugFromUrl(post.url);

  return (
    <article
      className="post-card"
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-label={post.title}
    >
      <ArticleJsonLd post={post} />

      <meta itemProp="datePublished" content={isoDate(post.published)} />
      <meta itemProp="dateModified" content={isoDate(post.updated || post.published)} />
      <meta itemProp="image" content={img} />
      {slug && <meta itemProp="name" content={slug} />}

      <header className="card-img-wrap">
        <img
          src={img}
          alt={`${post.title} – travel guide by Eammu Holidays`}
          className="card-img"
          loading="lazy"
          width={800}
          height={450}
          itemProp="image"
        />
        <div className="card-img-overlay" aria-hidden="true" />
        {post.labels && post.labels[0] && (
          <span className="card-category-badge" aria-label={`Category: ${post.labels[0]}`}>
            {post.labels[0]}
          </span>
        )}
        <span className="card-read-time" aria-label={`${mins} minute read`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
          </svg>
          {mins} min
        </span>
      </header>

      <div className="card-body">
        <div className="card-meta-row">
          <time dateTime={isoDate(post.published)} className="card-date" itemProp="datePublished">
            {formatDate(post.published)}
          </time>
          {post.replies?.totalCount > 0 && (
            <span className="card-comments" aria-label={`${post.replies.totalCount} comments`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {post.replies.totalCount}
            </span>
          )}
        </div>

        <h3 className="card-title" itemProp="headline">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            title={post.title}
            itemProp="url"
          >
            {post.title}
          </a>
        </h3>

        <p className="card-excerpt" itemProp="description">
          {excerpt}…
        </p>

        {post.labels && post.labels.length > 0 && (
          <div className="card-tags" aria-label="Tags">
            {post.labels.slice(0, 3).map((label) => (
              <TagPill key={label} label={label} />
            ))}
          </div>
        )}

        <div className="card-footer">
          <AuthorAvatar author={post.author} />
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-btn"
            aria-label={`Read: ${post.title}`}
          >
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

// ─── Pagination ────────────────────────────────────────────────────────────────

const Pagination = ({ currentPage, totalPages, paginate }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  const delta = 2;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }

  return (
    <nav className="pagination" aria-label="Blog pagination">
      <button
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="page-arrow"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="page-ellipsis" aria-hidden="true">…</span>
        ) : (
          <button
            key={p}
            onClick={() => paginate(p)}
            aria-label={`Page ${p}`}
            aria-current={currentPage === p ? "page" : undefined}
            className={`page-btn ${currentPage === p ? "page-active" : ""}`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="page-arrow"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
};

// ─── Main BlogSection ──────────────────────────────────────────────────────────

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeLabel, setActiveLabel] = useState(null);
  const postsPerPage = 7; // 1 featured + 6 grid

  const fetchPosts = useCallback(async () => {
    if (!BLOG_ID || !API_KEY) {
      setError("Blogger API credentials are missing.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Request extra fields via `fields` parameter for smaller payload & more data
      const fields = [
        "items(id,title,url,published,updated,content,labels,author,replies,images)",
        "nextPageToken",
      ].join(",");

      const url = new URL(
        `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`
      );
      url.searchParams.set("key", API_KEY);
      url.searchParams.set("maxResults", "50");
      url.searchParams.set("fetchImages", "true");
      url.searchParams.set("fetchBodies", "true");
      url.searchParams.set("status", "live");
      url.searchParams.set("orderBy", "published");
      url.searchParams.set("fields", fields);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      setPosts(data?.items || []);
    } catch (err) {
      console.error("Blogger API Error:", err);
      setError("Failed to load posts. Please try again later.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Collect all unique labels
  const allLabels = [...new Set(posts.flatMap((p) => p.labels || []))].slice(0, 12);

  // Filter by label
  const filteredPosts = activeLabel
    ? posts.filter((p) => p.labels?.includes(activeLabel))
    : posts;

  // Paginate
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const pageStart = (currentPage - 1) * postsPerPage;
  const pagePosts = filteredPosts.slice(pageStart, pageStart + postsPerPage);

  const featuredPost = currentPage === 1 && !activeLabel ? pagePosts[0] : null;
  const gridPosts = featuredPost ? pagePosts.slice(1) : pagePosts;

  const paginate = (page) => {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLabelFilter = (label) => {
    setActiveLabel(label === activeLabel ? null : label);
    setCurrentPage(1);
  };

  return (
    <>
      {/* JSON-LD for listing page */}
      {posts.length > 0 && <BlogListingJsonLd posts={posts} />}

      <style>{styles}</style>

      <section className="blog-section" aria-label="Eammu Holidays Travel Blog">
        {/* Section header */}
        <header className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Travel Journal
          </div>
          <h1 className="section-title">
            Stories &amp; <em>Guides</em>
          </h1>
          <p className="section-subtitle">
            Handpicked travel insights, holiday packages, and destination guides curated by our
            expert team.
          </p>
        </header>

        {/* Label filter bar */}
        {allLabels.length > 0 && (
          <nav className="filter-bar" aria-label="Filter posts by category">
            <button
              onClick={() => handleLabelFilter(null)}
              className={`filter-btn ${!activeLabel ? "filter-active" : ""}`}
              aria-pressed={!activeLabel}
            >
              All
            </button>
            {allLabels.map((label) => (
              <button
                key={label}
                onClick={() => handleLabelFilter(label)}
                className={`filter-btn ${activeLabel === label ? "filter-active" : ""}`}
                aria-pressed={activeLabel === label}
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        {/* Loading */}
        {loading && (
          <div className="skeleton-grid" aria-busy="true" aria-label="Loading posts">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="error-state" role="alert">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
            </svg>
            <p>{error}</p>
            <button onClick={fetchPosts} className="retry-btn">Retry</button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && filteredPosts.length === 0 && (
          <div className="empty-state" role="status">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <p>No stories found{activeLabel ? ` for "${activeLabel}"` : ""}.</p>
            {activeLabel && (
              <button onClick={() => setActiveLabel(null)} className="retry-btn">
                Clear filter
              </button>
            )}
          </div>
        )}

        {/* Content */}
        {!loading && !error && filteredPosts.length > 0 && (
          <>
            {/* Results count */}
            <p className="results-count" aria-live="polite">
              Showing {pageStart + 1}–{Math.min(pageStart + postsPerPage, filteredPosts.length)} of{" "}
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
              {activeLabel ? ` in "${activeLabel}"` : ""}
            </p>

            {/* Featured post */}
            {featuredPost && <FeaturedCard post={featuredPost} />}

            {/* Grid */}
            {gridPosts.length > 0 && (
              <div className="posts-grid">
                {gridPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </>
        )}
      </section>
    </>
  );
};

export default BlogSection;

// ─── Styles ────────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

  :root {
    --green-950: #062318;
    --green-900: #0a3d28;
    --green-800: #0f5c3a;
    --green-700: #157a4d;
    --green-600: #1a9960;
    --green-500: #22b674;
    --green-400: #4cd693;
    --green-100: #d1f5e4;
    --green-50:  #edfcf4;
    --amber-400: #fbbf24;
    --amber-300: #fcd34d;
    --gray-950:  #080f0b;
    --gray-900:  #111714;
    --gray-800:  #1c2620;
    --gray-700:  #2d3d35;
    --gray-500:  #5a7265;
    --gray-400:  #8fa89a;
    --gray-200:  #d4ddd9;
    --gray-100:  #edf2ef;
    --gray-50:   #f6faf8;
    --white:     #ffffff;
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 1.5rem;
    --radius-xl: 2rem;
    --shadow-sm: 0 1px 3px rgba(6,35,24,0.08), 0 1px 2px rgba(6,35,24,0.06);
    --shadow-md: 0 4px 16px rgba(6,35,24,0.10), 0 2px 6px rgba(6,35,24,0.06);
    --shadow-lg: 0 12px 40px rgba(6,35,24,0.14), 0 4px 12px rgba(6,35,24,0.08);
    --shadow-green: 0 8px 32px rgba(21,122,77,0.18);
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body:    'DM Sans', system-ui, sans-serif;
    --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ── Section wrapper ── */
  .blog-section {
    font-family: var(--font-body);
    color: var(--gray-900);
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 1.5rem 5rem;
  }

  /* ── Section header ── */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--green-700);
    background: var(--green-50);
    border: 1px solid var(--green-100);
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    margin-bottom: 1.25rem;
  }
  .eyebrow-dot {
    width: 6px; height: 6px;
    background: var(--green-500);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50% { opacity:0.5; transform:scale(1.4); }
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 800;
    line-height: 1.12;
    color: var(--gray-950);
    margin: 0 0 0.85rem;
    letter-spacing: -0.02em;
  }
  .section-title em {
    font-style: italic;
    color: var(--green-700);
    background: linear-gradient(135deg, var(--green-700), var(--green-500));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .section-subtitle {
    font-size: 1.05rem;
    color: var(--gray-500);
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* ── Filter bar ── */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2.5rem;
  }
  .filter-btn {
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid var(--gray-200);
    background: var(--white);
    color: var(--gray-500);
    cursor: pointer;
    transition: all var(--transition);
    white-space: nowrap;
  }
  .filter-btn:hover {
    border-color: var(--green-600);
    color: var(--green-700);
    background: var(--green-50);
  }
  .filter-active {
    background: var(--green-700) !important;
    color: var(--white) !important;
    border-color: var(--green-700) !important;
    box-shadow: var(--shadow-green);
  }

  /* ── Results count ── */
  .results-count {
    font-size: 0.82rem;
    color: var(--gray-400);
    margin-bottom: 2rem;
    text-align: center;
    letter-spacing: 0.01em;
  }

  /* ── Featured card ── */
  .featured-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border-radius: var(--radius-xl);
    overflow: hidden;
    background: var(--white);
    box-shadow: var(--shadow-lg);
    margin-bottom: 3rem;
    min-height: 460px;
    border: 1px solid var(--gray-100);
    transition: box-shadow var(--transition), transform var(--transition);
  }
  .featured-card:hover {
    box-shadow: 0 20px 60px rgba(6,35,24,0.16), var(--shadow-green);
    transform: translateY(-4px);
  }
  @media (max-width: 768px) {
    .featured-card { grid-template-columns: 1fr; min-height: auto; }
  }
  .featured-img-wrap {
    position: relative;
    overflow: hidden;
  }
  .featured-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(6,35,24,0.3) 0%, transparent 60%);
    z-index: 1;
    transition: opacity var(--transition);
  }
  .featured-card:hover .featured-overlay { opacity: 0.5; }
  .featured-img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 700ms cubic-bezier(0.4,0,0.2,1);
  }
  .featured-card:hover .featured-img { transform: scale(1.04); }
  .featured-badge {
    position: absolute;
    top: 1.25rem; left: 1.25rem;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: rgba(255,255,255,0.95);
    color: var(--green-800);
    padding: 0.35rem 0.8rem;
    border-radius: 999px;
    backdrop-filter: blur(8px);
    box-shadow: var(--shadow-sm);
  }
  .badge-dot {
    width: 7px; height: 7px;
    background: var(--green-500);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  .featured-content {
    padding: 2.5rem 2.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--white);
  }
  @media (max-width: 768px) {
    .featured-content { padding: 1.75rem; }
  }
  .meta-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .meta-date, .meta-read, .meta-comments {
    font-size: 0.78rem;
    color: var(--gray-400);
    font-weight: 500;
  }
  .meta-sep { color: var(--gray-200); }
  .featured-title {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: var(--gray-950);
    margin: 0 0 1rem;
  }
  .featured-title a {
    color: inherit;
    text-decoration: none;
    background-image: linear-gradient(var(--green-600), var(--green-600));
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: 0 100%;
    transition: background-size var(--transition), color var(--transition);
  }
  .featured-title a:hover {
    color: var(--green-800);
    background-size: 100% 2px;
  }
  .featured-excerpt {
    font-size: 0.94rem;
    color: var(--gray-500);
    line-height: 1.75;
    margin: 0 0 1.25rem;
  }
  .tags-row, .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.5rem;
  }
  .tag-pill {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--green-700);
    background: var(--green-50);
    border: 1px solid var(--green-100);
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    text-decoration: none;
    transition: all var(--transition);
  }
  .tag-pill:hover {
    background: var(--green-700);
    color: var(--white);
    border-color: var(--green-700);
  }
  .featured-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-100);
  }

  /* ── Author row ── */
  .author-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .author-avatar {
    width: 28px; height: 28px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--green-100);
  }
  .author-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--green-600), var(--green-400));
    color: var(--white);
    font-size: 0.7rem;
    font-weight: 700;
  }
  .author-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--gray-700);
  }

  /* ── Read button ── */
  .read-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--green-700);
    transition: gap var(--transition), color var(--transition);
  }
  .read-btn:hover {
    color: var(--green-900);
    gap: 0.65rem;
  }
  .featured-read-btn {
    font-size: 0.85rem;
    background: var(--green-700);
    color: var(--white);
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    box-shadow: var(--shadow-green);
    letter-spacing: 0.04em;
    transition: all var(--transition);
  }
  .featured-read-btn:hover {
    background: var(--green-900);
    color: var(--white);
    box-shadow: 0 8px 24px rgba(21,122,77,0.3);
    transform: translateY(-1px);
  }

  /* ── Posts grid ── */
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 1024px) {
    .posts-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .posts-grid { grid-template-columns: 1fr; }
  }

  /* ── Post card ── */
  .post-card {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--gray-100);
    box-shadow: var(--shadow-sm);
    transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
  }
  .post-card:hover {
    box-shadow: var(--shadow-lg), var(--shadow-green);
    transform: translateY(-6px);
    border-color: var(--green-100);
  }
  .card-img-wrap {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
    background: var(--gray-100);
  }
  .card-img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 600ms cubic-bezier(0.4,0,0.2,1);
  }
  .post-card:hover .card-img { transform: scale(1.06); }
  .card-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(6,35,24,0.18) 100%);
    z-index: 1;
    transition: opacity var(--transition);
  }
  .post-card:hover .card-img-overlay { opacity: 0.6; }
  .card-category-badge {
    position: absolute;
    top: 0.875rem; left: 0.875rem;
    z-index: 2;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    background: rgba(255,255,255,0.9);
    color: var(--green-800);
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    backdrop-filter: blur(6px);
  }
  .card-read-time {
    position: absolute;
    bottom: 0.875rem; right: 0.875rem;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.65rem;
    font-weight: 600;
    color: var(--white);
    background: rgba(6,35,24,0.55);
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    backdrop-filter: blur(4px);
  }
  .card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .card-meta-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.65rem;
  }
  .card-date {
    font-size: 0.72rem;
    color: var(--gray-400);
    font-weight: 500;
  }
  .card-comments {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.68rem;
    color: var(--gray-400);
    margin-left: auto;
  }
  .card-title {
    font-family: var(--font-display);
    font-size: 1.08rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    color: var(--gray-950);
    margin: 0 0 0.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .card-title a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition);
  }
  .card-title a:hover { color: var(--green-700); }
  .card-excerpt {
    font-size: 0.84rem;
    color: var(--gray-500);
    line-height: 1.7;
    margin: 0 0 0.875rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid var(--gray-100);
  }

  /* ── Pagination ── */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    flex-wrap: wrap;
    padding-top: 1rem;
  }
  .page-btn, .page-arrow {
    font-family: var(--font-body);
    min-width: 40px; height: 40px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--gray-200);
    background: var(--white);
    color: var(--gray-500);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition);
  }
  .page-btn:hover, .page-arrow:hover:not(:disabled) {
    border-color: var(--green-600);
    color: var(--green-700);
    background: var(--green-50);
  }
  .page-active {
    background: var(--green-700) !important;
    color: var(--white) !important;
    border-color: var(--green-700) !important;
    box-shadow: var(--shadow-green);
    transform: scale(1.08);
  }
  .page-arrow:disabled { opacity: 0.35; cursor: not-allowed; }
  .page-ellipsis { color: var(--gray-400); padding: 0 0.25rem; font-weight: 500; }

  /* ── Skeleton ── */
  .skeleton-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
  @media (max-width: 1024px) {
    .skeleton-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .skeleton-grid { grid-template-columns: 1fr; }
  }
  .skeleton-card {
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--white);
    border: 1px solid var(--gray-100);
  }
  .skeleton-img {
    aspect-ratio: 16/9;
    background: linear-gradient(90deg, var(--gray-100) 25%, var(--gray-50) 50%, var(--gray-100) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
  }
  .skeleton-body { padding: 1.5rem; }
  .skeleton-line {
    height: 12px;
    border-radius: 6px;
    background: linear-gradient(90deg, var(--gray-100) 25%, var(--gray-50) 50%, var(--gray-100) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
    margin-bottom: 0.75rem;
    width: 100%;
  }
  .skeleton-line.short { width: 40%; }
  .skeleton-line.medium { width: 70%; }
  .skeleton-line.long { width: 85%; }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* ── Error / Empty ── */
  .error-state, .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 4rem 2rem;
    text-align: center;
    background: var(--gray-50);
    border: 2px dashed var(--gray-200);
    border-radius: var(--radius-xl);
    color: var(--gray-400);
  }
  .error-state svg, .empty-state svg { opacity: 0.4; }
  .error-state p, .empty-state p { font-size: 0.95rem; color: var(--gray-500); }
  .retry-btn {
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 999px;
    border: 1px solid var(--green-600);
    background: var(--white);
    color: var(--green-700);
    cursor: pointer;
    transition: all var(--transition);
  }
  .retry-btn:hover {
    background: var(--green-700);
    color: var(--white);
  }

  /* ── Focus styles (accessibility) ── */
  .read-btn:focus-visible,
  .filter-btn:focus-visible,
  .page-btn:focus-visible,
  .page-arrow:focus-visible,
  .tag-pill:focus-visible,
  .card-title a:focus-visible,
  .featured-title a:focus-visible {
    outline: 2px solid var(--green-500);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;