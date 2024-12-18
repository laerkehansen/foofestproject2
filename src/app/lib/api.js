const url =
  process.env.NEXT_PUBLIC_URL || "https://cerulean-abrupt-sunshine.glitch.me";

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  // prefer: "return=representation",
  // apikey: key,
};

export async function getBands() {
  const response = await fetch(`${url}/bands`, {
    method: "GET",
    headers: headersList,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status code: ${response.status}`);
  }

  const data = await response.json();

  if (!data) {
    throw new Error("No data received from the API");
  }
  return data;
}

export async function getHeroImg() {
  const response = await fetch(`${url}/bands/refused`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}

export async function getSingleBands(slug) {
  const response = await fetch(`${url}/bands/${slug}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}

// export async function getSchedule() {
//   const response = await fetch(`${url}/schedule`, {
//     method: "GET",
//     headers: headersList,
//     body: JSON.stringify(),
//   });

//   const data = await response.json();

//   return data;
// }

export async function getSchedule() {
  const response = await fetch(`${url}/schedule`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();

  // Fladgør data og filtrer "break"-events
  const flattened = Object.entries(data).flatMap(([location, days]) =>
    Object.entries(days).flatMap(([day, events]) =>
      events
        .filter((event) => event.act.toLowerCase() !== "break") // Fjern events hvor act er 'break'
        .map((event) => ({
          location, // "Midgard", "Asgard", etc.
          day, // "mon", "tue", etc.
          ...event, // Resten af event-dataen
        }))
    )
  );

  return flattened;
}
export async function getScheduleWithBands() {
  // Hent band-data og schedule-data
  const bandsData = await getBands();
  const flattenedSchedule = await getSchedule();

  // For hvert band, tilføj eventoplysninger (hvis der er et match)
  const scheduleWithBands = bandsData.map((band) => {
    // Find de events, hvor bandet optræder
    const matchingEvents = flattenedSchedule.filter(
      (event) => event.act === band.name
    );

    // Returner eventoplysninger, hvis der er et match
    return matchingEvents.length > 0
      ? matchingEvents.map((event) => ({
          ...event,
          band: { ...band },
        }))
      : [{ band: { ...band }, event: null }]; // Ingen event, kun bandoplysninger
  });

  // Fladgør listen, så vi kun får én liste med events og bands
  return [].concat(...scheduleWithBands);
}

export async function getEvent() {
  const response = await fetch(`${url}/events`, {
    method: "GET",
    headers: headersList,
    // body: JSON.stringify(patchData),
  });
  const data = await response.json();
  return data;
}

export async function getAvailableSpots() {
  const response = await fetch(`${url}/available-spots`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  return data;
}

export async function getVersion() {
  const response = await fetch(`${url}/version`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  return data;
}

export async function postSettings() {
  const response = await fetch(`${url}/settings`, {
    method: "POST",
    headers: headersList,
    // body: JSON.stringify(),
  });

  const data = await response.json();
  //   console.log(data);
  return data;
}

export async function postFullfillReservation(reservationId) {
  const response = await fetch(`${url}/fullfill-reservation`, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify({ id: reservationId }),
  });

  const data = await response.json();
  if (data.success) {
    alert("Reservation bekræftet!");
  } else {
    alert("Der opstod en fejl ved bekræftelsen.");
  }
}

export async function putReserveSpot(area, vipCount, regularCount) {
  //de ting vi skal tage stilling til, altså hvor mange billetter der er valgt og om vi har nok plads på campingpladsen
  const totalTickets = vipCount + regularCount;
  const response = await fetch(`${url}/reserve-spot`, {
    method: "PUT",
    headers: headersList,
    body: JSON.stringify({
      area: area,
      amount: totalTickets,
    }),
  });

  const data = await response.json();
  console.log("API Response Data: ", data); // Log API responsen
  return data;
}
