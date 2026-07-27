from pydantic import BaseModel


class Fahrzeug(BaseModel):
    marke: str
    modell: str
    baujahr: int
    leasingrate: float
    laufzeit: int
    kilometer: int
    kraftstoff: str
    leistung_ps: int
    getriebe: str
    farbe: str
    ausstattung: list[str]
    anbieter: str