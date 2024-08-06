import contactImg from '../../assets/img/contact-image.jpg';

export const ContactSection = () => {
  return (
    <section
      className="max-container px-6 sm:px-10 2xl:px-0 flex justify-center flex-wrap lg:flex-nowrap py-10 mt-20 gap-10 font-sans"
      id="contact"
    >
      <div className="lg:w-3/5 w-full md:w-[90%]">
        <img
          src={contactImg}
          alt="imagem embaçada de janelas de uma casa branca"
          className="object-contain w-full"
        />
      </div>
      <div className="lg:w-2/5 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl py-2 font-serif">Entre em Contato</h2>
        <p className="py-4 lg:text-lg">
          Curioso sobre um produto ou tem uma pergunta sobre o nosso processo? Estamos sempre aqui e nossa caixa de entrada está sempre aberta.
        </p>
        <div className="lg:text-lg mt-2">
          Consulta Geral:{' '}
          <span className="border-b border-secundary">hello@roweam.com</span>
        </div>
        <div className="lg:text-lg">
          Programa de Parceria com Designers:{' '}
          <span className="border-b border-secundary">trade@roweam.com</span>
        </div>
      </div>
    </section>
  );
};
