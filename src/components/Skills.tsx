import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpo,
  SiExpress,
  SiFastify,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";

type SkillItem = {
  id: string;
  name: string;
};

type SkillCategory = {
  key: string;
  label: string;
  items: SkillItem[];
};

const skillIcons: Record<string, IconType> = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJsSquare,
  typescript: SiTypescript,
  react: FaReact,
  nextjs: SiNextdotjs,
  reactNative: SiReact,
  expo: SiExpo,
  nodejs: FaNodeJs,
  express: SiExpress,
  fastify: SiFastify,
  docker: FaDocker,
  git: FaGitAlt,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  sequelize: SiSequelize,
  prisma: SiPrisma,
  jest: SiJest,
};

const skillColors: Record<string, string> = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  reactNative: "#61DAFB",
  expo: "#FFFFFF",
  nodejs: "#339933",
  express: "#FFFFFF",
  fastify: "#FFFFFF",
  docker: "#2496ED",
  git: "#F05032",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  sequelize: "#52B0E7",
  prisma: "#71E8F2",
  jest: "#C21325",
};

export default function Skills() {
  const { t } = useTranslation();

  const categories = t("skills.categories", {
    returnObjects: true,
  }) as SkillCategory[];

  return (
    <section id="skills" className="w-full bg-black">
      <div className="content-container pb-16 pt-4 md:pb-20 my-12 md:my-16">
        <h2 className="section-title">{t("skills.title")}</h2>

        <div className="skills-categories">
          {categories.map((category) => (
            <div key={category.key} className="skills-category">
              <h3 className="skills-category__label">{category.label}</h3>
              <ul className="skills-grid">
                {category.items.map((item) => {
                  const Icon = skillIcons[item.id];
                  const color = skillColors[item.id] ?? "var(--color-primary)";

                  return (
                    <li key={item.id}>
                      <div className="skill-card">
                        {Icon ? (
                          <Icon
                            className="skill-card__icon"
                            style={{ color }}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="skill-card__icon skill-card__icon--fallback"
                            aria-hidden="true"
                          />
                        )}
                        <span className="skill-card__name">{item.name}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
