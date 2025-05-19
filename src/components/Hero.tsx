import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 relative">
      {/* Main Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
          alt="Billabong High School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-800/50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Empowering Young Minds for Global Success
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Billabong High School offers CBSE and IGCSE curriculum with a focus on holistic development and academic excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#admissions" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center"
                >
                  Admissions Open 2025-26
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="#about" 
                  className="bg-white hover:bg-gray-100 text-purple-800 font-medium py-3 px-6 rounded-md transition-all"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <HighlightCard
            title="Academic Excellence"
            description="Our students consistently achieve outstanding results in board examinations."
            icon="🎓"
            color="bg-purple-600"
          />
          <HighlightCard
            title="Global Curriculum"
            description="Choice between CBSE and IGCSE curricula to suit different learning paths."
            icon="🌎"
            color="bg-purple-600"
          />
          <HighlightCard
            title="Holistic Development"
            description="Focus on academics, sports, arts, and character building for well-rounded growth."
            icon="🌟"
            color="bg-purple-600"
          />
        </div>
      </div>
    </section>
  );
};

const HighlightCard = ({ title, description, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`${color} text-white px-6 py-4 flex items-center`}>
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Hero;