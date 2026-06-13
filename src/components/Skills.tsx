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
  SiGooglecloud,
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
import { VscAzure } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import { useInView } from "../hooks/useInView";
import { revealStyle } from "../lib/revealStyle";

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
  gcp: SiGooglecloud,
  azure: VscAzure,
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
  gcp: "#4285F4",
  azure: "#0078D4",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  sequelize: "#52B0E7",
  prisma: "#71E8F2",
  jest: "#C21325",
};

export default function Skills() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();

  const categories = t("skills.categories", {
    returnObjects: true,
  }) as SkillCategory[];

  return (
    <section className="w-full bg-black">
      <div
        ref={ref}
        className={`content-container my-12 pb-16 pt-4 md:my-16 md:pb-20${
          isInView ? " section-visible" : ""
        }`}
      >
        <h2
          id="skills"
          className="section-title section-reveal"
          style={revealStyle(0)}
        >
          {t("skills.title")}
        </h2>

        <div className="flex flex-col gap-10">
          {categories.map((category, index) => (
            <div
              key={category.key}
              className="section-reveal"
              style={revealStyle(index + 1)}
            >
              <h3 className="mb-4 font-popp text-[0.8125rem] font-semibold tracking-widest text-muted/55 uppercase">
                {category.label}
              </h3>
              <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(10.5rem,1fr))] gap-3 p-0 sm:grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] sm:gap-3.5 lg:grid-cols-[repeat(auto-fill,minmax(13.5rem,1fr))]">
                {category.items.map((item) => {
                  const Icon = skillIcons[item.id];
                  const color = skillColors[item.id] ?? "var(--color-primary)";

                  return (
                    <li key={item.id}>
                      <div className="flex h-full min-h-12 items-center gap-3 rounded-[0.625rem] border border-white/8 bg-white/[0.03] px-4 py-3 transition-[border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/25 hover:bg-white/5 sm:min-h-[3.25rem] sm:gap-3.5 sm:px-[1.125rem] sm:py-3.5">
                        {Icon ? (
                          <Icon
                            className="shrink-0 text-[1.375rem] sm:text-2xl"
                            style={{ color }}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="size-[1.375rem] shrink-0 rounded bg-primary"
                            aria-hidden="true"
                          />
                        )}
                        <span className="truncate font-popp text-[0.9375rem] font-medium text-white sm:text-base">
                          {item.name}
                        </span>
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
