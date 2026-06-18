import { MessageCircle } from "lucide-react";

interface ContactButtonProps {
  text?: string;
}

export default function ContactButton({
  text = "Contact Me",
}: ContactButtonProps) {
  const handleClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex
        items-center
        gap-2
        px-6
        py-3
        rounded-xl
        font-medium
        bg-gradient-to-r
        from-purple-600
        to-cyan-500
        text-white
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
        transition-all
        duration-300
        shadow-lg
      "
    >
      <MessageCircle size={18} />
      {text}
    </button>
  );
}