
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-700" },
    { name: "Redux", level: 85, color: "from-purple-500 to-indigo-500" },
    { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
    { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-green-500" },
    { name: "Next.js", level: 75, color: "from-gray-700 to-black" },
    { name: "Node.js", level: 70, color: "from-green-600 to-green-700" },
    { name: "MongoDB", level: 75, color: "from-green-500 to-teal-600" },
    { name: "Git", level: 85, color: "from-red-500 to-pink-500" }
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
    <section id="skills" className="py-20 px-4 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Additional Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border-l-4 border-purple-500 hover:shadow-md transition-all duration-300"
                  >
                    <p className="text-gray-700 font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Internships</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-gray-800 mb-2">ShapeAI - Full Stack Web Development</h4>
                  <p className="text-gray-600 text-sm mb-2">3 months • HTML, CSS, JS, React.js, Node.js, MongoDB, Express.js</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-gray-800 mb-2">Universal IT Solution - Web Design</h4>
                  <p className="text-gray-600 text-sm mb-2">15 days • HTML, CSS, JS, AJAX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
