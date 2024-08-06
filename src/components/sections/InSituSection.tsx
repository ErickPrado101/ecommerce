import { Link } from 'react-router-dom';
import inSituImg from '../../assets/img/home-3.jpg';

export const InSituSection = () => {
  return (
    <section className="relative mb-20">
      <div className="w-full h-96 sm:h-auto">
        <img
          src={inSituImg}
          alt="Sala com mesa e cadeiras vintage"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="absolute bottom-8 lg:bottom-28 text-primary-light w-full">
        <div className="max-container px-6 sm:px-10 2xl:px-0">
          <h2 className="text-4xl lg:text-5xl py-3">Roweam In Situ</h2>
          <p className="lg:text-xl py-2 mb-3">
            Uma coleção selecionada de peças personalizadas e vintage, estilizadas para a loja.
          </p>
          <Link
            to="/shop"
            className="text-primary-light bg-secundary-light bg-opacity-50 uppercase font-sans font-medium border-b p-1 border-primary-light tracking-wide text-xs sm:text-sm"
          >
            Ir para a Loja
          </Link>
        </div>
      </div>
    </section>
  );
};
