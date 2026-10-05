<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · zh · no clinical/professional/rights approval -->

# 铁缺失量（Ganzoni）

[条件、来源与许可](https://elucenia.org/zh/tools/deficit-de-ferro-ganzoni)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 体重

`peso`

kg · 范围: 5–250

### 当前血红蛋白

`hb`

g/dL · 范围: 3–18

### 目标血红蛋白

`alvo`

g/dL · 范围: 8–16

### 方案规定的铁储备

`reserva`

mg · 范围: 0–2000

## 方法版本

Ganzoni 1970；总缺乏量计算

## 已记录的公式

总缺失量（mg）= 体重（kg）×（目标Hb − 当前Hb）（g/dL）×2.4 + 输入储备量（mg）。

## 限制与适用人群

目标Hb和储备铁量由专业人员输入，不自动选择。总缺铁量不是单次给药剂量、给药方案或静脉铁治疗指征。

## 参考文献

- [CADTH · Monoferric · 表12：Ganzoni公式和示例](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
