import Head from 'next/head'

function IndexPage(props) {
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
            </Head>
        </div>
    )
}

export default IndexPage