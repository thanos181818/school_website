import React from 'react';
import { BookOpen, Award, Users, Lightbulb } from 'lucide-react';

const Academics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Programs</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Billabong High School offers internationally recognized curricula that prepare students for success in a rapidly changing world, focusing on conceptual understanding and application of knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <CurriculumCard
            title="CBSE Curriculum"
            description="The Central Board of Secondary Education (CBSE) curriculum focuses on holistic learning with emphasis on Indian values and global perspectives. Our CBSE program develops critical thinking, problem-solving abilities, and life skills."
            features={[
              "Comprehensive assessment system",
              "Focus on practical learning and applications",
              "Strong foundation in mathematics and science",
              "Integration of Indian culture and heritage"
            ]}
            image="https://images.pexels.com/photos/8617716/pexels-photo-8617716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
          <CurriculumCard
            title="IGCSE Curriculum"
            description="The International General Certificate of Secondary Education (IGCSE) is a globally recognized qualification that prepares students for international education. Our IGCSE program develops analytical skills and global competencies."
            features={[
              "International perspective and recognition",
              "Inquiry-based learning approach",
              "Emphasis on research and project work",
              "Preparation for higher education worldwide"
            ]}
            image="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          />
        </div>

        {/* Teaching Approach */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Teaching Approach</h3>
            <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ApproachCard
              icon={<BookOpen size={36} className="text-purple-600" />}
              title="Inquiry-Based Learning"
              description="We encourage students to ask questions, investigate concepts, and discover knowledge through guided inquiry."
            />
            <ApproachCard
              icon={<Award size={36} className="text-purple-600" />}
              title="Excellence-Driven"
              description="We set high standards and provide the support needed for each student to achieve their personal best."
            />
            <ApproachCard
              icon={<Users size={36} className="text-purple-600" />}
              title="Collaborative Environment"
              description="Students learn to work together, share ideas, and develop teamwork skills through group projects."
            />
            <ApproachCard
              icon={<Lightbulb size={36} className="text-purple-600" />}
              title="Creative Thinking"
              description="We nurture imagination and innovative thinking through arts, design, and problem-solving activities."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CurriculumCard = ({ title, description, features, image }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-purple-800 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ApproachCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Academics;