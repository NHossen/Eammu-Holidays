"use client";
import React, { useState } from "react";
import { Play, Image as ImageIcon, Video, ChevronLeft, ChevronRight, Star } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const photos = [
  {
    id: 1,
    url: "https://scontent.ffjr1-2.fna.fbcdn.net/v/t39.30808-6/627683049_122214000974548392_5055873005367739002_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=8_2-WKCtRxkQ7kNvwHU338K&_nc_oc=AdmXsUJm-qZt49a6aP0-SKll9QVppl0TmDNK7jbFmDTeLeApyB7pTlqVYzHleWTHD9M&_nc_zt=23&_nc_ht=scontent.ffjr1-2.fna&_nc_gid=IQqKmsjdEt3OoD9qNizxPA&_nc_ss=8&oh=00_AfzUytfIPeLQGyDB7StTLebc8tdTChJsQDQ4N8DVoH1nag&oe=69BDC7D4",
    title: "Success Story: Mrs. Sadiya",
    alt: "Mrs. Sadiya Canada visa approval success story – Eammu Holidays Bangladesh",
    badge: "Canada Visa ✓",
  },
  {
    id: 2,
    url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/480681934_2428325887510082_4187620178881988215_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e982cd&_nc_ohc=B1lcbL6-UccQ7kNvwFd48nX&_nc_oc=AdksZp4Zv9z6r6hc4eXpVPZ4iG0473mfNqDEL6kISxokTxQ4JPDFAh_XJKk5xxXIFvM&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=bD6qHEKVTdcfXg1smQforQ&_nc_ss=8&oh=00_AfwI0quSAusK-N-4ufkYmbsyRydyiPQjuBNPfZu1RfBL-Q&oe=69BDCFA0",
    title: "Visa Received: Ms. Sara",
    alt: "Ms. Sara UK student visa received – Eammu Holidays testimonial photo",
    badge: "UK Visa ✓",
  },
  {
    id: 3,
    url: "https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/488755947_670883522198952_5722921609796892800_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=9Juvw1DHUaIQ7kNvwFbTgi7&_nc_oc=AdkqEY_RLL7FThIQdOOW9g-83CaKHhDtLAuUBzxHSQbep3LjEx22yVIgfdA2FKpELos&_nc_zt=23&_nc_ht=scontent.ffjr1-1.fna&_nc_gid=4VlRo8dRByPzf_nTjiLZ5A&_nc_ss=8&oh=00_Afxy9Im5NrCpNiLvRXdQaspD_ImrdrQe6eEczUizlf96kA&oe=69BDD082",
    title: "Happy Client: Tanvir Hasan",
    alt: "Tanvir Hasan happy client Dubai work permit success – Eammu Holidays review",
    badge: "Work Permit ✓",
  },
  {
    id: 4,
    url: "https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/643316693_3925146984284070_2679819947000075901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Cw7T33bfEpQQ7kNvwFbm-EG&_nc_oc=Adla2CRfbEjomBgJJFv1LzNz3Ui-YQ__re0Y-3MR90MJBWEd_WFI90Pu6E8pz6xgUdA&_nc_zt=23&_nc_ht=scontent.ffjr1-1.fna&_nc_gid=41gDkjLGTrMjadT5EnAqZQ&_nc_ss=8&oh=00_AfyJseQ1y_OqYqS2Fm76P1LdhIX_8b8IafQPm10GSYoRoQ&oe=69BDD094",
    title: "Group Tour Feedback",
    alt: "Group tour customer feedback photo – Eammu Holidays Bangladesh travel package review",
    badge: "Group Tour ✓",
  },
  {
    id: 5,
    url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/650279996_1205215271691777_1277145821396657414_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_ohc=_l7CwGaQIB8Q7kNvwGupVTW&_nc_oc=Adle14uNz3_e1ZWJm22_6quM6Fpciebc_1cEQRyHD4_jalpevrZ0l12Xkz8nURs6GAA&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=xDlhwWjbAufdPYv6nCApsQ&_nc_ss=8&oh=00_Afw-ZEWgtKF_i3wSSKpw9H9q832f17ILjTqpx05I76Sb3Q&oe=69BDC5EC",
    title: "Work Permit Success",
    alt: "Work permit visa success story – Eammu Holidays verified client photo Bangladesh",
    badge: "Work Permit ✓",
  },
  {
    id: 6,
    url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/650743432_4247666005487471_4570808421395883987_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=k6vFy2MOD8wQ7kNvwE2iBob&_nc_oc=AdlFgnmb3gtgXJN1sFUQSuGIMewXkoK1U3wX0KQf2eXktl_g2JDCPNGjRtzeG77-pgg&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=BMHxntPL1FOoVIw4UqoO1w&_nc_ss=8&oh=00_AfyNQtdX8k4Ex9WhvMK2qLzo3c6lsQYvbJTQYJkdc_QxHg&oe=69BDC3BA",
    title: "Student Visa Celebration",
    alt: "Student visa celebration photo – Eammu Holidays study abroad success Bangladesh",
    badge: "Student Visa ✓",
  },
];

const videos = [
  {
    id: 1,
    videoId: "dQw4w9WgXcQ",
    title: "Canada Visa Success Story – Eammu Holidays Client Review",
    description: "Watch how Eammu Holidays helped this client get a Canada visa approval from Bangladesh.",
  },
  {
    id: 2,
    videoId: "7e90gBu4pas",
    title: "UK Student Visa Experience – Eammu Holidays Testimonial",
    description: "A student shares their UK visa journey and how Eammu Holidays supported them throughout.",
  },
  {
    id: 3,
    videoId: "9bZkp7q19f0",
    title: "Work Permit Client Review – Trusted Visa Agency Bangladesh",
    description: "Real work permit success story from a verified Eammu Holidays client.",
  },
  {
    id: 4,
    videoId: "dQw4w9WgXcQ",
    title: "USA Visa Interview Experience – Eammu Holidays",
    description: "Client shares how Eammu Holidays prepared them for a successful USA visa interview.",
  },
  {
    id: 5,
    videoId: "7e90gBu4pas",
    title: "European Holiday Package Review – Eammu Holidays Tour",
    description: "Happy traveler reviews their European tour package booked through Eammu Holidays Bangladesh.",
  },
];

const stats = [
  { value: "4.9★", label: "Average Rating", sub: "from 320+ reviews" },
  { value: "5000+", label: "Happy Clients", sub: "served since 2015" },
  { value: "98%", label: "Visa Success Rate", sub: "across all categories" },
  { value: "30+", label: "Countries Covered", sub: "visa & tour services" },
];

const ITEMS_PER_PAGE = 3;

// ─── Component ─────────────────────────────────────────────────────────────────

const CustomerTestimonialSection = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [photoPage, setPhotoPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);

  const totalPhotoPages = Math.ceil(photos.length / ITEMS_PER_PAGE);
  const totalVideoPages = Math.ceil(videos.length / ITEMS_PER_PAGE);

  const currentPhotos = photos.slice(
    (photoPage - 1) * ITEMS_PER_PAGE,
    photoPage * ITEMS_PER_PAGE
  );
  const currentVideos = videos.slice(
    (videoPage - 1) * ITEMS_PER_PAGE,
    videoPage * ITEMS_PER_PAGE
  );

  const paginate = (type, direction) => {
    if (type === "photos") {
      setPhotoPage((p) =>
        direction === "next" ? Math.min(p + 1, totalPhotoPages) : Math.max(p - 1, 1)
      );
    } else {
      setVideoPage((p) =>
        direction === "next" ? Math.min(p + 1, totalVideoPages) : Math.max(p - 1, 1)
      );
    }
  };

  const currentPage = activeTab === "photos" ? photoPage : videoPage;
  const totalPages = activeTab === "photos" ? totalPhotoPages : totalVideoPages;

  return (
    <main>
      {/* ── Hero / Header ─────────────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-br from-[#004526] via-[#005a31] to-[#007a45] text-white py-16 px-4"
        aria-label="Testimonials hero section"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb — crawlable, visible */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex justify-center gap-2 text-sm text-green-300 flex-wrap">
              <li>
                <a href="https://www.eammu.com" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-green-500">/</li>
              <li className="text-white font-semibold" aria-current="page">
                Customer Testimonials
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Real Clients.{" "}
            <span className="text-orange-400">Real Success.</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Over <strong className="text-white">5,000 verified clients</strong> have trusted
            Eammu Holidays for visa processing, study abroad, work permits, and tour packages
            across Bangladesh and beyond.
          </p>

          {/* Rating badge */}
          <div
            className="inline-flex items-center gap-2 mt-6 bg-white/10 border border-white/20 rounded-full px-5 py-2"
            aria-label="Eammu Holidays rated 4.9 out of 5 stars"
          >
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-sm font-bold">4.9 / 5</span>
            <span className="text-green-200 text-sm">· 320+ Reviews</span>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────────────────────── */}
      <section
        className="bg-white border-b border-gray-100 py-8 px-4"
        aria-label="Eammu Holidays achievements"
      >
        <dl className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl md:text-3xl font-black text-[#005a31]">{s.value}</dt>
              <dd className="font-bold text-gray-700 text-sm mt-0.5">{s.label}</dd>
              <dd className="text-xs text-gray-400">{s.sub}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Main Testimonials ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-gray-50" aria-label="Customer photos and video testimonials">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-[#005a31] mb-2">
              Eammu Holidays{" "}
              <span className="text-orange-500">Customer</span> Testimonials
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              Browse verified customer photos and video reviews — visa approvals, group tours,
              student visas, and work permits from happy clients across Bangladesh.
            </p>

            {/* Tab Toggle */}
            <div className="flex justify-center mt-8" role="tablist" aria-label="Testimonial type">
              <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
                <button
                  role="tab"
                  aria-selected={activeTab === "photos"}
                  aria-controls="testimonial-panel"
                  onClick={() => { setActiveTab("photos"); setPhotoPage(1); }}
                  className={`flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm transition-all ${
                    activeTab === "photos"
                      ? "bg-[#005a31] text-white shadow-lg"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <ImageIcon size={16} aria-hidden="true" />
                  Customer Photos
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "videos"}
                  aria-controls="testimonial-panel"
                  onClick={() => { setActiveTab("videos"); setVideoPage(1); }}
                  className={`flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm transition-all ${
                    activeTab === "videos"
                      ? "bg-[#005a31] text-white shadow-lg"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Video size={16} aria-hidden="true" />
                  Video Reviews
                </button>
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div
            id="testimonial-panel"
            role="tabpanel"
            aria-label={activeTab === "photos" ? "Customer photo testimonials" : "Customer video testimonials"}
            className="min-h-[440px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

              {/* Photos */}
              {activeTab === "photos" &&
                currentPhotos.map((photo, idx) => (
                  <article
                    key={photo.id}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-md aspect-[4/3] border-4 border-white"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                    aria-label={photo.alt}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      title={photo.title}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      itemProp="contentUrl"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span
                        className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 w-fit"
                        aria-label={`Service: ${photo.badge}`}
                      >
                        {photo.badge}
                      </span>
                      <h3 className="text-white font-bold text-base" itemProp="name">
                        {photo.title}
                      </h3>
                    </div>
                    {/* Always-visible badge (top-left) */}
                    <span
                      className="absolute top-3 left-3 bg-[#005a31] text-white text-xs font-bold px-3 py-1 rounded-full group-hover:opacity-0 transition-opacity"
                      aria-hidden="true"
                    >
                      {photo.badge}
                    </span>
                  </article>
                ))}

              {/* Videos */}
              {activeTab === "videos" &&
                currentVideos.map((video) => (
                  <article
                    key={video.id}
                    className="space-y-3 group"
                    itemScope
                    itemType="https://schema.org/VideoObject"
                    aria-label={video.title}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-video bg-black border-4 border-white">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        aria-label={`Watch: ${video.title}`}
                      />
                    </div>
                    <div className="px-1">
                      <h3
                        className="font-bold text-[#005a31] text-sm group-hover:text-orange-500 transition-colors leading-snug"
                        itemProp="name"
                      >
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 line-clamp-2" itemProp="description">
                        {video.description}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </div>

          {/* Pagination */}
          <nav
            className="flex justify-center items-center gap-6 mt-12"
            aria-label={`${activeTab === "photos" ? "Photos" : "Videos"} pagination`}
          >
            <button
              onClick={() => paginate(activeTab, "prev")}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="p-4 rounded-full bg-white border border-gray-200 text-[#005a31] hover:bg-[#005a31] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <div aria-live="polite" aria-atomic="true" className="flex items-center gap-2">
              <span className="text-lg font-black text-[#005a31]">{currentPage}</span>
              <span className="text-gray-400 font-bold">/</span>
              <span className="text-gray-400 font-bold">{totalPages}</span>
            </div>

            <button
              onClick={() => paginate(activeTab, "next")}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="p-4 rounded-full bg-white border border-gray-200 text-[#005a31] hover:bg-[#005a31] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </section>

      {/* ── Trust Signals ─────────────────────────────────────────────────── */}
      <section
        className="bg-white py-12 px-4 border-t border-gray-100"
        aria-label="Why clients choose Eammu Holidays"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#005a31] mb-2">
            Why Thousands Choose <span className="text-orange-500">Eammu Holidays</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            Bangladesh's most trusted travel and visa consultancy with a proven track record
            across Canada, UK, USA, Dubai, Schengen, and 30+ countries.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: "🏆",
                title: "Certified Visa Experts",
                desc: "Licensed consultants with a 98% visa approval rate for Canada, UK, USA, Dubai, and Schengen.",
              },
              {
                icon: "🌍",
                title: "30+ Countries Covered",
                desc: "From student visas and work permits to Umrah packages and holiday tours — all under one roof.",
              },
              {
                icon: "🤝",
                title: "End-to-End Support",
                desc: "Dedicated case managers guide every client from document prep to visa stamping and travel.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <span className="text-3xl mb-3 block" aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold text-[#005a31] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CustomerTestimonialSection;