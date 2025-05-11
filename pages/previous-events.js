import Layout from '../components/layout';
import { event_api } from "../data.js";

export async function getStaticProps() {
  const events = await event_api.list();
  return {
    props: {
      events
    },
  };
}

export default function PreviousEvents({ events }) {
  return (
    <Layout title="Eventos anteriores| OpenTech">
      <main className="px-3 lg:px-48 md:px-20">
        <section className="mb-16 mt-10">
          <h1 className="font-big text-center text-3xl md:text-5xl">
            Eventos anteriores
          </h1>
        </section>
        <section>
          {events
            .map((event, i) => (
              <div key={`event#${i}`} className="mb-10">
                <h2 className="font-big mb-5 text-xl">{event.date}</h2>

                <details className="mb-5">
                  <summary>
                    El día {event.day} tuvimos las siguientes charlas: ⤵️
                  </summary>
                  <div className="ml-5">
                    <ul>
                      {event.talks.map((talk, i) => (
                        <li
                          key={`talk#${i}`}
                          className="flex flex-col md:flex-row my-5 md:my-1"
                        >
                          <p># {talk.title}</p>
                          <p className="hidden md:inline-block">
                            &nbsp;-&nbsp;
                          </p>
                          <p className="text-blue-500">
                            {talk.speaker}
                            {talk.slide && (
                              <a
                                href={talk.slide}
                                target="_blank"
                                rel="noopener noreferrer"
                                type="button"
                                className="nes-btn is-error my-1 ml-4"
                              >
                                <svg className="h-3 w-3">
                                  <use xlinkHref="#slide" />
                                </svg>
                              </a>
                            )}
                            {talk.social_network && (
                              <a
                                href={talk.speaker_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                type="button"
                                className="nes-btn is-primary my-1 mx-6"
                              >
                                <svg className="h-4 w-4">
                                  <use xlinkHref={`#${talk.social_network}`} />
                                </svg>
                              </a>
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
                <p>
                  Mira las fotos del evento
                  <a
                    href={event.photos}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    className="nes-btn is-primary my-1 ml-4"
                  >
                    <svg className="h-3 w-3">
                      <use xlinkHref="#camara" />
                    </svg>
                  </a>
                </p>
              </div>
            ))
            .reverse()}
        </section>
      </main>
    </Layout>
  );
}
