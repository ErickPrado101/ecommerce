import makeHistoryImg from '../../assets/img/make-history-image.jpg';
import { AnchorLink } from '../UI/AnchorLink';

export const MakeHistorySection = () => {
  return (
    <section className="max-container px-6 sm:px-10 2xl:px-0 pb-20 lg:py-20">
      <div className="bg-primary-light bg-opacity-60 flex flex-wrap justify-center p-4 sm:p-10">
        <div className="lg:w-1/2 relative appear-item">
          <img
            src={makeHistoryImg}
            alt="uma cadeira em uma floresta, cercada por árvores"
          />
        </div>
        <div className="lg:w-1/2 lg:px-20 flex flex-col items-start justify-center gap-7">
          <div className="uppercase text-secundary-light tracking-wide font-sans font-medium mt-6">
            Envelhecendo como Arte
          </div>
          <h2 className="text-3xl sm:text-4xl">Faça história</h2>
          <p className="font-sans">
            Pelo amor ao novo e ao antigo, buscamos fornecedores com um olhar
            especializado para produtos que transmitem um senso de originalidade
            e atemporalidade.
          </p>
          <AnchorLink label="Compre agora" path="/shop" />
        </div>
      </div>
    </section>
  );
};
