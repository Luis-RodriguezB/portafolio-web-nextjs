import { CTALink } from '@/interface';
import {
  BiHome,
  BiUser,
  BiIdCard,
  BiBriefcase,
  BiSolidContact,
} from 'react-icons/bi';

export const sidebarLinks: CTALink[] = [
  {
    title: 'Home',
    path: '#',
    Icon: BiHome,
  },
  {
    title: 'About Me',
    path: '#',
    Icon: BiUser,
  },
  {
    title: 'Resume',
    path: '#',
    Icon: BiIdCard,
  },
  {
    title: 'Portafolio',
    path: '#',
    Icon: BiBriefcase,
  },
  {
    title: 'Contact',
    path: '#',
    Icon: BiSolidContact,
  },
];
