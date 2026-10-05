<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · ja · no clinical/professional/rights approval -->

# 鉄欠乏量（Ganzoni）

[条件・出典・許諾](https://elucenia.org/ja/tools/deficit-de-ferro-ganzoni)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 体重

`peso`

kg · 範囲: 5–250

### 現在のヘモグロビン

`hb`

g/dL · 範囲: 3–18

### 目標ヘモグロビン

`alvo`

g/dL · 範囲: 8–16

### プロトコルで指定した鉄貯蔵量

`reserva`

mg · 範囲: 0–2000

## 方法の版

Ganzoni 1970；総不足量の計算

## 記載された計算式

総不足量（mg）= 体重（kg）×（目標Hb − 現在Hb）（g/dL）×2.4 + 入力した貯蔵量（mg）。

## 限界・対象集団

目標Hbと貯蔵鉄量は専門家が入力し、自動選択は行いません。総不足量は1回の投与量、投与計画、静注鉄の適応ではありません。

## 参考文献

- [CADTH · Monoferric · 表12：Ganzoniの式と例](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
