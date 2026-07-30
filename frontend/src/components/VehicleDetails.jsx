function VehicleDetails({ fahrzeug, onClose }) {

  if (!fahrzeug) {
    return null;
  }


  return (
    <div className="details">

      <h2>
        Details: {fahrzeug.marke} {fahrzeug.modell}
      </h2>


      <p>
        💶 Leasingrate: {fahrzeug.leasingrate} € / Monat
      </p>

      <p>
        📅 Laufzeit: {fahrzeug.laufzeit} Monate
      </p>

      <p>
        🛣️ Kilometer: {fahrzeug.kilometer} km/Jahr
      </p>

      <p>
        ⛽ Kraftstoff: {fahrzeug.kraftstoff}
      </p>

      <p>
        ⚙️ Getriebe: {fahrzeug.getriebe}
      </p>


      <p>
        🏢 Anbieter: {fahrzeug.portal}
      </p>


      <h3>
        ⭐ Ausstattung
      </h3>

      <ul>
        {fahrzeug.ausstattung?.map((punkt, index) => (
          <li key={index}>
            {punkt}
          </li>
        ))}
      </ul>


      <a 
        href={fahrzeug.link}
        target="_blank"
        rel="noreferrer"
      >
        Zum Angebot
      </a>


      <br />

      <button onClick={onClose}>
        Schließen
      </button>


    </div>
  );
}

export default VehicleDetails;