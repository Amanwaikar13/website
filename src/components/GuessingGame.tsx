import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Eye, Shuffle, ChefHat, Sun, Smile } from 'lucide-react';

const questions = [
  { question: 'Introvert or Extrovert?', options: ['Introvert', 'Extrovert'], answer: 1, icon: Eye },
  { question: 'Planner or Spontaneous?', options: ['Planner', 'Spontaneous'], answer: 0, icon: Shuffle },
  { question: 'Sweet or Spicy?', options: ['Sweet', 'Spicy'], answer: 0, icon: ChefHat },
  { question: 'Morning Person or Night Owl?', options: ['Morning Person', 'Night Owl'], answer: 0, icon: Sun },
  { question: 'Serious or Funny?', options: ['Serious', 'Funny'], answer: 1, icon: Smile },
];

export function GuessingGame() {
  const [revealed, setRevealed] = useState<boolean[]>(Array(questions.length).fill(false));

  const handleAnswerClick = (index: number) => {
    if (!revealed[index]) {
      setRevealed(prev => {
        const newRevealed = [...prev];
        newRevealed[index] = true;
        return newRevealed;
      });
    }
  };

  return (
    <Section className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionTitle subtitle="Test your instincts!">Can You Guess Me?</SectionTitle>

      <div className="max-w-2xl mx-auto space-y-6">
        {questions.map((q, index) => (
          <motion.div
            key={q.question}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                <q.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {q.question}
              </h3>
            </div>

            <div className="flex gap-4">
              {q.options.map((option, optIndex) => (
                <motion.button
                  key={option}
                  className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    revealed[index]
                      ? optIndex === q.answer
                        ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                        : 'bg-gray-200/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                      : 'bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => handleAnswerClick(index)}
                  whileHover={!revealed[index] ? { scale: 1.02 } : {}}
                  whileTap={!revealed[index] ? { scale: 0.98 } : {}}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {revealed[index] && (
                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Correct! I'm more of a {q.options[q.answer].toLowerCase()} person
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
