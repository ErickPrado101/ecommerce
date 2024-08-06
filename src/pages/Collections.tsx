import { Link } from 'react-router-dom';
import { collections } from '../constants/data.ts';
import { MakeHistorySection } from '../components/sections/MakeHistorySection.tsx';

export default function Collections() {
  return (
    <>
      <section className="max-container px-6 sm:px-10 2xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-14 lg:gap-y-6 pt-32 pb-20">
        {collections.map(collection => {
          return (
            <div className="pb-20" key={collection.title}>
              <div className="overflow-hidden h-full">
                <Link to={collection.link}>
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="object-cover h-full  hover:scale-105 duration-500"
                    width={492}
                    height={460}
                    loading="lazy"
                  />
                </Link>
              </div>
              <h3 className="text-xl lg:text-2xl pt-2 lg:pt-7 pb-2">
                {collection.title}
              </h3>
              <p className="py-1 italic text-secundary-light text-sm lg:text-lg">
                {collection.description}
              </p>
            </div>
          );
        })}
      </section>
      <MakeHistorySection />
    </>
  );
}
