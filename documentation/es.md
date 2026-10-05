<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · es · no clinical/professional/rights approval -->

# Déficit de hierro (Ganzoni)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/deficit-de-ferro-ganzoni)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Peso

`peso`

kg · intervalo: 5–250

### Hemoglobina actual

`hb`

g/dL · intervalo: 3–18

### Hemoglobina objetivo

`alvo`

g/dL · intervalo: 8–16

### Reserva de hierro definida en el protocolo

`reserva`

mg · intervalo: 0–2000

## Edición del método

Ganzoni 1970; cálculo del déficit total

## Fórmula documentada

Déficit total (mg) = peso (kg) × (Hb objetivo − Hb actual) (g/dL) × 2,4 + reserva introducida (mg).

## Límites y población

El profesional introduce la Hb objetivo y la reserva; no hay selección automática. El déficit total no es una dosis por administración, una pauta ni una indicación de hierro intravenoso.

## Referencias

- [CADTH · Monoferric · tabla 12: fórmula de Ganzoni y ejemplos](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
