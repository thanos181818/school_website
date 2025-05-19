import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const Calendar = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">School Calendar</h1>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Stay updated with important dates, events, and activities throughout the academic year.
          </p>
        </div>

        {/* Current Month Overview */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-purple-800">{currentMonth}</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white rounded-md hover:bg-gray-50">Previous</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Next</button>
            </div>
          </div>

          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">Academic Calendar 2025-26</h2>
          
          <div className="grid gap-8">
            {academicCalendar.map((term, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{term.name}</h3>
                <div className="grid gap-4">
                  {term.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start">
                      <div className="bg-purple-100 rounded-md p-2 mr-4">
                        <CalendarIcon className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{event.name}</h4>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Download */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            <CalendarIcon size={20} className="mr-2" />
            Download Complete Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ title, date, time, location, type }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className={`w-16 h-16 ${type === 'academic' ? 'bg-blue-100' : type === 'cultural' ? 'bg-purple-100' : 'bg-green-100'} rounded-lg flex items-center justify-center mr-4`}>
          <CalendarIcon size={24} className={type === 'academic' ? 'text-blue-600' : type === 'cultural' ? 'text-purple-600' : 'text-green-600'} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <CalendarIcon size={16} className="mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const upcomingEvents = [
  {
    title: "Parent-Teacher Meeting",
    date: "March 15, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "School Auditorium",
    type: "academic"
  },
  {
    title: "Annual Sports Day",
    date: "March 20, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "School Grounds",
    type: "sports"
  },
  {
    title: "Cultural Festival",
    date: "March 25, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "School Auditorium",
    type: "cultural"
  }
];

const academicCalendar = [
  {
    name: "Term 1 (April - July)",
    events: [
      { name: "School Reopens", date: "April 1, 2025" },
      { name: "First Unit Test", date: "May 15-20, 2025" },
      { name: "Summer Break Begins", date: "May 25, 2025" }
    ]
  },
  {
    name: "Term 2 (July - September)",
    events: [
      { name: "School Reopens", date: "July 1, 2025" },
      { name: "Independence Day Celebration", date: "August 15, 2025" },
      { name: "Half-Yearly Examinations", date: "September 15-25, 2025" }
    ]
  },
  {
    name: "Term 3 (October - December)",
    events: [
      { name: "Diwali Break", date: "October 20-30, 2025" },
      { name: "Annual Sports Day", date: "November 15, 2025" },
      { name: "Christmas Celebration", date: "December 23, 2025" }
    ]
  },
  {
    name: "Term 4 (January - March)",
    events: [
      { name: "Republic Day Celebration", date: "January 26, 2026" },
      { name: "Annual Day", date: "February 15, 2026" },
      { name: "Final Examinations", date: "March 1-15, 2026" }
    ]
  }
];

export default Calendar;