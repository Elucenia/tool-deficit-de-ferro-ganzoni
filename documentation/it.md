<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · it · no clinical/professional/rights approval -->

# Deficit di ferro (Ganzoni)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/deficit-de-ferro-ganzoni)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Peso

`peso`

kg · intervallo: 5–250

### Emoglobina attuale

`hb`

g/dL · intervallo: 3–18

### Emoglobina obiettivo

`alvo`

g/dL · intervallo: 8–16

### Riserva di ferro definita dal protocollo

`reserva`

mg · intervallo: 0–2000

## Edizione del metodo

Ganzoni 1970; calcolo del deficit totale

## Formula documentata

Deficit totale (mg) = peso (kg) × (Hb target − Hb attuale) (g/dL) × 2,4 + riserva inserita (mg).

## Limiti e popolazione

L’Hb target e la riserva sono inserite dal professionista; non vengono selezionate automaticamente. Il deficit totale non è una dose per somministrazione, uno schema né un’indicazione al ferro endovenoso.

## Riferimenti

- [CADTH · Monoferric · tabella 12: formula di Ganzoni ed esempi](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
