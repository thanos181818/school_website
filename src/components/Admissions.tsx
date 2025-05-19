import React from 'react';
import { FileText, Calendar, Users, CheckCircle } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admissions</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Join the Billabong family and embark on a journey of academic excellence and holistic development. Admissions for the academic year 2025-26 are now open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold text-purple-800 mb-6">Admission Process</h3>
              
              <div className="space-y-6">
                <ProcessStep 
                  number="01" 
                  title="Application Submission" 
                  description="Complete the online application form and submit the required documents."
                  icon={<FileText className="text-purple-600" size={24} />}
                />
                <ProcessStep 
                  number="02" 
                  title="Entrance Assessment" 
                  description="Students undergo an age-appropriate assessment to evaluate their readiness."
                  icon={<Calendar className="text-purple-600" size={24} />}
                />
                <ProcessStep 
                  number="03" 
                  title="Parent-Student Interview" 
                  description="A meeting with the school leadership to understand mutual expectations."
                  icon={<Users className="text-purple-600" size={24} />}
                />
                <ProcessStep 
                  number="04" 
                  title="Admission Confirmation" 
                  description="Successful applicants receive an offer letter and complete the enrollment process."
                  icon={<CheckCircle className="text-purple-600" size={24} />}
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-purple-800 text-white rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Eligibility & Requirements</h3>
              
              <div className="space-y-4 mb-8">
                <RequirementItem text="Age-appropriate for the grade applying to" />
                <RequirementItem text="Previous academic records (if applicable)" />
                <RequirementItem text="Birth certificate" />
                <RequirementItem text="Transfer certificate (for students from other schools)" />
                <RequirementItem text="Passport-sized photographs" />
                <RequirementItem text="Residential proof" />
              </div>
              
              <a 
                href="#contact" 
                className="inline-block w-full bg-white text-purple-800 text-center font-medium py-3 px-6 rounded-md transition-all hover:bg-gray-100"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-purple-800 mb-6 text-center">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FaqItem 
              question="What is the ideal age for admission to Nursery?" 
              answer="Children who are 3 years old by June 30th of the academic year are eligible for Nursery admission."
            />
            <FaqItem 
              question="Does the school provide transportation services?" 
              answer="Yes, we provide transportation services covering major areas of Mumbai with GPS-enabled buses and trained staff."
            />
            <FaqItem 
              question="What is the student-teacher ratio at Billabong High School?" 
              answer="We maintain a low student-teacher ratio of approximately 20:1 to ensure personalized attention."
            />
            <FaqItem 
              question="Are there scholarships available for deserving students?" 
              answer="Yes, we offer merit-based scholarships to recognize and reward academic excellence and exceptional talent."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ number, title, description, icon }) => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0 flex items-start">
        <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <div className="flex items-center mb-1">
          <span className="text-sm font-semibold text-purple-600 mr-2">STEP {number}</span>
          <h4 className="text-xl font-medium text-gray-800">{title}</h4>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const RequirementItem = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="mr-3 text-purple-300">•</div>
      <p>{text}</p>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Admissions;