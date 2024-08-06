import { Link } from 'react-router-dom';

interface AnchorLinkProps {
  path: string;
  label: string;
  className?: string;
}

export const AnchorLink = ({ path, label, className }: AnchorLinkProps) => {
  return (
    <Link
      to={path}
      className={`text-secundary-light uppercase font-sans font-medium border-b pb-1 opacity-85 border-secundary-light tracking-wide hover:text-secundary duration-200 hover:border-secundary text-sm sm:text-base ${
        className ? className : ''
      }`}
    >
      {label}
    </Link>
  );
};
