import { motion } from 'motion/react';

import { FaInstagram, FaGithub, FaTiktok } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { MdOutlineFileDownload } from 'react-icons/md';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1765370187/PHP_njivog.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-b from-transparent via-gray-50/50 dark:via-gray-900/50 to-gray-50 dark:to-gray-900"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl mb-6 text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rahmat Adi Santoso
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {/* Download CV */}

            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="cv/RahmatAdiSantoso_CV.pdf"
              download="RahmatAdiSantoso_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Download CV
              <MdOutlineFileDownload className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6 justify-center mt-12"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/rahmatadidi' },
              { icon: FaInstagram, href: 'https://www.instagram.com/rahmatadi.di/' },
              { icon: FaTiktok, href: 'https://www.tiktok.com/@rahmatadi.di' },
              {
                icon: BiLogoGmail,
                href: `https://mail.google.com/mail/?view=cm&fs=1&to=rahmat.adi1052@gmail.com&su=Kerja%20Sama%20Project&body=Halo%20Rahmat,%0A%0ASaya%20ingin%20berkolaborasi%20dengan%20Anda.%0A%0ATerima%20kasih!`,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
