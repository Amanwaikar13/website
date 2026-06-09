import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';

const skills = [
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
  { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
  { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-500' },
  { name: 'Node.js', color: 'from-green-500 to-emerald-600' },
  { name: 'Git', color: 'from-orange-500 to-red-500' },
  { name: 'MongoDB', color: 'from-green-400 to-lime-500' },
];

export function DeveloperPlayground() {
  return (
    <Section className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionTitle subtitle="The tools I love working with">Developer Playground</SectionTitle>

      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`relative px-6 py-3 rounded-2xl bg-gradient-to-r ${skill.color} text-white font-semibold shadow-lg cursor-pointer overflow-hidden`}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center mt-8 text-gray-500 dark:text-gray-400 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        And always learning more...
      </motion.p>
    </Section>
  );
}
