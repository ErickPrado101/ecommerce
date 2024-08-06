import { CollectionHomeSection } from '../components/sections/CollectionHomeSection.tsx';
import { InSituSection } from '../components/sections/InSituSection.tsx';
import { ProductsPreviewSection } from '../components/sections/ProductsPreviewSection.tsx';
import { RoweamMethodSection } from '../components/sections/RoweamMethodSection.tsx';

import homeImg from '../assets/img/home.jpg';
import { JoinSection } from '../components/sections/JoinSection.tsx';

export default function Home() {
  return (
    <>
      <div className="mb-16 overflow-hidden">
        <img
          src={homeImg}
          alt="sala com mesa, sofá, cadeiras e poltronas, com tom marrom estilo vintage"
          className="min-h-[80vh] sm:min-h-[90vh] xl:min-h-screen 2xl:min-h-[130vh] w-full object-cover object-top animate-[flashAppear_0.4s_ease-in-out_0.2s_backwards]"
        />
      </div>
      <CollectionHomeSection />
      <ProductsPreviewSection />
      <InSituSection />
      <RoweamMethodSection />
      <JoinSection />
    </>
  );
}
