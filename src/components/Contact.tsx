import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We'd love to hear from you. Reach out to us for admissions inquiries, campus visits, or any questions about our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold text-purple-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin size={24} className="text-purple-600" />}
                  title="Address"
                  details={[
                    "Billabong High International School", 
                    "Bhoomi Park, Bafhira Nagar, Near Malvani Fire Brigade, Malad(W)", 
                    "Mumbai, Maharashtra, 400095"
                  ]}
                />
                <ContactInfo 
                  icon={<Phone size={24} className="text-purple-600" />}
                  title="Phone"
                  details={[
                    "+91 7045958084 (Main)",
                    "+91 7045954083 (Admissions)"
                  ]}
                />
                <ContactInfo 
                  icon={<Mail size={24} className="text-purple-600" />}
                  title="Email"
                  details={[
                    "info@billabonghighschool.com",
                    "admissions@billabonghighschool.com"
                  ]}
                />
                <ContactInfo 
                  icon={<Clock size={24} className="text-purple-600" />}
                  title="Office Hours"
                  details={[
                    "Monday to Friday: 8:00 AM - 4:00 PM",
                    "Saturday: 9:00 AM - 12:00 PM",
                    "Sunday: Closed"
                  ]}
                />
              </div>

              {/* Social Media Icons */}
              <div className="mt-8">
                <h4 className="text-gray-800 font-medium mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition-colors">
                    <span className="sr-only">Facebook</span>
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-400 text-white flex items-center justify-center rounded-full hover:bg-purple-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    t
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition-colors">
                    <span className="sr-only">Instagram</span>
                    i
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition-colors">
                    <span className="sr-only">YouTube</span>
                    y
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold text-purple-800 mb-6">Send Us a Message</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="campus-visit">Campus Visit</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.832562911588!2d72.81873360964786!3d19.202514181953333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6bbdabc473b%3A0xf71260c4cd638418!2sBillabong%20International%20High%20School%2C%20Marve%20Rd%2C%20nr.%20Bafira%20Nagar%2C%20Malad%2C%20Jankalyan%20Nagar%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400095!5e0!3m2!1sen!2sin!4v1747675715858!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, details }) => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600">{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;