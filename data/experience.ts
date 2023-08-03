import { Experience, ExperienceOptions } from '@/interface';

export const experiences: Experience[] = [
  {
    experienceTitle: 'Frontend Developer',
    companyName: 'Accenture',
    time: 'December 2021 - Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, asperiores?',
    type: ExperienceOptions.JOB,
  },
  {
    experienceTitle: 'Internship - Frontend Developer',
    companyName: 'Accenture',
    time: 'August 2021 - November 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, asperiores?',
    type: ExperienceOptions.JOB,
  },
  {
    experienceTitle: 'Bachelor of Systems Engineering',
    companyName: 'Universidad Nacional',
    time: '2018 - 2021',
    type: ExperienceOptions.EDUCATION,
  }
];
