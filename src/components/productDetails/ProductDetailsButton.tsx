import { useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { PlusIcon } from '../icons/PlusIcon.tsx';
import { MinusIcon } from '../icons/MinusIcon.tsx';

type ProductDetailsButtonProps = {
  children: ReactNode;
  title: string;
} & ComponentPropsWithoutRef<'button'>;

export const ProductDetailsButton = ({
  children,
  title,
  ...otherProps
}: ProductDetailsButtonProps) => {
  const [openDetails, setOpenDetails] = useState(false);

  function handleOpenDetails() {
    setOpenDetails(prevOpenDetails => !prevOpenDetails);
  }

  return (
    <button
      className={`${
        !openDetails ? 'text-secundary' : 'text-secundary-light'
      } font-sans tracking-wider font-medium py-4 text-left border-light`}
      {...otherProps}
      onClick={handleOpenDetails}
    >
      <div className="uppercase opacity-85 flex justify-between">
        {title}
        <span className="text-secundary-light opacity-80">
          {!openDetails ? <PlusIcon /> : <MinusIcon />}
        </span>
      </div>
      <div
        className={`${openDetails ? 'h-auto' : 'h-7 overflow-hidden'}
          
        duration-200 font-sans`}
      >
        {children}
      </div>
    </button>
  );
};
