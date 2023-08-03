import { useMemo, useState } from 'react';
import { CustomButton, Timeline } from '.';
import { ExperienceOptions } from '@/interface';
import { experiences } from '@/data';

export const Experience = () => {
  const [experienceOption, setExperienceOption] = useState(
    ExperienceOptions.JOB
  );

  const sortedExperience = useMemo(() => {
    return experiences.filter(experience => experience.type === experienceOption);
  }, [experienceOption]);

  return (
    <div className='experienceContainer'>
      <div className='experience-options'>
        <CustomButton
          className={`${
            experienceOption === ExperienceOptions.JOB ? 'active' : ''
          }`}
          onClick={() => setExperienceOption(ExperienceOptions.JOB)}
          type='button'
          text='Job Experience'
        />
        <CustomButton
          className={`${
            experienceOption === ExperienceOptions.EDUCATION ? 'active' : ''
          }`}
          onClick={() => setExperienceOption(ExperienceOptions.EDUCATION)}
          type='button'
          text='Education'
        />
      </div>
      <Timeline experiences={sortedExperience} />
    </div>
  );
};
