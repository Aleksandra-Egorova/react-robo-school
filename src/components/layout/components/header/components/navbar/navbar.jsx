import { useWindowSize } from '@/hooks/useWindowSize';

import { NavbarDesktop } from './devices/desktop/navbar-desktop';
import { NavbarMobile } from './devices/mobile/navbar-mobile';

const navbarItems = [
  {
    id: 1,
    title: 'О школе',
    href: '#status',
  },
  {
    id: 2,
    title: 'Тренеры',
    href: '#teachers',
  },
  {
    id: 3,
    title: 'Стоимость',
    href: '#packages',
  },
];

export const Navbar = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width <= 1024 ? (
        <NavbarMobile navbarItems={navbarItems} />
      ) : (
        <NavbarDesktop navbarItems={navbarItems} />
      )}
    </>
  );
};
