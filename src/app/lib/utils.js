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
