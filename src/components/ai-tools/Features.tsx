import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { WordsPullUpMultiStyle } from "@/components/effects/WordsPullUpMultiStyle";

interface FeatureCard {
  type: "video" | "feature";
  videoUrl?: string; // Kept intact within data object
  label?: string;
  number?: string;
  title?: string;
  iconUrl?: string;
  checklist?: string[];
}

const cards: FeatureCard[] = [
  {
    type: "video",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
    label: "Your creative canvas.",
  },
  {
    type: "feature",
    number: "01",
    title: "Project Storyboard.",
    iconUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    checklist: [
      "Visual timeline builder",
      "Real-time collaboration",
      "Asset organization",
      "Export presets",
    ],
  },
  {
    type: "feature",
    number: "02",
    title: "Smart Critiques.",
    iconUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    checklist: [
      "AI-powered analysis",
      "Creative feedback notes",
      "Tool integrations",
    ],
  },
  {
    type: "feature",
    number: "03",
    title: "Immersion Capsule.",
    iconUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    checklist: [
      "Notification silencing",
      "Ambient soundscapes",
      "Schedule syncing",
    ],
  },
];

function FeatureCardItem({ card, index }: { card: FeatureCard; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (card.type === "video") {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[320px] lg:h-full bg-gradient-to-br from-[#18181b] to-[#101012] border border-[#E1E0CC]/15 p-6 flex flex-col justify-between shadow-xl group"
      >
        {/* Background Visual Shapes Replacing Video */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#E1E0CC]/10 rounded-full blur-2xl group-hover:bg-[#E1E0CC]/15 transition-colors duration-300" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#C8B68A]/10 rounded-full blur-2xl animate-pulse" />
          
          {/* Futuristic Grid Accent */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#E1E0CC] to-[#C8B68A] flex items-center justify-center mb-6 shadow-md shadow-[#E1E0CC]/10">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="text-xs font-semibold tracking-widest text-[#C8B68A] uppercase block mb-2">
            Creative Canvas
          </span>
          <h3 className="text-[#F5F5F5] text-xl font-semibold leading-snug">
            Studio Workspaces Enhanced with Automation.
          </h3>
        </div>

        <div className="relative z-10 pt-4 border-t border-white/5">
          <p className="text-[#E1E0CC] text-sm font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E1E0CC] rounded-full inline-block animate-ping" />
            {card.label}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#101012] border border-white/5 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:h-full group hover:border-[#E1E0CC]/25 transition-all duration-300 shadow-xl"
    >
      <div>
        {/* Small image icon preserved perfectly */}
        <img
          src={card.iconUrl}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover mb-4 sm:mb-6 border border-white/10"
        />

        {/* Title with number */}
        <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
          <span className="text-[#E1E0CC] text-xs sm:text-sm font-bold">
            {card.number}
          </span>
          <h3 className="text-[#F5F5F5] text-base sm:text-lg md:text-xl font-semibold">
            {card.title}
          </h3>
        </div>

        {/* Checklist loop preserved */}
        <ul className="space-y-2 sm:space-y-3">
          {card.checklist?.map((item) => (
            <li key={item} className="flex items-start gap-2 sm:gap-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1E0CC] flex-shrink-0 mt-0.5" />
              <span className="text-[#D4D4D8] text-xs sm:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn more trigger handles */}
      <button className="flex items-center gap-2 text-[#E1E0CC] font-medium text-xs sm:text-sm mt-6 sm:mt-8 group/btn hover:text-white transition-colors w-fit">
        Learn more
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </button>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.04] pointer-events-none" />

      {/* Subtle Background Radial Shapes */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#E1E0CC]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[50%] bg-[#C8B68A]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.3] space-y-2">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Studio-grade workflows for visionary creators.", className: "font-bold text-[#F5F5F5]" },
              ]}
            />
            <br />
            <WordsPullUpMultiStyle
              segments={[
                { text: "Built for pure vision. Powered by art.", className: "font-medium text-[#71717A]" },
              ]}
            />
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[480px]">
          {cards.map((card, index) => (
            <FeatureCardItem key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}