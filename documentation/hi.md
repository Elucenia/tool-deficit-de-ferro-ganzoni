<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · hi · no clinical/professional/rights approval -->

# आयरन डेफ़िसिट (Ganzoni)

[शर्तें, स्रोत और अनुमतियाँ](https://elucenia.org/hi/tools/deficit-de-ferro-ganzoni)

## उपयोग कैसे करें

पोर्टल पर उपकरण का उपयोग करें या स्थानीय HTTP सर्वर के माध्यम से index.html खोलें। भाषा चुनें, फ़ील्ड भरें और गणना करें।

## इनपुट और इकाइयाँ

### वज़न

`peso`

kg · सीमा: 5–250

### वर्तमान हीमोग्लोबिन

`hb`

g/dL · सीमा: 3–18

### लक्ष्य हीमोग्लोबिन

`alvo`

g/dL · सीमा: 8–16

### प्रोटोकॉल में निर्धारित आयरन भंडार

`reserva`

mg · सीमा: 0–2000

## विधि का संस्करण

Ganzoni 1970; कुल कमी की गणना

## दस्तावेज़ित सूत्र

कुल कमी (mg) = वज़न (kg) × (लक्षित Hb − वर्तमान Hb) (g/dL) × 2.4 + दर्ज भंडार (mg)।

## सीमाएँ और जनसमूह

लक्षित Hb और आयरन भंडार पेशेवर दर्ज करता है; स्वतः चयन नहीं होता। कुल कमी प्रति प्रशासन खुराक, प्रशासन की योजना या अंतःशिरा आयरन का संकेत नहीं है।

## संदर्भ

- [CADTH · Monoferric · तालिका 12: Ganzoni सूत्र और उदाहरण](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## तकनीकी परीक्षण दोहराएँ

दर्ज कृत्रिम मामलों को दोहराने के लिए इस रिपॉज़िटरी की मूल निर्देशिका में node test.cjs चलाएँ। मूल इनपुट, अपेक्षित परिणाम और सहनशीलता सीमाएँ सुरक्षित रखी गई हैं। तकनीकी परीक्षण नैदानिक सत्यापन नहीं हैं।

```sh
node test.cjs
```

tool.json में स्रोत, संस्करण और समीक्षा का दायरा दिया गया है। examples.json में कृत्रिम इनपुट और अपेक्षित परिणाम सुरक्षित हैं; results.json में प्राप्त परिणाम दर्ज हैं।

[रिकॉर्ड और संदर्भ](../tool.json) · [JavaScript कोड](../calculator.js) · [संदर्भ मामले](../examples.json) · [results.json](../results.json)

## समीक्षा और उपयोग की शर्तें

स्वतंत्र नैदानिक समीक्षा नहीं की गई है।

यह इंटरफ़ेस लेखकों द्वारा किया गया अनुवाद है, कोई आधिकारिक या प्रमाणित संस्करण नहीं। स्वतंत्र नैदानिक समीक्षा, पेशेवर भाषाई समीक्षा और उपकरणों के अधिकारों की अनुमति की प्रक्रिया पूरी नहीं हुई है।

सूत्र या वर्गीकरण का परिणाम। व्याख्या, कार्यवाही और उपयुक्तता पेशेवर मूल्यांकन और चुने गए स्रोत पर निर्भर है।

## लाइसेंस और श्रेय

Apache-2.0 केवल ELUCENIA के कोड पर लागू होता है। उपकरणों, प्रकाशनों, अनुवादों और डेटा के अधिकार उनके संबंधित अधिकारधारकों के पास रहते हैं। LICENSE और NOTICE सुरक्षित रखें।

ELUCENIA · Felipe Guedes · Copyright © 2026
