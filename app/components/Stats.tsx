'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Skills Created', value: '3+' },
  { label: 'Projects', value: '10+' },
  { label: 'Lines of Code', value: '∞' },
];

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-8 py-12"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
