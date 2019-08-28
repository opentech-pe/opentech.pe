/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Sentence } from "./ui";
import { Center } from "./helpers";

const container = {
  margin: "50px 0",
  "@media (max-width: 768px)": {
    img: {
      height: "120px"
    }
  }
};

function Slogan() {
  return (
    <section css={container}>
      <Center>
        <img src="/assets/img/heart.png" alt="heart" />
        <Sentence>La tecnología es nuestra pasión.</Sentence>
      </Center>
    </section>
  );
}

export default Slogan;
