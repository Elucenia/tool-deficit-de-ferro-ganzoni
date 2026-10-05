<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · fr · no clinical/professional/rights approval -->

# Déficit en fer (Ganzoni)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/deficit-de-ferro-ganzoni)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Poids

`peso`

kg · intervalle: 5–250

### Hémoglobine actuelle

`hb`

g/dL · intervalle: 3–18

### Hémoglobine cible

`alvo`

g/dL · intervalle: 8–16

### Réserve en fer définie par le protocole

`reserva`

mg · intervalle: 0–2000

## Édition de la méthode

Ganzoni 1970 ; calcul du déficit total

## Formule documentée

Déficit total (mg) = poids (kg) × (Hb cible − Hb actuelle) (g/dL) × 2,4 + réserve renseignée (mg).

## Limites et population

L’Hb cible et la réserve sont renseignées par le professionnel ; aucune sélection automatique. Le déficit total n’est ni une dose par administration, ni un schéma d’administration, ni une indication de fer intraveineux.

## Références

- [CADTH · Monoferric · tableau 12 : formule de Ganzoni et exemples](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
