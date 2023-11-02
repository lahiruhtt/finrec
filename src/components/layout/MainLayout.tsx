import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Next.js TypeScript App</title>
        <meta name="description" content="A simple Next.js app with TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>
        <p>© 2023 Next.js TypeScript App</p>
      </footer>
    </div>
  );
};

export default MainLayout;
