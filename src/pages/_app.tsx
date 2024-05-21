// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import TopBar from '@/components/topbar';
import FloatingNav from '@/components/sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <FloatingNav />
      <div style={{ marginLeft: '220px', padding: '80px 20px 20px 20px' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
