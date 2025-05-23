
import React from 'react';
import { Code, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Expertise",
      description: "Specialized in React.js with experience in Redux, JavaScript, and modern web technologies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Experienced in working with cross-functional teams to gather requirements and deliver solutions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Skilled at identifying bottlenecks and enhancing user experience through optimized applications"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am passionate about creating intuitive and engaging web experiences and continuously 
              seek to expand my skill set and stay updated with industry trends. I am eager to 
              contribute my knowledge and experience to exciting projects and collaborate with 
              like-minded professionals in the tech community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a Frontend Engineer at Impetrosys Software Solution, I developed and maintained 
              user interfaces using React, ensuring responsive design and optimal performance while 
              implementing state management using Redux to efficiently manage application data.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
            <div className="absolute inset-0 w-full h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">SP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Sachin Patidar</h3>
                <p className="text-gray-600">Frontend Engineer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
