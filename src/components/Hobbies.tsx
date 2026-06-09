import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { MessageCircle, Book, PenTool, Crown, Music, Lightbulb, Rocket, Heart } from 'lucide-react';

const hobbies = [
  { name: 'Talking', icon: MessageCircle },
  { name: 'Reading', icon: Book },
  { name: 'Writing', icon: PenTool },
  { name: 'Chess', icon: Crown },
  { name: 'Flute', icon: Music },
  { name: 'Learning New Things', icon: Lightbulb },
  { name: 'Building Side Projects', icon: Rocket },
];

export function Hobbies() {
  return (
    <Section>
      <SectionTitle subtitle="What I do when I'm not coding">Hobbies</SectionTitle>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              className="flex items-center gap-3 px-5 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <hobby.icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-gray-700 dark:text-gray-200 font-medium">{hobby.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full border border-rose-300/30 dark:border-rose-500/30">
            <Heart className="w-5 h-5 text-rose-500" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Talking to Divya
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 italic">
              (currently in beta testing 😄)
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
