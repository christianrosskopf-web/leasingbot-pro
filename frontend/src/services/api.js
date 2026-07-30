const API_URL = "http://127.0.0.1:8000";

export async function sucheFahrzeuge(filter) {

  const params = new URLSearchParams();

  Object.entries(filter).forEach(([key, value]) => {
    if (value) {
      params.append(key, value);
    }
  });

  const response = await fetch(
    `${API_URL}/suche?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Fehler beim Laden der Fahrzeuge");
  }

  return await response.json();
}