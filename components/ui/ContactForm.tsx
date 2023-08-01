import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomButton } from '.';
import { emailValidations } from '@/utils';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSumit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className='contact__form'>
      <form onSubmit={handleSubmit(onSumit)}>
        <div className='form__group field'>
          <input
            id='fullName'
            className='form__field'
            placeholder='Name'
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
            {...register('email', {
              required: 'This field is required',
              pattern: { value: emailValidations.regexValidEmail, message: 'Provide a valid email' }
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
