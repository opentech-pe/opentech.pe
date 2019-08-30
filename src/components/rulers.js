/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SubTitle, Section } from "./ui";
import { Center } from "./helpers";

const container = {
  p: {
    fontSize: 18,
    lineHeight: "25px"
  },
  h2: {
    lineHeight: "45px"
  },
  "@media (max-width: 768px)": {
    p: {
      fontSize: 10,
      lineHeight: "20px"
    },
    h2: {
      fontSize: 20,
      lineHeight: "30px"
    }
  }
};

function Rulers() {
  return (
    <Section styles={container}>
      <section>
        <Center>
          <SubTitle styles={{ fontSize: 48, textAlign: "center" }}>
            Código de conducta
          </SubTitle>
        </Center>
        <p>
          Se requiere que todos los asistentes, ponentes, patrocinadores y
          voluntarios de nuestra conferencia acepten el siguiente código de
          conducta. Los organizadores harán cumplir este código a lo largo del
          evento. Esperamos la colaboración de todos los participantes para
          ayudar a asegurar un ambiente seguro para todos.
        </p>
        <SubTitle>La Versión Rápida</SubTitle>
        <p>
          Nuestra conferencia se dedica a ofrecer una experiencia libre de
          abusos para todos, independientemente de su género, orientación
          sexual, discapacidad, apariencia física, talla, raza o religión. No
          toleramos abusos de los participantes de la conferencia en ninguna de
          sus formas. El lenguaje e imágenes sexuales no son apropiados para
          ninguna sala de la conferencia, incluyendo charlas, talleres, fiestas,
          Twitter y otros medios online. Los participantes de la conferencia que
          violen estas reglas pueden ser sancionados o expulsados de la misma
          sin reembolso a discreción de los organizadores.
        </p>
        <SubTitle>La Versión Menos Corta</SubTitle>
        <p>
          Los abusos incluyen: comentarios ofensivos relativos a género,
          orientación sexual, discapacidad, apariencia física, talla, raza,
          religión, imágenes sexuales en espacios públicos, intimidación
          deliberada, acoso, persecución, fotografía o grabación de abusos,
          interrupciones continuadas de charlas u otros eventos, contacto físico
          inapropiado y atención sexual no deseada.
        </p>
        <p>
          Se espera que los participantes instados a parar cualquier
          comportamiento abusivo obedezcan inmediatamente.
        </p>
        <p>
          Los patrocinadores también están sujetos a la política contra abusos.
          En particular, los patrocinadores no deberían utilizar imágenes,
          actividades u otro material con contenido sexual. El personal
          (voluntarios incluidos) no debería usar ropa/uniformes/disfraces
          sexualizados, o que de otra manera crean un ambiente sexualizado.
        </p>
        <p>
          Si un participante incurre en un comportamiento abusivo, los
          organizadores del evento pueden tomar cualquier acción que estimen
          oportuna, incluyendo advertencias al ofensor o su expulsión del
          evento.
        </p>
        <p>
          Si estás sufriendo algún abuso, adviertes abusos sobre otra persona, o
          tienes alguna otra preocupación, por favor contacta con algún miembro
          del personal del evento inmediatamente. El personal del evento puede
          ser fácilmente identificado, ya que vestirán camisetas del evento.
        </p>
        <p>
          El personal del evento estará atento para ayudar a los participantes a
          contactar con la seguridad del edificio o con las autoridades locales,
          proveer escolta o asistir de otra manera a aquellos que estén
          sufriendo abusos para que se sientan seguros mientras dure el evento.
          Valoramos tu asistencia.
        </p>
        <p>
          Esperamos que los participantes sigan estas reglas durante el evento y
          talleres relacionados con el evento.
        </p>
      </section>
    </Section>
  );
}

export default Rulers;
