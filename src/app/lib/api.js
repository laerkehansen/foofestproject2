const url = process.env.NEXT_PUBLIC_URL;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  prefer: "return=representation",
  // apikey: key,
};

export async function getBands() {
  const response = await fetch(`${url}/bands`);

  const data = await response.json();
  return data;
}

// skal i bruges signel for det er for det enklte
// export async function getSingleBands() {
//   const response = await fetch(`${url}/bands/tool`, {
//     method: "GET",
//     headers: headersList,
//   });

//   const data = await response.json();
//   return data;
// }

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

export async function getSchedule() {
  const response = await fetch(`${url}/schedule`, {
    method: "GET",
    headers: headersList,
    body: JSON.stringify(),
  });

  const data = await response.json();
  //   console.log(data);
  return data;
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

export async function postFullfillReservation() {
  const response = await fetch(`${url}/reserve-spot`, {
    method: "POST",
    headers: headersList,
    // body: JSON.stringify(),
  });

  const data = await response.json();
  //   console.log(data);
  return data;
}

export async function putReserveSpot() {
  const response = await fetch(`${url}/reserve-spot`, {
    method: "PUT",
    headers: headersList,
    // body: JSON.stringify(),
  });

  const data = await response.json();
  //   console.log(data);
  return data;
}
