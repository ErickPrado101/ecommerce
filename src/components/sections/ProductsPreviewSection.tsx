import { useState } from 'react';
import { VintageCategoryProducts } from '../VintageCategoryProducts.tsx';
import { VintageProductsList } from '../VintageProductsList.tsx';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const ProductsPreviewSection = () => {
  const [activeCategory, setActiveCategory] = useState('New Vintage');

  return (
    <section className="max-container sm:px-10 2xl:px-0 pt-10">
      <div className="pb-10 mb-20">
        <div className="flex items-center gap-7 px-6 sm:px-0">
          <h2 className="text-3xl sm:text-4xl pb-2">Made to Age</h2>

          <AnchorLink label="Shop all" path="/shop" className="text-sm" />
        </div>
        <VintageCategoryProducts
          onChangeCategory={setActiveCategory}
          activeCateg={activeCategory}
        />
        <VintageProductsList activeCateg={activeCategory} />
      </div>
    </section>
  );
};
