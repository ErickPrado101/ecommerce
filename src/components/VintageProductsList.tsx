import { ProductPreviewItem } from './ProductPreviewItem.tsx';
import { products } from '../constants/products.ts';
import { showProductsLimit } from '../constants/data.ts';

export const VintageProductsList = ({
  activeCateg,
}: {
  activeCateg: string;
}) => {
  let categoryList: typeof products;

  if (activeCateg === 'New & True Vintage') {
    categoryList = products;
  } else {
    categoryList = products.filter(product => product.vintage === activeCateg);
  }

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-6 mt-8 px-3 sm:px-0">
      {categoryList.map((product, index) => {
        if (index >= showProductsLimit) return;

        const { id, image, alt, title, price, toOrder, vintage } = product;

        return (
          <ProductPreviewItem
            key={id}
            id={id}
            image={image}
            alt={alt}
            title={title}
            price={price}
            toOrder={toOrder}
            vintage={vintage}
          ></ProductPreviewItem>
        );
      })}
    </ul>
  );
};
