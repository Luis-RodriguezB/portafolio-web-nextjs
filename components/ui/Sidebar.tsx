import Link from 'next/link';
import { sidebarLinks } from '@/data';
import { CustomLink } from '.';

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul className='sidebar-links'>
        {sidebarLinks.map((link) => (
          <li key={link.title}>
            <CustomLink {...link} />
          </li>
        ))}
      </ul>
    </aside>
  );
};
