import HTML from '@/public/programminglanguages/html5-original.svg';
import CSS from '@/public/programminglanguages/css3-original.svg';
import Typescript from '@/public/programminglanguages/typescript-original.svg';
import React from '@/public/programminglanguages/react-original.svg';
import Nextjs from '@/public/programminglanguages/nextjs-original.svg';
import Vuejs from '@/public/programminglanguages/vuejs-original.svg';
import Java from '@/public/programminglanguages/java-original.svg';

interface ProgrammingLanguages {
  name: string;
  url: string;
}

export const programmingLanguages: ProgrammingLanguages[] = [
  {
    name: 'HTML',
    url: HTML,
  },
  {
    name: 'CSS',
    url: CSS,
  },
  {
    name: 'Typescript',
    url: Typescript,
  },
  {
    name: 'React',
    url: React,
  },
  {
    name: 'Nextjs',
    url: Nextjs,
  },
  {
    name: 'Vue.js',
    url: Vuejs,
  },
  {
    name: 'Java',
    url: Java,
  },
];
