import { FC } from 'react';
import Link from 'next/link';
import { CTALink } from '@/interface';

interface Props extends CTALink {
  className?: string;
  onlyIcon?: boolean;
  _blank?: boolean;
  iconSize?: number | string;
}

export const CustomLink: FC<Props> = ({
  title,
  path,
  Icon,
  className,
  onlyIcon,
  _blank,
  iconSize,
}) => {
  return (
    <Link
      href={path}
      className={`${Icon ? 'custom-link' : ''} ${className}`}
      title={onlyIcon ? title : undefined}
      target={_blank ? '_blank' : undefined}
    >
      {Icon && <Icon size={iconSize} />}
      {onlyIcon ? '' : <span>{title}</span>}
    </Link>
  );
};
