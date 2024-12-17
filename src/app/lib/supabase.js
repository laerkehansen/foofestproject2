const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://izlwnrcwutxxrclxaqwi.supabase.co/rest/v1/foofest?";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  prefer: "return=representation",
  apikey: key,
};

export async function postTicket(subdata) {
  const response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(subdata),
  });

  const data = await response.json();
  return data;
}

export async function patchticket(id, patchData) {
  const response = await fetch(`${url}?id=eq.${id}`, {
    method: "PATCH",
    headers: headersList,
    body: JSON.stringify(patchData),
  });
  const data = await response.json();
  return data;
}
