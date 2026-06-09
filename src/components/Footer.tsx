import { motion } from 'framer-motion';
import { Section } from './Section';
import { Heart, Trophy } from 'lucide-react';

export function Footer() {
  return (
    <Section className="relative flex flex-col items-center justify-center text-center">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <div className="p-4 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full">
            <Heart className="w-8 h-8 text-rose-500" />
          </div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Thanks for visiting my little corner of the internet, Divya 😊
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          If you reached this far, congratulations. You now know more about me than most people do after months of conversation.
        </motion.p>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-300/30">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Achievement Unlocked: Reached the End!
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-gray-400 dark:text-gray-500">
              Made with ❤️ by Aman for Divya • 09 June 2026
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
