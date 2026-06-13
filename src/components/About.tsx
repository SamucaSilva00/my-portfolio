import { Trans, useTranslation } from "react-i18next";
import { useInView } from "../hooks/useInView";
import { revealStyle } from "../lib/revealStyle";

const cardKeys = ["experience", "focus", "stack"] as const;

export default function About() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();

  return (
    <section className="w-full bg-black">
      <div
        ref={ref}
        className={`content-container py-16 md:py-20 my-12 md:my-16${
          isInView ? " section-visible" : ""
        }`}
      >
        <h2
          id="about"
          className="about-title section-reveal"
          style={revealStyle(0)}
        >
          {t("about.title")}
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cardKeys.map((key, index) => (
            <div
              key={key}
              className="about-card section-reveal"
              style={revealStyle(index + 1)}
            >
              <span className="about-card__label">
                {t(`about.cards.${key}.label`)}
              </span>
              <span className="about-card__value">
                {t(`about.cards.${key}.value`)}
              </span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-5">
          <p className="about-text section-reveal" style={revealStyle(4)}>
            <Trans i18nKey="about.paragraph1" />
          </p>
          <p className="about-text section-reveal" style={revealStyle(5)}>
            <Trans i18nKey="about.paragraph2" />
          </p>
        </div>
      </div>
    </section>
  );
}
