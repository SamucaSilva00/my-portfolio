import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center flex-col gap-6">
      <a
        href="https://www.linkedin.com/in/samucasilva00/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-primary hover:text-white transition-colors"
      >
        <FaLinkedin className="text-3xl md:text-4xl hover:scale-125 transition-transform duration-300" />
      </a>

      <a
        href="https://github.com/SamucaSilva00"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-primary hover:text-white transition-colors"
      >
        <FaGithub className="text-3xl md:text-4xl hover:scale-125 transition-transform duration-300" />
      </a>

      <a
        href="mailto:sammtecch@gmail.com"
        aria-label="Email"
        className="text-primary hover:text-white transition-colors"
      >
        <FaEnvelope className="text-3xl md:text-4xl hover:scale-125 transition-transform duration-300" />
      </a>
    </div>
  );
}
