import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ProjectDetail } from './ProjectDetail';

type ProjectType = 'learn' | 'real';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: ProjectType;
  tech: string[];
  github?: string;
  demo?: string;
  fullDescription: string;
  features: string[];
  media: {
    type: 'image' | 'video';
    src: string;
  }[];

  workflow: {
    step: string;
    description: string;
  }[];
}

export function Projects() {
  const [activeType, setActiveType] = useState<ProjectType | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Putri Jaya Rotan WebSite',
      description:
        'Modern website for handcrafted rattan furniture, designed to help customers browse products easily',
      image: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765383898/logo_simple_dcylht.png',
      type: 'real',
      tech: ['Next.js', 'Node.js', 'MySQL', 'Nest.js'],
      github: 'https://github.com/rahmatadidi',
      demo: 'https://www.putrijayarotan.com/',
      fullDescription:
        'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products and orders.',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Midtrans payment integration',
        'Order tracking and history',
        'Admin dashboard',
        'Google login with Oauth',
        'Responsive design for all devices',
        'Review realtime from google review with SerpApi',
        'Chatbot with open ai',
      ],
      media: [
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765446984/2025-12-10_4_eyh9lw.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447770/2025-12-11_5_rniqfb.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447850/2025-12-10_12_du5eza.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447714/2025-12-10_14_jfncz4.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447746/2025-12-10_15_z8ctvw.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447015/2025-12-10_18_m8rbqu.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447042/2025-12-10_17_xtueso.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447279/2025-12-10_7_mgzzqv.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447081/2025-12-10_9_jjjrf6.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447123/2025-12-10_6_dpphmh.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447251/2025-12-10_5_vkx5kc.png',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765447306/2025-12-10_2_yzxq2l.png',
        },
      ],
      workflow: [
        {
          step: 'User Login',
          description:
            'Users can log in using Google account authentication. JWT tokens are used for secure session management.',
        },
        {
          step: 'Browse & Search Products',
          description:
            'Users can browse through product categories, use advanced filters, and search for specific items. Products are displayed with detailed information and images.',
        },
        {
          step: 'Add to Cart',
          description:
            'Selected items are added to the shopping cart where users can adjust quantities, apply discount codes, and see real-time price calculations.',
        },
        {
          step: 'Checkout Process',
          description:
            'Users enter payment details. Integration with Midtrans ensures secure payment processing.',
        },
        {
          step: 'Order Confirmation & Tracking',
          description:
            'After successful payment, users receive order confirmation and can track their order status in real-time through their account dashboard.',
        },
      ],
    },
    {
      id: 2,
      title: 'Clash of Song Game App',
      description:
        'A mobile multiplayer music-guessing game where players compete in real time and earn scores for each correct answer',
      image: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765387433/COS-logo_wxpa9i.png',
      type: 'learn',
      tech: ['ReactNative', 'Tailwind', 'Nest', 'Socket Io'],
      github: 'https://github.com/rahmatadidi/trivia-fe',
      demo: '',
      fullDescription:
        'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products and orders.',
      features: [
        'Google Authentication for fast and secure login',
        'Custom username and avatar selection (free & premium)',
        'Diamond virtual currency system with Midtrans payment integration',
        'Real-time matchmaking and multiplayer lobby using Socket.io',
        'Randomized music-guessing gameplay with synchronized audio for all players',
        'Live scoring system and competitive leaderboard',
        'Avatar purchasing and inventory system',
        'Smooth transitions and optimized performance for mobile devices',
      ],
      media: [
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765476742/6147908641416659601_krgzcd.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765476739/6147908641416659592_wvgd6u.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765476738/6147908641416659591_hvnmtj.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765476748/6163334063704882482_pxhwbl.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765476751/6163334063704882505_sabavj.jpg',
        },
        {
          type: 'video',
          src: 'https://res.cloudinary.com/ddfdf66n7/video/upload/v1765478302/1212_m6wjyq.mp4',
        },
      ],
      workflow: [
        {
          step: 'Google Login & Account Setup',
          description:
            'Users sign in using Google OAuth. New users are prompted to choose a username and select an avatar before entering the game.',
        },
        {
          step: 'Avatar Selection & Diamond Purchase',
          description:
            'Players choose between free or premium avatars. If players lack diamonds, they can top up using Midtrans payment integration.',
        },
        {
          step: 'Matchmaking System',
          description:
            'Players join a matchmaking queue. Once enough participants join, the game creates a room and all players proceed to the lobby.',
        },
        {
          step: 'Real-Time Gameplay',
          description:
            'A random song clip is played for all players. Each player submits their guess in real time via Socket.io. Correct answers grant points.',
        },
        {
          step: 'Score Summary & Winner Announcement',
          description:
            'At the end of all rounds, the system calculates total points and displays the final results. The highest-scoring player becomes the winner.',
        },
      ],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'Modern portfolio featuring smooth animations, dark mode, and a fully responsive design. Built with Next.js, Motion, and Tailwind CSS for a clean and engaging experience.',
      image: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765386844/2025-12-11_egtb1g.png',
      type: 'real',
      tech: ['Next', 'Motion', 'Tailwind'],
      github: '#',
      demo: '#',

      fullDescription:
        'A modern and visually engaging personal portfolio website built with Next.js, Tailwind CSS, and Motion. It showcases projects, skills, and experience with smooth animations, responsive layouts, and a clean UI. Designed to highlight personal branding and improve professional presentation.',

      features: [
        'Smooth and modern animations powered by Motion',
        'Fully responsive UI optimized for all screen sizes',
        'Dark mode support with automatic theme switching',
        'Modular and scalable component architecture',
        'Project showcase with detailed modal previews',
        'Clean and visually consistent design system',
      ],

      media: [
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765386844/2025-12-11_egtb1g.png',
        },
      ],

      workflow: [
        {
          step: 'Design & Structure Planning',
          description:
            'Initial planning of website sections including Hero, About, Skills, Projects, and Contact. A clean and modern layout was designed to improve readability and user experience.',
        },
        {
          step: 'Next.js Setup & Component Development',
          description:
            'The project structure was created using Next.js. Reusable UI components were built using Tailwind CSS, ensuring consistency and scalability across the UI.',
        },
        {
          step: 'Implementing Animations',
          description:
            'Smooth and fluid animations were added using Motion, enhancing the interactive experience without sacrificing performance.',
        },
        {
          step: 'Responsive & Dark Mode Optimization',
          description:
            'Layouts were optimized for mobile, tablet, and desktop. Dark mode support was added with theme persistence for consistent user preferences.',
        },
      ],
    },
    {
      id: 4,
      title: 'Lakoe Platform E-Commerce',
      description:
        'Lakoe is a modern e-commerce platform that allows users to shop seamlessly with secure authentication, online payments, and real-time order tracking.',
      image:
        'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765386450/akoelakoe-logo_wi5yun.png',
      type: 'learn',
      tech: ['React', 'Nest', 'Tailwind', 'PostgreSQL'],
      github: 'https://github.com/chloeder/akoelakoe-fe.git',
      demo: '',

      fullDescription:
        'Lakoe is a full-featured e-commerce web application that supports product browsing, cart management, secure payments through Midtrans, and real-time shipment tracking with Biteship. Users can authenticate using email/password or Google login, providing a smooth and modern shopping experience from start to finish.',

      features: [
        'Email/password authentication and Google login',
        'Product catalog with search, categories, and filtering',
        'Shopping cart with quantity management',
        'Checkout system integrated with Midtrans for secure payment processing',
        'Order tracking powered by Biteship APIs',
        'Admin panel for managing products, orders, and stock',
        'Real-time status updates for orders and payments',
        'Fully responsive UI optimized for all devices',
      ],

      media: [
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765496147/6100481705568747279_xooen9.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765496210/6100481705568747280_mrtmyq.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765496042/6104783020826409911_c5kj0l.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765496180/6125051744590347652_cbtsyn.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765496075/6125051744590347653_bxdnqo.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765496042/6104783020826409926_dnsoe5.jpg',
        },
        {
          type: 'image',
          src: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765496042/6104985305196116842_m7vjh5.jpg',
        },
      ],

      workflow: [
        {
          step: 'User Authentication',
          description:
            'Users can register using email/password or instantly log in with Google OAuth. JWT is used for secure and stateless session handling.',
        },
        {
          step: 'Product Browsing',
          description:
            'Users can browse available products, search items, filter by categories, and view detailed product pages including images and stock status.',
        },
        {
          step: 'Cart Management',
          description:
            'Selected items are added to the shopping cart where users can modify quantities and view dynamic price calculations before checkout.',
        },
        {
          step: 'Checkout & Payment',
          description:
            'During checkout, users provide shipping information. Payments are processed via Midtrans (Snap / Core API) for secure and verified transactions.',
        },
        {
          step: 'Order Tracking',
          description:
            'After payment, orders are automatically registered in Biteship where users can track shipping status in real-time through their dashboard.',
        },
      ],
    },
  ];

  const filteredProjects =
    activeType === 'all' ? projects : projects.filter((p) => p.type === activeType);

  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">
              A collection of my work, from learning projects to real-world applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3 mb-12 overflow-x-auto md:overflow-visible overflow-y-hidden justify-start md:justify-center px-2 scrollbar-none"
          >
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'real', label: 'Real Projects' },
              { value: 'learn', label: 'Learning Projects' },
            ].map((tab) => (
              <motion.button
                key={tab.value}
                onClick={() => setActiveType(tab.value as ProjectType | 'all')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 md:px-6 md:py-3 rounded-full whitespace-nowrap transition-all ${
                  activeType === tab.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSelectedProject(project)}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer"
                >
                  <div className="relative h-54 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          project.type === 'real'
                            ? 'bg-green-500 text-white'
                            : 'bg-yellow-500 text-gray-900'
                        }`}
                      >
                        {project.type === 'real' ? 'Real' : 'Learning'}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col h-1/2">
                    <h3 className="text-xl mb-2 text-gray-900 dark:text-white">{project.title}</h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                    {/* Wrap tech + buttons in 1 group */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons ALWAYS at bottom and closer */}
                      <div className="flex gap-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            <FaGithub className="w-5 h-5" />
                            Code
                          </motion.a>
                        )}

                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
