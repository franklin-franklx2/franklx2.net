import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import { Suspense } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Suspense fallback={<div>Loading</div>}>
        <Component {...pageProps} />
      </Suspense>
    </Provider>
  );
}

export default MyApp;
