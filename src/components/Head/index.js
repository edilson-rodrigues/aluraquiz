import React from 'react';
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>Alura Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Alura Quiz " />
        <meta name="description" content="IMERSÃO REACT NEXT.JS React, Styled Components e Next.js" />
        {/*  Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.edilson-rodrigues.vercel.app/" />
        <meta property="og:title" content="Alura Quiz " />
        <meta property="og:description" content="IMERSÃO REACT NEXT.JS React, Styled Components e Next.js" />
        <meta property="og:image" content="" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.edilson-rodrigues.vercel.app/" />
        <meta property="twitter:title" content="Alura Quiz " />
        <meta property="twitter:description" content="IMERSÃO REACT NEXT.JS React, Styled Components e Next.js" />
        <meta property="twitter:image" content="" />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Fonte */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
    </div>
  );
}

export default IndexPage;
