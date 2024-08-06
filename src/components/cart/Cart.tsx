import { currencyFormatter } from '../../util/formatting.ts';
import { CartItem } from './CartItem.tsx';
import { Button } from '../UI/Button.tsx';
import { useCartStore } from '../store/CartStore.tsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Cart = () => {
  const isOpen = useCartStore(state => state.isOpen);
  const hideCart = useCartStore(state => state.hideCart);
  const cartItems = useCartStore(state => state.cartItems);

  function handleHideCart() {
    hideCart();
  }

  const totalPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <div className="flex justify-end">
      <div
        className={`bg-black w-full min-h-full flex justify-end absolute top-0 left-0 z-20 ${
          !isOpen ? 'hidden' : 'animate-bgOpacity'
        }`}
        onClick={handleHideCart}
      ></div>
      <motion.div
        className="w-full md:w-[31rem] fixed min-h-full bg-primary-light z-30 translate-x-full py-10 px-2"
        variants={{
          hidden: { x: '100%' },
          visible: { x: '0' },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        exit="hidden"
      >
        <div
          className={`h-[80vh] flex flex-col overflow-y-auto px-4 sm:px-8 ${
            cartItems.length <= 0 ? 'justify-center' : 'pt-10'
          }`}
        >
          {cartItems.length <= 0 && (
            <>
              <h2 className="text-3xl md:text-4xl text-secundary-light py-2">
                Seu carrinho está vazio
              </h2>
              <p className="font-sans py-2 mb-8">Produtos suferidos</p>

              <Link
                to="/shop"
                className="uppercase tracking-wider font-medium text-center text-sm font-sans py-3 text-primary-light bg-secundary-light my-4 hover:bg-dark duration-150"
                onClick={handleHideCart}
              >
                Continue a comprar
              </Link>
            </>
          )}
          {cartItems.length > 0 && (
            <ul>
              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-8 pt-1">
            <Button className="uppercase w-full">
              Completar pedido <span className="mx-3">|</span>{' '}
              {currencyFormatter.format(totalPrice)}
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
