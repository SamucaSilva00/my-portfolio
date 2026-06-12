import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const navLinks = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
] as const;

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black backdrop-blur-sm border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="content-container py-4 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-baimj text-lg md:text-xl text-primary font-semibold whitespace-nowrap hover:opacity-80 transition-opacity"
        >
          Samuel Rodrigues
        </a>

        <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
          {navLinks.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="text-gray text-sm font-popp hover:text-primary transition-colors whitespace-nowrap"
            >
              {t(`nav.${key}`)}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("nav.toggleLanguage")}
            className="button-primary button-primary--compact font-popp"
          >
            {i18n.language.startsWith("pt") ? "EN" : "PT"}
          </button>
        </div>
      </div>
    </nav>
  );
}
