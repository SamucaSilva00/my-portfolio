import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Slider, { type Settings } from "react-slick";
import { SiExpress, SiSequelize } from "react-icons/si";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { RiNextjsFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { NextArrow, PrevArrow } from "./Arrows";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: { Icon: IconType; label: string }[];
  github: string;
  preview: string;
};

const projects: Project[] = [
  {
    title: "Lixo Certo",
    description:
      "Projeto acadêmico desenvolvido com o objetivo de conscientizar a população sobre o descarte correto do lixo, em alinhamento com a ODS 11 — Cidades e Comunidades Sustentáveis. O site permite localizar Ecopontos próximos e apresenta informações educativas sobre os impactos ambientais do descarte irregular, incentivando práticas sustentáveis e a preservação do meio ambiente na comunidade.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1313",
    github: "https://github.com/SamucaSilva00/lixo-certo",
    preview: "https://lixo-certo.vercel.app/",
    technologies: [
      { Icon: FaHtml5, label: "HTML5" },
      { Icon: FaCss3Alt, label: "CSS3" },
      { Icon: FaJsSquare, label: "JavaScript" },
    ],
  },
  {
    title: "OneBitFlix",
    description:
      "Projeto final do meu curso na OneBitCode. O OneBitFlix é uma aplicação inspirada na Netflix, desenvolvida com foco em aprendizado e boas práticas de desenvolvimento web. Ele permite a reprodução de vídeos, gerenciamento de usuários e exibição de catálogos de filmes e séries, simulando a experiência de uma plataforma de streaming real.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600",
    github: "https://github.com/SamucaSilva00/onebitflix_front-end",
    preview: "https://onebitflix-thiago.vercel.app/",
    technologies: [
      { Icon: FaReact, label: "React" },
      { Icon: RiNextjsFill, label: "Next.js" },
      { Icon: FaBootstrap, label: "Bootstrap" },
      { Icon: FaSass, label: "Sass" },
      { Icon: FaNodeJs, label: "Node.js" },
      { Icon: SiExpress, label: "Express" },
      { Icon: SiSequelize, label: "Sequelize" },
      { Icon: MdAdminPanelSettings, label: "AdminJS" },
    ],
  },
];

export default function Projects() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="projects" className="w-full bg-black text-white overflow-hidden relative">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="relative w-full h-[70vh] md:h-[65vh]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            <div className="absolute inset-0 bg-black/45 md:bg-black/35 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              <h2 className="text-4xl md:text-5xl font-baimj mb-5 drop-shadow-lg">
                {project.title}
              </h2>

              <p className="text-gray-300 text-base md:text-lg mb-7 leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="my-4 flex justify-center lg:justify-start gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary inline-flex items-center gap-2 group"
                  aria-label="Abrir repositório no GitHub"
                >
                  <FaGithub className="text-[18px] transition-transform group-hover:-translate-y-px group-hover:translate-x-0.5" />
                  GitHub
                </a>

                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary inline-flex items-center gap-2 group"
                  aria-label="Abrir preview do projeto"
                >
                  <FaExternalLinkAlt className="text-[16px] transition-transform group-hover:-translate-y-px group-hover:translate-x-0.5" />
                  Preview
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-10 mt-3">
                {project.technologies.map(({ Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <Icon className="text-3xl md:text-4xl text-primary" />
                    <span className="text-xs md:text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
