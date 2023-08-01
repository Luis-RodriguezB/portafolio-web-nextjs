import { FC, DetailedHTMLProps, AriaAttributes, ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, AriaAttributes {
  text: string;
  Icon?: IconType;
}

export const CustomButton: FC<Props> = ({ text, Icon, ...rest }) => {
  return (
    <button {...rest}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  );
};
