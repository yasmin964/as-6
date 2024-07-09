// _app.tsx

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '@styles/global.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/img/favicon.png" />
        <meta name="author" content="Yasmina M." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
