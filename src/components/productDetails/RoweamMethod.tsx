import sofaTableImg from '../../assets/img/sofa-table.jpg';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const RoweamMethod = () => {
  return (
    <section className="py-20 px-6 sm:px-10 2xl:px-0">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 max-container p-6 md:p-10 bg-primary-light bg-opacity-60">
        <div className="lg:w-3/5 w-full">
          <img
            src={sofaTableImg}
            alt="mesa de madeira rara"
            className="w-full object-contain"
          />
        </div>
        <div className="lg:w-2/5 flex flex-col justify-center items-start">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl opacity-80 pb-6 pt-4">
            Sobre nós:
          </h2>
          <p className="font-sans pb-4">
            Acreditamos no poder de contar histórias através de peças únicas que são feitas para envelhecer ao longo das gerações. Nossos produtos personalizados fazem exatamente isso. Todas as opções de materiais são favoritos testados e comprovados que adquirem uma pátina perfeita. Então, aproveite o sol e brinque, durma e manche — nossos móveis são feitos para uma vida vivida plenamente.
          </p>
          <AnchorLink
            label="Learn more"
            path="/about"
            className="text-sm my-4"
          />
        </div>
      </div>
    </section>
  );
};
