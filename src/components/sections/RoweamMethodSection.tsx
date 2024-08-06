import roweamMethodImg from '../../assets/img/roweam-method-1.jpg';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const RoweamMethodSection = () => {
  return (
    <section className="max-container px-6 sm:px-10 2xl:px-0 flex flex-wrap justify-center items-center mb-20">
      <div className="2xl:px-16 lg:w-[40%] mt-6 mb-10">
        <p className="uppercase font-sans text-secundary-light tracking-wide font-medium">
          Parte novo vintage, parte vintage verdadeiro
        </p>
        <h2 className=" text-4xl md:text-6xl py-2 my-4 font-light opacity-80">
          O Método <span className="lg:block">Roweam</span>
        </h2>
        <p className="text-balance font-sans text-black mb-10">
          Parte novo vintage, parte vintage verdadeiro. Nosso método de design adota uma
          abordagem autêntica e reunida usando peças bem construídas, completas com um caráter
          infinito, independentemente da sua idade.
        </p>
        <AnchorLink label="Saiba mais" path="/about" />
      </div>
      <div className="overflow-hidden w-full md:w-[90%] lg:w-[60%]">
        <img
          src={roweamMethodImg}
          alt="imagem de um tecido com esboço de desenho técnico"
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};
