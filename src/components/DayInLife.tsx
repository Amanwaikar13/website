import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Sun, Monitor, Rocket, Target, Sparkles } from 'lucide-react';

const timeline = [
  { time: '07:00 AM', activity: 'Wake up and plan the day', icon: Sun, color: 'from-amber-500 to-orange-500' },
  { time: '09:00 AM', activity: 'Work Mode Activated 💻', icon: Monitor, color: 'from-blue-500 to-indigo-500' },
  { time: '06:00 PM', activity: 'Learning and Side Projects 🚀', icon: Rocket, color: 'from-emerald-500 to-teal-500' },
  { time: '09:00 PM', activity: 'Career Planning and Future Goals 🎯', icon: Target, color: 'from-purple-500 to-pink-500' },
  { time: '11:00 PM', activity: 'Random ideas to share with you 😂', icon: Sparkles, color: 'from-cyan-500 to-blue-500' },
];

export function DayInLife() {
  return (
    <Section className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionTitle subtitle="What a typical day looks like">A Day in My Life</SectionTitle>

      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full" />

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.time}
              className={`relative flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.div
                className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 border-4 border-white dark:border-gray-900 z-10"
                whileInView={{
                  boxShadow: [
                    '0 0 0 0 rgba(16, 185, 129, 0.4)',
                    '0 0 0 10px rgba(16, 185, 129, 0)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              <div className="flex-1 ml-16 md:ml-0">
                <motion.div
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-5 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-lg">{item.activity}</p>
                </motion.div>
              </div>

              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
