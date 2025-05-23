
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import LoadingScreen from '../components/LoadingScreen';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-300">
        <Navigation />
        <main className="relative">
          <Hero scrollY={scrollY} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
