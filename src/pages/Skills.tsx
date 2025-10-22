import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Slider, { type Settings } from "react-slick";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiJest,
  SiMysql,
  SiPostgresql,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  Icon: IconType;
  label: string;
};

const skills: Record<string, Skill> = {
  html: { Icon: FaHtml5, label: "HTML5" },
  css: { Icon: FaCss3Alt, label: "CSS3" },
  js: { Icon: FaJsSquare, label: "JavaScript" },
  react: { Icon: FaReact, label: "React" },
  node: { Icon: FaNodeJs, label: "Node.js" },
  ts: { Icon: SiTypescript, label: "TypeScript" },
  postgres: { Icon: SiPostgresql, label: "PostgreSQL" },
  mysql: { Icon: SiMysql, label: "MySQL" },
  sequelize: { Icon: SiSequelize, label: "Sequelize" },
  git: { Icon: FaGitAlt, label: "Git" },
  jest: { Icon: SiJest, label: "Jest" },
  docker: { Icon: FaDocker, label: "Docker" },
};

export default function Skills() {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1300,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 900, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
    ],
  };

  const items = Object.entries(skills);

  return (
    <section className="w-full bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 text-center">
        <h2 className="font-baimj text-4xl md:text-5xl text-white leading-tight mb-12">
          Habilidades
        </h2>
        <div className="hidden md:block">
          <Slider {...settings}>
            {items.map(([key, { Icon, label }]) => (
              <div key={key} className="px-2 flex justify-center items-center">
                <div className="group flex flex-col items-center justify-center gap-2 py-6 h-36">
                  <Icon
                    aria-label={label}
                    title={label}
                    className="text-5xl lg:text-6xl xl:text-7xl text-primary transition-transform duration-300 group-hover:scale-125"
                  />
                  <span className="text-sm md:text-base text-white font-popp">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="grid grid-cols-3 gap-6 md:hidden">
          {items.map(([key, { Icon, label }]) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Icon
                aria-label={label}
                title={label}
                className="text-4xl text-primary"
              />
              <span className="text-xs text-white font-popp">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
