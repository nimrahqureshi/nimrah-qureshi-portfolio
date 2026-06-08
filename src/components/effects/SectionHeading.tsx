import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function SectionHeading({ title, subtitle, gradient = 'from-purple-500 to-cyan-400' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h2>
      <p className="text-lg text-muted max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
      </div>
    </motion.div>
  );
}
