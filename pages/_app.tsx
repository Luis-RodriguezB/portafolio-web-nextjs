import type { AppProps } from 'next/app';

import { Roboto } from 'next/font/google';
import '@/styles/globals.scss';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
