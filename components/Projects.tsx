import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

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
}

export function Projects() {
  const [activeType, setActiveType] = useState<ProjectType | 'all'>('all');

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
    },
    {
      id: 2,
      title: 'Lakoe Platform E-Commerce',
      description:
        'Lakoe is a sales application, designed to streamline and enhance the sales process with a user-friendly interface and robust backend support',
      image:
        'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765386450/akoelakoe-logo_wi5yun.png',
      type: 'learn',
      tech: ['React', 'Nest', 'Tailwind', 'PostgreeSQL'],
      github: 'https://github.com/chloeder/akoelakoe-fe.git',
      demo: '',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'Modern portfolio featuring smooth animations, dark mode, and a fully responsive design. Built with Next, and Tailwind CSS for a clean and engaging experience',
      image: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765386844/2025-12-11_egtb1g.png',
      type: 'real',
      tech: ['Next', 'Motion', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'DumbSound WebApp',
      description:
        'A music streaming web app built as a learning project to master full-stack development using Vue and NestJS. ',
      image: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765387096/DS-logo_itlajq.png',
      type: 'learn',
      tech: ['Vue', 'Nest'],
      github: 'https://github.com/rahmatadidi/dumbsound',
      demo: '',
    },
    {
      id: 6,
      title: 'Clash of Song Game App',
      description:
        'A mobile multiplayer music-guessing game where players compete in real time and earn scores for each correct answer',
      image: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765387433/COS-logo_wxpa9i.png',
      type: 'learn',
      tech: ['ReactNative', 'Tailwind', 'Nest', 'Socket Io'],
      github: 'https://github.com/rahmatadidi/trivia-fe',
      demo: '',
    },
  ];

  const filteredProjects =
    activeType === 'all' ? projects : projects.filter((p) => p.type === activeType);

  return (
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
          className="flex gap-3 mb-12 overflow-x-auto justify-start md:justify-center px-2 scrollbar-none"
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
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
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

                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
