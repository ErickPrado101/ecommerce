import { useParams } from 'react-router-dom';
import { products } from '../constants/products.ts';
import { ProductDetailsButton } from '../components/productDetails/ProductDetailsButton.tsx';
import { RoweamMethod } from '../components/productDetails/RoweamMethod.tsx';
import { currencyFormatter } from '../util/formatting.ts';
import { AddToCartButton } from '../components/productDetails/AddToCartButton.tsx';

export default function ProductDetails() {
  const params = useParams();

  const product = products.find(product => product.id === params.productId);

  if (!product) {
    return <p>Ocorreu um erro</p>;
  }

  const { id, title, image, alt, price, vintage, description, dimensions } =
    product;

  return (
    <>
      <section className="max-container px-6 sm:px-10 2xl:px-0 pt-28 flex flex-wrap justify-center md:flex-nowrap">
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full object-contain  animate-flashAppear"
          />
        </div>
        <div className="md:w-1/2 xl:pl-28 py-20 md:px-8 xl:p-20 flex flex-col">
          <div className="pb-8 border-light">
            <h2 className="text-3xl sm:text-4xl pb-1">{title}</h2>
            <div className="italic text-secundary-light text-lg tracking-wide opacity-80">
              {vintage}
            </div>
          </div>
          <ProductDetailsButton title="Description">
            <div className="font-normal py-2 text-sm tracking-normal">
              {description}
            </div>
          </ProductDetailsButton>
          <ProductDetailsButton title="Dimensions">
            <ul className="font-normal py-2 text-sm opacity-60">
              {dimensions.map(dimension => (
                <li key={dimension}>{dimension}</li>
              ))}
            </ul>
          </ProductDetailsButton>
          <div className="text-lg text-secundary-light font-sans font-medium py-6">
            {currencyFormatter.format(price)}
          </div>
          <AddToCartButton
            id={id}
            image={image}
            title={title}
            price={price}
            alt={alt}
            vintage={vintage}
          />
          <p className="bg-primary-light font-sans p-5 text-sm">
            Kindly allow some weeks lead time for production and an additional 2
            weeks for shipping. Thank you.
          </p>
        </div>
      </section>
      <RoweamMethod />
    </>
  );
}
