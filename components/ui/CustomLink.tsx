import { FC } from 'react';
import Link from 'next/link';
import { CTALink } from '@/interface';

interface Props extends CTALink {}

export const CustomLink: FC<Props> = ({ title, path, Icon }) => {
  return (
    <Link href={path}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Link>
  );
};
