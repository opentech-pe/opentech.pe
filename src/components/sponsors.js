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
            href="https://fiis.unas.edu.pe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/fiis.png" alt="fiis" />
          </a>
          <a
            href="http://lwpsac.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/lwp.png" alt="lwp" />
          </a>
          <a
            href="https://www.web-out.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/webout.png" alt="webout" />
          </a>
        </Brand>
      </section>
    </Section>
  );
}

export default Sponsors;
