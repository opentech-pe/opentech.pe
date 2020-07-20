import React from "react";
import App from "next/app";
import Head from "next/head";

import "../public/assets/css/application.scss";

export default class OpenTech extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Home | OpenTech</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
