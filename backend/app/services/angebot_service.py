from app.models.angebot import Angebot


angebote = [

    Angebot(
        portal="Audi Leasing",
        marke="Audi",
        modell="Q2",
        baujahr=2024,
        leasingrate=299,
        laufzeit=36,
        kilometer=10000,
        anzahlung=0,
        kraftstoff="Benzin",
        getriebe="Automatik",
        ausstattung=[
            "Navigation",
            "Klimaautomatik",
            "Assistenzsysteme"
        ],
        link="https://beispiel.de/audi-q2"
    ),

    Angebot(
        portal="BMW Leasing",
        marke="BMW",
        modell="X1",
        baujahr=2025,
        leasingrate=349,
        laufzeit=48,
        kilometer=15000,
        anzahlung=0,
        kraftstoff="Diesel",
        getriebe="Automatik",
        ausstattung=[
            "LED Licht",
            "Sitzheizung"
        ],
        link="https://beispiel.de/bmw-x1"
    ),

    Angebot(
        portal="Tesla Leasing",
        marke="Tesla",
        modell="Model 3",
        baujahr=2025,
        leasingrate=399,
        laufzeit=36,
        kilometer=10000,
        anzahlung=0,
        kraftstoff="Elektro",
        getriebe="Automatik",
        ausstattung=[
            "Autopilot",
            "Premium Sound"
        ],
        link="https://beispiel.de/tesla-model3"
    )

]


def alle_angebote():
    return angebote