import { IconType } from 'react-icons';

export interface CTALink {
  title: string;
  path: string;
  Icon?: IconType;
}

export enum ExperienceOptions {
  JOB = 'Job_Experience',
  EDUCATION = 'Education_Experience',
}

export interface IExperience {
  experienceTitle: string;
  companyName: string;
  time: string;
  description?: string;
  type: ExperienceOptions
}
