import { CartIcon } from '../icons/CartIcon.tsx';
import { useCartStore } from '../store/CartStore.tsx';

interface CartButtonProps {
  visible: boolean;
  onCloseBar: (visible: boolean) => void;
}

export const CartButton = ({ visible, onCloseBar }: CartButtonProps) => {
  const toggleShowCart = useCartStore(state => state.toggleShowCart);
  const cartItems = useCartStore(state => state.cartItems);

  const totalCartItems: number = cartItems.reduce((totalNumOfItems, item) => {
    return totalNumOfItems + item.quantity;
  }, 0);

  function handleToggleCart() {
    toggleShowCart();

    if (visible) {
      onCloseBar(false);
    }
  }

  return (
    <button
      className="uppercase tracking-wider flex items-center font-medium text-secundary opacity-80 text-sm"
      onClick={handleToggleCart}
    >
      <CartIcon className="inline-block mr-2" />
      <span className="relative border-anime">Cart</span>
      <span className="ml-2">{totalCartItems}</span>
    </button>
  );
};
