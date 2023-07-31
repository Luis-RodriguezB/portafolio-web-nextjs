import type { AppProps } from 'next/app';

import { Roboto, Source_Code_Pro } from 'next/font/google';
import '@/styles/globals.scss';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-source-code-pro',
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${sourceCodePro.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
