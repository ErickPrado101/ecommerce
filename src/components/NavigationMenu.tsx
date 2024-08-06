import { useState } from 'react';

import { Navigation } from './Navigation.tsx';
import { CartButton } from './cart/CartButton.tsx';
import { HamburgerIcon } from './icons/HamburgerIcon.tsx';
import { CloseIcon } from './icons/CloseIcon.tsx';

export const NavigationMenu = () => {
  const [visibility, setVisibility] = useState(false);
  function handleToggleBar() {
    setVisibility(prevVisibility => !prevVisibility);
  }

  return (
    <div className="flex gap-6 lg:gap-12">
      <button className="lg:hidden order-2 z-40" onClick={handleToggleBar}>
        {visibility ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      <Navigation visible={visibility} onCloseBar={setVisibility} />
      <CartButton visible={visibility} onCloseBar={setVisibility} />
    </div>
  );
};
