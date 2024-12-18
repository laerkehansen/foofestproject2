const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  prefer: "return=representation",
  apikey: key,
};

// export async function postTicket(subdata) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: headersList,
//     // headers: {
//     //   "Content-Type": "application/json",
//     //   apikey: key,
//     // },
//     body: JSON.stringify(subdata),
//   });

//   const data = await response.json();
//   console.log(subdata);
//   return data;
// }

export async function postTicket(ticket) {
  const url = "https://klttbkdhdxrsuyjkwkuj.supabase.co/rest/v1/foofest"; // Din tabels endpoint
  const headersList = {
    "Content-Type": "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdHRia2RoZHhyc3V5amt3a3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODI4NDgsImV4cCI6MjA0OTY1ODg0OH0.e3FebWALlTqZTxB2vSWb0_xqWf-MxdZrVpKhTM-_dnc",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdHRia2RoZHhyc3V5amt3a3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODI4NDgsImV4cCI6MjA0OTY1ODg0OH0.e3FebWALlTqZTxB2vSWb0_xqWf-MxdZrVpKhTM-_dnc`,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(ticket), // Send kun et objekt (en billet)
  });
  const data = await response.json();
  console.log("Svar fra Supabase:", data);
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
