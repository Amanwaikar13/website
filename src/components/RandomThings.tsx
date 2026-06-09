import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Coffee, Bug, Lightbulb, Brain, Heart, MessageCircle, Sparkles } from 'lucide-react';

const things = [
  { text: 'I believe consistent effort matters more than motivation.', icon: Sparkles },
  { text: 'Family, health, and peace of mind always come before work.', icon: Heart },
  { text: 'I prefer honest conversations over playing mind games.', icon: MessageCircle },
  { text: 'I enjoy learning new things, whether it is technology, music, or life skills.', icon: Lightbulb },
  { text: 'I like solving problems instead of complaining about them.', icon: Brain },
  { text: 'A cup of Coffee with you can fix most bad days.', icon: Coffee },
  { text: 'I value kindness, respect, and loyalty in relationships.', icon: Heart },
  { text: 'I am ambitious, but I also believe in enjoying the journey.', icon: Sparkles },
];

export function RandomThings() {
  return (
    <Section className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionTitle subtitle="Just some thoughts">Random Things About Me</SectionTitle>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {things.map((thing, index) => (
          <motion.div
            key={thing.text}
            className="flex items-start gap-4 p-5 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex-shrink-0">
              <thing.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{thing.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
