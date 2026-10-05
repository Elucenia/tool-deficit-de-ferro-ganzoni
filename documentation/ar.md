<!-- ELUCENIA technical documentation · deficit-de-ferro-ganzoni · ar · no clinical/professional/rights approval -->

# عجز الحديد (Ganzoni)

[الشروط والمصادر والأذونات](https://elucenia.org/ar/tools/deficit-de-ferro-ganzoni)

## كيفية الاستخدام

استخدم الأداة في البوابة أو افتح index.html عبر خادم HTTP محلي. اختر اللغة، وأكمل الحقول، ثم أجرِ الحساب.

## المدخلات والوحدات

### الوزن

`peso`

kg · النطاق: ٥–٢٥٠

### الهيموغلوبين الحالي

`hb`

g/dL · النطاق: ٣–١٨

### الهيموغلوبين المستهدف

`alvo`

g/dL · النطاق: ٨–١٦

### مخزون الحديد المحدد في البروتوكول

`reserva`

mg · النطاق: ٠–٢٠٠٠

## إصدار الطريقة

Ganzoni 1970؛ حساب العجز الكلّي

## المعادلة الموثقة

العجز الكلّي (mg) = الوزن (kg) × (Hb الهدف − Hb الحالي) (g/dL) × 2.4 + المخزون المدخل (mg).

## الحدود والفئة السكانية

يُدخل المختصّ هدف Hb ومخزون الحديد؛ ولا يوجد اختيار تلقائي. العجز الكلّي ليس جرعة لكل إعطاء أو نظامًا للإعطاء أو استطبابًا للحديد الوريدي.

## المراجع

- [CADTH · Monoferric · الجدول 12: معادلة Ganzoni وأمثلة](https://www.cda-amc.ca/sites/default/files/cdr/pharmacoeconomic/sr0622-monoferric-pharmacoeconomic-review-report.pdf)

- [Ganzoni AM. Intravenöses Eisen-Dextran: therapeutische und experimentelle Möglichkeiten \[Intravenous iron-dextran: therapeutic and experimental possibilities\]. Schweiz Med Wochenschr, 1970.](https://pubmed.ncbi.nlm.nih.gov/5413918/)

- [Evstatiev R et al. FERGIcor, a randomized controlled trial on ferric carboxymaltose for iron deficiency anemia in inflammatory bowel disease. Gastroenterology, 2011.](https://doi.org/10.1053/j.gastro.2011.06.005)

## إعادة إجراء الاختبارات التقنية

شغّل node test.cjs في المجلد الجذري لهذا المستودع لتكرار الحالات الاصطناعية المسجلة. تُحفظ المدخلات والنتائج المتوقعة وحدود التفاوت الأصلية. لا تُعدّ الاختبارات التقنية تحققًا سريريًا.

```sh
node test.cjs
```

يحتوي tool.json على المصادر والإصدار ونطاق المراجعة. يحتفظ examples.json بالمدخلات والنتائج المتوقعة للحالات الاصطناعية؛ ويسجل results.json النتائج التي تم الحصول عليها.

[السجل والمراجع](../tool.json) · [شيفرة JavaScript](../calculator.js) · [حالات مرجعية](../examples.json) · [results.json](../results.json)

## المراجعة وشروط الاستخدام

لم تُجرَ مراجعة سريرية مستقلة.

هذه الواجهة ترجمة أعدّها مؤلفوها، وليست إصدارًا رسميًا أو معتمدًا. لم تُجرَ مراجعة سريرية مستقلة أو مراجعة لغوية مهنية، ولم تُستكمل الموافقة على حقوق استخدام الأدوات.

نتيجة المعادلة أو التصنيف. يعتمد التفسير والتصرف ومدى الانطباق على التقييم المهني والمصدر المحدد.

## الترخيص ونسبة العمل إلى أصحابه

ينطبق Apache-2.0 على كود ELUCENIA فقط. تبقى حقوق الأدوات والمنشورات والترجمات والبيانات لأصحابها المعنيين. احتفظ بملفّي LICENSE وNOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
