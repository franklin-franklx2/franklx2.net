import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <React.Suspense fallback={<div>Loading</div>}>
        <Component {...pageProps} />
      </React.Suspense>
    </Provider>
  );
}

export default MyApp;
