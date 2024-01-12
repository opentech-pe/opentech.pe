import React from "react";
import App from "next/app";
import Script from "next/script";

import "../public/assets/css/application.scss";

export default class OpenTech extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N48NGM27N8"></script>

        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
        </Script>

        <Component {...pageProps} />
      </>
    );
  }
}
