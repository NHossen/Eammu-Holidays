"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  MapPin,
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const photos = [
  {
    id: 1,
    url: "https://scontent.ffjr1-2.fna.fbcdn.net/v/t39.30808-6/627683049_122214000974548392_5055873005367739002_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=8_2-WKCtRxkQ7kNvwHU338K&_nc_oc=AdmXsUJm-qZt49a6aP0-SKll9QVppl0TmDNK7jbFmDTeLeApyB7pTlqVYzHleWTHD9M&_nc_zt=23&_nc_ht=scontent.ffjr1-2.fna&_nc_gid=IQqKmsjdEt3OoD9qNizxPA&_nc_ss=8&oh=00_AfzUytfIPeLQGyDB7StTLebc8tdTChJsQDQ4N8DVoH1nag&oe=69BDC7D4",
    title: "Canada Visa Approved",
    client: "Mrs. Sadiya",
    location: "Dhaka, Bangladesh",
    badge: "Canada Visa",
    badgeColor: "#C8102E",
    alt: "Mrs. Sadiya Canada visa approval – Eammu Holidays Bangladesh",
    review: "Got my Canada visa in record time. The team handled every document perfectly.",
    rating: 5,
  },
  {
    id: 2,
    url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/480681934_2428325887510082_4187620178881988215_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e982cd&_nc_ohc=B1lcbL6-UccQ7kNvwFd48nX&_nc_oc=AdksZp4Zv9z6r6hc4eXpVPZ4iG0473mfNqDEL6kISxokTxQ4JPDFAh_XJKk5xxXIFvM&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=bD6qHEKVTdcfXg1smQforQ&_nc_ss=8&oh=00_AfwI0quSAusK-N-4ufkYmbsyRydyiPQjuBNPfZu1RfBL-Q&oe=69BDCFA0",
    title: "UK Student Visa Success",
    client: "Ms. Sara",
    location: "Chittagong, Bangladesh",
    badge: "UK Student Visa",
    badgeColor: "#003087",
    alt: "Ms. Sara UK student visa approved – Eammu Holidays testimonial",
    review: "My UK student visa was approved in 3 weeks. Exceptional guidance from start to finish.",
    rating: 5,
  },
  {
    id: 3,
    url: "https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/488755947_670883522198952_5722921609796892800_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=9Juvw1DHUaIQ7kNvwFbTgi7&_nc_oc=AdkqEY_RLL7FThIQdOOW9g-83CaKHhDtLAuUBzxHSQbep3LjEx22yVIgfdA2FKpELos&_nc_zt=23&_nc_ht=scontent.ffjr1-1.fna&_nc_gid=4VlRo8dRByPzf_nTjiLZ5A&_nc_ss=8&oh=00_Afxy9Im5NrCpNiLvRXdQaspD_ImrdrQe6eEczUizlf96kA&oe=69BDD082",
    title: "Dubai Work Permit",
    client: "Tanvir Hasan",
    location: "Sylhet, Bangladesh",
    badge: "Dubai Work Permit",
    badgeColor: "#FF6600",
    alt: "Tanvir Hasan Dubai work permit – Eammu Holidays verified review",
    review: "Trusted team. Got my Dubai work permit with zero stress. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    url: "https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/643316693_3925146984284070_2679819947000075901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Cw7T33bfEpQQ7kNvwFbm-EG&_nc_oc=Adla2CRfbEjomBgJJFv1LzNz3Ui-YQ__re0Y-3MR90MJBWEd_WFI90Pu6E8pz6xgUdA&_nc_zt=23&_nc_ht=scontent.ffjr1-1.fna&_nc_gid=41gDkjLGTrMjadT5EnAqZQ&_nc_ss=8&oh=00_AfyJseQ1y_OqYqS2Fm76P1LdhIX_8b8IafQPm10GSYoRoQ&oe=69BDD094",
    title: "Europe Group Tour",
    client: "Raihan & Family",
    location: "Comilla, Bangladesh",
    badge: "Group Tour",
    badgeColor: "#005a31",
    alt: "Group tour Europe review – Eammu Holidays Bangladesh tour package",
    review: "Best family tour experience ever. Everything was organized flawlessly.",
    rating: 5,
  },
  {
    id: 5,
    url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/650279996_1205215271691777_1277145821396657414_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_ohc=_l7CwGaQIB8Q7kNvwGupVTW&_nc_oc=Adle14uNz3_e1ZWJm22_6quM6Fpciebc_1cEQRyHD4_jalpevrZ0l12Xkz8nURs6GAA&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=xDlhwWjbAufdPYv6nCApsQ&_nc_ss=8&oh=00_Afw-ZEWgtKF_i3wSSKpw9H9q832f17ILjTqpx05I76Sb3Q&oe=69BDC5EC",
    title: "Malaysia Work Permit",
    client: "Karim Ahmed",
    location: "Rajshahi, Bangladesh",
    badge: "Work Permit",
    badgeColor: "#CC0001",
    alt: "Malaysia work permit success – Eammu Holidays client photo Bangladesh",
    review: "From application to visa stamp — Eammu Holidays made it smooth and transparent.",
    rating: 5,
  },
  {
    id: 6,
    url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/650743432_4247666005487471_4570808421395883987_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=k6vFy2MOD8wQ7kNvwE2iBob&_nc_oc=AdlFgnmb3gtgXJN1sFUQSuGIMewXkoK1U3wX0KQf2eXktl_g2JDCPNGjRtzeG77-pgg&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=BMHxntPL1FOoVIw4UqoO1w&_nc_ss=8&oh=00_AfyNQtdX8k4Ex9WhvMK2qLzo3c6lsQYvbJTQYJkdc_QxHg&oe=69BDC3BA",
    title: "Schengen Visa Approved",
    client: "Nusrat Jahan",
    location: "Dhaka, Bangladesh",
    badge: "Schengen Visa",
    badgeColor: "#003399",
    alt: "Schengen visa approved – Eammu Holidays study abroad success Bangladesh",
    review: "Schengen visa on first attempt! Eammu Holidays is the best agency in Bangladesh.",
    rating: 5,
  },
];

const videos = [
  {
    id: 1,
    videoId: "dQw4w9WgXcQ",
    title: "Canada Visa Success – Verified Client Review",
    client: "Mrs. Sadiya Rahman",
    badge: "Canada Visa",
    description: "Watch how Eammu Holidays secured a Canada visitor visa approval from Bangladesh.",
  },
  {
    id: 2,
    videoId: "7e90gBu4pas",
    title: "UK Student Visa Experience",
    client: "Ms. Sara Begum",
    badge: "UK Student Visa",
    description: "A student shares their full UK visa journey with Eammu Holidays step by step.",
  },
  {
    id: 3,
    videoId: "9bZkp7q19f0",
    title: "Dubai Work Permit Success Story",
    client: "Tanvir Hasan",
    badge: "Work Permit",
    description: "Real Dubai work permit success from a verified Eammu Holidays client in Sylhet.",
  },
  {
    id: 4,
    videoId: "dQw4w9WgXcQ",
    title: "USA Visa Interview Prep & Approval",
    client: "Minhaz Uddin",
    badge: "USA Visa",
    description: "Client explains how Eammu Holidays coached him through his USA visa interview.",
  },
  {
    id: 5,
    videoId: "7e90gBu4pas",
    title: "Europe Tour Package Review",
    client: "Raihan & Family",
    badge: "Group Tour",
    description: "Happy family reviews their 12-day European tour booked through Eammu Holidays.",
  },
  {
    id: 6,
    videoId: "9bZkp7q19f0",
    title: "Umrah Package – Client Testimonial",
    client: "Abdul Karim",
    badge: "Umrah Package",
    description: "A heartfelt testimonial from a client who performed Umrah through Eammu Holidays.",
  },
];

const textTestimonials = [
  {
    id: 1,
    name: "Md. Faisal Islam",
    location: "Dhaka",
    service: "Canada Visa",
    rating: 5,
    date: "March 2025",
    text: "I was worried about my Canada visa application, but Eammu Holidays handled every single detail. Their documentation team is incredibly thorough. Got my visa approved on the first try. Will recommend to everyone!",
    avatar: "FI",
  },
  {
    id: 2,
    name: "Taslima Akter",
    location: "Chittagong",
    service: "UK Student Visa",
    rating: 5,
    date: "January 2025",
    text: "As a student going abroad for the first time, I was nervous. The team at Eammu Holidays guided me through each step patiently. My UK student visa was approved in just 18 days. Truly exceptional service.",
    avatar: "TA",
  },
  {
    id: 3,
    name: "Minhaj Hossain",
    location: "Sylhet",
    service: "Dubai Work Permit",
    rating: 5,
    date: "February 2025",
    text: "Professional, reliable, and honest. These three words describe Eammu Holidays perfectly. My work permit for Dubai was processed faster than I expected. The updates were consistent and communication was excellent.",
    avatar: "MH",
  },
  {
    id: 4,
    name: "Sharmin Sultana",
    location: "Rajshahi",
    service: "Schengen Visa",
    rating: 5,
    date: "April 2025",
    text: "I had tried twice on my own for a Schengen visa and failed both times. Eammu Holidays reviewed my file, rebuilt my documents from scratch, and I got approved. They genuinely care about your success.",
    avatar: "SS",
  },
  {
    id: 5,
    name: "Kamal Uddin",
    location: "Comilla",
    service: "Umrah Package",
    rating: 5,
    date: "December 2024",
    text: "The Umrah package was perfectly organized. Hotel, transport, group guidance — everything was five star. Our group of 18 people had a flawless experience. Eammu Holidays made our spiritual journey unforgettable.",
    avatar: "KU",
  },
  {
    id: 6,
    name: "Nasreen Begum",
    location: "Dhaka",
    service: "USA Tourist Visa",
    rating: 5,
    date: "May 2025",
    text: "After my USA visa rejection, I turned to Eammu Holidays. They identified the exact weaknesses in my previous application and fixed everything. Got my visa approved on the very next attempt!",
    avatar: "NB",
  },
];

const stats = [
  { value: "5,000+", label: "Happy Clients", icon: Users, sub: "Served since 2015" },
  { value: "4.9 / 5", label: "Average Rating", icon: Star, sub: "From 320+ reviews" },
  { value: "98%", label: "Visa Success Rate", icon: TrendingUp, sub: "All visa categories" },
  { value: "30+", label: "Countries Covered", icon: Globe, sub: "Visa & tour services" },
];

const PHOTOS_PER_PAGE = 6;
const VIDEOS_PER_PAGE = 3;

// ─── Sub-components ────────────────────────────────────────────────────────────

const StarRating = ({ count = 5, size = 14 }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={size} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ServiceBadge = ({ label, color }) => (
  <span
    className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full text-white"
    style={{ backgroundColor: color || "#005a31" }}
  >
    <CheckCircle size={10} />
    {label} ✓
  </span>
);

// ─── Main Component ────────────────────────────────────────────────────────────

const CustomerTestimonialSection = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [photoPage, setPhotoPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);
  const [lightbox, setLightbox] = useState(null);
  const [animating, setAnimating] = useState(false);
  const panelRef = useRef(null);

  const totalPhotoPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);
  const totalVideoPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const currentPhotos = photos.slice(
    (photoPage - 1) * PHOTOS_PER_PAGE,
    photoPage * PHOTOS_PER_PAGE
  );
  const currentVideos = videos.slice(
    (videoPage - 1) * VIDEOS_PER_PAGE,
    videoPage * VIDEOS_PER_PAGE
  );

  const paginate = (type, direction) => {
    setAnimating(true);
    setTimeout(() => {
      if (type === "photos") {
        setPhotoPage((p) =>
          direction === "next" ? Math.min(p + 1, totalPhotoPages) : Math.max(p - 1, 1)
        );
      } else {
        setVideoPage((p) =>
          direction === "next" ? Math.min(p + 1, totalVideoPages) : Math.max(p - 1, 1)
        );
      }
      setAnimating(false);
    }, 250);
  };

  const currentPage = activeTab === "photos" ? photoPage : videoPage;
  const totalPages = activeTab === "photos" ? totalPhotoPages : totalVideoPages;

  return (
    <main className="font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .testimonial-main { font-family: 'Inter', sans-serif; }
        .hero-grad {
          background: linear-gradient(135deg, #002d1a 0%, #004526 40%, #006838 70%, #00874a 100%);
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,90,49,0.15);
        }
        .photo-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .photo-card:hover .photo-overlay { opacity: 1; }
        .photo-card:hover img { transform: scale(1.07); }
        .photo-card img { transition: transform 0.5s ease; }
        .tab-active {
          background: linear-gradient(135deg, #004526, #007a45);
          color: white;
          box-shadow: 0 4px 15px rgba(0,90,49,0.4);
        }
        .counter-card {
          background: white;
          border: 1px solid #e8f5ee;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .counter-card:hover {
          box-shadow: 0 8px 24px rgba(0,90,49,0.12);
          transform: translateY(-2px);
        }
        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 999;
          background: rgba(0,0,0,0.92);
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(4px);
        }
        .text-review-card {
          border-left: 4px solid #005a31;
          background: linear-gradient(135deg, #f0faf5 0%, #fff 100%);
        }
        .avatar-circle {
          background: linear-gradient(135deg, #004526, #007a45);
          color: white;
          font-weight: 800;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
        .section-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          background: #e8f5ee; color: #005a31;
          font-weight: 700; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 999px;
          border: 1px solid #c3e8d3;
        }
        .fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .card-hover, .photo-card img, .photo-overlay { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="hero-grad text-white py-20 px-4 relative overflow-hidden testimonial-main"
        aria-label="Eammu Holidays customer testimonials hero"
      >
        {/* Decorative rings */}
        <div aria-hidden="true" style={{
          position:"absolute", top:"-80px", right:"-80px",
          width:"340px", height:"340px", borderRadius:"50%",
          border:"1px solid rgba(255,255,255,0.07)"
        }} />
        <div aria-hidden="true" style={{
          position:"absolute", top:"-40px", right:"-40px",
          width:"220px", height:"220px", borderRadius:"50%",
          border:"1px solid rgba(255,255,255,0.07)"
        }} />
        <div aria-hidden="true" style={{
          position:"absolute", bottom:"-60px", left:"-60px",
          width:"280px", height:"280px", borderRadius:"50%",
          border:"1px solid rgba(255,255,255,0.07)"
        }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex justify-center gap-2 text-sm" style={{color:"rgba(255,255,255,0.6)"}}>
              <li><a href="https://www.eammu.com" className="hover:text-white transition-colors" style={{color:"rgba(255,255,255,0.6)"}}>Home</a></li>
              <li aria-hidden="true" style={{color:"rgba(255,255,255,0.3)"}}>›</li>
              <li className="text-white font-semibold" aria-current="page">Customer Testimonials</li>
            </ol>
          </nav>

          <div className="section-eyebrow mb-6" style={{background:"rgba(255,255,255,0.12)", color:"white", border:"1px solid rgba(255,255,255,0.18)"}}>
            <Award size={12} />
            Bangladesh's #1 Rated Travel Agency
          </div>

          <h1 className="font-black mb-5 leading-tight" style={{fontSize:"clamp(2rem,5vw,3.5rem)"}}>
            Real Clients.{" "}
            <span style={{color:"#ffb347"}}>Real Results.</span>
            <br />
            <span style={{color:"rgba(255,255,255,0.75)", fontSize:"0.65em", fontWeight:700}}>
              Verified Success Stories from 5,000+ Happy Clients
            </span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8" style={{color:"rgba(255,255,255,0.8)"}}>
            Canada, UK, USA, Dubai, Schengen — our clients share their real visa approval journeys,
            group tour experiences, and work permit success stories from across Bangladesh.
          </p>

          {/* Rating + Trust Pill */}
          <div className="flex flex-wrap justify-center gap-4">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
              style={{background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.18)", backdropFilter:"blur(8px)"}}
              aria-label="Rated 4.9 out of 5 from 320 reviews"
            >
              <StarRating count={5} size={16} />
              <span className="font-black text-base">4.9 / 5</span>
              <span style={{color:"rgba(255,255,255,0.65)", fontSize:"13px"}}>· 320+ Verified Reviews</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
              style={{background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.18)", backdropFilter:"blur(8px)"}}
            >
              <Shield size={15} style={{color:"#7ee8a2"}} />
              <span style={{fontSize:"13px", color:"rgba(255,255,255,0.85)", fontWeight:600}}>98% Visa Approval Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section
        className="py-10 px-4 testimonial-main"
        style={{background:"#f8fdf9", borderBottom:"1px solid #e8f5ee"}}
        aria-label="Eammu Holidays statistics"
      >
        <dl className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="counter-card rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background:"#e8f5ee"}}>
                  <Icon size={20} style={{color:"#005a31"}} />
                </div>
                <dt className="font-black text-2xl" style={{color:"#005a31"}}>{s.value}</dt>
                <dd className="font-bold text-sm mt-0.5" style={{color:"#1a1a1a"}}>{s.label}</dd>
                <dd className="text-xs mt-0.5" style={{color:"#888"}}>{s.sub}</dd>
              </div>
            );
          })}
        </dl>
      </section>

      {/* ── PHOTO + VIDEO TABS ─────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 testimonial-main"
        style={{background:"#f4f9f6"}}
        aria-label="Customer photo and video testimonials"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-4">
              <CheckCircle size={12} />
              Verified Customer Testimonials
            </div>
            <h2 className="font-black mb-3" style={{fontSize:"clamp(1.6rem,4vw,2.8rem)", color:"#002d1a"}}>
              Visa Approvals &{" "}
              <span style={{color:"#e85a00"}}>Success Stories</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{color:"#5a7a6a", fontSize:"15px", lineHeight:1.7}}>
              Browse real client photos and YouTube video reviews — Canada visa, UK student visa,
              Dubai work permit, Schengen visa, Umrah packages, and group tours.
            </p>

            {/* Tabs */}
            <div className="flex justify-center mt-8" role="tablist" aria-label="Testimonial type selector">
              <div className="inline-flex p-1.5 rounded-2xl gap-1" style={{background:"white", border:"1px solid #dceee4", boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                {[
                  { id: "photos", label: "📸  Customer Photos", count: photos.length },
                  { id: "videos", label: "🎬  Video Reviews", count: videos.length },
                  { id: "written", label: "✍️  Written Reviews", count: textTestimonials.length },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => { setActiveTab(tab.id); setPhotoPage(1); setVideoPage(1); }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                    style={activeTab === tab.id ? {
                      background:"linear-gradient(135deg,#004526,#007a45)",
                      color:"white",
                      boxShadow:"0 4px 12px rgba(0,90,49,0.35)"
                    } : { color:"#5a7a6a" }}
                  >
                    {tab.label}
                    <span className="text-xs font-black px-1.5 py-0.5 rounded-full" style={activeTab === tab.id ? {background:"rgba(255,255,255,0.2)"} : {background:"#e8f5ee", color:"#005a31"}}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Panel */}
          <div
            ref={panelRef}
            role="tabpanel"
            id="testimonial-panel"
            aria-label={activeTab === "photos" ? "Photo testimonials" : activeTab === "videos" ? "Video testimonials" : "Written reviews"}
            className={animating ? "" : "fade-in"}
            style={{minHeight:"420px"}}
          >

            {/* ── PHOTOS ── */}
            {activeTab === "photos" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPhotos.map((photo, idx) => (
                    <article
                      key={photo.id}
                      className="photo-card rounded-3xl overflow-hidden cursor-pointer card-hover"
                      style={{
                        background:"white",
                        boxShadow:"0 4px 16px rgba(0,0,0,0.08)",
                        border:"1px solid #e8f5ee"
                      }}
                      itemScope
                      itemType="https://schema.org/ImageObject"
                      aria-label={photo.alt}
                      onClick={() => setLightbox(photo)}
                    >
                      <div className="relative" style={{aspectRatio:"4/3", overflow:"hidden"}}>
                        <img
                          src={photo.url}
                          alt={photo.alt}
                          title={photo.title}
                          loading={idx < 3 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover"
                          itemProp="contentUrl"
                        />
                        <div className="photo-overlay absolute inset-0 flex flex-col justify-end p-5">
                          <ServiceBadge label={photo.badge} color={photo.badgeColor} />
                          <h3 className="text-white font-bold text-base mt-2" itemProp="name">{photo.title}</h3>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <MapPin size={11} style={{color:"rgba(255,255,255,0.7)"}} />
                            <span style={{fontSize:"12px", color:"rgba(255,255,255,0.7)"}}>{photo.location}</span>
                          </div>
                        </div>
                        {/* Always-visible top badge */}
                        <div className="absolute top-3 left-3 group-hover:opacity-0">
                          <ServiceBadge label={photo.badge} color={photo.badgeColor} />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-bold text-sm" style={{color:"#002d1a"}}>{photo.client}</p>
                            <div className="flex items-center gap-1 mt-0.5">
                              <MapPin size={10} style={{color:"#888"}} />
                              <span style={{fontSize:"12px", color:"#888"}}>{photo.location}</span>
                            </div>
                          </div>
                          <StarRating count={photo.rating} size={12} />
                        </div>
                        <p className="text-xs mt-2 leading-relaxed" style={{color:"#5a7a6a"}}>&ldquo;{photo.review}&rdquo;</p>
                      </div>
                    </article>
                  ))}
                </div>

                {totalPhotoPages > 1 && (
                  <PaginationBar
                    currentPage={photoPage}
                    totalPages={totalPhotoPages}
                    onPrev={() => paginate("photos", "prev")}
                    onNext={() => paginate("photos", "next")}
                    label="Photo testimonials"
                  />
                )}
              </>
            )}

            {/* ── VIDEOS ── */}
            {activeTab === "videos" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {currentVideos.map((video) => (
                    <article
                      key={video.id}
                      className="rounded-3xl overflow-hidden card-hover"
                      style={{background:"white", boxShadow:"0 4px 16px rgba(0,0,0,0.08)", border:"1px solid #e8f5ee"}}
                      itemScope
                      itemType="https://schema.org/VideoObject"
                      aria-label={video.title}
                    >
                      <div className="relative rounded-t-3xl overflow-hidden" style={{aspectRatio:"16/9", background:"#000"}}>
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                          title={video.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          aria-label={`Watch: ${video.title}`}
                          itemProp="embedUrl"
                        />
                      </div>
                      <div className="p-5">
                        <ServiceBadge label={video.badge} color="#005a31" />
                        <h3 className="font-bold text-sm mt-2 leading-snug" style={{color:"#002d1a"}} itemProp="name">
                          {video.title}
                        </h3>
                        <p className="text-xs mt-1.5 leading-relaxed" style={{color:"#888"}} itemProp="description">
                          {video.description}
                        </p>
                        <div className="flex items-center gap-1.5 mt-3 pt-3" style={{borderTop:"1px solid #e8f5ee"}}>
                          <div className="avatar-circle" style={{width:26, height:26, fontSize:"10px", flexShrink:0}}>
                            {video.client.split(" ").map(w => w[0]).join("").slice(0,2)}
                          </div>
                          <span className="text-xs font-semibold" style={{color:"#005a31"}}>{video.client}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {totalVideoPages > 1 && (
                  <PaginationBar
                    currentPage={videoPage}
                    totalPages={totalVideoPages}
                    onPrev={() => paginate("videos", "prev")}
                    onNext={() => paginate("videos", "next")}
                    label="Video testimonials"
                  />
                )}
              </>
            )}

            {/* ── WRITTEN REVIEWS ── */}
            {activeTab === "written" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {textTestimonials.map((review) => (
                  <article
                    key={review.id}
                    className="text-review-card rounded-2xl p-6 card-hover"
                    style={{boxShadow:"0 2px 12px rgba(0,90,49,0.07)"}}
                    itemScope
                    itemType="https://schema.org/Review"
                    aria-label={`Review by ${review.name}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="avatar-circle" style={{width:44, height:44, fontSize:"14px", flexShrink:0}}>
                          {review.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-sm" style={{color:"#002d1a"}} itemProp="author">{review.name}</p>
                          <div className="flex items-center gap-1">
                            <MapPin size={10} style={{color:"#888"}} />
                            <span style={{fontSize:"11px", color:"#888"}}>{review.location}</span>
                          </div>
                        </div>
                      </div>
                      <Quote size={22} style={{color:"#c3e8d3", flexShrink:0}} aria-hidden="true" />
                    </div>

                    <StarRating count={review.rating} size={13} />

                    <p className="text-sm mt-3 leading-relaxed" style={{color:"#3a5a45"}} itemProp="reviewBody">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between mt-5 pt-4" style={{borderTop:"1px solid #d4eddd"}}>
                      <ServiceBadge label={review.service} color="#005a31" />
                      <div className="flex items-center gap-1">
                        <Clock size={10} style={{color:"#aaa"}} />
                        <span style={{fontSize:"11px", color:"#aaa"}}>{review.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 testimonial-main"
        style={{background:"white"}}
        aria-label="Why choose Eammu Holidays"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-4">
              <Shield size={12} />
              Why Clients Trust Us
            </div>
            <h2 className="font-black mb-3" style={{fontSize:"clamp(1.6rem,4vw,2.5rem)", color:"#002d1a"}}>
              Why Thousands Choose{" "}
              <span style={{color:"#e85a00"}}>Eammu Holidays</span>
            </h2>
            <p style={{color:"#5a7a6a", fontSize:"15px", maxWidth:"520px", margin:"0 auto"}}>
              Bangladesh's most trusted travel and visa consultancy — with a proven track record
              across 30+ countries since 2015.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left list-none">
            {[
              {
                icon: "🏆",
                title: "Certified Visa Experts",
                desc: "Licensed consultants with a 98% visa success rate across Canada, UK, USA, Dubai, and all Schengen countries.",
              },
              {
                icon: "🌍",
                title: "30+ Countries Covered",
                desc: "Student visas, work permits, tourist visas, Umrah packages, and group tours — all from one trusted agency.",
              },
              {
                icon: "🤝",
                title: "End-to-End Support",
                desc: "Dedicated case managers from document preparation to visa stamping and final travel. Zero confusion at every step.",
              },
              {
                icon: "📋",
                title: "Transparent Process",
                desc: "Regular status updates, honest timelines, and no hidden fees. Know exactly where your case stands, always.",
              },
              {
                icon: "⚡",
                title: "Fast Turnaround",
                desc: "Streamlined documentation and direct embassy relationships help us process applications faster than the industry average.",
              },
              {
                icon: "💯",
                title: "Proven Track Record",
                desc: "Over 5,000 successful clients since 2015. Our results speak louder than any promise.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl p-6 card-hover"
                style={{background:"#f8fdf9", border:"1px solid #e0f0e8"}}
              >
                <span className="text-3xl mb-3 block" aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold mb-2" style={{color:"#002d1a", fontSize:"15px"}}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:"#5a7a6a"}}>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section
        className="py-14 px-4 text-center testimonial-main"
        style={{background:"linear-gradient(135deg,#002d1a 0%,#004526 50%,#006838 100%)"}}
        aria-label="Call to action – contact Eammu Holidays"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-black text-white mb-3" style={{fontSize:"clamp(1.5rem,4vw,2.4rem)"}}>
            Ready to Start Your{" "}
            <span style={{color:"#ffb347"}}>Visa Journey?</span>
          </h2>
          <p className="mb-8" style={{color:"rgba(255,255,255,0.75)", fontSize:"15px", lineHeight:1.7}}>
            Join 5,000+ happy clients who got their visa approved with Eammu Holidays.
            Free consultation available — Canada, UK, USA, Dubai, Schengen & more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.eammu.com/contact"
              className="font-bold px-8 py-4 rounded-full transition-all"
              style={{background:"#ffb347", color:"#002d1a", fontSize:"15px", textDecoration:"none", boxShadow:"0 4px 16px rgba(255,179,71,0.4)"}}
              aria-label="Book a free visa consultation with Eammu Holidays"
            >
              📞 Free Consultation
            </a>
            <a
              href="https://www.eammu.com/services"
              className="font-bold px-8 py-4 rounded-full transition-all"
              style={{background:"rgba(255,255,255,0.12)", color:"white", fontSize:"15px", textDecoration:"none", border:"1px solid rgba(255,255,255,0.25)"}}
              aria-label="Browse Eammu Holidays visa and tour services"
            >
              Browse Services →
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${lightbox.title}`}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-lg w-full mx-4 rounded-3xl overflow-hidden"
            style={{background:"white", maxHeight:"90vh"}}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.alt}
              className="w-full object-cover"
              style={{maxHeight:"60vh"}}
            />
            <div className="p-5">
              <ServiceBadge label={lightbox.badge} color={lightbox.badgeColor} />
              <h3 className="font-black text-lg mt-2" style={{color:"#002d1a"}}>{lightbox.title}</h3>
              <p className="text-sm mt-1" style={{color:"#5a7a6a"}}>{lightbox.client} · {lightbox.location}</p>
              <StarRating count={lightbox.rating} size={14} />
              <p className="text-sm mt-2 italic" style={{color:"#3a5a45"}}>&ldquo;{lightbox.review}&rdquo;</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center font-black text-lg"
              style={{background:"rgba(0,0,0,0.5)", color:"white", border:"none", cursor:"pointer"}}
              aria-label="Close photo lightbox"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

// ─── Pagination ────────────────────────────────────────────────────────────────

const PaginationBar = ({ currentPage, totalPages, onPrev, onNext, label }) => (
  <nav
    className="flex justify-center items-center gap-6 mt-12"
    aria-label={`${label} pagination`}
  >
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      aria-label="Previous page"
      className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all"
      style={{
        background: currentPage === 1 ? "#f0f0f0" : "white",
        color: currentPage === 1 ? "#bbb" : "#005a31",
        border: "1px solid #e0f0e8",
        cursor: currentPage === 1 ? "not-allowed" : "pointer",
        boxShadow: currentPage === 1 ? "none" : "0 2px 8px rgba(0,90,49,0.1)"
      }}
    >
      <ChevronLeft size={18} aria-hidden="true" />
      Prev
    </button>

    <div aria-live="polite" aria-atomic="true" className="flex items-center gap-2 font-black" style={{color:"#005a31"}}>
      <span className="text-xl">{currentPage}</span>
      <span style={{color:"#ccc"}}>of</span>
      <span style={{color:"#888"}}>{totalPages}</span>
    </div>

    <button
      onClick={onNext}
      disabled={currentPage === totalPages}
      aria-label="Next page"
      className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all"
      style={{
        background: currentPage === totalPages ? "#f0f0f0" : "#005a31",
        color: currentPage === totalPages ? "#bbb" : "white",
        border: "none",
        cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        boxShadow: currentPage === totalPages ? "none" : "0 4px 12px rgba(0,90,49,0.3)"
      }}
    >
      Next
      <ChevronRight size={18} aria-hidden="true" />
    </button>
  </nav>
);

export default CustomerTestimonialSection;