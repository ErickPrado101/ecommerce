import { products } from '../../constants/products.ts';
import { ProductPreviewItem } from '../ProductPreviewItem.tsx';

let productsList: typeof products;

export const ShopProductsList = ({ activeCateg }: { activeCateg: string }) => {
  if (activeCateg === 'Shop All') {
    productsList = products;
  } else {
    productsList = products.filter(product => activeCateg === product.type);
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-10 mt-14 pb-10 px-3 md:px-0">
      {productsList.map(product => {
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
