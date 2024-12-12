const baseUrl = process.env.NEXT_PUBLIC_URL;

export function getLogoUrl(logo) {
  if (!logo || logo === "") {
    return null; // Returner null, hvis logo er tomt
  }

  // Hvis logo er en fuld URL (starter med https://), brug den direkte
  if (logo.startsWith("https://")) {
    return logo;
  } else {
    // Hvis logo er en filsti, lav den fulde URL med base URL'en
    return `${baseUrl}/logos/${logo}`;
  }
}

// skal undersøges

// utils.js

export function getToday() {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const today = new Date().getDay(); // Get current day (0 = Sunday, 6 = Saturday)
  return days[today === 0 ? 6 : today - 1]; // Adjust for the days of the week, where 0 = Sunday
}
