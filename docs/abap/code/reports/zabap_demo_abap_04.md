---
title: ZABAP_DEMO_ABAP_04
description: 'Zeichenketten, Zeichenketten-Templates und Zeichenkettenfunktionen'
---

```abap
* String, String Templates and String Functions
REPORT zabap_demo_abap_04.

*-------------------------------------------------------------------*
* Zeichenketten
*-------------------------------------------------------------------*
DATA text TYPE string VALUE 'Hallo'.
DATA text2 TYPE string VALUE 'Welt'.
DATA text3 TYPE string.

*-------------------------------------------------------------------*
* Zeichenketten-Templates
*-------------------------------------------------------------------*
text3 = text && | | && text2.
WRITE: text3.
WRITE: / |{ text } { text2 }|.

*-------------------------------------------------------------------*
* Zeichenkettenfunktionen
*-------------------------------------------------------------------*
WRITE: / |Length: { strlen( text3 ) }|.
WRITE: / |Replace: { replace( val = text sub = 'a' with = 'e' ) }|.
```
