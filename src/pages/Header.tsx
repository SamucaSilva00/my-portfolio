import bg from "../assets/bg.png";
import vectorImage from "../assets/vector.png";
import "../index.css";
import AnimatedText from "../components/AnimatedText";
import SocialLinks from "../components/SocialLinks";

export default function Header() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="px-6 flex flex-col md:flex-row items-center gap-4">
        <SocialLinks />
      </div>
      <div className="px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="max-w-2xl text-left">
          <p className="text-sm md:text-2xl font-popp">
            Seja bem-vindo! Me chamo
          </p>
          <h1 className="text-5xl xl:text-7xl lg:text-5xl font-baimj text-white lg:leading-[4.25rem]">
            Samuel Rodrigues
          </h1>
          <AnimatedText text="FullStack Developer" />
          <div className="mt-3 flex gap-4">
            <a className="button-primary" target="_blank" href="/samuel_cv.pdf">
              Download CV
            </a>
            <a className="button-secondary" href="#">
              Fale Comigo
            </a>
          </div>
        </div>

        <div className="text-center ml-4">
          <img
            src={vectorImage}
            alt="Vector image"
            className="w-[300px] md:w-[500px] lg:w-[640px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
