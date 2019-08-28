/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { Bar, Logo, Nav } from "../components/ui";

function ActiveLink(props) {
  function getProps({ isCurrent }) {
    return {
      style: {
        color: isCurrent ? "#3498DB" : "currentColor"
      }
    };
  }
  return <Link {...props} getProps={getProps} />;
}

function Navbar() {
  return (
    <header>
      <Bar>
        <Logo>
          <Link to="/">
            Open<span>Tech</span>
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <ActiveLink to="/eventos-anteriores">
                Eventos Anteriores
              </ActiveLink>
            </li>
            <li>
              <a href="https://github.com/opentech-pe">
                <img src="/assets/img/github.gif" alt="github" />
                Github
              </a>
            </li>
          </ul>
        </Nav>
      </Bar>
    </header>
  );
}

export default Navbar;
