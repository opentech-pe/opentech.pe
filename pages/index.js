import Link from "next/link";

import Layout from "../components/layout";

export default function Index() {
  return (
    <Layout title="OpenTech">
      <main className="px-3 lg:px-48 md:px-20">
        <section className="mb-20 mt-10">
          <img className="mx-auto my-2" src="/assets/img/logo-without-bg.png" />
          <h1 className="font-big text-center text-3xl md:text-5xl">
            La tecnología es nuestra pasión.
          </h1>
        </section>
        <section>
          <p>
            Bienvenido a la comunidad de usuarios apasionados por la tecnología
            en Tingo María, Perú. Como a tí, nos encanta la tecnología y hablar
            de ella; nos reunimos el <strong>último martes de cada mes</strong>,
            de 7:00 pm a 9:00 pm, para escuchar charlas sobre tecnología y temas
            relacionados. Estas reuniones son gratuitas <em>(siempre lo serán.)</em>
            No se requiere invitación, solo necesitas curiosidad y muchas ganas
            de aprender.
          </p>
          <div className="flex justify-center text-xl my-10">
            <Link href="https://calendar.google.com/calendar/u/0?cid=cmkwdnRzMnAxMW43MWFobHRtcnVzOWtyMGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="nes-btn is-primary font-small"
              >
                Agendar al Google Calendar
              </a>
            </Link>
          </div>
        </section>
        <section>
          <h2 className="font-big mb-5 text-xl">Participa en la comunidad</h2>
          <p>
            Lo ideal es que nos sigas a través de nuestro Facebook para
            enterarte de nuestros meetups y actividades. Puedes también formar
            parte de nuestra comunidad en Discord donde nos encontraras todos
            los días para seguir hablando.
          </p>
          <div className="flex flex-col md:flex-row justify-center text-xl my-10">
            <a
              className="nes-btn is-primary font-small mx-5 my-3 md:my-0"
              href="https://www.facebook.com/OpenTechTM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siguenos en Facebook
            </a>
            <a
              className="nes-btn is-primary font-small mx-5 my-3 md:my-0"
              href="https://discord.gg/qZ9zATH5sN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Únete al Discord
            </a>
          </div>
        </section>
        <section>
          <h2 className="font-big mb-5 text-xl">Espacio libre y abierto</h2>
          <p>
            Somos una comunidad con ganas de aprender, siempre abierta a nuevas
            propuestas de charlas. Si hay algo en lo que eres experto o estas
            aprendiendo, la mejor forma de aprender es enseñar.
          </p>
          <div className="flex justify-center text-xl my-10">
            <a
              className="nes-btn is-primary font-small mx-5"
              href="https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jimmyloloy98%2C+juancx21&labels=cfp&template=propuesta-de-charla.md&title=T%C3%ADtulo+de+tu+charla"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proponer una charla
            </a>
          </div>
        </section>
        <section>
          <h2 className="font-big mb-5 text-xl">¿Cómo nos puedes ayudar?</h2>
          <p>
            Nuestro principal objetivo es compartir conocimiento en tecnología y
            que este llegue a más personas, podrías comenzar difundiendo la
            tecnología o nuestra comunidad a tus amigos de la universidad, del
            trabajo o hasta a tu familia.
          </p>
          <p>
            De igual manera, para llevar a cabo nuestros eventos, tenemos que
            contar con un presupuesto que cubre el catering (gaseosa, bocaditos,
            etc) para los asistentes, así como stickers, badges, señalética,
            nombres de dominio, etc.
          </p>
          <p>
            Así que estamos en busqueda de aliados que nos ayuden a cubrir estos
            gastos, puedes convertirte en backer (personas) o sponsor
            (organizaciones o empresas) contactándote con nosotros,{" "}
            <a className="text-blue-500" href="mailto:hola@opentech.pe">
              ¡Envianos un correo!
            </a>
          </p>
          <div className="flex flex-col md:flex-row justify-center text-xl my-10">
            <Link href="/incomplete">
              <button
                type="button"
                className="nes-btn is-primary font-small mx-5 my-3 md:my-0"
              >
                Conoce a nuestros backers
              </button>
            </Link>
            <Link href="/incomplete">
              <button
                type="button"
                className="nes-btn is-primary font-small mx-5 my-3 md:my-0"
              >
                Conoce a nuestros sponsors
              </button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
