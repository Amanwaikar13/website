import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Cake, Clock, MapPin, Sparkles } from 'lucide-react';

const details = [
  { label: 'Date of Birth', value: '13 July 2002', icon: Cake },
  { label: 'Time of Birth', value: 'Around 6:00 AM', icon: Clock },
  { label: 'Place of Birth', value: 'Babhulgaon, Pune, Maharashtra', icon: MapPin },
];

export function BirthDetails() {
  return (
    <Section>
      <SectionTitle subtitle="For the astrology curious">Birth Details</SectionTitle>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-2xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                The Beginning
              </span>
              <Sparkles className="w-6 h-6 text-amber-500" />
            </div>

            <div className="space-y-6">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/30 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10">
                    <detail.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{detail.label}</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-8 text-center text-gray-600 dark:text-gray-300 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              "Most people start their day at 6 AM. I decided to start my entire life at 6 AM. 😄"
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
