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
            Facultad de Ingeniería en Informática y Sistemas, Tingo María, Peru
          </span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3937.217424441206!2d-75.99772028255616!3d-9.313993599999993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6417ee38aea85%3A0x79baa8ae4d9da3e3!2sFacultad%20de%20Ingenier%C3%ADa%20en%20Inform%C3%A1tica%20y%20Sistemas!5e0!3m2!1ses!2sus!4v1567633965334!5m2!1ses!2sus"
            frameBorder="0"
            allowFullScreen
            title="Facultad de Ingeniería en Informática y Sistemas, Tingo María, Peru"
            css={mapa}
          />
        </Center>
      </section>
    </Section>
  );
}

export default Venue;
