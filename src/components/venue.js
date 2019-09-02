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
            src="https://maps.google.com/maps?q=Facultad%20de%20Ingenier%C3%ADa%20en%20Inform%C3%A1tica%20y%20Sistemas%2C%20E%200%20Rd%2C%20Peru%20&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen
            title="Able, Oficina 902, Jorge Chávez 184, Miraflores 15074, Lima, Perú"
            css={mapa}
          />
        </Center>
      </section>
    </Section>
  );
}

export default Venue;
