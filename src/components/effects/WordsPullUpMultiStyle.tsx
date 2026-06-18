import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
}

export function WordsPullUpMultiStyle({ segments, containerClassName = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Flatten segments into individual words while preserving their respective styles
  const words: { word: string; className: string }[] = [];
  
  for (const segment of segments) {
    // Split text by spaces, but filter out empty strings caused by consecutive spaces
    const splitWords = segment.text.split(" ").filter(w => w !== "");
    for (const w of splitWords) {
      words.push({ word: w, className: segment.className });
    }
  }

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {words.map((item, index) => (
        <motion.span
          key={index}
          className={`inline-flex mr-[0.25em] ${item.className}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08, // Staggers sequentially across all segments smoothly
            ease: [0.16, 1, 0.3, 1], // Cinematic ultra-smooth ease out curve
          }}
        >
          {item.word}
        </motion.span>
      ))}
    </span>
  );
}

export default WordsPullUpMultiStyle;