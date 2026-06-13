import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import lixoCertoImage from "../assets/lixo-certo.png";
import oneBitFlixImage from "../assets/one-bit-flix.png";
import { useInView } from "../hooks/useInView";
import { revealStyle } from "../lib/revealStyle";

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  url: string;
  github?: string;
  tags: string[];
};

const projectImages: Record<string, string> = {
  "lixo-certo": lixoCertoImage,
  onebitflix: oneBitFlixImage,
};

export default function Projects() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();

  const items = t("projects.items", {
    returnObjects: true,
  }) as ProjectItem[];

  return (
    <section className="w-full bg-black">
      <div
        ref={ref}
        className={`content-container my-12 pb-16 pt-4 md:my-16 md:pb-20${
          isInView ? " section-visible" : ""
        }`}
      >
        <h2
          id="projects"
          className="section-title section-reveal"
          style={revealStyle(0)}
        >
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {items.map((project, index) => (
            <article
              key={project.id}
              className="section-reveal flex flex-col overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] transition-[border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/25 hover:bg-white/[0.04]"
              style={revealStyle(index + 1)}
            >
              <img
                src={projectImages[project.id] ?? project.image}
                alt={project.title}
                className="block aspect-[16/10] w-full object-cover"
                loading="lazy"
              />

              <div className="flex flex-1 flex-col gap-3 px-6 pt-5 pb-6">
                <h3 className="m-0 font-baimj text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="m-0 font-popp text-[0.9375rem] leading-relaxed text-muted/75">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-4 pt-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-popp text-sm font-medium text-primary transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-80 [&_svg]:text-xs"
                  >
                    {t("projects.viewProject")}
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-popp text-sm font-medium text-primary transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-80 [&_svg]:text-xs"
                    >
                      {t("projects.viewCode")}
                      <FaGithub aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
