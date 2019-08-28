/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle } from "./ui";
import { Center } from "./helpers";

const container = {
  padding: "30px 45px",
  background: "#F2F3F5",
  p: {
    fontSize: 14,
    lineHeight: "27px",
    textAlign: "center"
  }
};

function About() {
  return (
    <section css={container}>
      <Center>
        <SubTitle>Sobre nosotros</SubTitle>
        <p>
          Somos una comunidad de usuarios de apasionados por la tecnología en
          Tingo María, Perú. Nos reunirnos una vez al mes: el segundo viernes de
          cada mes, nos juntamos de 7:00 pm a 9:00 pm para escuchar charlas
          sobre tecnologías y temas relacionados. Estas reuniones son gratuitas,
          libres y todos son bienvenidos. No se requiere invitación o nivel de
          conocimiento.
        </p>
      </Center>
      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseline"
        }}
      >
        <Center>
          <SubTitle styles={{ fontSize: 18 }}>Comunidad de Tecnología</SubTitle>
          <p css={{ maxWidth: 635 }}>
            Como a tí, nos encanta la tecnología y hablar de ella, puedes formar
            parte de nuestra comunidad en Slack donde puedes encontrarnos todos
            los días para seguir hablando.
          </p>
          <a href="#" css={{ color: "currentColor", marginTop: "30px" }}>
            Únete a nuestra comunidad
          </a>
        </Center>
        <Center>
          <SubTitle styles={{ fontSize: 18 }}>Espacio Libre y Abierto</SubTitle>
          <p css={{ maxWidth: 635 }}>
            Somos una comunidad con ganas de aprender siempre abierta a nuevas
            propuestas de charlas. Si hay algo en lo que eres experto o estas
            aprendiendo, la mejor forma de aprender es enseñar.
          </p>
          <a href="#" css={{ color: "currentColor", marginTop: "5px" }}>
            Propón una charla
          </a>
        </Center>
      </div>
    </section>
  );
}

export default About;
