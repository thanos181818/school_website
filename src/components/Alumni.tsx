import React from 'react';
import { Award, Users, MapPin, Building, Mail, Calendar as CalendarIcon } from 'lucide-react';

const Alumni = () => {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Alumni Network</h1>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Connect with fellow Billabong alumni, share your success stories, and stay involved with your alma mater.
          </p>
        </div>

        {/* Featured Alumni */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-purple-800 mb-8">Notable Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <AlumniCard key={index} {...alumni} />
            ))}
          </div>
        </div>

        {/* Alumni Benefits */}
        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-purple-800 mb-8">Alumni Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-purple-800 mb-8">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Alumni Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ways to Contribute</h3>
              <div className="space-y-4">
                {waysToContribute.map((way, index) => (
                  <ContributionCard key={index} {...way} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Join Alumni Network */}
        <div className="bg-purple-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Alumni Network</h2>
          <p className="mb-6">Stay connected with your school and fellow alumni. Register today!</p>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-2 rounded-md text-gray-800"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 rounded-md text-gray-800"
              />
              <input
                type="text"
                placeholder="Graduation Year"
                className="px-4 py-2 rounded-md text-gray-800"
              />
              <input
                type="text"
                placeholder="Current Organization"
                className="px-4 py-2 rounded-md text-gray-800"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-purple-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const AlumniCard = ({ name, batch, profession, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-purple-600 mb-2">Batch of {batch}</p>
        <div className="flex items-center text-gray-600 mb-2">
          <Building size={16} className="mr-2" />
          <span>{profession}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span>{company}</span>
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const EventCard = ({ title, date, location }) => {
  return (
    <div className="bg-purple-50 rounded-lg p-4">
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="flex items-center text-gray-600 mb-1">
        <CalendarIcon size={16} className="mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin size={16} className="mr-2" />
        <span>{location}</span>
      </div>
    </div>
  );
};

const ContributionCard = ({ title, description }) => {
  return (
    <div className="bg-purple-50 rounded-lg p-4">
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const featuredAlumni = [
  {
    name: "Priya Sharma",
    batch: "2015",
    profession: "Software Engineer",
    company: "Google, Bangalore",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    name: "Rahul Mehta",
    batch: "2012",
    profession: "Investment Banker",
    company: "Morgan Stanley, Mumbai",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    name: "Anita Desai",
    batch: "2010",
    profession: "Medical Doctor",
    company: "Apollo Hospitals, Delhi",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const benefits = [
  {
    icon: <Award size={32} />,
    title: "Networking Opportunities",
    description: "Connect with successful alumni across various industries globally."
  },
  {
    icon: <Users size={32} />,
    title: "Mentorship Program",
    description: "Guide current students and share your professional experience."
  },
  {
    icon: <Mail size={32} />,
    title: "Regular Updates",
    description: "Stay informed about school news and alumni achievements."
  }
];

const upcomingEvents = [
  {
    title: "Annual Alumni Meet 2025",
    date: "December 20, 2025",
    location: "School Auditorium"
  },
  {
    title: "Career Guidance Workshop",
    date: "September 15, 2025",
    location: "Conference Hall"
  },
  {
    title: "Alumni Sports Tournament",
    date: "October 10, 2025",
    location: "School Grounds"
  }
];

const waysToContribute = [
  {
    title: "Guest Lectures",
    description: "Share your expertise and experiences with current students."
  },
  {
    title: "Internship Opportunities",
    description: "Offer internships to students at your organization."
  },
  {
    title: "Scholarship Fund",
    description: "Contribute to the alumni scholarship fund for deserving students."
  }
];

export default Alumni;