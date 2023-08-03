import { FC } from 'react';
import { IExperience } from '@/interface';
import { Card } from '.';

interface Props {
  experiences: IExperience[];
}

export const Timeline: FC<Props> = ({ experiences = [] }) => {
  return (
    <ul className='timeline'>
      {experiences.map((experience) => (
        <li className='time' key={`${experience.experienceTitle}__${experience.companyName}`}>
          <Card {...experience} />
        </li>
      ))}
    </ul>
  );
};
