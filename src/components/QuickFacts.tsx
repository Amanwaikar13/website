import { motion } from 'framer-motion';
import { Section, SectionTitle } from './Section';
import { User, Calendar, Ruler, MapPin, Book, Briefcase, GraduationCap } from 'lucide-react';

const facts = [
  { label: 'Name', value: 'Aman Dattatraya Waikar', icon: User },
  { label: 'Age', value: 'Almost 24', icon: Calendar },
  { label: 'Height', value: "5'8\"", icon: Ruler },
  { label: 'Location', value: 'Pune, Maharashtra', icon: MapPin },
  { label: 'Religion', value: 'Hindu', icon: Book },
{ 
  label: 'Mangalik',
  value: 'No Mangal Dosh as per Kundli',
  icon: Book
},
  { label: 'Education', value: "Bachelor's Degree in Computer Science", icon: GraduationCap },
  { label: 'Experience', value: '1.5 Years as Full Stack Developer', icon: Briefcase },
];

export function QuickFacts() {
  return (
    <Section className="bg-gray-50/50 dark:bg-gray-900/50">
      <SectionTitle subtitle="The basics, nothing fancy">Quick Facts About Me</SectionTitle>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.label}
            className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
                  <fact.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {fact.label}
                </span>
              </div>
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {fact.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
