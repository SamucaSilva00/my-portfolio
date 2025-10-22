import "../index.css";
import photo from "../assets/me.jpg";

export default function AboutMe() {
  return (
    <section className="w-full -mt-10 bg-black">
      <div
        className="
      mx-auto max-w-5xl px-6
      py-12 md:py-16
      flex flex-col md:flex-row
      items-center md:items-end
      justify-center gap-8 md:gap-12
    "
      >
        <div className="flex justify-center md:justify-end flex-shrink-0">
          <img
            src={photo}
            alt="Minha foto"
            className="
          + w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[384px] lg:h-[384px]
          object-cover rounded-2xl shadow-lg ring-1 ring-white/10
        "
          />
        </div>
        <div className="text-left max-w-[52ch]">
          <h2 className="font-baimj text-4xl md:text-5xl text-white leading-tight mb-3">
            Sobre mim
          </h2>

          <p className="text-gray text-[15px] md:text-base leading-relaxed mb-2">
            Sou{" "}
            <strong className="text-primary">Desenvolvedor Full-Stack</strong>{" "}
            com experiência prática na criação de soluções escaláveis e bem
            estruturadas. Aplico padrões como <strong>Atomic Design</strong> e{" "}
            <strong>Clean Architecture</strong> para construir aplicações
            robustas e de fácil manutenção.
          </p>

          <p className="text-gray text-[15px] md:text-base leading-relaxed">
            Atualmente curso o <strong>3º semestre</strong> de ADS, com foco em
            boas práticas de
            <strong> UI/UX</strong> e qualidade de código. Busco evoluir
            continuamente para entregar software limpo, eficiente e de alto
            impacto.
          </p>
        </div>
      </div>
    </section>
  );
}
