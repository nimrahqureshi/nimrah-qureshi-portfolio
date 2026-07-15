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
        from-[#E1E0CC]
        to-[#C8B68A]
        text-black
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(225,224,204,0.25)]
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