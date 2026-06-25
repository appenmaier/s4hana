---
title: Zeichenketten und Zeichenketten-Templates
description: ""
sidebar_position: 50
tags: []
---

Zeichenketten werden in ABAP durch den ABAP-Standardtyp `STRING` und einfache Hochkommata dargestellt. Zeichenketten-Templates ermöglichen die Verwendung von Ausdrücken und Steuerzeichen in Zeichenketten und werden mit senkrechten Strichen (`|...|`) begrenzt.
Zeichenketten und Zeichenketten-Templates lassen sich mit dem Verkettungsoperator `&&` oder dem Zuweisungsoperator `&&=` verknüpfen.

```abap showLineNumbers
DATA text  TYPE string VALUE 'Winter'.
DATA text2 TYPE string VALUE 'is'.
DATA text3 TYPE string.

" Concatenation of strings
text3 = text && | | && text2.
text3 &&= | Coming|.

" Usage of string templates
text3 = |{ text } { text2 } Coming|.
```

:::note

Schließende Leerzeichen werden von Anweisungen zur Zeichenkettenverarbeitung abgeschnitten.

:::

Mit der Anweisung `SPLIT` lässt sich eine Zeichenkette aufteilen. Für weitere Operationen stehen eingebaute Funktionen bereit:

- Längenfunktionen
- Zählfunktionen
- Suchfunktionen
- Verdichtungsfunktionen
- Ersetzungsfunktionen
- Verschiebefunktionen
- Groß- und Kleinschreibungsfunktionen

```abap showLineNumbers
DATA text   TYPE string VALUE 'Winter is Coming'.
DATA result TYPE i.

result = strlen( text ).
result = find( val = text sub = 'i' ).
text   = to_upper( text ).
```
