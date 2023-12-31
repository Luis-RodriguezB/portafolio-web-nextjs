import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiUpArrowCircle } from 'react-icons/bi';

export const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const toggleVisible = () => {
    const scrollTop = document.documentElement.scrollTop;
    setVisible(() => scrollTop > 1000);
  };

  const onGoTopScroll = () => {
    if (router.asPath.length > 1) {
      router.replace('/');
    }
    if (typeof window !== 'undefined') {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible);
  }

  return (
    <button
      title='Scroll Top'
      type='button'
      className={`btn-scrolltop ${visible ? 'visible' : ''}`}
      onClick={onGoTopScroll}
    >
      <BiUpArrowCircle />
    </button>
  );
};
