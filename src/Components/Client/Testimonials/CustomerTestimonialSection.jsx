"use client";
import React, { useState } from "react";
import { Play, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from "lucide-react";

const CustomerTestimonialSection = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [photoPage, setPhotoPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);
  const itemsPerPage = 3;

  // 📸 Customer Photos Data
  const photos = [
    { id: 1, url: "https://scontent.ffjr1-2.fna.fbcdn.net/v/t39.30808-6/627683049_122214000974548392_5055873005367739002_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=8_2-WKCtRxkQ7kNvwHU338K&_nc_oc=AdmXsUJm-qZt49a6aP0-SKll9QVppl0TmDNK7jbFmDTeLeApyB7pTlqVYzHleWTHD9M&_nc_zt=23&_nc_ht=scontent.ffjr1-2.fna&_nc_gid=IQqKmsjdEt3OoD9qNizxPA&_nc_ss=8&oh=00_AfzUytfIPeLQGyDB7StTLebc8tdTChJsQDQ4N8DVoH1nag&oe=69BDC7D4", title: "Success Story: Mrs. Sadiya" },
    { id: 2, url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/480681934_2428325887510082_4187620178881988215_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e982cd&_nc_ohc=B1lcbL6-UccQ7kNvwFd48nX&_nc_oc=AdksZp4Zv9z6r6hc4eXpVPZ4iG0473mfNqDEL6kISxokTxQ4JPDFAh_XJKk5xxXIFvM&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=bD6qHEKVTdcfXg1smQforQ&_nc_ss=8&oh=00_AfwI0quSAusK-N-4ufkYmbsyRydyiPQjuBNPfZu1RfBL-Q&oe=69BDCFA0", title: "Visa Received: Ms. Sara" },
    { id: 3, url: "https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/488755947_670883522198952_5722921609796892800_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=9Juvw1DHUaIQ7kNvwFbTgi7&_nc_oc=AdkqEY_RLL7FThIQdOOW9g-83CaKHhDtLAuUBzxHSQbep3LjEx22yVIgfdA2FKpELos&_nc_zt=23&_nc_ht=scontent.ffjr1-1.fna&_nc_gid=4VlRo8dRByPzf_nTjiLZ5A&_nc_ss=8&oh=00_Afxy9Im5NrCpNiLvRXdQaspD_ImrdrQe6eEczUizlf96kA&oe=69BDD082", title: "Happy Client: Tanvir Hasan" },
    { id: 4, url: "https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/643316693_3925146984284070_2679819947000075901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Cw7T33bfEpQQ7kNvwFbm-EG&_nc_oc=Adla2CRfbEjomBgJJFv1LzNz3Ui-YQ__re0Y-3MR90MJBWEd_WFI90Pu6E8pz6xgUdA&_nc_zt=23&_nc_ht=scontent.ffjr1-1.fna&_nc_gid=41gDkjLGTrMjadT5EnAqZQ&_nc_ss=8&oh=00_AfyJseQ1y_OqYqS2Fm76P1LdhIX_8b8IafQPm10GSYoRoQ&oe=69BDD094", title: "Group Tour Feedback" },
    { id: 5, url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/650279996_1205215271691777_1277145821396657414_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_ohc=_l7CwGaQIB8Q7kNvwGupVTW&_nc_oc=Adle14uNz3_e1ZWJm22_6quM6Fpciebc_1cEQRyHD4_jalpevrZ0l12Xkz8nURs6GAA&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=xDlhwWjbAufdPYv6nCApsQ&_nc_ss=8&oh=00_Afw-ZEWgtKF_i3wSSKpw9H9q832f17ILjTqpx05I76Sb3Q&oe=69BDC5EC", title: "Work Permit Success" },
    { id: 6, url: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/650743432_4247666005487471_4570808421395883987_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=k6vFy2MOD8wQ7kNvwE2iBob&_nc_oc=AdlFgnmb3gtgXJN1sFUQSuGIMewXkoK1U3wX0KQf2eXktl_g2JDCPNGjRtzeG77-pgg&_nc_zt=23&_nc_ht=scontent.ffjr1-6.fna&_nc_gid=BMHxntPL1FOoVIw4UqoO1w&_nc_ss=8&oh=00_AfyNQtdX8k4Ex9WhvMK2qLzo3c6lsQYvbJTQYJkdc_QxHg&oe=69BDC3BA", title: "Student Visa Celebration" },
  ];

  // 🎥 Customer Video Testimonials (YouTube)
  const videos = [
    { id: 1, videoId: "dQw4w9WgXcQ", title: "Canada Visa Success Story" },
    { id: 2, videoId: "7e90gBu4pas", title: "UK Student Visa Experience" },
    { id: 3, videoId: "9bZkp7q19f0", title: "Work Permit Client Review" },
    { id: 4, videoId: "dQw4w9WgXcQ", title: "USA Interview Experience" },
    { id: 5, videoId: "7e90gBu4pas", title: "European Holiday Review" },
  ];

  // Pagination Logic
  const indexOfLastPhoto = photoPage * itemsPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - itemsPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const indexOfLastVideo = videoPage * itemsPerPage;
  const indexOfFirstVideo = indexOfLastVideo - itemsPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (type, direction) => {
    if (type === "photos") {
      if (direction === "next" && photoPage < Math.ceil(photos.length / itemsPerPage)) setPhotoPage(photoPage + 1);
      if (direction === "prev" && photoPage > 1) setPhotoPage(photoPage - 1);
    } else {
      if (direction === "next" && videoPage < Math.ceil(videos.length / itemsPerPage)) setVideoPage(videoPage + 1);
      if (direction === "prev" && videoPage > 1) setVideoPage(videoPage - 1);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-[#005a31] mb-6">
            Eammu Holidays <span className="text-orange-500">Customer</span> Testimonial
          </h2>
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
              <button
                onClick={() => setActiveTab("photos")}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
                  activeTab === "photos" ? "bg-[#005a31] text-white shadow-lg" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <ImageIcon size={18} /> Photos
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
                  activeTab === "videos" ? "bg-[#005a31] text-white shadow-lg" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Video size={18} /> Videos
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="min-h-[450px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "photos" ? (
              currentPhotos.map((photo) => (
                <div key={photo.id} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-md aspect-[4/3] border-4 border-white">
                  <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                  </div>
                </div>
              ))
            ) : (
              currentVideos.map((video) => (
                <div key={video.id} className="space-y-4 group">
                  <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-video bg-black border-4 border-white">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-bold text-[#005a31] px-2 group-hover:text-orange-500 transition-colors">{video.title}</h3>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <button
            onClick={() => paginate(activeTab, "prev")}
            disabled={activeTab === "photos" ? photoPage === 1 : videoPage === 1}
            className="p-4 rounded-full bg-white border border-gray-200 text-[#005a31] hover:bg-[#005a31] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-[#005a31]">
              {activeTab === "photos" ? photoPage : videoPage}
            </span>
            <span className="text-gray-400 font-bold">/</span>
            <span className="text-gray-400 font-bold">
              {activeTab === "photos" 
                ? Math.ceil(photos.length / itemsPerPage) 
                : Math.ceil(videos.length / itemsPerPage)}
            </span>
          </div>

          <button
            onClick={() => paginate(activeTab, "next")}
            disabled={
              activeTab === "photos" 
                ? photoPage === Math.ceil(photos.length / itemsPerPage) 
                : videoPage === Math.ceil(videos.length / itemsPerPage)
            }
            className="p-4 rounded-full bg-white border border-gray-200 text-[#005a31] hover:bg-[#005a31] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialSection;