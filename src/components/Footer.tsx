import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/samucasilva00/",
    labelKey: "linkedin" as const,
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/SamucaSilva00",
    labelKey: "github" as const,
    Icon: FaGithub,
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full scroll-mt-24 bg-black">
      <div className="content-container py-12 pb-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="m-0 font-baimj text-xl font-semibold text-primary">
              Samuel Rodrigues
            </p>
            <a
              href="mailto:sammtecch@gmail.com"
              className="font-popp text-[0.9375rem] text-muted/65 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white"
            >
              sammtecch@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, labelKey, Icon }) => (
              <a
                key={labelKey}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(`footer.${labelKey}`)}
                className="flex items-center justify-center text-xl text-muted/55 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 h-px bg-white/10" />

        <p className="m-0 text-center font-popp text-sm text-muted/55">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
