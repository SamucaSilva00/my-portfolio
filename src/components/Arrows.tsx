import type { CSSProperties } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ArrowButton from "./ArrowButton";

type SlickArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export const PrevArrow = ({ onClick }: SlickArrowProps) => (
  <ArrowButton direction="left" Icon={IoIosArrowBack} onClick={onClick} />
);

export const NextArrow = ({ onClick }: SlickArrowProps) => (
  <ArrowButton direction="right" Icon={IoIosArrowForward} onClick={onClick} />
);
