import { NavLink } from 'react-router-dom';
import { UserIcon } from './icons/UserIcon.tsx';

interface NavigationProps {
  visible: boolean;
  onCloseBar: (visible: boolean) => void;
}

export const Navigation = ({ visible, onCloseBar }: NavigationProps) => {
  function handleCloseBar() {
    if (visible) {
      onCloseBar(false);
    }
  }

  return (
    <>
      {visible && (
        <div
          className="absolute top-[65px] left-0 hidden sm:block lg:hidden bg-black bg-opacity-45 w-full h-screen"
          onClick={handleCloseBar}
        ></div>
      )}
      <nav
        className={`absolute w-screen md:w-[50%] h-screen lg:h-auto top-[65px] right-0 lg:w-auto lg:translate-x-0 lg:static bg-primary-light lg:bg-transparent duration-500 ${visible ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="flex p-6 lg:p-0 lg:items-center lg:gap-12 uppercase font-medium tracking-wider text-secundary opacity-80 text-sm h-full flex-col lg:flex-row">
          <li className="border-light lg:border-0">
            <NavLink
              to="/shop"
              className="relative lg:border-anime py-6 block lg:inline lg:py-0"
              onClick={handleCloseBar}
            >
              Produtos
            </NavLink>
          </li>
          <li className="border-light lg:border-0">
            <NavLink
              to="/collections"
              className="relative lg:border-anime py-6 lg:py-0 block lg:inline"
              onClick={handleCloseBar}
            >
              Coleções
            </NavLink>
          </li>
          <li className="border-light lg:border-0">
            <NavLink
              to="/about"
              className="relative lg:border-anime py-6 block lg:py-0 lg:inline"
              onClick={handleCloseBar}
            >
              Sobre nós            </NavLink>
          </li>
          <li className="border-light lg:border-0">
            <NavLink
              to="/login"
              className="flex py-6 lg:py-0"
              onClick={handleCloseBar}
            >
              <UserIcon className="hidden lg:inline-block mr-1" />
              <span className="relative lg:border-anime">Login</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
