import { motion } from 'motion/react';

interface TechItem {
  name: string;
  icon: string;
}

export function About() {
  const frontendTech: TechItem[] = [
    { name: 'JavaScript', icon: 'JavaScript' },
    { name: 'TypeScript', icon: 'TypeScript' },
    { name: 'React', icon: 'React' },
    { name: 'Next.js', icon: 'NextJS' },
    { name: 'Tailwind CSS', icon: 'TailwindCSS' },
    { name: 'Dart', icon: 'Dart' },
    { name: 'HTML5', icon: 'HTML' },
    { name: 'CSS3', icon: 'CSS' },
    { name: 'Flutter', icon: 'Flutter' },
    { name: 'Vue', icon: 'VueJS' },
  ];

  const backendTech: TechItem[] = [
    { name: 'Node.js', icon: 'NodeJS' },
    { name: 'Nest.js', icon: 'NestJS' },
    { name: 'PHP', icon: 'PHP' },
    { name: 'Express', icon: 'ExpressJS' },
    { name: 'MongoDB', icon: 'MongoDB' },
    { name: 'PostgreSQL', icon: 'PostgreSQL' },
    { name: 'MySQL', icon: 'MySQL' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Profile Image - overlapping from hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center -mt-32 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-gray-50 dark:border-gray-900 shadow-2xl">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1765369105/Gemini_Generated_Image_7pd4dz7pd4dz7pd4_m760a8.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-600/30 dark:border-blue-400/30"
              style={{
                width: 'calc(100% + 20px)',
                height: 'calc(100% + 20px)',
                top: '-10px',
                left: '-10px',
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            I'm a full-stack developer who enjoys building modern, clean, and efficient web
            applications. I focus on creating smooth user experiences using technologies like React,
            Next.js, and Tailwind CSS.
          </p>

          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            On the backend, I work with Node.js, Nest.js, and relational databases such as MySQL and
            PostgreSQL to build clear, maintainable, and scalable API structures. I love learning
            new tools and continuously improving the way I design and develop applications.
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group"
                >
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800 group-hover:border-blue-400 dark:group-hover:border-blue-600 group-hover:shadow-md transition-all">
                    <img
                      src={`/icons/${tech.icon}.svg`}
                      alt={tech.name}
                      className="w-5 h-5 object-contain opacity-80"
                    />

                    <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group"
                >
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border-2 border-green-200 dark:border-green-800 group-hover:border-green-400 dark:group-hover:border-green-600 group-hover:shadow-md transition-all">
                    <img
                      src={`/icons/${tech.icon}.svg`}
                      alt={tech.name}
                      className="w-5 h-5 object-contain opacity-80"
                    />
                    <span className="text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
