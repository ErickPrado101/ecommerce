import { BromleyImg } from '../../constants/data.ts';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const CollectionHomeSection = () => {
  return (
    <section className="max-container mb-20 px-6 sm:px-10 2xl:px-0">
      <h2 className="text-center text-secundary-light uppercase font-sans font-medium py-6 my-10">
        Este é o novo Nostalgia      </h2>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4 text-center lg:pr-8 mt-8 order-2 lg:order-1">
          <p className="uppercase font-sans font-medium text-secundary-light tracking-wide">
            Roweam Novo Vintage          </p>
          <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-normal">
            A Coleção Bromley          </h3>
          <p className="font-sans text-secundary py-2">
            Nossa coleção fundamental, projetada com famílias e conforto em mente. Designs requintados que promovem uma vida bem vivida para as gerações futuras.
          </p>
          <AnchorLink label="Shop now" path="/shop" />
        </div>
        <div className="lg:w-1/2 lg:order-3 w-full md:w-[90%]">
          <img
            src={BromleyImg}
            alt="Sofá da coleção Bromley"
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};
