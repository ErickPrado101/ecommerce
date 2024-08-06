import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="py-4 font-sans text-secundary-light">
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="bg-transparent outline-none border-b border-secundary-light py-2 w-full"
      />
    </div>
  );
};
