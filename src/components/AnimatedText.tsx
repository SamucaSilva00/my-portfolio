import { TypeAnimation } from "react-type-animation";
import type { ComponentProps } from "react";

type AnimatedTextProps = {
  text: string;
} & Omit<ComponentProps<typeof TypeAnimation>, "sequence" | "className"> & {
    className?: string;
  };

export default function AnimatedText({
  text,
  className,
  ...rest
}: AnimatedTextProps) {
  return (
    <TypeAnimation
      key={text}
      sequence={[text, 2800, "", 1400]}
      speed={40}
      deletionSpeed={40}
      repeat={Infinity}
      cursor
      className={`text-primary font-baumans text-2xl lg:text-3xl xl:text-[1.875rem] ${
        className ?? ""
      }`}
      {...rest}
    />
  );
}
