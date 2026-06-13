import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinkClass =
  "text-primary transition-colors duration-500 ease-out hover:text-white";

const iconClass =
  "text-3xl transition-transform duration-500 ease-out hover:scale-110 sm:text-3xl md:text-4xl";

export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center gap-4 md:flex-col md:gap-5">
      <a
        href="https://www.linkedin.com/in/samucasilva00/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={socialLinkClass}
      >
        <FaLinkedin className={iconClass} />
      </a>

      <a
        href="https://github.com/SamucaSilva00"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={socialLinkClass}
      >
        <FaGithub className={iconClass} />
      </a>

      <a
        href="mailto:sammtecch@gmail.com"
        aria-label="Email"
        className={socialLinkClass}
      >
        <FaEnvelope className={iconClass} />
      </a>
    </div>
  );
}
