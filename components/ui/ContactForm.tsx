import { useForm } from 'react-hook-form';
import { InputField } from '.';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const { register } = useForm();

  return (
    <div className='contact__form'>
      <form>
        <input
          type='text'
          {...register('fullName', {
            required: 'This field is required.',
          })}
        />


        <InputField name='email' type='email' label='Email' />

        <button className='btn contact__submit' type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
};
