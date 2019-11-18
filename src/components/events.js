/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Section } from "./ui";
import { Center } from "./helpers";

const container = {
  ul: {
    listStyle: "none",
    padding: "10px 0",
    marginLeft: 10
  },
  li: {
    paddingRight: 8,
    margin: "15px 0",
    a: {
      textDecoration: "none",
      ":first-of-type": {
        color: "#000",
        ":hover": {
          color: "#3498DB"
        }
      },
      ":last-child": {
        color: "#3498DB"
      }
    }
  },
  p: {
    a: {
      textDecoration: "none",
      color: "#3498DB"
    }
  },
  "@media (max-width: 768px)": {
    "p, li": {
      fontSize: 10,
      lineHeight: "20px"
    },
    h2: {
      lineHeight: "30px",
      ":first-of-type": {
        fontSize: 15
      },
      ":last-child": {
        fontSize: 20
      }
    }
  }
};

function Events() {
  return (
    <Section styles={container}>
      <section>
        <Center>
          <SubTitle styles={{ fontSize: 48, textAlign: "center" }}>
            Eventos anteriores
          </SubTitle>
        </Center>
        <div css={{ margin: "60px auto" }}>
          <SubTitle styles={{ fontSize: 25, color: "#000" }}>
            Octubre 2019
          </SubTitle>
          <p>El día jueves 10 de octubre tuvimos las siguientes charlas:</p>
          <ul>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1xunS6ES6TnrK5kiAfsz7MZRdxBGKcVRSQyKME2DAia0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                # How to create a junior developer-friendly culture
              </a>{" "}
              -{" "}
              <a
                href="https://twitter.com/paulotijero"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paulo Tijero
              </a>
            </li>
            <li>
              <a
                href="https://sergiodxa.com/slides/frontend-testing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                # Testing in the Frontend World
              </a>{" "}
              -{" "}
              <a
                href="https://twitter.com/sergiodxa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sergio Xalambri
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1yt0-D5a3G-rBVtBoRJNKLbmT-uZM98gmAHb2SbhsMs0/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                # Webpacker & JSON API resources
              </a>{" "}
              -{" "}
              <a
                href="https://twitter.com/DiegoGCuevas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diego Cuevas
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1DRBoH3eYV_0GsTcWg06KovCBSAIXrHjqhs51NLS4kGs/edit#slide=id.g631d522fdb_0_10"
                target="_blank"
                rel="noopener noreferrer"
              >
                # Understanding $watch & ng-change
              </a>{" "}
              -{" "}
              <a
                href="https://twitter.com/juanSilupuTM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Silupu Maza
              </a>
            </li>
          </ul>
          <p>
            Mira nuestras{" "}
            <a
              href="https://photos.app.goo.gl/1y8kn2PZ2Qy1pQTP7"
              target="_blank"
              rel="noopener noreferrer"
            >
              fotos del evento
            </a>
          </p>
        </div>
        <div css={{ margin: "60px auto" }}>
          <SubTitle styles={{ fontSize: 25, color: "#000" }}>
            Noviembre 2019
          </SubTitle>
          <p>El día jueves 14 de noviembre tuvimos las siguientes charlas:</p>
          <ul>
            <li>
              <a
                href="https://docs.google.com/presentation/d/12DsoWV2pQJ4H60AY6BNXYQXl5yI8HTupKaL8QGWh8n8/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                # Introducción a angular y no morir en el intento.
              </a>{" "}
              -{" "}
              <a
                href="https://github.com/thelinch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Antony Inga
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/15RbVUW0SUZiWUgxdhqDjCn01--6CC4HLo9ZbGnVaKtg/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                # 3 razones por las cuales usar gitflow.
              </a>{" "}
              -{" "}
              <a
                href="https://twitter.com/tony_ojedaV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tony Ojeda
              </a>
            </li>
          </ul>
          <p>
            Mira nuestras{" "}
            <a
              href="https://photos.app.goo.gl/G62HtRbc5xKHN4S37"
              target="_blank"
              rel="noopener noreferrer"
            >
              fotos del evento
            </a>
          </p>
        </div>
      </section>
    </Section>
  );
}

export default Events;
