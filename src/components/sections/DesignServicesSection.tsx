import designServicesImg from '../../assets/img/design-services.jpg';

export const DesignServicesSection = () => {
  return (
    <section
      className="max-container px-6 sm:px-10 2xl:px-0 font-sans pb-14"
      id="design-services"
    >
      <div className="flex flex-wrap justify-center md:flex-nowrap gap-10 py-10">
        <div className="w-full lg:w-3/5 flex flex-col justify-center gap-6 order-2">
          <h2 className="text-3xl lg:text-4xl font-serif">
            Serviços de Design de Interiores
          </h2>
          <p className="lg:text-lg">
            Serviços completos de design de interiores para transformações de
            residências inteiras.
          </p>
          <div>
            Consulta Geral:{' '}
            <span className="border-b border-secundary">hello@roweam.com</span>
          </div>
        </div>
        <div className="w-full lg:w-2/5 order-1 lg:order-2">
          <img
            src={designServicesImg}
            alt="sala elegante com estilo vintage, sofá branco, poltrona e mesa na sala."
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};
