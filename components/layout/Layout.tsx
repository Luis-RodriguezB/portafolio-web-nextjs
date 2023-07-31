import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Sidebar, Header } from '..';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portafolio Web - Luis Rodriguez</title>
        <meta name='author' content='Luis Rodriguez' />
        <meta name='description' content='Desarrollador FullStack' />
        <meta name='keywords' content='' />
      </Head>
      <>
        <Header />
        <main className='main'>{children}</main>
      </>
    </>
  );
};
