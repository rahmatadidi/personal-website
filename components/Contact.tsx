import { motion } from 'motion/react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';
import { IoShareSocialOutline } from 'react-icons/io5';
export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing
                new projects and opportunities.
              </p>
            </div>

            {[
              { icon: BiLogoGmail, label: 'Email', value: 'rahmat.adi1052@gmail.com' },
              { icon: IoShareSocialOutline, label: 'Instagram/Tiktok', value: '@rahmatadi.di' },
              { icon: FaGithub, label: 'Github', value: 'rahmatadidi' },
              { icon: IoIosPin, label: 'Location', value: 'Jakarta, Indonesia' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="p-3 bg-blue-600 rounded-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                  <p className="text-gray-900 dark:text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();

                const name = (document.getElementById('name') as HTMLInputElement).value;
                const email = (document.getElementById('email') as HTMLInputElement).value;
                const message = (document.getElementById('message') as HTMLTextAreaElement).value;

                const subject = `Pesan dari ${name} (${email})`;
                const body = `Halo Rahmat,
${message}

Terima kasih!
`;

                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rahmat.adi1052@gmail.com&su=${encodeURIComponent(
                  subject,
                )}&body=${encodeURIComponent(body)}`;

                window.open(gmailUrl, '_blank');
              }}
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400"
        >
          <p>&copy; 2025 Rahmmat Adi Santoso. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
