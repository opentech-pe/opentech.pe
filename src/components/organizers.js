/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle } from "./ui";
import { Center } from "./helpers";

const container = {
  padding: "30px 45px",
  background: "#F2F3F5",
  span: {
    fontSize: 10,
    lineHeight: "20px",
    maxWidth: "600px",
    textAlign: "center",
    color: "#999"
  },
  a: {
    textDecoration: "none",
    fontSize: 10,
    lineHeight: "20px",
    color: "#999",
    marginRight: 5
  }
};

function Organizers() {
  return (
    <section css={container}>
      <Center>
        <SubTitle>Organizadores</SubTitle>
        <span>Las siguiente personas hacen posible OpenTech</span>
      </Center>
      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseline",
          margin: "100px"
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h3 css={{ marginBottom: 2 }}>Paulo Tijero</h3>
          <div css={{ textAlign: "end" }}>
            <a href="#">Github</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h3 css={{ marginBottom: 2 }}>Jhon Fitzgerald</h3>
          <div css={{ textAlign: "end" }}>
            <a href="#">Github</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Organizers;
