import Layout from '../components/layout'

import Events from '../src/data/events.json'

export default function PreviousEvents() {
  return (
    <Layout title="Eventos anteriores| OpenTech">
      <main className="px-3 md:px-48">
        <section className="mb-16 mt-10">
          <h1 className="font-big text-center md:text-5xl">
            Eventos anteriores
          </h1>
        </section>
        <section>
          {
            Events.map((event) =>{
              return <div className="mb-10">
                <h2 className="font-big mb-5 text-xl">{event.date}</h2>
                <p>El día {event.day} tuvimos las siguientes charlas:</p>
                <div className="ml-5">
                  <ul>
                    {
                      event.talks.map(talk =>{
                        return <li>
                          <p>&#35; {talk.title} - <span className="text-blue-500">{talk.speaker}</span>&#32;<a href={talk.slide} target="_blank">slide</a>&#32;<a href={talk.speaker_link} target="_blank">social</a>
                          </p>
                        </li>
                      })
                    }
                  </ul>
                </div>
                <p>Mira las fotos del evento <a href={event.photos} target="_blank">photos</a></p>
              </div>
            })
          }
        </section>
        
      </main>
    </Layout>
  );
}
