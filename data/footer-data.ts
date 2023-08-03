import { BiLogoLinkedinSquare, BiLogoGithub, BiIdCard } from 'react-icons/bi';
import { CTALink } from '@/interface';

export const footerData: CTALink[] = [
  {
    title: 'Linkedin',
    path: 'https://www.linkedin.com/in/luis-rodr%C3%ADguez-baltodano/?locale=en_US',
    Icon: BiLogoLinkedinSquare,
  },
  {
    title: 'Github',
    path: 'https://github.com/Luis-RodriguezB',
    Icon: BiLogoGithub,
  },
  {
    title: 'Resume',
    path: '#',
    Icon: BiIdCard,
  },
];
