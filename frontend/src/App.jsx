import { useState } from "react";
import "./App.css";

function App() {
  const [fahrzeuge, setFahrzeuge] = useState([]);
  const [maxRate, setMaxRate] = useState("");
  const [ausgewaehltesFahrzeug, setAusgewaehltesFahrzeug] = useState(null);
  const [laufzeit, setLaufzeit] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [kraftstoff, setKraftstoff] = useState("");

  async function sucheFahrzeuge() {
    const params = new URLSearchParams();

    if (maxRate) params.append("max_rate", maxRate);
    if (laufzeit) params.append("laufzeit", laufzeit);
    if (kilometer) params.append("kilometer", kilometer);
    if (kraftstoff) params.append("kraftstoff", kraftstoff);

    const antwort = await fetch(
      `http://127.0.0.1:8000/fahrzeuge?${params.toString()}`
    );

    const daten = await antwort.json();
    setFahrzeuge(daten);
  }

  return (
    <div className="container">

      <h1>🚗 LeasingBot</h1>

      <p className="subtitle">
        Finde dein passendes Leasingfahrzeug
      </p>


      <div className="filterbox">

        <input
          type="number"
          placeholder="Max. Leasingrate (€)"
          value={maxRate}
          onChange={(e) => setMaxRate(e.target.value)}
        />


        <select
          value={laufzeit}
          onChange={(e) => setLaufzeit(e.target.value)}
        >
          <option value="">Laufzeit</option>
          <option value="24">24 Monate</option>
          <option value="36">36 Monate</option>
          <option value="48">48 Monate</option>
        </select>


        <select
          value={kilometer}
          onChange={(e) => setKilometer(e.target.value)}
        >
          <option value="">Kilometer/Jahr</option>
          <option value="10000">10.000 km</option>
          <option value="15000">15.000 km</option>
          <option value="20000">20.000 km</option>
        </select>


        <select
          value={kraftstoff}
          onChange={(e) => setKraftstoff(e.target.value)}
        >
          <option value="">Kraftstoff</option>
          <option value="Benzin">Benzin</option>
          <option value="Diesel">Diesel</option>
          <option value="Elektro">Elektro</option>
        </select>


        <button onClick={sucheFahrzeuge}>
          🔍 Fahrzeuge suchen
        </button>

      </div>


      <div className="cards">

  {fahrzeuge.map((auto, index) => (

    <div className="card" key={index}>

      <img
        src={auto.bild}
        alt={`${auto.marke} ${auto.modell}`}
        className="fahrzeug-bild"
      />

      <h2>
        {auto.marke} {auto.modell}
      </h2>

      <p className="rate">
        {auto.leasingrate} € / Monat
      </p>

      <p>
        📅 {auto.laufzeit} Monate
      </p>

      <p>
        🛣️ {auto.kilometer} km/Jahr
      </p>

      <p>
        ⛽ {auto.kraftstoff}
      </p>

      <p>
        ⚙️ {auto.getriebe} | 🎨 {auto.farbe}
      </p>

      <p>
        🏢 {auto.anbieter}
      </p>

      <button onClick={() => setAusgewaehltesFahrzeug(auto)}>
        Details ansehen
      </button>

    </div>

  ))}

</div>

{ausgewaehltesFahrzeug && (
  <div className="card">

    <h2>
      Details: {ausgewaehltesFahrzeug.marke} {ausgewaehltesFahrzeug.modell}
    </h2>

    <p>
      💶 {ausgewaehltesFahrzeug.leasingrate} € / Monat
    </p>

    <p>
      🚘 Baujahr: {ausgewaehltesFahrzeug.baujahr}
    </p>

    <p>
      ⚙️ Leistung: {ausgewaehltesFahrzeug.leistung_ps} PS
    </p>

    <p>
      📅 {ausgewaehltesFahrzeug.laufzeit} Monate
    </p>

    <p>
      🛣️ {ausgewaehltesFahrzeug.kilometer} km/Jahr
    </p>

    <p>
      ⛽ {ausgewaehltesFahrzeug.kraftstoff}
    </p>
<p>
  ⚙️ Getriebe: {ausgewaehltesFahrzeug.getriebe}
</p>

<p>
  🎨 Farbe: {ausgewaehltesFahrzeug.farbe}
</p>

<p>
  🏢 Anbieter: {ausgewaehltesFahrzeug.anbieter}
</p>

<p>
  ⭐ Ausstattung:
</p>

<ul>
  {ausgewaehltesFahrzeug.ausstattung.map((punkt, index) => (
    <li key={index}>{punkt}</li>
  ))}
</ul>
         <button onClick={() => setAusgewaehltesFahrzeug(null)}>
      Schließen
    </button>

  </div>
)}

    </div>
    );
}

export default App;