function VehicleCard({ fahrzeug, onDetails }) {

  return (
    <div className="card">

      <h2>
        {fahrzeug.marke} {fahrzeug.modell}
      </h2>

      <p className="rate">
        💶 {fahrzeug.leasingrate} € / Monat
      </p>

      <p>
        🏢 {fahrzeug.portal}
      </p>

      <p>
        📅 {fahrzeug.laufzeit} Monate
      </p>

      <p>
        🛣️ {fahrzeug.kilometer} km/Jahr
      </p>

      <p>
        ⛽ {fahrzeug.kraftstoff}
      </p>

      <p>
        ⚙️ {fahrzeug.getriebe}
      </p>


      <button onClick={() => onDetails(fahrzeug)}>
        Details ansehen
      </button>

    </div>
  );
}

export default VehicleCard;