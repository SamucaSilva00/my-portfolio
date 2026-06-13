import type { CSSProperties } from "react";

export function revealStyle(index: number, step = 0.1, base = 0.05): CSSProperties {
  return { "--reveal-delay": `${base + index * step}s` } as CSSProperties;
}
