"use client"
import { About } from '@/components/About';
import { BackToTop } from '@/components/BackTop';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Projects } from '@/components/Projects';
import { useState, useEffect } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <BackToTop/>
    </div>
  );
}

export default App;
