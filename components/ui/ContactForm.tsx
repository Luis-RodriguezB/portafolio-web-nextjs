import { InputField } from '.';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const { register } = useForm();

  return (
    <div className='contact__form'>
      <form>
        <textarea
          name='message'
          id='message'
          placeholder='Message'
          rows={4}
        ></textarea>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};
