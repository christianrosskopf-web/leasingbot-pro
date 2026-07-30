from app.services.angebot_service import alle_angebote


def suche_angebote(
    max_rate: float = None,
    laufzeit: int = None,
    kilometer: int = None,
    kraftstoff: str = None,
    portal: str = None,
    marke: str = None
):
    ergebnis = alle_angebote()

    if max_rate:
        ergebnis = [
            angebot for angebot in ergebnis
            if angebot.leasingrate <= max_rate
        ]

    if laufzeit:
        ergebnis = [
            angebot for angebot in ergebnis
            if angebot.laufzeit == laufzeit
        ]

    if kilometer:
        ergebnis = [
            angebot for angebot in ergebnis
            if angebot.kilometer == kilometer
        ]

    if kraftstoff:
        ergebnis = [
            angebot for angebot in ergebnis
            if angebot.kraftstoff.lower() == kraftstoff.lower()
        ]

    if portal:
        ergebnis = [
            angebot for angebot in ergebnis
            if angebot.portal.lower() == portal.lower()
        ]

    if marke:
        ergebnis = [
            angebot for angebot in ergebnis
            if angebot.marke.lower() == marke.lower()
        ]

    return ergebnis