
"use client"
import React, { useState } from "react";
import { Play, Image as ImageIcon, Video, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

const EammuSocial = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [photoPage, setPhotoPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);
  const itemsPerPage = 3;

  // Sample Data (Real URLs)
  const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1593113598332-cd288d649433", title: "Blood Donation 2024" },
    { id: 2, url: "https://azbigmedia.com/wp-content/uploads/2023/11/Free-Medical-Camp-1024x576.jpg", title: "Medical Camp Cumilla" },
    { id: 3, url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b", title: "Volunteer Distribution" },
    { id: 4, url: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf", title: "Free Medicine Drive" },
    { id: 5, url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa", title: "NGO Partnership Meet" },
    { id: 6, url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c", title: "Humanity First Event" },
  ];

  const videos = [
    { id: 1, videoId: "dQw4w9WgXcQ", title: "Eammu Social Work Documentary" },
    { id: 2, videoId: "7e90gBu4pas", title: "Free Medical Camp Highlights" },
    { id: 3, videoId: "9bZkp7q19f0", title: "Volunteer Success Stories" },
    { id: 4, videoId: "dQw4w9WgXcQ", title: "Annual Charity Gala" },
    { id: 5, videoId: "7e90gBu4pas", title: "Relief Distribution Drive" },
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
    <section className="py-8 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-[#005a31] mb-6">
            Our <span className="text-orange-500">Impact</span> Gallery
          </h2>
          
          <div className="flex justify-center mb-6">
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
        <div className="flex justify-center items-center gap-6 mt-8">
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

export default EammuSocial;