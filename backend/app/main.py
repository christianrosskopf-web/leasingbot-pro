from fastapi import FastAPI
from app.services.fahrzeug_service import alle_fahrzeuge, suche_fahrzeuge

app = FastAPI(
    title="LeasingBot API",
    version="0.2.0"
)


@app.get("/")
def start():
    return {
        "status": "LeasingBot läuft",
        "version": "0.2.0"
    }


@app.get("/fahrzeuge")
def fahrzeuge(
    max_rate: float = None,
    laufzeit: int = None,
    kilometer: int = None,
    kraftstoff: str = None
):
    return suche_fahrzeuge(
        max_rate,
        laufzeit,
        kilometer,
        kraftstoff
    )