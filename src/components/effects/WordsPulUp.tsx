import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className = "", showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;
        return (
          <motion.span
            key={wordIndex}
            className="inline-flex mr-[0.25em]"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: wordIndex * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {isLastWord && showAsterisk ? (
              <span className="inline-flex relative text-white">
                {word.replace(/a$/, "")}
                <span className="relative">
                  a
                  <sup className="absolute top-[0.55em] -right-[0.35em] text-[0.35em] text-[#E1E0CC] text-glow">*</sup>
                </span>
              </span>
            ) : (
              word
            )}
          </motion.span>
        );
      })}
    </span>
  );
}