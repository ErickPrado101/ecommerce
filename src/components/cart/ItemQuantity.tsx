import { MinusIcon } from '../icons/MinusIcon.tsx';
import { PlusIcon } from '../icons/PlusIcon.tsx';

interface ItemQuantityProps {
  itemQuantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const ItemQuantity = ({
  itemQuantity,
  onIncrease,
  onDecrease,
}: ItemQuantityProps) => {
  return (
    <div className="flex gap-6 items-center text-secundary-light opacity-80 pt-4">
      <button onClick={onDecrease}>
        <MinusIcon />
      </button>
      <div className="font-sans font-medium sm:text-lg">{itemQuantity}</div>
      <button onClick={onIncrease}>
        <PlusIcon />
      </button>
    </div>
  );
};
