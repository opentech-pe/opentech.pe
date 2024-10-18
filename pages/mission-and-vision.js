import Layout from "../components/layout";

export default function MissionAndVision() {
  return (
    <Layout title="Misión y Visión | OpenTech">
      <main className="px-3 lg:px-48 md:px-20">
        <section className="mb-16 mt-10">
          <h1 className="font-big text-center text-3xl md:text-5xl">
            Misión y Visión
          </h1>
        </section>
        <section>
          <p className="leading-9 md:leading-10 md:text-justify mb-8">
            <strong>¿PORQUE?:</strong> Conocemos la gran necesidad que hay, en
            descentralizar la información sobre tecnología y la infinidad de
            oportunidades que hay en el sector tecnológico, disminuyendo así la
            brecha de oportunidades que hay en las regiones del interior de
            nuestro Perú.
            <span className="block my-4 md:my-5">
              <strong>¿COMO?:</strong> Nos gusta compartir conocimientos,
              experiencias y ayudarnos entre nosotros.
            </span>
            <strong>¿QUE ES LO QUE HACEMOS?:</strong> Diversas actividades de
            acceso libre como meetups, talleres, recursos y otras actividades
          </p>

          <h2 className="font-big my-5 md:my-8 text-2xl">Misión</h2>
          <p>
            Los aspectos que nos hemos dado cuenta en base a nuestra experiencia
            es:
            <ul className="block my-4 md:my-5 ml-5 md:ml-10 list-disc space-y-3">
              <li>
                Que muchas personas en las regiones del interior de nuestro país
                están desinformadas sobre el sector tecnológico y las grandes
                oportunidades que se encuentran en este sector, actualmente el
                sector tecnológico es global y es más accesible a todos.
              </li>
              <li>
                En provincia existen pocas oportunidades laborales para el
                sector tecnológico por la cual muchos profesionales migran a
                diferentes regiones en busca de esas oportunidades.
              </li>
              <li>
                Se desconoce que se puede alcanzar trabajos con mas ingresos ya
                que la tecnología es global tu puedes conseguir un trabajo 100%
                remoto incluso en otros paises, desde Perú.
              </li>
              <li>
                No se está hablando de las nuevas tendencias tecnológicas y no
                existen comunidades para ello la cual hace que esta no llegué a
                todos por igual.
              </li>
              <li>
                Se desconoce de la existencia de empresas que contratan a
                personas talentosas.
              </li>
              <li>Desconocen la aplicación de nuevas tecnologías.</li>
              <li>
                Existen personas talentosas, pero se pierden por falta de
                información a pesar que fueron preparadas para tecnología en las
                universidades.
              </li>
              <li>
                Herramientas de autoaprendizaje ya que la tecnología avanza a
                pasos agingantados.
              </li>
              <li>Existen pocas comunidades de tecnología.</li>
              <li>
                Cuando una persona crece profesionalmente, hace que su entorno
                tambien tengan esas mejores posibilidades.
              </li>
            </ul>
            Por todos estos motivos nosotros realizamos diversas actividades de
            acceso libre como meetups, talleres, recursos y otras actividades
            con ponentes internacionales, nacionales y locales dispuestos a
            compartir sus conocimientos y experiencias para todas aquellas
            personas con mucha curiosidad por la tecnología.
          </p>

          <h2 className="font-big mb-5 mt-8 text-2xl">Visión</h2>
          <p>
            Nuestra visión es consolidarnos como una comunidad con presencia en
            todo el país, formando una red de compañeros en los sectores mas
            alejados, pero unidos por la tecnología!, porque solo se necesitan
            las ganas y la actitud para aprender algo nuevo.
            <span className="block font-bold my-5 tracking-wide">
              ¿Nos acompañas?
            </span>
            Nos espera un camino largo y quizás agotador, pero estamos
            dispuestos a mantener la comunidad en pie, y ayudar a personas
            talentosas.
            <span className="block my-4 md:my-5">
              Si te animas a dar una charla puedes proponer una desde este
              enlace, que te redireccionará al github donde tendrás una
              <a
                className="text-blue-500"
                href="https://github.com/opentech-pe/opentech.pe/issues/new?assignees=jimmyloloy98%2C+juancx21&labels=cfp&template=propuesta-de-charla.md&title=T%C3%ADtulo+de+tu+charla"
                target="_blank"
              >
                &nbsp;plantila
              </a>
              , o puedes escribirnos al
              <a
                className="text-blue-500"
                href="mailto:hola@opentech.pe"
                target="_blank"
              >
                &nbsp;correo
              </a>
              &nbsp;y nos pondremos en contacto contigo.
            </span>
            Nuestro equipo y más personas se encuentran en{" "}
            <a
              className="text-blue-500"
              href="https://www.facebook.com/OpenTechTM"
              target="_blank"
            >
              &nbsp;facebook
            </a>
            , donde compartimos nuestros próximos eventos y muchas cosas más. ,
            tratamos de estar siempre conectados. Saludos y un gran abrazo para
            todo aquel que lo necesite!
          </p>
        </section>
      </main>
    </Layout>
  );
}
