interface GeneralInfo {
  title: string;
  description: string;
}

interface GeneralMetadata extends GeneralInfo {
  author: string;
  description: string;
  keywords: string[];
}

interface OGMetadata extends GeneralInfo {
  image?: string;
  alt?: string;
}

interface IMetadata {
  generalMeta: GeneralMetadata;
  ogMeta: OGMetadata;
}

export const metadata: IMetadata = {
  generalMeta: {
    title: 'Portafolio Web - Luis Rodriguez',
    author: 'Luis Rodriguez Baltodano',
    description: 'Highly skilled and experienced frontend developer with a strong understanding of the latest technologies. Team player with excellent communication skills. Valuable asset to any team and would be a great addition to any company.',
    keywords: [
      'Web development',
      'Front-end development',
      'Back-end development',
      'Full-stack development',
      'JavaScript',
      'React',
      'Vue.js',
      'Nextjs',
      'Typescript',
      'Problem-solving',
      'Communication',
      'Teamwork',
      'Professionalism',
      'Creativity',
      'Responsive design',
    ],
  },
  ogMeta: {
    title: 'Portafolio Web - Luis Rodriguez',
    description: 'Highly skilled and experienced frontend developer with a strong understanding of the latest technologies. Team player with excellent communication skills. Valuable asset to any team and would be a great addition to any company.'
  }
};
