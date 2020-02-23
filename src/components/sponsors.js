/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Section, Brand } from "./ui";
import { Center } from "./helpers";

function Sponsors() {
  return (
    <Section>
      <section>
        <Center>
          <SubTitle>Sponsors</SubTitle>
          <span>Las siguientes empresas son sponsors de Open Tech</span>
        </Center>
        <Brand>
          <a
            href="https://www.web-out.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/woz.png" alt="woz" />
          </a>
        </Brand>
      </section>
    </Section>
  );
}

export default Sponsors;
