/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px 0",
  h1: {
    textAlign: "center",
    maxWidth: 975,
    fontSize: "48px",
    lineHeight: "50px"
  },
  "@media (max-width: 768px)": {
    img: {
      height: "120px"
    },
    h1: {
      fontSize: 18,
      lineHeight: "25px",
      margin: "15px 5px"
    }
  }
};

function Slogan() {
  return (
    <section css={container}>
      <img src="/assets/img/heart.png" alt="heart" />
      <h1>La tecnología es nuestra pasión.</h1>
    </section>
  );
}

export default Slogan;
