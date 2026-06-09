import { motion } from 'framer-motion';
import { Section } from './Section';

const floatingCards = [
  { text: 'Frontend Developer', emoji: '', delay: 0 },
  { text: 'Coffee + Chai Lover', emoji: '☕', delay: 0.1 },
{ text: 'Reading', emoji: '📚', delay: 0.2 },
{ text: 'Writing', emoji: '✍️', delay: 0.3 },
  { text: 'Chess', emoji: '♟️', delay: 0.2 },
  { text: 'Flute Learner', emoji: '🎶', delay: 0.3 },
  { text: 'I Prefer Taking Action Over Sitting Idle', emoji: '🔥', delay: 0.4 },
  { text: 'Passionate About Learning New Things', emoji: '📚', delay: 0.5 },
];

export function Hero() {
  return (
    <Section className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Hi Divya, I'm{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Aman
            </span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 20, 0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Frontend Developer, lifelong learner, Keep learning new things, occasional overthinker, and currently building websites instead of sending boring biodatas 😅
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {floatingCards.map((card) => (
            <motion.div
              key={card.text}
              className="px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + card.delay, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {card.text} {card.emoji}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-500 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
        </motion.div>
      </motion.div>
    </Section>
  );
}
