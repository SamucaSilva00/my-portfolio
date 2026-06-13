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
        className={`content-container my-12 py-16 md:my-16 md:py-20${
          isInView ? " section-visible" : ""
        }`}
      >
        <h2
          id="about"
          className="section-title section-reveal"
          style={revealStyle(0)}
        >
          {t("about.title")}
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cardKeys.map((key, index) => (
            <div
              key={key}
              className="section-reveal rounded-lg border border-white/8 bg-white/[0.03] px-6 py-5"
              style={revealStyle(index + 1)}
            >
              <span className="field-label mb-2 text-muted/65">
                {t(`about.cards.${key}.label`)}
              </span>
              <span className="font-baimj text-lg font-semibold text-primary">
                {t(`about.cards.${key}.value`)}
              </span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-5">
          <p
            className="section-reveal font-popp text-lg leading-relaxed text-muted/85 [&_strong]:font-semibold [&_strong]:text-primary"
            style={revealStyle(4)}
          >
            <Trans i18nKey="about.paragraph1" />
          </p>
          <p
            className="section-reveal font-popp text-lg leading-relaxed text-muted/85 [&_strong]:font-semibold [&_strong]:text-primary"
            style={revealStyle(5)}
          >
            <Trans i18nKey="about.paragraph2" />
          </p>
        </div>
      </div>
    </section>
  );
}
