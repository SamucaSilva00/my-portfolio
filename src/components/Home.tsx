import { useTranslation } from "react-i18next";
import bg from "../assets/bg.png";
import photo from "../assets/me-photo.jpg";
import "../index.css";
import AnimatedText from "./AnimatedText";
import SocialLinks from "./SocialLinks";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="hero min-h-screen w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="content-container relative z-10 py-8 md:py-10
                 flex flex-col lg:grid lg:grid-cols-[auto_1fr_auto]
                 items-center lg:items-center justify-center
                 gap-4 sm:gap-6 md:gap-8 lg:gap-6
                 text-center lg:text-left"
      >
        <div className="flex justify-center md:justify-start mb-4 md:mb-0 md:mr-4">
          <SocialLinks />
        </div>

        <div className="max-w-xl mx-auto lg:mx-0">
          <p className="text-sm md:text-lg font-popp mb-1">{t("home.welcome")}</p>
          <h1 className="text-4xl md:text-5xl font-baimj text-white leading-tight mb-1">
            Samuel Rodrigues
          </h1>
          <AnimatedText text={t("home.role")} />
          <div className="mt-4 flex justify-center lg:justify-start gap-3">
            <a className="button-primary" target="_blank" href="/samuel_cv.pdf">
              {t("home.downloadCv")}
            </a>
            <a className="button-secondary" href="#contact">
              {t("home.contactMe")}
            </a>
          </div>
        </div>

        <div className="justify-self-end flex justify-center lg:justify-end mb-2 lg:mb-0">
          <img
            src={photo}
            alt={t("home.photoAlt")}
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[336px] lg:h-[336px] rounded-full object-cover border border-white/70 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
