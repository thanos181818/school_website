import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import img1 from './img1.png/'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top bar */}
      <div className="bg-purple-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">+91 22 1234 5678</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-1" />
              <span className="text-sm">admissions@billabonghighschool.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="text-sm hover:text-purple-300">Alumni</Link>
            <Link to="#" className="text-sm hover:text-purple-300">Careers</Link>
            <Link to="#" className="text-sm hover:text-purple-300">Pay Fees</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={img1}
              alt="Billabong High School" 
              className="h-12 md:h-16" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItem title="Home" link="/" />
            <NavItem title="About Us" link="/about" hasDropdown>
              <DropdownItem link="/about/history" title="Our History" />
              <DropdownItem link="/about/vision" title="Vision & Mission" />
              <DropdownItem link="/about/leadership" title="Leadership" />
            </NavItem>
            <NavItem title="Academics" link="/academics" hasDropdown>
              <DropdownItem link="/academics/cbse" title="CBSE Curriculum" />
              <DropdownItem link="/academics/igcse" title="IGCSE Curriculum" />
              <DropdownItem link="/academics/approach" title="Teaching Approach" />
            </NavItem>
            <NavItem title="Campus Life" link="/campus" hasDropdown>
              <DropdownItem link="/campus/facilities" title="Facilities" />
              <DropdownItem link="/campus/activities" title="Co-curricular" />
              <DropdownItem link="/campus/sports" title="Sports" />
            </NavItem>
            <NavItem title="Admissions" link="/admissions" />
            <NavItem title="Gallery" link="/gallery" />
            <NavItem title="Contact" link="/contact" />
          </div>

          {/* Mobile Navigation Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-purple-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
          <div className="container mx-auto px-4 py-4">
            <MobileNavItem title="Home" link="/" />
            <MobileNavItem title="About Us" link="/about" />
            <MobileNavItem title="Academics" link="/academics" />
            <MobileNavItem title="Campus Life" link="/campus" />
            <MobileNavItem title="Admissions" link="/admissions" />
            <MobileNavItem title="Gallery" link="/gallery" />
            <MobileNavItem title="Contact" link="/contact" />
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center my-2">
                <Phone size={16} className="mr-2 text-purple-800" />
                <span className="text-sm">+91 22 1234 5678</span>
              </div>
              <div className="flex items-center my-2">
                <Mail size={16} className="mr-2 text-purple-800" />
                <span className="text-sm">admissions@billabonghighschool.com</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Desktop Navigation Item
const NavItem = ({ title, link, hasDropdown, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={link} 
        className="text-gray-800 hover:text-purple-800 flex items-center font-medium"
      >
        {title}
        {hasDropdown && <ChevronDown size={18} className="ml-1" />}
      </Link>
      {hasDropdown && (
        <div 
          className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// Dropdown Item
const DropdownItem = ({ link, title }) => {
  return (
    <Link 
      to={link} 
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-800"
    >
      {title}
    </Link>
  );
};

// Mobile Navigation Item
const MobileNavItem = ({ title, link }) => {
  return (
    <Link 
      to={link} 
      className="block py-2 text-gray-800 font-medium border-b border-gray-100"
    >
      {title}
    </Link>
  );
};

export default Header;