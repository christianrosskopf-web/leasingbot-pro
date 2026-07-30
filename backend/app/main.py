from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.fahrzeug_service import alle_fahrzeuge, suche_fahrzeuge
from app.services.angebot_service import alle_angebote
from app.services.suche_service import suche_angebote

app = FastAPI(
    title="LeasingBot API",
    version="0.2.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
@app.get("/angebote")
def angebote():
    return alle_angebote()


@app.get("/suche")
def suche(
    max_rate: float = None,
    laufzeit: int = None,
    kilometer: int = None,
    kraftstoff: str = None,
    portal: str = None,
    marke: str = None,
    sortierung: str = None
):
    return suche_angebote(
        max_rate,
        laufzeit,
        kilometer,
        kraftstoff,
        portal,
        marke,
        sortierung
)
    return suche_angebote(
        max_rate,
        laufzeit,
        kilometer,
        kraftstoff,
        portal,
        marke
    )