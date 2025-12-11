import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-900 sm:text-lg text-sm dark:text-white flex items-center'
                  : 'text-white sm:text-lg text-sm drop-shadow-lg flex items-center'
              }`}
            >
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1765388284/Gemini_Generated_Image_gj8p80gj8p80gj8p-removebg-preview_l3toor.png"
                className="sm:w-18 sm:h-18 w-8 h-8"
                alt="logo-profile"
              />
              Rahmat Adi Santoso - Dev
            </motion.div>
          </a>

          <div className="flex items-center gap-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`transition-colors duration-300 ${
                    scrolled
                      ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      : 'text-white/90 hover:text-white drop-shadow-lg'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="flex gap-2">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-6 pt-20">
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="py-4 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-b border-gray-200 dark:border-gray-800 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
