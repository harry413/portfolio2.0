
import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white/5 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>

          {/* Experience Item */}
          <div className="relative flex items-center justify-center mb-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg "></div>

            <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="glass-card-light dark:glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 md:mr-12 ">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 rounded-full p-2 mr-3">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Frontend Engineer
                  </h3>
                </div>

                <h4 className="text-xl font-semibold text-purple-600 mb-4">
                  Impetrosys Software Solution Pvt. Ltd
                </h4>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jan 2023 - Dec 2024</span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Indore, MP</span>
                </div>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Developed and maintained user interfaces using React,
                    ensuring responsive design and optimal performance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Collaborated with cross-functional teams to gather
                    requirements and translate them into Technical
                    Specifications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implemented state management using Redux to efficiently
                    manage application data
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Optimized application performance by identifying and
                    resolving bottlenecks, enhancing user experience
                  </li>
                </ul>
              </div>

              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Education Section */}
          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

            <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="hidden md:block"></div>

              <div className="glass-card-light dark:glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 md:ml-12">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Education
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600">
                      Bachelor of Technology (CS)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Mahakal Institute of Technology and Management, RGPV
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      CGPA: 7.55 • 2018-22
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-blue-600">
                      Higher Secondary
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Jawahar Navodaya Vidhyalaya, CBSE
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Result: 75% • 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
