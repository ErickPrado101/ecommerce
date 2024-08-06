import aboutImg from '../../assets/img/about-2.jpg';

export const AboutSection = () => {
  return (
    <section
      className="max-container px-6 sm:px-10 2xl:px-0 flex flex-wrap lg:flex-nowrap justify-center gap-6 items-center pb-10 font-sans"
      id="about"
    >
      <div className="lg:w-3/5 appear-item relative md:w-[90%] w-full order-2 lg:order-1">
        <img
          src={aboutImg}
          alt="mesas e cadeiras marrons estilo vintage, em uma sala"
          className="object-contain w-full"
        />
      </div>
      <div className="lg:px-4 lg:w-2/5 order-1">
        <h2 className="uppercase text-lg tracking-wider text-secundary-light font-medium my-4 opacity-90">
          Sobre nós
        </h2>
        <p className="my-4">
        Roweam é uma marca de móveis de luxo cujas peças personalizadas de herança evocam um sentimento de simples nostalgia. Inspirada pelas mentes dos designers, elaborada pelas mãos dos artesãos e adquirida com a expertise líder da indústria, nossa coleção de móveis novos e verdadeiramente vintage é mais do que o novo e o atual. É uma experiência tangível que inspira uma vida inteira de conforto.
        </p>
      </div>
    </section>
  );
};
