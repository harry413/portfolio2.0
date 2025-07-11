
import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HARRY_ICONIFY",
      description:
        "Icons and Components as a Package using Next.js and Tailwind CSS",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/harry413/Harry_Iconfy",
      demo: "harry-iconify.vercel.app",
      period: "07/2024-Present",
      status: "Active",
    },
    {
      title: "CAR RENTAL",
      description: "Full-featured car rental web application with modern UI/UX",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/harry413/car-rental",
      demo: "car-rental-eight-amber.vercel.app",
      period: "05/2024 – 07/2024",
      status: "Completed",
    },
    {
      title: "ESTATE",
      description:
        "Real estate web application built with MERN stack technologies",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/harry413/estate_",
      demo: "https://estate-qcif6x4iw-sachin-patidars-projects.vercel.app/",
      period: "12/2023-01/2024",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card-light dark:glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "Active"
                      ? "bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-300"
                      : "bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300"
                  }`}
                >
                  {project.status}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.period}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-800/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700/50 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600/50 transition-all duration-200 group-hover:scale-105"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  href={project.demo ? `https://${project.demo}` : project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2  bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 group-hover:scale-105"
                >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
