import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { Briefcase, GraduationCap, Heart, Smile } from 'lucide-react';

const plans = [
  { label: 'Career Goal', value: 'Build impactful software and continuously grow as an engineer.', icon: Briefcase },
  { label: 'Education Goal', value: 'Pursue higher studies abroad.', icon: GraduationCap },
  { label: 'Life Goal', value: 'Keep learning, keep improving, and build a meaningful life.', icon: Heart },
  { label: 'Funny Goal', value: "Have 2 kids someday who hopefully won't inherit my overthinking skills. 😂", icon: Smile },
];

export function FuturePlans() {
  return (
    <Section className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionTitle subtitle="Where I'm heading">Future Plans</SectionTitle>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.label}
            className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-lg overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                  <plan.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {plan.label}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                {plan.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
