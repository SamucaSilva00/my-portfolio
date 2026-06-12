import { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const VISIBLE_COUNT = 3;

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
};

function ExperienceItemCard({ item, educationLabel }: ExperienceItemCardProps) {
  const isWork = item.type === "work";
  const Icon = isWork ? FaBriefcase : FaGraduationCap;

  return (
    <article className="experience-item">
      <div className="experience-marker" aria-hidden="true">
        <Icon />
      </div>

      <div className="experience-card">
        <div className="experience-card__header">
          <div>
            {!isWork && (
              <span className="experience-card__label">{educationLabel}</span>
            )}
            <h3 className="experience-card__title">{item.title}</h3>
            <p className="experience-card__subtitle">
              <strong>{item.company}</strong>
              {item.location ? ` · ${item.location}` : ""}
            </p>
          </div>
          <span className="experience-card__period">{item.period}</span>
        </div>

        {item.bullets && item.bullets.length > 0 && (
          <ul className="experience-card__list">
            {item.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="experience-card__tags">
            {item.tags.map((tag) => (
              <span key={tag} className="experience-card__tag">
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

  const items = t("experience.items", {
    returnObjects: true,
  }) as ExperienceItem[];

  const hasMore = items.length > VISIBLE_COUNT;
  const visibleItems = items.slice(0, VISIBLE_COUNT);
  const hiddenItems = items.slice(VISIBLE_COUNT);
  const educationLabel = t("experience.educationLabel");

  return (
    <section className="w-full bg-black">
      <div className="content-container pb-16 pt-4 md:pb-20 my-12 md:my-16">
        <h2 id="experience" className="section-title">
          {t("experience.title")}
        </h2>

        <div className="experience-timeline">
          {visibleItems.map((item) => (
            <ExperienceItemCard
              key={`${item.type}-${item.title}-${item.period}`}
              item={item}
              educationLabel={educationLabel}
            />
          ))}

          {hasMore && (
            <div
              className={`experience-more${expanded ? " experience-more--expanded" : ""}`}
            >
              <div className="experience-more__inner">
                {hiddenItems.map((item) => (
                  <ExperienceItemCard
                    key={`${item.type}-${item.title}-${item.period}`}
                    item={item}
                    educationLabel={educationLabel}
                  />
                ))}
              </div>
            </div>
          )}

          {hasMore && (
            <div className="experience-item experience-toggle">
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
