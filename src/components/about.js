/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Info, Section } from "./ui";
import { Center } from "./helpers";

const container = {
  background: "#F2F3F5",
  p: {
    fontSize: 14,
    lineHeight: "27px",
    textAlign: "center"
  },
  "@media (max-width: 768px)": {
    padding: "30px 20px",
    p: {
      fontSize: 10,
      lineHeight: "20px"
    }
  }
};

function About() {
  return (
    <Section css={container}>
      <section>
        <Center>
          <SubTitle>Sobre nosotros</SubTitle>
          <p>
            Somos una comunidad de usuarios de apasionados por la tecnología en
            Tingo María, Perú. Nos reunirnos una vez al mes: el segundo viernes
            de cada mes, nos juntamos de 7:00 pm a 9:00 pm para escuchar charlas
            sobre tecnologías y temas relacionados. Estas reuniones son
            gratuitas, libres y todos son bienvenidos. No se requiere invitación
            o nivel de conocimiento.
          </p>
        </Center>
        <Info>
          <Center>
            <SubTitle styles={{ fontSize: 18 }}>
              Comunidad de Tecnología
            </SubTitle>
            <p>
              Como a tí, nos encanta la tecnología y hablar de ella, puedes
              formar parte de nuestra comunidad en Slack donde puedes
              encontrarnos todos los días para seguir hablando.
            </p>
            <a href="#">Únete a nuestra comunidad</a>
          </Center>
          <Center>
            <SubTitle styles={{ fontSize: 18 }}>
              Espacio Libre y Abierto
            </SubTitle>
            <p>
              Somos una comunidad con ganas de aprender siempre abierta a nuevas
              propuestas de charlas. Si hay algo en lo que eres experto o estas
              aprendiendo, la mejor forma de aprender es enseñar.
            </p>
            <a href="#">Propón una charla</a>
          </Center>
        </Info>
      </section>
    </Section>
  );
}

export default About;
