import { Trans, useTranslation } from "react-i18next";

const cardKeys = ["experience", "focus", "stack"] as const;

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full bg-black">
      <div className="content-container py-16 md:py-20 my-12 md:my-16">
        <h2 className="about-title">{t("about.title")}</h2>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cardKeys.map((key) => (
            <div key={key} className="about-card">
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
          <p className="about-text">
            <Trans i18nKey="about.paragraph1" />
          </p>
          <p className="about-text">
            <Trans i18nKey="about.paragraph2" />
          </p>
        </div>
      </div>
    </section>
  );
}
