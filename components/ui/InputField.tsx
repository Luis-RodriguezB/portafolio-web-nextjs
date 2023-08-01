import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
}

export const InputField: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  className,
  ...rest
}) => {
  return (
    <div className={`form__group field ${wrapperClass}`}>
      <input
        className={`form__field ${className}`}
        placeholder='FullName'
        {...rest}
        {...register}
      />
      {label && (
        <label htmlFor='FullName' className='form__label'>
          {label}
        </label>
      )}
      {error && <span role='alert'>{error}</span>}
    </div>
  );
};
