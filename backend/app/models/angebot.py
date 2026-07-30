from pydantic import BaseModel


class Angebot(BaseModel):
    portal: str

    marke: str
    modell: str
    baujahr: int

    leasingrate: float
    laufzeit: int
    kilometer: int
    anzahlung: float

    kraftstoff: str
    getriebe: str

    ausstattung: list[str]

    link: str