import React from 'react';
import img2 from './img2.png'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Billabong High School</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={img2} 
              alt="Students at Billabong High School" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Philosophy</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Billabong High School, Malad, we believe that education goes beyond textbooks and examinations. Our philosophy is centered around nurturing each child's unique potential through a balanced approach to learning that combines academic rigor with character development.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Established with a vision to prepare students for global challenges, our school provides a stimulating environment where curiosity is encouraged, creativity is fostered, and critical thinking is developed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <StatBox number="2005" text="Year Established" />
              <StatBox number="2000+" text="Students" />
              <StatBox number="150+" text="Expert Faculty" />
              <StatBox number="100%" text="Board Results" />
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To create a learning environment that empowers students to become confident, responsible global citizens who contribute positively to society through their knowledge, skills, and values.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality education that balances academic excellence with holistic development, preparing students to meet challenges with resilience, adaptability, and ethical leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ number, text }) => {
  return (
    <div className="bg-purple-50 p-4 rounded-md text-center">
      <div className="text-3xl font-bold text-purple-800">{number}</div>
      <div className="text-gray-600 text-sm">{text}</div>
    </div>
  );
};

export default About;