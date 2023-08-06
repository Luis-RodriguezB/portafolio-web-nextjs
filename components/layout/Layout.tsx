import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Header, ScrollTopButton } from '..';
import { metadata } from '@/data';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { generalMeta, ogMeta } = metadata;
  return (
    <>
      <Head>
        <title>{generalMeta.title}</title>
        <meta name='author' content={generalMeta.title} />
        <meta name='description' content={generalMeta.description} />
        <meta name='keywords' content={generalMeta.keywords.join(',')} />

        <meta property='og:title' content={ogMeta.title} />
        <meta property='og:description' content={ogMeta.description} />
        <meta property='og:image' content='' />
        <meta property='og:image:alt' content='' />

      </Head>
      <>
        <Header />
        <main className='main'>{children}</main>
        <ScrollTopButton />
      </>
    </>
  );
};
