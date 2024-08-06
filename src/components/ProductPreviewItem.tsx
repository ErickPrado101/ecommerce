import { Link } from 'react-router-dom';
import { type ProductType } from '../types.ts';
import { currencyFormatter } from '../util/formatting.ts';

interface ProductsPreviewItemProps extends ProductType {
  toOrder: boolean;
}

export const ProductPreviewItem = (props: ProductsPreviewItemProps) => {
  return (
    <li>
      <Link to={`/shop/${props.id}`} className="relative">
        {props.toOrder && (
          <div className="text-sm sm:text-base absolute top-3 right-3 bg-primary-light rounded-sm text-secundary-light px-2 py-1 z-10">
            Feito sob encomenda          </div>
        )}
        <div className="overflow-hidden">
          <img
            src={props.image}
            alt={props.alt}
            loading="lazy"
            width={365}
            height={485}
            className="hover:scale-105 duration-150 object-contain hover:animate-flash w-full"
          />
        </div>
        <div className="flex justify-between mt-4 pt-2  text-secundary">
          <h3 className="px-1 text-[1.1rem] sm:text-xl">{props.title}</h3>

          <div className="font-sans font-medium text-sm  sm:text-base pt-[0.2rem] opacity-80">
            {currencyFormatter.format(props.price)}
          </div>
        </div>
        <p className="italic text-secundary-light">{props.vintage}</p>
      </Link>
    </li>
  );
};
