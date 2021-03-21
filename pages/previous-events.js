import fetch from 'node-fetch';
import Layout from "../components/layout";

export async function getServerSideProps(ctx) {

  const result = await fetch(`${process.env.BASE_PATH}/api/events`)
  const data = await result.json()

  return { 
    props: { data }
  }
};

export default function PreviousEvents({ data }) {

  return (
    <Layout title="Eventos anteriores| OpenTech">
      <main className="px-3 md:px-48">
        <section className="mb-16 mt-10">
          <h1 className="font-big text-center md:text-5xl">
            Eventos anteriores
          </h1>
        </section>
        <section>
          {data.map((event, i) => (
            <div key={`event#${i}`} className="mb-10">
              <h2 className="font-big mb-5 text-xl">{event.date}</h2>
              <p>El día {event.day} tuvimos las siguientes charlas:</p>
              <div className="ml-5">
                <ul>
                  {event.talks.map((talk, i) => (
                    <li key={`talk#${i}`} className="flex flex-col md:flex-row my-5 md:my-1">
                      <p>
                        # {talk.title}
                      </p>
                      <p className="hidden md:inline-block">&nbsp;-&nbsp;</p>
                      <p className="text-blue-500">
                        {talk.speaker}
                        <a
                          href={talk.slide}
                          target="_blank"
                          rel="noopener noreferrer"
                          type="button"
                          className="nes-btn is-error my-1 mx-2"
                        >
                          <svg className="h-3 w-3">
                            <use xlinkHref="#slide" />
                          </svg>
                        </a>
                        <a
                          href={talk.speaker_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          type="button"
                          className="nes-btn is-primary my-1 mx-2"
                        >
                          <svg className="h-3 w-3">
                            <use xlinkHref={`#${talk.social_network}`} />
                          </svg>
                        </a>
                      </p>
                      
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                Mira las fotos del evento
                <a
                  href={event.photos}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  className="nes-btn is-primary my-1 mx-2"
                >
                  <svg className="h-3 w-3">
                    <use xlinkHref="#camara" />
                  </svg>
                </a>
              </p>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
