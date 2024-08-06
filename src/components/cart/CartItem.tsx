import { Link } from 'react-router-dom';
import { type ProductType } from '../../types.ts';
import { currencyFormatter } from '../../util/formatting.ts';
import { ItemQuantity } from './ItemQuantity.tsx';
import { useCartStore } from '../store/CartStore.tsx';
import { motion } from 'framer-motion';

interface CartItemProps extends ProductType {
  quantity: number;
}

export const CartItem = ({
  id,
  image,
  alt,
  title,
  price,
  vintage,
  quantity,
}: CartItemProps) => {
  const addToCart = useCartStore(state => state.addToCart);

  const removeItem = useCartStore(state => state.removeItem);

  function handleDecrease() {
    removeItem(id);
  }

  function handleIncrease() {
    addToCart({ id, image, alt, title, price, vintage });
  }

  return (
    <motion.li
      className="flex gap-4 sm:gap-6 border-light py-4 sm:py-6 "
      variants={{
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
      }}
      exit={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <Link to={`/shop/${id}`} className="w-2/6">
        <img src={image} alt={alt} loading="lazy" />
      </Link>
      <div className="w-2/6 sm:w-3/6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg opacity-80 pb-1">{title}</h3>
          <div className="italic text-secundary-light">{vintage}</div>
        </div>
        <ItemQuantity
          itemQuantity={quantity}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
      </div>
      <div className="font-sans text-sm sm:text-base w-2/6 sm:w-1/6 py-1 text-right">
        {currencyFormatter.format(price * quantity)}
      </div>
    </motion.li>
  );
};
