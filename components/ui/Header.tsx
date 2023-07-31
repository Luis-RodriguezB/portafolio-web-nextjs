import { sidebarLinks } from '@/data';
import { CustomLink } from '.';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <nav className='header__nav'>
          {sidebarLinks.map((link) => (
            <CustomLink key={link.title} {...link} />
          ))}
        </nav>
      </div>
    </header>
  );
};
