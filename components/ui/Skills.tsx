import { programmingLanguages } from '@/data';
import Image from 'next/image';

export const Skills = () => {
  return (
    <div className='skills'>
      <h3 className='skills__title'>knowledges</h3>
      <ul className='skills__list'>
        {programmingLanguages.map((language) => (
          <li className='skills__list-item' key={language.name}>
            <Image src={language.url} alt={language.name} width={50} height={50} loading='lazy' />
          </li>
        ))}
      </ul>
    </div>
  );
};
