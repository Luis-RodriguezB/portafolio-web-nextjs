import { FC } from 'react';
import { Roboto } from 'next/font/google';
import { IExperience } from '@/interface';

const roboto = Roboto({
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin'],
});

interface Props extends IExperience {}

export const Card: FC<Props> = ({
  experienceTitle,
  companyName,
  time,
  description,
}) => {
  return (
    <div className={`card ${roboto.className}`}>
      <h5 className='card__title'>
        {experienceTitle} | {companyName}
      </h5>
      <small className='card__time'>{time}</small>
      <p className='card__description'>{description}</p>
    </div>
  );
};
