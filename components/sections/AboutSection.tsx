import Image from 'next/image';
import Coding from '@/public/images/coding.svg';
import { CustomLink } from '..';

export const AboutSection = () => {
  return (
    <section id='aboutsection' className='about'>
      <div className='container h-100vh'>
        <h2 className='title'>About me</h2>
        <div className='wrapper'>
          <div className='info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ad
              voluptas iste ducimus fuga perferendis voluptatem quaerat dicta
              recusandae, quod quisquam? Sapiente maiores autem nisi atque
              accusantium aperiam repellat? Omnis.
            </p>
            <CustomLink title='Resume' path='#' _blank className='button-primary' />
          </div>
          <Image
            src={Coding}
            alt='Programming guy'
            loading='lazy'
            className='about-img'
          />
        </div>
      </div>
    </section>
  );
};
