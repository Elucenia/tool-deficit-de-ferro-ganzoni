<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · pt-BR · no clinical/professional/rights approval -->

# Déficit de ferro (Ganzoni)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/deficit-de-ferro-ganzoni)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Peso

`peso`

kg · intervalo: 5–250

### Hemoglobina atual

`hb`

g/dL · intervalo: 3–18

### Hemoglobina-alvo

`alvo`

g/dL · intervalo: 8–16

### Reserva de ferro definida no protocolo

`reserva`

mg · intervalo: 0–2000

## Edição do método

Ganzoni 1970; cálculo de déficit total

## Fórmula documentada

Déficit total (mg) = peso (kg) × (Hb-alvo − Hb atual) (g/dL) × 2,4 + reserva informada (mg).

## Limites e população

Hb-alvo e reserva são informados pelo profissional; não há seleção automática. O déficit total não é dose por aplicação, esquema de administração nem indicação de ferro intravenoso.

## Referências

- [CADTH · Monoferric · tabela 12: fórmula de Ganzoni e exemplos](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
