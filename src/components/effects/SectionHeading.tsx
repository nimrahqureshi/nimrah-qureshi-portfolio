import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  gradient = 'from-[#F2EFD9] via-[#E1E0CC] to-[#C8B68A]',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-16 relative z-10"
    >
      <h2 className={`text-4xl md:text-5xl font-semibold mb-4 tracking-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h2>
      <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <div className={`h-px w-20 rounded-full bg-gradient-to-r from-transparent via-[#E1E0CC] to-transparent`} />
      </div>
    </motion.div>
  );
}
