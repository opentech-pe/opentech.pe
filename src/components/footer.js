/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { Bar, Logo, Nav } from "../components/ui";

function ActiveLink(props) {
  function getProps({ isCurrent }) {
    return {
      style: {
        color: isCurrent ? "#000" : "#fff"
      }
    };
  }
  return <Link {...props} getProps={getProps} />;
}

function Footer() {
  return (
    <footer css={{ background: "#3498DB" }}>
      <Bar>
        <Logo styles={{ color: "#fff" }}>
          <Link to="/">OpenTech</Link>
        </Logo>
        <Nav styles={{ a: { color: "#fff !important" } }}>
          <ul>
            <li>
              <a
                href="https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jhonfitzgerald%2C+paulotijero&labels=cfp&template=propuesta-de-charla.md&title=Título+de+tu+charla+.+.+."
                target="_blank"
                rel="noopener noreferrer"
              >
                Dar una charla
              </a>
            </li>
            <li>
              <ActiveLink to="/previous-events">Eventos Anteriores</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/code-of-conduct">Código de conducta</ActiveLink>
            </li>
            <li>
              <a
                href="https://www.facebook.com/OpenTechTM/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuestro Facebook
              </a>
            </li>
          </ul>
        </Nav>
      </Bar>
    </footer>
  );
}

export default Footer;
