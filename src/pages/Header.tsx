import bg from "../assets/bg.png";
import vectorImage from "../assets/vector.png";
import "../index.css";
import AnimatedText from "../components/AnimatedText";
import SocialLinks from "../components/SocialLinks";

export default function Header() {
  return (
    <div
      className="hero min-h-screen w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="mx-auto max-w-6xl px-6 py-8 md:py-10
                 flex flex-col lg:grid lg:grid-cols-[auto_1fr_auto]
                 items-center lg:items-center justify-center
                 gap-4 sm:gap-6 md:gap-8 lg:gap-6
                 text-center lg:text-left"
      >
        {/* Social Links */}
        <div className="flex justify-center md:justify-start mb-4 md:mb-0 md:mr-4">
          <SocialLinks />
        </div>

        {/* Texto */}
        <div className="max-w-xl mx-auto lg:mx-0">
          <p className="text-sm md:text-lg font-popp mb-1">
            Seja bem-vindo! Me chamo
          </p>
          <h1 className="text-4xl md:text-5xl font-baimj text-white leading-tight mb-1">
            Samuel Rodrigues
          </h1>
          <AnimatedText text="FullStack Developer" />
          <div className="mt-4 flex justify-center lg:justify-start gap-3">
            <a className="button-primary" target="_blank" href="/samuel_cv.pdf">
              Download CV
            </a>
            <a className="button-secondary" href="#contato">
              Fale Comigo
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="justify-self-end flex justify-center lg:justify-end mb-2 lg:mb-0">
          <img
            src={vectorImage}
            alt="Vector image"
            className="
              sm:w-[300px] md:w-[400px] lg:w-[460px]
              h-auto max-w-full
            "
          />
        </div>
      </div>
    </div>
  );
}
