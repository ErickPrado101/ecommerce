import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  textOnly?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  textOnly,
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={`${
        textOnly
          ? 'bg-transparent border border-secundary-light'
          : 'bg-secundary-light'
      } py-3 font-sans font-medium text-sm tracking-wider text-primary-light hover:bg-dark duration-200 active:bg-secundary-light ${
        className ? className : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
