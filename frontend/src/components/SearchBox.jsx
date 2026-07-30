import { useState } from "react";

function SearchBox({ onSearch }) {

  const [filter, setFilter] = useState({
    max_rate: "",
    laufzeit: "",
    kilometer: "",
    kraftstoff: "",
    marke: "",
    portal: ""
  });


  function ändern(e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  }


  function suchen() {
    onSearch(filter);
  }


  return (
    <div className="filterbox">

      <input
        name="max_rate"
        type="number"
        placeholder="Max. Rate €"
        value={filter.max_rate}
        onChange={ändern}
      />


      <select
        name="laufzeit"
        value={filter.laufzeit}
        onChange={ändern}
      >
        <option value="">Laufzeit</option>
        <option value="24">24 Monate</option>
        <option value="36">36 Monate</option>
        <option value="48">48 Monate</option>
      </select>


      <select
        name="kilometer"
        value={filter.kilometer}
        onChange={ändern}
      >
        <option value="">Kilometer/Jahr</option>
        <option value="10000">10.000 km</option>
        <option value="15000">15.000 km</option>
        <option value="20000">20.000 km</option>
      </select>


      <select
        name="kraftstoff"
        value={filter.kraftstoff}
        onChange={ändern}
      >
        <option value="">Kraftstoff</option>
        <option value="Benzin">Benzin</option>
        <option value="Diesel">Diesel</option>
        <option value="Elektro">Elektro</option>
      </select>


      <input
        name="marke"
        placeholder="Marke"
        value={filter.marke}
        onChange={ändern}
      />


      <input
        name="portal"
        placeholder="Portal"
        value={filter.portal}
        onChange={ändern}
      />


      <button onClick={suchen}>
        🔍 Suchen
      </button>

    </div>
  );
}

export default SearchBox;