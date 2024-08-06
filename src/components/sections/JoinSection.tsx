import joinImg from '../../assets/img/join-image.jpg';
import { AnchorLink } from '../UI/AnchorLink';

export const JoinSection = () => {
  return (
    <section className="max-container px-6 sm:px-10 2xl:px-0 flex justify-center flex-wrap sm:pt-10 lg:pt-0 pb-20">
      <div className="md:w-[90%] lg:w-1/2 order-3 lg:order-1">
        <img src={joinImg} alt="Imagem de convite para se juntar à lista" />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center items-start gap-6 lg:px-20 pt-4 pb-10 order-2">
        <p className="font-sans font-medium tracking-wide text-secundary-light uppercase">
          Junte-se à lista R
        </p>
        <h2 className="text-2xl pb-6">
          Inscreva-se para ser o primeiro a saber sobre novas coleções de produtos,
          antiguidades e muito mais!
        </h2>
        <AnchorLink label="Login" path="/login" />
      </div>
    </section>
  );
};
