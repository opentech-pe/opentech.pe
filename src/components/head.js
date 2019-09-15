import React from "react";
import { Helmet } from "react-helmet";

function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
      />
      <meta name="language" content="es" />
      <meta name="author" content="OpenTech" />
      <meta
        name="subject"
        content="Comunidad de usuarios de apasionados por la tecnología en Tingo María"
      />
      <meta name="pagename" content="OpenTech" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="black" />
      <meta name="apple-mobile-web-app-title" content="OpenTech" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        href="/atom.xml"
        type="application/atom+xml"
        rel="alternate"
        title="OpenTech"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="OpenTech" />
      <meta
        property="og:description"
        content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
      />
      {/* <meta property="og:image" content="/assets/img/desktop.png" /> */}
      <meta
        property="og:image:alt"
        content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
      />
      <meta property="og:url" content="https://opentech.netlify.com" />
      <meta property="og:site_name" content="OpenTech" />
      <meta property="og:locale" content="es" />
      {/* <meta
        name="twitter:card"
        value="summary_large_image"
        content="summary_large_image"
      />
      <meta name="twitter:site" value="@opentech" content="@opentech" />
      <meta name="twitter:creator" value="@opentech" content="@opentech" />
      <meta
        name="twitter:url"
        value="https://opentech.netlify.com"
        content="https://opentech.netlify.com"
      />
      <meta name="twitter:title" value="OpenTech" content="OpenTech" />
      <meta
        name="twitter:description"
        value="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
        content="Somos una comunidad con ganas de aprender siempre abierta a nuevas propuestas de charlas. Si hay algo en lo que eres experto o estas aprendiendo, la mejor forma de aprender es enseñar."
      />
      <meta
        name="twitter:image"
        value="https://opentech.netlify.com/assets/img/desktop.png"
        content="https://opentech.netlify.com/assets/img/desktop.png"
      />
      <meta
        name="twitter:summary"
        content="Comunidad de usuarios de apasionados por la tecnología en Tingo María"
      /> */}
      <link rel="prefetch" href="/" />
      <link rel="prefetch" href="/code-of-conduct" />
    </Helmet>
  );
}

export default Head;
