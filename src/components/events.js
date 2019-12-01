/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Section } from "./ui";
import { Center } from "./helpers";
import eventsJson from "../data/events.json";

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
        {eventsJson.map(event => (
          <div key={event.day + event.date} css={{ margin: "60px auto" }}>
            <SubTitle styles={{ fontSize: 25, color: "#000" }}>
              {event.date}
            </SubTitle>
            <p>
              El día jueves {event.day} de octubre tuvimos las siguientes
              charlas:
            </p>
            <ul>
              {event.talks.map((talk, i) => (
                <li key={i + talk.title}>
                  <a
                    href={talk.slide}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    # {talk.title}
                  </a>{" "}
                  -{" "}
                  <a
                    href={talk.speaker_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {talk.speaker}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Mira nuestras{" "}
              <a href={event.photos} target="_blank" rel="noopener noreferrer">
                fotos del evento
              </a>
            </p>
          </div>
        ))}
      </section>
    </Section>
  );
}

export default Events;
