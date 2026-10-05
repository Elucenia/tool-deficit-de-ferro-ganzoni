<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · en · no clinical/professional/rights approval -->

# Iron deficit (Ganzoni)

[conditions, sources and permissions](https://elucenia.org/en/tools/deficit-de-ferro-ganzoni)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Weight

`peso`

kg · range: 5–250

### Current hemoglobin

`hb`

g/dL · range: 3–18

### Target hemoglobin

`alvo`

g/dL · range: 8–16

### Iron stores specified by the protocol

`reserva`

mg · range: 0–2000

## Method edition

Ganzoni 1970; total deficit calculation

## Documented formula

Total deficit (mg) = weight (kg) × (target Hb − current Hb) (g/dL) × 2.4 + entered stores (mg).

## Limits and population

The clinician supplies the target Hb and iron stores; there is no automatic selection. Total deficit is not a dose per administration, an administration regimen or an indication for intravenous iron.

## References

- [CADTH · Monoferric · table 12: Ganzoni formula and examples](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
