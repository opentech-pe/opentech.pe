export const event_api = {
  list: async () => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZgI9fLfX-o0Ju2_d3IVCkSnDL0i7hOaWS_ar0qKGHzJrViH60ez1WY5kChm2JAvHGC2TGyw2zpAfJ/pub?gid=0&single=true&output=csv",
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));
    // Convertimos cada línea en un objeto eventos de opentech.pe, asegúrate de que los campos no posean `,`
    const eventsMap = {};

    data.forEach((row) => {
      const [date, day, title, slide, speaker, speaker_link, social_network, photos] = row.split(',');

      if (!date) return;

      if (!eventsMap[date]) {
        eventsMap[date] = {
          date: date,
          day: day,
          talks: [],
          photos: photos?.trim(),
        };
      }

      eventsMap[date].talks.push({
        title: title?.trim(),
        slide: slide?.trim(),
        speaker: speaker?.trim(),
        speaker_link: speaker_link?.trim(),
        social_network: social_network?.trim(),
      });
    });

    return Object.values(eventsMap);
  },
};
