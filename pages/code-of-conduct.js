import Navbar from "../components/navbar"
import Footer from "../components/footer"
import PageHead from "../components/page-head"

export default function CodeOfConduct() {
  return (
    <>
    <PageHead titleHead="Code Of Conduct | OpenTech"/>
    <Navbar />
    <main className="px-3 md:px-48">
      <section className="mb-16 mt-10">
        <h1 className="font-big text-center md:text-5xl">
          Código de conducta
        </h1>
      </section>
      <section>
        <p>
          Se requiere que todos los asistentes, ponentes, patrocinadores y voluntarios de
          nuestro meetup <em>(sea presencial u online),</em> acepten el siguiente codigo de conducta. 
          Los organizadores harán cumplir este código a lo largo del evento. Esperamos la 
          colaboración de todos los participantes para ayudar a asegurar un ambiente seguro para todos.
        </p>
      </section>
      <section>
        <h2 className="font-big mb-5 text-xl">La Versión Rápida</h2>
        <p>
          Nuestro meetup se dedica a ofrecer una experiencia libre de abusos para todos, 
          independientemente de su género, orientación sexual, discapacidad, apariencia física, 
          talla, raza o religión. No toleramos abusos de los participantes a la conferencia 
          en ninguna de sus formas. El lenguaje e imágenes sexuales no son apropiados a ninguna 
          sala del meetup, incluyendo charlas, talleres, fiestas, twitter, facebook, slack y otros 
          medios online. Los participantes del meetup que violen estas reglas pueden ser 
          sancionados o expulsados de la misma, a discreción de los organizadores.
        </p>
      </section>
      <section>
        <h2 className="font-big mb-5 text-xl">La Versión Menos Corta</h2>
        <p>
          Los abusos incluyen: comentarios ofensivos relativos a género, orientación sexual, 
          discapacidad, apariencia física, talla, raza, religión, imágenes sexuales en espacios
          públicos, intimidación deliberada, acoso, persecusión, fotografía o grabación de abusos, 
          interrupciones continuadas de charlas u otros eventos, contacto físico inapropiado y 
          atencion sexual no deseada.
        </p>
        <p>
          Se espera que los participantes instados a parar cualquier comportamiento abusivo 
          obedezcan inmediatamente.
        </p>
        <p>
          Los patrocinadores también están sujetos a la politica contra abusos. En particular, los 
          patrocinadores no deberían utilizar imágenes, actividades u otro material con contenido sexual. 
          El personal (voluntarios incluidos) no debería usar ropa/uniformes/disfraces sexualizados, o que 
          de otra manera crean un ambiente sexualizado.
        </p>
        <p>
          Si un participante incurre en un comportamiento abusivo, los organizadores del evento pueden tomar 
          cualquier acción que estimen oportuna, incluyendo advertencias al ofensor o su expulsión del evento.
        </p>
        <p>
          Si estás sufriendo algún abuso, adviertes abusos sobre otra persona, o tienes alguna otra preocupación, 
          por favor contacta con algún miembro del personal del evento inmediatamente. El personal del evento 
          puede ser fácilmente identificado, ya que vestirán camisetas del evento.
        </p>
        <p>
          El personal del evento estará atento para ayudar a los participantes a contactar con la seguridad del 
          lugar del meetup o con las autoridades locales, proveer escolta o asistir de otra manera a aquellos que 
          estén sufriendo abusos para que se sientan seguros mientras dure el evento. Valoramos tu asistencia.
          Esperamos que los participantes sigan estas reglas durante el evento y talleres relacionados con el evento.
        </p>
      </section>
    </main>
    <Footer />
    </>
  );
}
