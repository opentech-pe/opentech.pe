/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Section } from "./ui";
import { Center } from "./helpers";

const mapa = {
  height: "400px",
  width: "100%",
  marginTop: "15px",
  background: "#999"
};

function Venue() {
  return (
    <Section>
      <section>
        <Center>
          <SubTitle>Ubicación</SubTitle>
          <span>
            Facultad de Ingeniería en Informática y Sistemas,Tingo María, Peru
          </span>
          <div css={mapa}></div>
        </Center>
      </section>
    </Section>
  );
}

export default Venue;
