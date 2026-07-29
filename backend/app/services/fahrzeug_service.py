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
        leistung_ps=150,
        getriebe="Automatik",
farbe="Grau",
ausstattung=[
    "Navigation",
    "Klimaautomatik",
    "Assistenzsysteme",
],
anbieter="Audi Leasing",
bild="https://placehold.co/600x400?text=Audi+Q2"
    ),
    Fahrzeug(
        marke="BMW",
        modell="X1",
        baujahr=2025,
        leasingrate=349,
        laufzeit=48,
        kilometer=15000,
        kraftstoff="Diesel",
        leistung_ps=163,
        getriebe="Automatik",
farbe="Schwarz",
ausstattung=[
    "LED Licht",
    "Sitzheizung",
    "Parkassistent"
    
],
anbieter="BMW Financial Services",
bild="https://placehold.co/600x400?text=BMW+X1"
    ),
    Fahrzeug(
        marke="Tesla",
        modell="Model 3",
        baujahr=2025,
        leasingrate=399,
        laufzeit=36,
        kilometer=10000,
        kraftstoff="Elektro",
        leistung_ps=283,
        getriebe="Automatik",
farbe="Weiß",
ausstattung=[
    "Autopilot",
    "Premium Sound",
    "Glasdach"
],
anbieter="Tesla Leasing",
bild="https://placehold.co/600x400?text=Tesla+Model+3"
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