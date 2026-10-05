<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · de · no clinical/professional/rights approval -->

# Eisendefizit (Ganzoni)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/deficit-de-ferro-ganzoni)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Gewicht

`peso`

kg · Bereich: 5–250

### Aktuelles Hämoglobin

`hb`

g/dL · Bereich: 3–18

### Zielhämoglobin

`alvo`

g/dL · Bereich: 8–16

### Im Protokoll festgelegter Eisenspeicher

`reserva`

mg · Bereich: 0–2000

## Fassung der Methode

Ganzoni 1970; Berechnung des Gesamtdefizits

## Dokumentierte Formel

Gesamtdefizit (mg) = Gewicht (kg) × (Ziel-Hb − aktuelles Hb) (g/dL) × 2,4 + eingegebener Speicher (mg).

## Grenzen und Population

Ziel-Hb und Speicher werden vom Fachpersonal eingegeben; keine automatische Auswahl. Das Gesamtdefizit ist weder Einzeldosis, Anwendungsschema noch Indikation für intravenöses Eisen.

## Referenzen

- [CADTH · Monoferric · Tabelle 12: Ganzoni-Formel und Beispiele](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
