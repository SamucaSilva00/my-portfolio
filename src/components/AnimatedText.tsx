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
      className={`text-primary font-baumans text-[20px] xl:text-[30px] lg:text-2xl ${
        className ?? ""
      }`}
      {...rest}
    />
  );
}
