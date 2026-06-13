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
    <footer id="contact" className="w-full bg-black">
      <div className="content-container footer">
        <div className="footer__top">
          <div className="footer__info">
            <p className="footer__name">Samuel Rodrigues</p>
            <a href="mailto:sammtecch@gmail.com" className="footer__email">
              sammtecch@gmail.com
            </a>
          </div>

          <div className="footer__social">
            {socialLinks.map(({ href, labelKey, Icon }) => (
              <a
                key={labelKey}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(`footer.${labelKey}`)}
                className="footer__social-link"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <p className="footer__copyright">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
