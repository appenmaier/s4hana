---
title: ZABAP_DEMO_ABAP_13
description: 'Einspaltige Tabellen'
---

```abap
* Internal Tables with One Column
REPORT zabap_demo_abap_13.

DATA carrier_ids TYPE TABLE OF s_carr_id.
DATA carrier_id TYPE s_carr_id.

carrier_ids = VALUE #( ( |LH| ) ( |UA| ) ( |BA| ) ).
carrier_id = carrier_ids[ table_line = 'LH' ].

DATA(text) = |Eins Zwei Drei Vier Fünf|.
SPLIT text AT space INTO TABLE DATA(texts).
```
