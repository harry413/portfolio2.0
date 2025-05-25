
import React, { useState, useEffect, useRef } from 'react';
//icons
import { FaReact,FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiSass,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: "C++",
      icon: <TbBrandCpp/>,
      color: "from-gray-200 to-orange-700",
      level: 92,
    },
    {
      name: "Html",
      icon: <SiHtml5 />,
      color: "from-orange-300 to-orange-700",
      level: 92,
    },
    {
      name: "Css",
      icon: <SiCss3 />,
      color: "from-cyan-600 to-blue-700",
      level: 96,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
      color: "from-yellow-400 to-yellow-600",
      level: 90,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-500 to-blue-700",
      level: 85,
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "from-cyan-400 to-blue-500",
      level: 95,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-gray-700 to-black",
      level: 80,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "from-purple-500 to-indigo-600",
      level: 75,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "from-teal-400 to-cyan-500",
      level: 90,
    },
    {
      name: "Node.js",
      icon: <FaNode />,
      color: "from-green-500 to-green-700",
      level: 70,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "from-green-400 to-teal-600",
      level: 65,
    },
    {
      name: "GSAP",
      icon: "GSAP",
      color: "from-green-400 to-lime-500",
      level: 80,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer />,
      color: "from-pink-500 to-rose-600",
      level: 85,
    },
    {
      name: "SASS",
      icon: <SiSass />,
      color: "from-pink-400 to-red-500",
      level: 88,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      color: "from-purple-600 to-blue-700",
      level: 92,
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      color: "from-gray-600 to-gray-800",
      level: 90,
    },
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

  const getBubbleSize = (level: number) => {
    const baseSize = 60;
    const maxSize = 80;
    return baseSize + (level / 100) * (maxSize - baseSize);
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4">
            <span className="text-gray-300 dark:text-gray-700">MY</span>
            <span className="text-gray-800 dark:text-white ml-4">SKILLS</span>
          </h2>
        </div>

        {/* Skills Bubble Section */}
        <div className="my-10">
          <div className="relative min-h-[500px] bg-gradient-to-br from-gray-900 to-purple-900 dark:from-gray-800 dark:to-purple-800 rounded-3xl overflow-hidden p-8">
            {/* Background animation */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${4 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            {/* Skill Bubbles */}
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 min-h-[400px] backdrop-blur-xs">
              {skills.map((skill, index) => {
                const size = getBubbleSize(skill.level);
                return (
                  <div
                    key={skill.name}
                    className={`relative transition-all duration-1000 ${
                      isVisible
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-0 opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                  >
                    <div
                      className={`group cursor-pointer w-full h-full rounded-full bg-gradient-to-br ${skill.color} 
                        flex flex-col items-center justify-center text-white font-bold shadow-2xl 
                        hover:scale-110 transition-all duration-300 hover:shadow-3xl animate-float
                        border-2 border-white/20 backdrop-blur-sm`}
                      style={{
                        animationDelay: `${index * 0.5}s`,
                        animationDuration: `${4 + (index % 3)}s`,
                      }}
                    >
                      <div className="text-xl mb-1">{skill.icon}</div>
                      {/* <div className="text-xs text-center px-2 leading-tight">
                        {skill.name}
                      </div> */}

                      {/* Hover tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/20 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animation: `float ${
                      3 + Math.random() * 3
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 
                  rounded-lg p-4 border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 
                  transform hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                style={{
                  transitionDelay: `${(index + skills.length) * 100}ms`,
                }}
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
