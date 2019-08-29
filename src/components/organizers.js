/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Organizer, Section } from "./ui";
import { Center } from "./helpers";

const organizersContent = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  margin: 30
};

function Organizers() {
  return (
    <Section styles={{ background: "#F2F3F5" }}>
      <section>
        <Center>
          <SubTitle>Organizadores</SubTitle>
          <span>Las siguiente personas hacen posible OpenTech</span>
        </Center>
        <div css={organizersContent}>
          <Organizer>
            <h3>Paulo Tijero</h3>
            <div>
              <a
                href="https://github.com/paulotijero"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://twitter.com/paulotijero"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </Organizer>
          <Organizer>
            <h3>Jhon Fitzgerald</h3>
            <div>
              <a
                href="https://github.com/jhonfitzgerald"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://twitter.com/FitzgeraldOrtiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </Organizer>
          {/* <Organizer>
            <h3>Nombre Apellido</h3>
            <div>
              <a href="#">Github</a>
              <a href="#">Twitter</a>
            </div>
          </Organizer> */}
        </div>
      </section>
    </Section>
  );
}

export default Organizers;
