import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    type: 'learn' | 'real';
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
  } | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-4xl text-gray-900 dark:text-white">{project.title}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    project.type === 'real'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-gray-900'
                  }`}
                >
                  {project.type === 'real' ? 'Real Project' : 'Learning Project'}
                </span>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                {project.fullDescription}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Main Image */}
            <div className="mb-12">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div className="mb-12">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Application Flow</h3>
              <div className="space-y-4">
                {project.workflow.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Step Number */}
                    <div className="shrink-0 w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white z-10">
                      {index + 1}
                    </div>

                    {/* Connector Line */}
                    {index < project.workflow.length - 1 && (
                      <div className="absolute left-5 top-10 w-0.5 h-full bg-linear-to-b from-blue-600 to-purple-600 opacity-30" />
                    )}

                    {/* Step Content */}
                    <div className="flex-1 pb-8">
                      <h4 className="text-xl mb-2 text-gray-900 dark:text-white">{step.step}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Project Screenshots</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.media.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-xl shadow-lg"
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={`${project.title} media ${index + 1}`}
                        className="w-full max-h-[500px] object-contain bg-gray-100 dark:bg-gray-800 rounded-lg"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        className="w-full max-h-[500px] object-contain bg-black rounded-lg"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
