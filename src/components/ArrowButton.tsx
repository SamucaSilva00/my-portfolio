import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

type SlickArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

type ArrowButtonProps = SlickArrowProps & {
  direction: "left" | "right";
  Icon: IconType;
  size?: number;
  className?: string;
};

export default function ArrowButton({
  direction,
  Icon,
  onClick,
  size = 34,
  className = "",
}: ArrowButtonProps) {
  const pos = direction === "left" ? "left-4" : "right-4";

  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
      onClick={onClick}
      className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 transition-transform focus:outline-none ${className}`}
    >
      <Icon size={size} />
    </button>
  );
}
