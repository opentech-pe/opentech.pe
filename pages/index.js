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
            de ella; nos reunimos <strong> una vez al mes</strong>, de 7:00 pm a
            9:00 pm, para hablar sobre tecnología y temas relacionados. Estas
            reuniones son gratuitas <em>(siempre lo serán.) </em>No se requiere
            invitación, solo necesitas curiosidad y muchas ganas de aprender.
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
            Síguenos a través del Facebook de la comunidad para enterarte de los
            próximos eventos. También puedes contribuir con la comunidad en
            Github, el código fuente de nuestro sitio web es Open Source. 🚀
          </p>
          <div className="flex flex-col md:flex-row justify-center text-xl my-10">
            <a
              className="nes-btn is-primary font-small mx-5 my-3 md:my-0"
              href="https://www.facebook.com/OpenTechTM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seguir en Facebook
            </a>
            <a
              className="nes-btn is-primary font-small mx-5 my-3 md:my-0"
              href="https://www.linkedin.com/company/opentechtm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seguir en Linkedin
            </a>
            <a
              className="nes-btn is-primary font-small mx-5 my-3 md:my-0"
              href="https://github.com/opentech-pe/opentech.pe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribuir en Github
            </a>
          </div>
        </section>
        <section>
          <h2 className="font-big mb-5 text-xl">Espacio libre y abierto</h2>
          <p>
            Somos una comunidad con muchas ganas de aprender, siempre abierta a
            nuevas propuestas de charlas. Tú tambien puedes compartir tus
            conocimientos con nosotros, la mejor forma de seguir aprendiendo es
            enseñar. 💎
          </p>
          <div className="flex justify-center text-xl my-10">
            <a
              className="nes-btn is-primary font-small mx-5"
              href="https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jimmyloloy98%2C+juancx21&labels=cfp&template=propuesta-de-charla.md&title=T%C3%ADtulo+de+tu+charla"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero dar una charla
            </a>
          </div>
        </section>
        <section className="mb-10 md:mb-20 w-full">
          <h2 className="font-big mb-5 text-xl">¿Cómo nos puedes ayudar?</h2>
          <p>
            Nuestro principal objetivo es compartir conocimiento en tecnología y
            que este llegue a más personas, podrías comenzar difundiendo la
            tecnología o nuestra comunidad a tus amigos de la universidad, del
            trabajo o hasta a tu familia.
          </p>
          <p>
            De igual manera, para llevar a cabo nuestros eventos, tenemos que
            contar con un presupuesto que cubre el catering para los asistentes
            (gaseosa, bocaditos, etc), así como stickers, badges, señalética,
            nombres de dominio, etc.
          </p>
          <p>
            Por ello estamos en constante busqueda de empresas o personas que
            compartan nuestra{" "}
            <a className="text-blue-500" href="/mission-and-vision">
              misión y visión
            </a>
            , conviertete en nuestro siguiente sponsor, contactándote con
            nosotros,
            <a className="text-blue-500" href="mailto:hola@opentech.pe">
              ¡Envianos un correo!
            </a>
          </p>

          <iframe
            src="https://github.com/sponsors/opentech-pe/button"
            title="Sponsorship opentech.pe"
            height="32"
            width="114"
            className="my-10 rounded-md mx-auto"
          ></iframe>
        </section>
      </main>
    </Layout>
  );
}
