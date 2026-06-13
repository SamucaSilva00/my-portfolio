import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const navLinks = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
] as const;

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  const closeMenu = () => setMenuOpen(false);

  const navSurfaceClass = scrolled
    ? "border-b border-white/5 bg-black backdrop-blur-sm"
    : "border-b border-transparent bg-transparent";

  const languageButton = (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("nav.toggleLanguage")}
      className="button-primary button-primary--compact font-popp"
    >
      {i18n.language.startsWith("pt") ? "EN" : "PT"}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${navSurfaceClass}`}
    >
      <div className="content-container flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="whitespace-nowrap font-baimj text-lg font-semibold text-primary transition-opacity duration-500 ease-out hover:opacity-80 md:text-xl"
        >
          Samuel Rodrigues
        </a>

        <div className="hidden items-center gap-4 sm:flex md:gap-5 lg:gap-8 xl:gap-10">
          {navLinks.map(({ href, key }) => (
            <a key={key} href={href} className="nav-link">
              {t(`nav.${key}`)}
            </a>
          ))}
          {languageButton}
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          {languageButton}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            className="flex items-center justify-center p-1 text-primary transition-opacity duration-500 ease-out hover:opacity-80"
          >
            {menuOpen ? (
              <HiX className="size-6" aria-hidden="true" />
            ) : (
              <HiMenu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`sm:hidden overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="content-container flex flex-col gap-1 py-4">
          {navLinks.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              onClick={closeMenu}
              className="nav-link rounded-md px-2 py-3 text-base"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
