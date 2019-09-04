/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Organizer, Section } from "./ui";
import { Center } from "./helpers";

function Organizers() {
  return (
    <Section styles={{ background: "#F2F3F5" }}>
      <section>
        <Center>
          <SubTitle>Organizadores</SubTitle>
          <span>Las siguiente personas hacen posible OpenTech</span>
        </Center>
        <Organizer>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <h3>Manuel Curitima</h3>
            <div>
              <a
                href="https://github.com/manuelrojasc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://twitter.com/manuelrojasc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </Organizer>
      </section>
    </Section>
  );
}

export default Organizers;
