import { Link } from 'react-router-dom';
import { NavigationMenu } from './NavigationMenu.tsx';

export const Header = () => {
  return (
    <header className="bg-primary-light h-[65px] font-sans fixed w-full shadow z-50">
      <div className="flex justify-between items-center h-full max-container px-6 sm:px-10 2xl:px-0">
        <Link
          to="/"
          className="text-[1.6rem] sm:text-[2.1rem] font-semibold tracking-wider"
        >
          ROWEAM
        </Link>
        <NavigationMenu />
      </div>
    </header>
  );
};
