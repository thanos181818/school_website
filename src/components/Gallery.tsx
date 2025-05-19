import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "campus",
    title: "Modern Classroom Environment"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/8617684/pexels-photo-8617684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "activities",
    title: "Science Exhibition"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "sports",
    title: "Annual Sports Day"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "campus",
    title: "Library Resources"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "activities",
    title: "Art and Craft Session"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "sports",
    title: "Swimming Competitions"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/2586042/pexels-photo-2586042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "events",
    title: "Annual Day Celebration"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "events",
    title: "Guest Lecture Series"
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filterImages = () => {
    if (activeFilter === 'all') {
      return galleryImages;
    }
    return galleryImages.filter(image => image.category === activeFilter);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Explore life at Billabong High School through our collection of photos showcasing our campus, events, activities, and student achievements.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <FilterButton 
            text="All" 
            isActive={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          />
          <FilterButton 
            text="Campus" 
            isActive={activeFilter === 'campus'} 
            onClick={() => setActiveFilter('campus')}
          />
          <FilterButton 
            text="Activities" 
            isActive={activeFilter === 'activities'} 
            onClick={() => setActiveFilter('activities')}
          />
          <FilterButton 
            text="Sports" 
            isActive={activeFilter === 'sports'} 
            onClick={() => setActiveFilter('sports')}
          />
          <FilterButton 
            text="Events" 
            isActive={activeFilter === 'events'} 
            onClick={() => setActiveFilter('events')}
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filterImages().map(image => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <div className="relative h-64">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-h-[80vh] mx-auto object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl text-white font-medium">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const FilterButton = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 rounded-full transition-colors ${
        isActive 
          ? 'bg-purple-600 text-white' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {text}
    </button>
  );
};

export default Gallery;