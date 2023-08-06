import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CustomButton } from '.';
import { emailValidations } from '@/utils';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '';
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID || '';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const formData = useRef<HTMLFormElement | null>(null);

  const onSumit: SubmitHandler<FormData> = () => {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formData.current!, USER_ID)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <div className='contact__form'>
      <form ref={formData} autoComplete='off' onSubmit={handleSubmit(onSumit)}>
        <div className='form__group field'>
          <input
            id='fullName'
            className='form__field'
            placeholder='Name'
            autoComplete='off'
            {...register('fullName', {
              required: 'This field is required',
            })}
            aria-invalid={!!errors.fullName}
          />
          <label htmlFor='fullName' className='form__label'>
            Name
          </label>
          {errors.fullName && (
            <span className='error-message' role='alert'>
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className='form__group field'>
          <input
            type='text'
            id='email'
            className='form__field'
            placeholder='Email'
            autoComplete='off'
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: emailValidations.regexValidEmail,
                message: 'Provide a valid email',
              },
            })}
            aria-invalid={!!errors.email}
          />
          <label htmlFor='email' className='form__label'>
            Email
          </label>
          {errors.email && (
            <span className='error-message' role='alert'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='form__group field'>
          <textarea
            id='message'
            placeholder='Message'
            className='form__field'
            autoComplete='off'
            rows={4}
            {...register('message')}
            aria-invalid={!!errors.message}
          ></textarea>
          <label htmlFor='message' className='form__label'>
            Message
          </label>
          {errors.message && (
            <span className='error-message' role='alert'>
              {errors.message.message}
            </span>
          )}
        </div>

        <CustomButton
          className='btn contact__submit'
          text='Enviar'
          type='submit'
        />
      </form>
    </div>
  );
};
