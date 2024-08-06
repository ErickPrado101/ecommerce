import { create } from 'zustand';
import { type ProductType } from '../../types.ts';

interface CartItems extends ProductType {
  quantity: number;
}

interface CartStore {
  cartItems: CartItems[];
  isOpen: boolean;

  toggleShowCart: () => void;
  hideCart: () => void;
  addToCart: (product: ProductType) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartStore>((set, get) => {
  return {
    cartItems: [],
    isOpen: false,
    toggleShowCart: () => {
      set(state => ({
        isOpen: !state.isOpen,
      }));
    },
    hideCart: () => set({ isOpen: false }),
    addToCart: product => {
      const cartItems = get().cartItems;
      const updatedCartItems = [...cartItems];

      const existingItemIndex = updatedCartItems.findIndex(
        item => item.id === product.id
      );

      if (existingItemIndex > -1) {
        const existingItem = updatedCartItems[existingItemIndex];

        if (existingItem.quantity >= 10) return;

        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        updatedCartItems[existingItemIndex] = updatedItem;
      } else {
        updatedCartItems.push({ ...product, quantity: 1 });
      }

      set({ cartItems: updatedCartItems });
    },
    removeItem: id => {
      const cartItems = get().cartItems;
      const updatedCartItems = [...cartItems];
      const existingItemIndex = updatedCartItems.findIndex(
        item => item.id === id
      );

      const existingItem = updatedCartItems[existingItemIndex];

      if (existingItem.quantity === 1) {
        updatedCartItems.splice(existingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedCartItems[existingItemIndex] = updatedItem;
      }

      set({ cartItems: updatedCartItems });
    },
  };
});
