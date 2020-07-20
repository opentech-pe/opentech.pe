import Document, {Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {... initialProps}
  }
  render(){
    return(
      <Html>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <link rel="icon" href="/assets/img/logo.png" />
          <meta
            name="description"
            content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
          />
          <meta name="language" content="es" />
          <meta name="author" content="OpenTech" />
          <meta
            name="subject"
            content="Comunidad de usuarios apasionados por la tecnología en Tingo María"
          />
          <meta name="pagename" content="OpenTech" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="black" />
          <meta name="apple-mobile-web-app-title" content="OpenTech" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            href="/atom.xml"
            type="application/atom+xml"
            rel="alternate"
            title="OpenTech"
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="OpenTech" />
          <meta
            property="og:description"
            content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
          />
          <meta property="og:image" content="/assets/img/cover.png" />
          <meta
            property="og:image:alt"
            content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
          />
          <meta property="og:url" content="https://opentech.pe" />
          <meta property="og:site_name" content="OpenTech" />
          <meta property="og:locale" content="es" />
          {/* <!-- Twitter --> */}
          <meta
            name="twitter:card"
            value="summary_large_image"
            content="summary_large_image"
          />
          <meta name="twitter:site" value="@opentech" content="@opentech" />
          <meta name="twitter:creator" value="@opentech" content="@opentech" />
          <meta
            name="twitter:url"
            value="https://opentech.pe"
            content="https://opentech.pe"
          />
          <meta name="twitter:title" value="OpenTech" content="OpenTech" />
          <meta
            name="twitter:description"
            value="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
            content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
          />
          <meta
            name="twitter:image"
            value="https://opentech.pe/assets/img/cover.png"
            content="https://opentech.pe/assets/img/cover.png"
          />
          <meta
            name="twitter:summary"
            content="Comunidad de usuarios apasionados por la tecnología en Tingo María"
          />
          <link rel="prefetch" href="/" />
          <link rel="prefetch" href="/code-of-conduct" />
          {/* <!-- Imports --> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
            rel="stylesheet"/>
          <link 
            href="https://unpkg.com/nes.css/css/nes.css"
            rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}