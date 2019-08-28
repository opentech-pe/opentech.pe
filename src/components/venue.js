/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle } from "./ui";
import { Center } from "./helpers";

const container = {
  padding: "30px 45px",
  span: {
    fontSize: 10,
    lineHeight: "20px",
    maxWidth: "600px",
    textAlign: "center",
    color: "#999"
  }
};

const mapa = {
  height: "400px",
  width: "90%",
  marginTop: "15px",
  background: "#999"
};

function Venue() {
  return (
    <section css={container}>
      <Center>
        <SubTitle>Ubicación</SubTitle>
        <span>
          Facultad de Ingeniería en Informática y Sistemas,Tingo María, Peru
        </span>
        <div css={mapa}></div>
      </Center>
    </section>
  );
}

export default Venue;
