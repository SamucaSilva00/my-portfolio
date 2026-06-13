import { useTranslation } from "react-i18next";
import bg from "../assets/bg.png";
import photo from "../assets/me-photo.jpg";
import AnimatedText from "./AnimatedText";
import SocialLinks from "./SocialLinks";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="hero flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content-container relative z-10 flex flex-col items-center justify-center gap-8 py-8 md:py-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:flex-row lg:items-center lg:gap-6 lg:text-left">
          <div className="home-reveal home-reveal-delay-1 flex justify-center lg:justify-start">
            <SocialLinks />
          </div>

          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="home-reveal home-reveal-delay-2 mb-1 font-popp text-sm md:text-lg">
              {t("home.welcome")}
            </p>
            <h1 className="home-reveal home-reveal-delay-3 mb-1 font-baimj text-4xl leading-tight text-white md:text-5xl">
              Samuel Rodrigues
            </h1>
            <div className="home-reveal home-reveal-delay-4">
              <AnimatedText text={t("home.role")} />
            </div>
            <div className="home-reveal home-reveal-delay-5 mt-4 flex justify-center gap-3 lg:justify-start">
              <a
                className="button-primary"
                target="_blank"
                href="/samuel_cv.pdf"
                rel="noopener noreferrer"
              >
                {t("home.downloadCv")}
              </a>
              <a className="button-secondary" href="#contact">
                {t("home.contactMe")}
              </a>
            </div>
          </div>
        </div>

        <div className="home-photo home-reveal-delay-6 flex justify-center lg:justify-end">
          <img
            src={photo}
            alt={t("home.photoAlt")}
            className="h-60 w-60 rounded-full border border-white/70 object-cover shadow-lg sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[336px] lg:w-[336px]"
          />
        </div>
      </div>
    </div>
  );
}
