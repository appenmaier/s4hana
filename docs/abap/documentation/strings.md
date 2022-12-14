---
title: Zeichenketten und Zeichenketten-Templates
description: ''
sidebar_position: 50
tags: []
---

Zeichenketten werden in ABAP durch den ABAP-Standardtyp `STRING` sowie den einfachen Hochkommata realisiert. Zeichenketten-Templates ermöglichen in ABAP die Verwendung von Ausdrücken und Steuerzeichen in Zeichenketten und werden mit den Trennstrichen realisiert.
Sowohl Zeichenketten als auch Zeichenketten-Templates können mit dem Verkettungsoperator `&&` oder dem Zuweisungsoperator `&&=` verknüpft werden.

```abap
DATA text TYPE string VALUE 'Winter'.
DATA text2 TYPE string VALUE 'is'.
DATA text3 TYPE string.

* Verknüpfung mehrerer Zeichenketten
text3 = text && | | && text2.
text3 &&= | Coming|.

* Verwenden eines Zeichenketten-Templates
text3 = |{ text } { text2 } Coming|.
```

:::danger Hinweis
Nachgestellte Leerzeichen werden vom Compiler "geschluckt".
:::

Die Anweisung `SPLIT` ermöglicht das Aufteilen einer Zeichenkette. Für weitere Operationen stehen eine Reihe eingebauter Funktionen zur Verfügung:
- Längenfunktionen
- Zählfunktionen
- Suchfunktionen
- Verdichtungsfunktionen
- Ersetzungsfunktionen
- Verschiebefunktionen
- Groß- und Kleinschreibungsfunktionen

```abap
DATA text TYPE string VALUE 'Schnupper Gas Bösewicht'.
DATA result TYPE i.

result = strlen( text ). "Zeichenkettenlänge
result = find( val = text sub = 'a' ). "Suchen
text = to_upper( text ). "Umsetzen
```

