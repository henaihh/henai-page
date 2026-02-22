'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'Design Skills Foundation',
    status: 'In Progress',
    items: [
      'framer-motion-animations ✅',
      'shadcn-ui integration ✅',
      'tailwind-design-system ✅',
      'nextjs-image-optimization 🚧',
      'typography-design-system 🚧',
      'gradient-color-themes 🚧',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Advanced UI Skills',
    status: 'Planned',
    items: [
      'data-visualization-charts',
      'form-design-patterns',
      'responsive-grid-layouts',
      'micro-interactions',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Revenue-Generating Apps',
    status: 'Planned',
    items: [
      'Build first production app',
      'Traffic generation strategies',
      'Monetization implementation',
      'Analytics & optimization',
    ],
  },
];

export default function Roadmap() {
  return (
    <div className="space-y-6">
      {roadmapItems.map((item, i) => (
        <motion.div
          key={item.phase}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <Card className="glass-effect hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-blue-400">{item.phase}</span>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    item.status === 'In Progress'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <CardTitle className="text-xl text-white">{item.title}</CardTitle>
              <CardDescription>
                <ul className="mt-4 space-y-2">
                  {item.items.map((task) => (
                    <li key={task} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-gray-600">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
