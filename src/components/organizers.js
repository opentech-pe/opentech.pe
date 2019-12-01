/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Organizer, Section } from "./ui";
import { Center } from "./helpers";
import organizersJson from "../data/organizers.json";

function Organizers() {
  return (
    <Section styles={{ background: "#F2F3F5" }}>
      <section>
        <Center>
          <SubTitle>Organizadores</SubTitle>
          <span>Las siguiente personas hacen posible OpenTech</span>
        </Center>
        <Organizer>
          {organizersJson.map(organizer => (
            <div key={organizer.fullname}>
              <h3>{organizer.fullname}</h3>
              <div>
                {organizer.social_networks.map(
                  (social, i) =>
                    i < 2 && (
                      <a
                        key={social.name + i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.name}
                      </a>
                    )
                )}
              </div>
            </div>
          ))}
        </Organizer>
      </section>
    </Section>
  );
}

export default Organizers;
