import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Utensils, Activity, MessageCircle, Heart, Sparkles } from 'lucide-react';

const favorites = [
  {
    label: 'Favorite Food',
    value: 'Anything homemade and made with love 😄',
    icon: Utensils,
  },
  {
    label: 'Favorite Weekend',
    value: 'A mix of family time, relaxation, and exploring new places',
    icon: Activity,
  },
  {
    label: 'Favorite Conversation',
    value: 'The kind where hours pass and nobody notices',
    icon: MessageCircle,
  },
  {
    label: 'Favorite Quality',
    value: 'Someone who is genuine, caring, and can laugh at life',
    icon: Heart,
  },
  {
    label: 'Favorite Moment',
    value: 'Seeing the people around me happy and doing well',
    icon: Sparkles,
  },
];

export function Favorites() {
  return (
    <Section>
      <SectionTitle subtitle="Right now, at this moment">Current Favorites</SectionTitle>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((fav, index) => (
          <motion.div
            key={fav.label}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, rotateY: -5 }}
            style={{ perspective: 1000 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10">
                <fav.icon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {fav.label}
              </span>
            </div>
            <p className="text-gray-800 dark:text-gray-100 font-medium leading-relaxed">
              {fav.value}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
