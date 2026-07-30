import { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";
import VehicleCard from "./components/VehicleCard";
import VehicleDetails from "./components/VehicleDetails";

import { sucheFahrzeuge } from "./services/api";


function App() {

  const [fahrzeuge, setFahrzeuge] = useState([]);
  const [auswahl, setAuswahl] = useState(null);


  async function suchen(filter) {

    try {

      const daten = await sucheFahrzeuge(filter);

      setFahrzeuge(daten);

    } catch (fehler) {

      console.error(fehler);
      alert("Fehler beim Laden der Fahrzeuge");

    }

  }



  return (

    <div className="container">


      <h1>
        🚗 LeasingBot
      </h1>


      <p className="subtitle">
        Finde dein passendes Leasingfahrzeug
      </p>



      <SearchBox
        onSearch={suchen}
      />



      <div className="cards">

        {fahrzeuge.map((auto, index) => (

          <VehicleCard

            key={index}

            fahrzeug={auto}

            onDetails={setAuswahl}

          />

        ))}

      </div>



      <VehicleDetails

        fahrzeug={auswahl}

        onClose={() => setAuswahl(null)}

      />


    </div>

  );

}


export default App;