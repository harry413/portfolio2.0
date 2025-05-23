
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600", x: 20, y: 25 },
    { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700", x: 70, y: 15 },
    { name: "React", icon: "⚛", color: "from-cyan-400 to-blue-500", x: 15, y: 60 },
    { name: "Next.js", icon: "N", color: "from-gray-700 to-black", x: 60, y: 70 },
    { name: "Redux", icon: "RX", color: "from-purple-500 to-indigo-600", x: 80, y: 45 },
    { name: "Tailwind CSS", icon: "TW", color: "from-teal-400 to-cyan-500", x: 40, y: 20 },
    { name: "Node.js", icon: "NODE", color: "from-green-500 to-green-700", x: 30, y: 80 },
    { name: "MongoDB", icon: "DB", color: "from-green-400 to-teal-600", x: 85, y: 25 },
    { name: "GSAP", icon: "GS", color: "from-green-400 to-lime-500", x: 50, y: 50 },
    { name: "Framer Motion", icon: "FM", color: "from-pink-500 to-rose-600", x: 10, y: 40 },
    { name: "SASS", icon: "S", color: "from-pink-400 to-red-500", x: 75, y: 65 },
    { name: "Bootstrap", icon: "B", color: "from-purple-600 to-blue-700", x: 25, y: 10 }
  ];

  const certifications = [
    "Certified in Full Stack Web Development by ShapeAI",
    "Certified in Docker by ShapeAI", 
    "Certified in Web Design by Universal IT Solution"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4">
            <span className="text-gray-300 dark:text-gray-700">MY</span>
            <span className="text-gray-800 dark:text-white ml-4">STACK</span>
          </h2>
        </div>

        {/* Frontend Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-left">
            FRONTEND
          </h3>
          <div className="relative h-96 bg-gray-900 dark:bg-gray-800 rounded-2xl overflow-hidden">
            {/* Animated background dots */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gray-600 rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            {/* Skill Icons */}
            {skills.slice(0, 8).map((skill, index) => (
              <div
                key={skill.name}
                className={`absolute transform transition-all duration-1000 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div 
                  className={`relative group cursor-pointer`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-sm shadow-lg transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-left">
            BACKEND
          </h3>
          <div className="relative h-64 bg-gray-900 dark:bg-gray-800 rounded-2xl overflow-hidden">
            {/* Backend Skills */}
            {skills.slice(8).map((skill, index) => (
              <div
                key={skill.name}
                className={`absolute transform transition-all duration-1000 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                  left: `${(index + 1) * 20}%`,
                  top: '40%',
                  transitionDelay: `${(index + 8) * 200}ms`
                }}
              >
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-sm shadow-lg transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 rounded-lg p-4 border-l-4 border-purple-500 hover:shadow-md transition-all duration-300"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
