
"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// Lazy-loaded YouTube component for Shorts
const LazyYouTube = ({ videoId, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // preload a bit before scrolling
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl shadow-lg aspect-[9/16] bg-black cursor-pointer group hover:shadow-2xl transition"
    >
      {isVisible ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&playlist=${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

LazyYouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const MessageFromLeadingTeam = () => {
  const teamMembers = [
    {
      name: "Naeem Hossen",
      role: "Global Visa Expert & Air Ticket Specialist",
      image:
        "https://i.ibb.co/Qjr5x7KW/Whats-App-Image-2025-08-12-at-11-05-24-PM-1.jpg",
      description:
        "Naeem is an experienced global visa advisor specializing in air ticketing and destination consulting. He leads Eammu's vision for global travel and immigration strategy.",
      socials: {
        linkedin: "https://www.linkedin.com/in/naeemhossen-/",
        facebook: "https://facebook.com/naeemhosseen",
        instagram: "https://instagram.com/naeemhossen_",
      },
    },
    {
      name: "Sana Ullah Tahsin",
      role: "Student Visa Expert & Customer Service Manager",
      image:
        "https://i.ibb.co/997F5dSp/Whats-App-Image-2025-08-12-at-10-53-20-PM.jpg",
      description:
        "Sana specializes in student visa guidance for the USA, UK, Canada, and other countries. She manages customer service, providing personalized support to every student.",
      socials: {
        linkedin: "#",
        facebook: "https://www.facebook.com/Tahsinahef.official",
        instagram: "#",
      },
    },
    {
      name: "Wahid Ahamed Emon",
      role: "Customer Service Executive & Tour Expert",
      image:
        "https://i.ibb.co/PGX6RnVb/464369930-532778909362696-6020132385522832185-n.jpg",
      description:
        "Emon provides excellent customer support and crafts unforgettable travel packages as our holiday tour expert.",
      socials: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
  ];



  const shorts = [
    { id: "VXcsh-RGAQo", title: "FEEL THE HEAT! WITH EAMMU FIRE SHOW DESERT SAFARI" },
    { id: "wBEWAeP8AEI", title: "Turkey e-Visa – Apply by Yourself 🇹🇷" },
    { id: "yGZlj3IqwqQ", title: "THAILAND TOUR PACKAGES With Eammu – EXPLORE THE LAND OF SMILES" },
    { id: "9lsBNCWdJrs", title: "Albania Tourist Visa – Apply by Yourself!" },
  ];

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 my-10">
   
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-4">Eammu Leadership Team</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our leadership team combines years of experience in global visas, immigration services, travel consulting, 
          and customer support. We are committed to guiding you through every step of your journey abroad. 
          Explore their profiles to learn more about their expertise.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center flex flex-col items-center"
            aria-label={`Profile of ${member.name}, ${member.role}`}
          >
            <figure className="mb-4 relative group">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 rounded-full object-cover border-4 border-green-800 mx-auto transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </figure>
            <h2 className="text-xl font-semibold text-green-800 mb-1">
              {member.name === "Naeem Hossen" ? (
                <Link href="/naeem-hossen" className="no-underline text-inherit hover:text-inherit">
                  {member.name}
                </Link>
              ) : (
                member.name
              )}
            </h2>
            <p className="text-gray-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-500 text-sm mb-3">{member.description}</p>
            <div className="flex gap-3">
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                  LinkedIn
                </a>
              )}
              {member.socials.facebook && (
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                  Facebook
                </a>
              )}
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition">
                  Instagram
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-700 mb-4">
          Want expert guidance for your travel, study, or visa plans? Connect with our leadership team today.
        </p>
        <a
          href="https://wa.me/8801631312524"
          className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
        >
          📞 WhatsApp / Call Now
        </a>
      </motion.div>

{/* Video Testimonials */}
<section className="mt-16 px-4">
  <h2 className="text-3xl font-bold text-center  text-[#005a31] mb-8">🎥 Video Testimonials</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      { id: "9RE1nwL9SqM", title: "Client Testimonial Eammu" },
      { id: "Iw4JZZp9q8c", title: "Client Review Eammu Immigration" },
    ].map((video) => (
      <div
        key={video.id}
        className="relative overflow-hidden rounded-2xl shadow-xl bg-black aspect-video group hover:shadow-2xl transition"
      >
        {/* Lazy loading iframe */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=0`}
          title={video.title}
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ))}
  </div>
</section>


      {/* Shorts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#005a31] text-center mb-8">Watch Our Travel Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shorts.map((video) => (
              <LazyYouTube key={video.id} videoId={video.id} title={video.title} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@Eammutour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold hover:underline"
            >
              View more on YouTube →
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MessageFromLeadingTeam;
