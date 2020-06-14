import Head from "next/head";

import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function CodeOfConduct() {
  return (
    <>
    <Head>
      <title>Code of Conduct</title>
      <link rel="icon" href="/assets/img/logo.png" />
    </Head>
    <Navbar />
    <main className="px-3 md:px-48">
      <section className="mb-20 mt-10">
        <h1 className="font-big text-center md:text-5xl">
          Código de conducta
        </h1>
      </section>
      <section className="my-20">
        <p className="font-small text-2xl">
          Se requiere que todos los asistentes, ponentes, patrocinadores y voluntarios de
          nuestro meetup <em>(sea presencial u online),</em> acepten el siguiente codigo de conducta. 
          Los organizadores harán cumplir este código a lo largo del evento. Esperamos la 
          colaboración de todos los participantes para ayudar a asegurar un ambiente seguro para todos.
        </p>
      </section>
      <section className="my-20">
        <h2 className="font-big mb-5 text-xl">La Versión Rápida</h2>
        <p className="font-small text-2xl">
          Nuestro meetup se dedica a ofrecer una experiencia libre de abusos para todos, 
          independientemente de su genero, orientación sexual, discapacidad, apariencia física, 
          talla, raza o religión. No toleramos abusos de los participantes a la conferencia 
          en ninguna de sus formas. El lenguaje e imágenes sexuales no son apropiados a ninguna 
          sala del meetup, incluyendo charlas, talleres, fiestas, twitter, facebook, slack y otros 
          medios online. Los participantes del meetup que violen estas reglas pueden ser 
          sancionados o expulsados de la misma, a discresión de los organizadores.
        </p>
      </section>
      <section className="my-20">
        <h2 className="font-big mb-5 text-xl">La Versión Menos Corta</h2>
        <p className="font-small text-2xl">
          Los abusos incluyen: comentarios ofensivos relativos a género, orientación sexual, 
          discapacidad, apariencia física, talla, raza, religión, imágenes sexuales en espacios
          públicos, intimidación deliberada, acoso, persecusión, fotografía o grabación de abusos, 
          interrupciones continuadas de charlas u otros eventos, contacto físico inapropiado y 
          atencion sexual no deseada.
          Se espera que los participantes instados a parar cualquier comportamiento abusivo 
          obedezcan inmediatamente.
          Los patrocinadores también están sujetos a la politica contra abusos.
        </p>
      </section>
    </main>
    <Footer />
    </>
  );
}

    {/* <div className="p-4 shadow rounded bg-white">
      <h1 className="text-purple-500 leading-normal">Code Of Conduct</h1>
      <ul className="text-gray-500">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/previous-events">
            <a>Previous Events</a>
          </Link>
        </li>
      </ul>
    </div> */}