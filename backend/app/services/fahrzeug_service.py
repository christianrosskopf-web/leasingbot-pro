from app.models.fahrzeug import Fahrzeug


fahrzeuge = [
    Fahrzeug(
        marke="Audi",
        modell="Q2",
        baujahr=2024,
        leasingrate=299,
        laufzeit=36,
        kilometer=10000,
        kraftstoff="Benzin",
        leistung_ps=150
    ),
    Fahrzeug(
        marke="BMW",
        modell="X1",
        baujahr=2025,
        leasingrate=349,
        laufzeit=48,
        kilometer=15000,
        kraftstoff="Diesel",
        leistung_ps=163
    ),
    Fahrzeug(
        marke="Tesla",
        modell="Model 3",
        baujahr=2025,
        leasingrate=399,
        laufzeit=36,
        kilometer=10000,
        kraftstoff="Elektro",
        leistung_ps=283
    )
]


def alle_fahrzeuge():
    return fahrzeuge


def suche_fahrzeuge(
    max_rate: float = None,
    laufzeit: int = None,
    kilometer: int = None,
    kraftstoff: str = None
):
    ergebnis = fahrzeuge

    if max_rate:
        ergebnis = [
            auto for auto in ergebnis
            if auto.leasingrate <= max_rate
        ]

    if laufzeit:
        ergebnis = [
            auto for auto in ergebnis
            if auto.laufzeit == laufzeit
        ]

    if kilometer:
        ergebnis = [
            auto for auto in ergebnis
            if auto.kilometer == kilometer
        ]

    if kraftstoff:
        ergebnis = [
            auto for auto in ergebnis
            if auto.kraftstoff.lower() == kraftstoff.lower()
        ]

    return ergebnis