import { TypeAnimation } from "react-type-animation";
import "../index.css";
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
      sequence={[text, 2000, "", 1000]}
      speed={50}
      deletionSpeed={60}
      repeat={Infinity}
      cursor
      className={`text-primary font-baumans text-[20px] xl:text-[30px] lg:text-2xl ${
        className ?? ""
      }`}
      {...rest}
    />
  );
}
