import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Check } from 'lucide-react';

const choices = [
  {
    left: 'Mountains 🏔️',
    right: 'Beach 🏖️',
    answer: 'left',
    note: 'Peace and fresh air win every time'
  },
  {
    left: 'Call 📞',
    right: 'Text 💬',
    answer: 'right',
    note: 'I express myself better in writing'
  },
  {
    left: 'Early Bird 🌅',
    right: 'Night Owl 🌙',
    answer: 'left',
    note: 'My best hours are in the morning'
  },
  {
    left: 'Talking to Me 😊',
    right: 'Sleeping 😴',
    answer: 'left',
    note: 'I enjoy strategy more than speed'
  },
  {
    left: 'Plan Ahead 📅',
    right: 'Be Spontaneous 🎲',
    answer: 'left',
    note: 'A little planning makes life easier'
  },
  {
    left: 'Home Cooking 🍲',
    right: 'Eating Out 🍽️',
    answer: 'left',
    note: 'Simple homemade food is hard to beat'
  },
  {
    left: 'Deep Conversations 🗣️',
    right: 'Small Talk 😄',
    answer: 'left',
    note: 'I enjoy meaningful discussions'
  },
  {
    left: 'Quality Time ❤️',
    right: 'Expensive Gifts 🎁',
    answer: 'left',
    note: 'Time and attention mean more to me'
  }
];
export function ThisOrThat() {
  const [revealed, setRevealed] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (!revealed.includes(index)) {
      setRevealed(prev => [...prev, index]);
    }
  };

  return (
    <Section>
      <SectionTitle subtitle="Click to reveal my choices">This or That</SectionTitle>

      <div className="max-w-3xl mx-auto space-y-6">
        {choices.map((choice, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <motion.button
                className={`flex-1 p-5 rounded-2xl border transition-all duration-300 ${
                  revealed.includes(index) && choice.answer === 'left'
                    ? 'bg-emerald-500/20 border-emerald-500/50 dark:border-emerald-400/50'
                    : 'bg-white/70 dark:bg-gray-800/70 border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/70 dark:hover:bg-gray-700/70'
                }`}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100 text-center">
                  {choice.left}
                </p>
                <AnimatePresence>
                  {revealed.includes(index) && choice.answer === 'left' && (
                    <motion.div
                      className="flex justify-center mt-2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">VS</span>

              <motion.button
                className={`flex-1 p-5 rounded-2xl border transition-all duration-300 ${
                  revealed.includes(index) && choice.answer === 'right'
                    ? 'bg-emerald-500/20 border-emerald-500/50 dark:border-emerald-400/50'
                    : 'bg-white/70 dark:bg-gray-800/70 border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/70 dark:hover:bg-gray-700/70'
                }`}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100 text-center">
                  {choice.right}
                </p>
                <AnimatePresence>
                  {revealed.includes(index) && choice.answer === 'right' && (
                    <motion.div
                      className="flex justify-center mt-2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <AnimatePresence>
              {revealed.includes(index) && (
                <motion.div
                  className="mt-3 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                    {choice.note}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
