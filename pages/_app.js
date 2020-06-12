import React from "react";
import App from "next/app";
import "../public/assets/css/styles.css";

export default class OpenTech extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}