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
        className={`content-container pb-16 pt-4 md:pb-20 my-12 md:my-16${
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

        <div className="projects-grid">
          {items.map((project, index) => (
            <article
              key={project.id}
              className="project-card section-reveal"
              style={revealStyle(index + 1)}
            >
              <img
                src={projectImages[project.id] ?? project.image}
                alt={project.title}
                className="project-card__image"
                loading="lazy"
              />

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    {t("projects.viewProject")}
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
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
