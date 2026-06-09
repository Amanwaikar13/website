import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Bug, RotateCcw, BookOpen, Heart, Sparkles, Lightbulb} from 'lucide-react';

const facts = [
  {
    text: 'I believe consistency matters more than motivation.',
    icon: Sparkles,
  },
  {
    text: 'I would rather solve a problem than complain about it.',
    icon: Lightbulb,
  },
  {
    text: 'I value honesty, respect, and clear communication.',
    icon: Heart,
  },
  {
    text: 'I am always try to available even when we are busy.',
    icon: BookOpen,
  },
];

export function FunFacts() {
  return (
    <Section>
      <SectionTitle subtitle="Don't take these too seriously">Fun Facts</SectionTitle>

      <div className="max-w-4xl mx-auto space-y-6">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.text}
            className="flex items-center gap-5 p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
              <fact.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              {fact.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
