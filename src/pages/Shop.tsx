import { useState } from 'react';
import { ShopCategory } from '../components/shop/ShopCategory.tsx';
import { categories } from '../constants/data.ts';
import { ShopProductsList } from '../components/shop/ShopProductsList.tsx';

export default function Shop() {
  const [category, setCategory] = useState('Shop All');

  return (
    <section className="max-container sm:px-10 2xl:px-0 pb-10 pt-36 min-h-screen">
      <div className="flex items-center flex-wrap gap-10 xl:gap-20 2xl:gap-40 pb-10 px-6 sm:px-0">
        <div className="max-w-3xl xl:max-w-sm 2xl:max-w-xl">
          <h2 className="text-5xl md:text-6xl py-6 mb-4 animate-opacity">
            {category}
          </h2>
          <p className="font-sans md:pr-6 2xl:pr-20">
            Uma seleção personalizada e curada de produtos novos e verdadeiramente vintage, voltada para celebrar a beleza da patina e momentos de nostalgia. Cada peça representa um senso de herança e história, conforto e tradições, e a arte do antigo.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-8 gap-y-2 border-b border-secundary-light pb-4 animate-[opacity_0.4s_ease-in-out_0.2s_backwards]">
          {categories.map(categ => (
            <ShopCategory
              key={categ.id}
              category={categ.category}
              onSelectCategory={setCategory}
              activeCateg={category}
            />
          ))}
        </ul>
      </div>
      <ShopProductsList activeCateg={category} />
    </section>
  );
}
