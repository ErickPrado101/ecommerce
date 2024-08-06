import { processList } from '../../constants/data.ts';
import { ProcessItem } from '../ProcessItem.tsx';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const ProcessSection = () => {
  return (
    <section
      className="max-container grid grid-cols-1 lg:grid-cols-2 py-10 mt-16 px-6 sm:px-10 2xl:px-14 gap-20"
      id="process"
    >
      <div className="max-w-4xl">
        <div className="font-sans text-secundary-light uppercase tracking-wide font-medium mt-8">
          Processo
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl my-4">
          O Método Roweam
        </h2>
        <p className="py-4 font-sans">
          Parte novo vintage, parte vintage verdadeiro, nosso método de design adota uma abordagem
          autêntica e reunida usando peças bem construídas, completas com um caráter infinito, 
          independentemente da sua idade. Na Roweam, acreditamos que o caráter é um alicerce dos
          interiores atemporais. Criamos peças feitas para envelhecer e viver através das gerações.
        </p>
        <AnchorLink label="Compre agora" path="/shop" />
      </div>
      {processList.map(process => (
        <ProcessItem
          key={process.id}
          title={process.title}
          image={process.image}
          alt={process.alt}
          description={process.description}
          id={process.id}
        />
      ))}
    </section>
  );
};
