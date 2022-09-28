---
title: Demo 4
description: ""
sidebar_position: 40
---

```abap
REPORT zabap_demo_abap_04.

* Zeichenketten
DATA text TYPE string VALUE 'Hallo'.
DATA text2 TYPE string VALUE 'Welt'.
DATA text3 TYPE string.

* Zeichenketten-Templates
text3 = text && | | && text2.
WRITE: text3.

WRITE: / |{ text } { text2 }|.

* Zeichenkettenfunktionen
WRITE: / |Zeichenkettenlänge: { strlen( text3 ) }|.
WRITE: / |Ersetzen: { replace( val = text sub = 'a' with = 'e' ) }|.
```
