import { footerData } from '@/data';
import { CustomLink } from '..';

export const FooterSection = () => {
  return (
    <footer className='footer'>
      <nav className='footer__links'>
        {footerData.map((link) => (
          <CustomLink
            key={link.title}
            iconSize='2.5ch'
            onlyIcon
            _blank
            {...link}
          />
        ))}
      </nav>
    </footer>
  );
};
