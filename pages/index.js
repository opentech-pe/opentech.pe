import Head from "next/head";

import Navbar from "../components/navbar";

export default function Index() {
  return (
    <>
      <Head>
        <title>OpenTech</title>
        <link rel="icon" href="/assets/img/logo.png" />
      </Head>
      <Navbar />
      <main>
        <section className="mb-20 mt-10">
          <img className="mx-auto my-2" src="/assets/img/logo-without-bg.png" />
          <h1 className="font-big text-5xl text-center">
            La tecnología es nuestra pasión.
          </h1>
        </section>
        <section className="my-20">
          <p className="font-small text-2xl">
            Bienvenido a la comunidad de usuarios apasionados por la tecnología
            en Tingo María, Perú. Como a tí, nos encanta la tecnología y hablar
            de ella; nos reunimos una vez al mes: el segundo jueves de cada mes,
            de 7:00 pm a 9:00 pm, para escuchar charlas sobre tecnología y temas
            relacionados. Estas reuniones son gratuitas (siempre lo serán) y
            todos son bienvenidos. No se requiere invitación, solo necesitas
            curiosidad y muchas ganas de aprender.
          </p>
          {/* <button className="font-small">Agendar a mi calendario</button> */}
        </section>
        <section className="my-20">
          <h2 className="font-big mb-5 text-xl">Participa en la comunidad</h2>
          <p className="font-small text-2xl">
            Lo ideal es que nos sigas a través de nuestro Facebook para
            enterarte de nuestros meetups y actividades. Puedes también formar
            parte de nuestra comunidad en Slack donde nos encontraras todos los
            días para seguir hablando.
          </p>
          {/* <button className="font-small">Siguenos en Facebook</button>
          <button className="font-small">Únete a nuestro Slack</button> */}
        </section>
        <section className="my-20">
          <h2 className="font-big mb-5 text-xl">Espacio libre y abierto</h2>
          <p className="font-small text-2xl">
            Somos una comunidad con ganas de aprender, siempre abierta a nuevas
            propuestas de charlas. Si hay algo en lo que eres experto o estas
            aprendiendo, la mejor forma de aprender es enseñar.
          </p>
          {/* <button className="font-small">Proponer una charla</button> */}
        </section>
        <section className="my-20">
          <h2 className="font-big mb-5 text-xl">¿Cómo nos puedes ayudar?</h2>
          <p className="font-small text-2xl">
            Nuestro principal objetivo es compartir conocimiento en tecnología y
            que este llegue a más personas, podrías comenzar difundiendo la
            tecnología o nuestra comunidad a tus amigos de la universidad, del
            trabajo o hasta a tu familia.
          </p>
          <p className="font-small text-2xl">
            De igual manera, para llevar a cabo nuestros eventos, tenemos que
            contar con un presupuesto que cubre el catering (gaseosa, bocaditos,
            etc) para los asistentes, así como stickers, badges, señalética,
            nombres de dominio, etc.
          </p>
          <p className="font-small text-2xl">
            Así que estamos en busqueda de aliados que nos ayuden a cubrir estos
            gastos, puedes convertirte en backer (personas) o sponsor
            (organizaciones o empresas) contactándote con nosotros,{" "}
            <a className="text-blue-500" href="#">¡Envianos un correo!</a>
          </p>
          {/* <button className="font-small">Conoce a nuestros backers</button>
          <button className="font-small">Conoce a nuestros sponsors</button> */}
        </section>
      </main>
    </>
  );
}
