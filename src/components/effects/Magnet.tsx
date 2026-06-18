import { useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  inactiveTransition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = Math.abs(clientX - centerX);
    const distY = Math.abs(clientY - centerY);

    if (distX < width / 2 + padding && distY < height / 2 + padding) {
      setIsActive(true);
      const offsetX = (clientX - centerX) / strength;
      const offsetY = (clientY - centerY) / strength;
      setPosition({ x: offsetX, y: offsetY });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }}
      style={{
        transition: isActive ? activeTransition : inactiveTransition,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}