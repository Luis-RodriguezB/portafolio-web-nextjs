import { FC, HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface Props {
  register: UseFormRegister<FieldValues>;
  type: HTMLInputTypeAttribute | 'textarea';
  placeholder?: string;
}

export const InputField: FC<Props> = ({
  type = 'text',
  placeholder,
  register,
}) => {
  return (
    <div className='input-field'>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} {...register}></textarea>
      ) : (
        <input placeholder={placeholder} {...register} />
      )}
    </div>
  );
};
