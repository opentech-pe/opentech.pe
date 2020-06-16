import Head from "next/head";
import Link from "next/link"

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>OpenTech</title>
        <link rel="icon" href="/assets/img/logo.png" />
      </Head>
      <Navbar />
      <main className="px-3 md:px-48">
        <section className="mb-20 mt-10">
          <img className="mx-auto my-2" src="/assets/img/logo-without-bg.png" />
          <h1 className="font-big text-center md:text-5xl">
            La tecnología es nuestra pasión.
          </h1>
        </section>
        <section>
          <p className="font-small text-2xl">
            Bienvenido a la comunidad de usuarios apasionados por la tecnología
            en Tingo María, Perú. Como a tí, nos encanta la tecnología y hablar
            de ella; nos reunimos una vez al mes: el segundo jueves de cada mes,
            de 7:00 pm a 9:00 pm, para escuchar charlas sobre tecnología y temas
            relacionados. Estas reuniones son gratuitas (siempre lo serán) y
            todos son bienvenidos. No se requiere invitación, solo necesitas
            curiosidad y muchas ganas de aprender.
          </p>
          <div className="flex justify-center text-xl my-10">
            <Link href="/incomplete">
              <button type="button" className="nes-btn is-primary font-small">
                Agendar al Google Calendar
              </button>
            </Link>
          </div>
        </section>
        <section>
          <h2 className="font-big mb-5 text-xl">Participa en la comunidad</h2>
          <p>
            Lo ideal es que nos sigas a través de nuestro Facebook para
            enterarte de nuestros meetups y actividades. Puedes también formar
            parte de nuestra comunidad en Slack donde nos encontraras todos los
            días para seguir hablando.
          </p>
          <div className="flex justify-center text-xl my-10">
            <a className="nes-btn is-primary font-small mx-5" href="https://www.facebook.com/OpenTechTM" target="_blank" rel="noopener noreferrer">
              Siguenos en Facebook
            </a>
            <a className="nes-btn is-primary font-small mx-5" href="https://hola-opentech.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              Únete a nuestro Slack
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
            <a className="nes-btn is-primary font-small mx-5" href="https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jhonfitzgerald%2C+paulotijero%2C+JimmyLoloy98&labels=cfp&template=propuesta-de-charla.md&title=T%C3%ADtulo+de+tu+charla+.+.+." target="_blank" rel="noopener noreferrer">
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
            <a className="text-blue-500" href="mailto:paulotijero@gmail.com?cc=loloy.laurencio@gmail.com">¡Envianos un correo!</a>
          </p>
          <div className="flex justify-center text-xl my-10">
            <Link href="/incomplete">
              <button type="button" className="nes-btn is-primary font-small mx-5">
                Conoce a nuestros backers
              </button>
            </Link>
            <Link href="/incomplete">
              <button type="button" className="nes-btn is-primary font-small mx-5">
                Conoce a nuestros sponsors
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
