---
title: Demo 13
description: ""
sidebar_position: 130
---

```abap
REPORT zabap_demo_abap_13.

DATA carrier_ids TYPE TABLE OF s_carr_id.
DATA carrier_id TYPE s_carr_id.

carrier_ids = VALUE #( ( |LH| ) ( |UA| ) ( |BA| ) ).
carrier_id = carrier_ids[ table_line = 'LH' ].

DATA(text) = |Eins Zwei Drei Vier Fünf|.
SPLIT text AT space INTO TABLE DATA(texts).
```
