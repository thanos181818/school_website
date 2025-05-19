import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://via.placeholder.com/180x60?text=Billabong+Logo" 
                alt="Billabong High School" 
                className="h-12 md:h-16" 
              />
            </Link>
            <p className="text-purple-200 mb-6">
              Billabong High School Malad is dedicated to providing quality education that nurtures creativity, critical thinking, and character in a supportive environment.
            </p>
            <div className="flex space-x-4">
              <SocialIcon name="Facebook" type="f" />
              <SocialIcon name="Twitter" type="t" />
              <SocialIcon name="Instagram" type="i" />
              <SocialIcon name="YouTube" type="y" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink text="About Us" link="/about" />
              <FooterLink text="Academics" link="/academics" />
              <FooterLink text="Admissions" link="/admissions" />
              <FooterLink text="Campus Life" link="/campus" />
              <FooterLink text="News & Events" link="/news" />
              <FooterLink text="Careers" link="/careers" />
              <FooterLink text="Contact Us" link="/contact" />
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Resources</h3>
            <ul className="space-y-3">
              <FooterLink text="School Calendar" link="/calendar" />
              <FooterLink text="Fee Structure" link="/fees" />
              <FooterLink text="School Policies" link="/policies" />
              <FooterLink text="Parent Portal" link="/parent-portal" />
              <FooterLink text="Alumni Network" link="/alumni" />
              <FooterLink text="FAQ" link="/faq" />
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <address className="not-italic text-purple-200 mb-6 space-y-3">
              <p>Billabong High International School</p>
              <p>Bhoomi Park, Bafhira Nagar, Near Malvani Fire Brigade, Malad(W)</p>
              <p>Mumbai, Maharashtra, 400095</p>
              <p className="pt-2">Main: +91 7045958084</p>
              <p className="pt-2">Admissions: +91 7045954083</p>
              <p>Email: info@billabonghighschool.com</p>
            </address>

            <div className="mt-6">
              <Link 
                to="#contact" 
                className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-md transition-colors"
              >
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-purple-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Billabong High School, Malad. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="text-purple-300 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-purple-300 hover:text-white text-sm">Terms of Use</Link>
            <Link to="/sitemap" className="text-purple-300 hover:text-white text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text, link }) => {
  return (
    <li>
      <Link to={link} className="text-purple-200 hover:text-white transition-colors flex items-center">
        <span className="mr-2">•</span>
        {text}
      </Link>
    </li>
  );
};

const SocialIcon = ({ name, type }) => {
  return (
    <a 
      href="#" 
      className="w-9 h-9 bg-purple-800 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors"
      aria-label={name}
    >
      {type}
    </a>
  );
};

export default Footer;