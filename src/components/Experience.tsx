import { useState } from "react";
import type { CSSProperties } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";
import { revealStyle } from "../lib/revealStyle";

const VISIBLE_COUNT = 3;

const bulletListClass = "m-0 flex list-none flex-col gap-2.5 p-0 [&_li]:relative [&_li]:pl-4 [&_li]:font-popp [&_li]:text-[0.9375rem] [&_li]:leading-relaxed [&_li]:text-muted/80 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.55rem] [&_li]:before:size-1.5 [&_li]:before:rounded-full [&_li]:before:bg-primary [&_li]:before:content-['']";

type ExperienceItem = {
  type: "work" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  bullets?: string[];
  tags?: string[];
};

type ExperienceItemCardProps = {
  item: ExperienceItem;
  educationLabel: string;
  className?: string;
  style?: CSSProperties;
  reveal?: boolean;
  expandStyle?: CSSProperties;
};

function ExperienceItemCard({
  item,
  educationLabel,
  className = "",
  style,
  reveal = true,
  expandStyle,
}: ExperienceItemCardProps) {
  const isWork = item.type === "work";
  const Icon = isWork ? FaBriefcase : FaGraduationCap;

  return (
    <article
      className={`relative grid grid-cols-[2.5rem_1fr] items-start gap-4${
        reveal ? " section-reveal" : ""
      } transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`.trim()}
      style={reveal ? style : expandStyle}
    >
      <div
        className="relative z-[1] flex size-10 items-center justify-center rounded-full border-2 border-primary bg-primary/8 text-sm text-primary"
        aria-hidden="true"
      >
        <Icon />
      </div>

      <div className="rounded-xl border border-white/8 bg-white/[0.03] px-6 py-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {!isWork && (
              <span className="field-label mb-1.5">{educationLabel}</span>
            )}
            <h3 className="font-baimj text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-1 font-popp text-[0.9375rem] text-muted/75 [&_strong]:font-medium [&_strong]:text-primary">
              <strong>{item.company}</strong>
              {item.location ? ` · ${item.location}` : ""}
            </p>
          </div>
          <span className="shrink-0 self-start whitespace-nowrap rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-popp text-xs text-muted/80">
            {item.period}
          </span>
        </div>

        {item.bullets && item.bullets.length > 0 && (
          <ul className={bulletListClass}>
            {item.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const { ref, isInView } = useInView();

  const items = t("experience.items", {
    returnObjects: true,
  }) as ExperienceItem[];

  const hasMore = items.length > VISIBLE_COUNT;
  const visibleItems = items.slice(0, VISIBLE_COUNT);
  const hiddenItems = items.slice(VISIBLE_COUNT);
  const educationLabel = t("experience.educationLabel");

  return (
    <section className="w-full bg-black">
      <div
        ref={ref}
        className={`content-container my-12 pb-16 pt-4 md:my-16 md:pb-20${
          isInView ? " section-visible" : ""
        }`}
      >
        <h2
          id="experience"
          className="section-title section-reveal"
          style={revealStyle(0)}
        >
          {t("experience.title")}
        </h2>

        <div className="relative flex flex-col gap-6 before:absolute before:bottom-2 before:left-[1.1875rem] before:top-2 before:w-0.5 before:bg-white/10 before:content-['']">
          {visibleItems.map((item, index) => (
            <ExperienceItemCard
              key={`${item.type}-${item.title}-${item.period}`}
              item={item}
              educationLabel={educationLabel}
              style={revealStyle(index + 1)}
            />
          ))}

          {hasMore && (
            <div
              className={`grid transition-[grid-template-rows] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div
                className={`flex min-h-0 flex-col gap-6 overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  expanded
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-1 opacity-0"
                }`}
              >
                {hiddenItems.map((item, index) => (
                  <ExperienceItemCard
                    key={`${item.type}-${item.title}-${item.period}`}
                    item={item}
                    educationLabel={educationLabel}
                    reveal={false}
                    expandStyle={{
                      transitionDelay: expanded ? `${30 + index * 30}ms` : undefined,
                      opacity: expanded ? 1 : 0,
                      transform: expanded ? "translateY(0)" : "translateY(-0.125rem)",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {hasMore && (
            <div
              className="section-reveal relative grid grid-cols-[2.5rem_1fr] items-center gap-4"
              style={revealStyle(visibleItems.length + 1)}
            >
              <div aria-hidden="true" />
              <button
                type="button"
                className="button-primary"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
              >
                {expanded ? t("experience.showLess") : t("experience.showMore")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
