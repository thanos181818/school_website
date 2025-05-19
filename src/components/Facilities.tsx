import React from 'react';
import { Microscope, BookOpen, Server, Dumbbell, Brush, FlaskRound as Flask } from 'lucide-react';

const Facilities = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Campus Facilities</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Our state-of-the-art campus is designed to provide a stimulating learning environment with world-class facilities that support both academic and co-curricular excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FacilityCard
            icon={<Microscope size={32} />}
            title="Science Laboratories"
            description="Fully equipped physics, chemistry, and biology labs that encourage hands-on experimentation and scientific discovery."
            image="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
          <FacilityCard
            icon={<Server size={32} />}
            title="Computer Labs"
            description="Modern computer labs with the latest hardware and software to develop digital literacy and programming skills."
            image="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
          <FacilityCard
            icon={<BookOpen size={32} />}
            title="Library & Resource Center"
            description="An extensive collection of books, periodicals, and digital resources to foster a love for reading and research."
            image="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
          <FacilityCard
            icon={<Dumbbell size={32} />}
            title="Sports Facilities"
            description="Comprehensive sports infrastructure including playgrounds, indoor sports complex, and swimming pool."
            image="https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
          <FacilityCard
            icon={<Brush size={32} />}
            title="Arts & Music Studios"
            description="Dedicated spaces for visual arts, music, dance, and drama to nurture creative expression and talent."
            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
          <FacilityCard
            icon={<Flask size={32} />}
            title="Innovation Lab"
            description="A specialized space equipped with tools and technology for design thinking, robotics, and STEM projects."
            image="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
        </div>

        {/* Campus Tour Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">Experience Our Campus</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We invite you to visit our campus and experience firsthand the exceptional learning environment we offer. Our campus tours provide an opportunity to see our facilities, meet our faculty, and understand our educational approach.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-all"
                >
                  Schedule a Campus Tour
                </a>
              </div>
            </div>
            <div className="h-[400px]">
              <img 
                src="https://images.pexels.com/photos/256516/pexels-photo-256516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Billabong High School Campus" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FacilityCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="text-purple-600 mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Facilities;