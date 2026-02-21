"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  description: string;
  delay?: number;
  icon?: string;
}

export default function SkillCard({ 
  title, 
  description, 
  delay = 0,
  icon 
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <Card className="h-full glass hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group">
        <CardContent className="p-6">
          {icon && (
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-cyan-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
