---
title: Mathematische Operatoren und Funktionen
description: ""
sidebar_position: 40
tags: []
---

ABAP kennt mathematische Operatoren für die Addition, die Subtraktion, die Multiplikation, die
Division, die Potenz, die ganzzahlige Division sowie den Divisionsrest (Modulo). Zudem besitzt
ABAP für jede Grundrechenart einen dazugehörigen Zuweisungsoperator.

```abap showLineNumbers
DATA result TYPE p LENGTH 8 DECIMALS 2.

result = 5 + 3. "Addition
result = 5 - 3. "Subtraktion
result = 5 * 3. "Multiplikation
result = 5 / 3. "Division
result = 5 ** 3. "Potenz
result = 5 DIV 3. "Ganzzahlige Division
result = 5 MOD 3. "Divisionsrest
result += 3. "Zuweisungsoperator Addition
result -= 3. "Zuweisungsoperator Subtraktion
result *= 3. "zuweisungsoperator Multiplikation
result /= 3. "Zuweisungsoperator Division
```

Für weitere mathematische Berechnungen stellt ABAP eine Reihe eingebauter Funktionen zur Verfügung:

- Allgemeine numerische Funktionen
- Ganzzahlige Potenzfunktion
- Numerische Extremwertfunktionen
- Gleitpunktfunktionen
- Rundungsfunktionen

```abap showLineNumbers
DATA result TYPE p LENGTH 16 DECIMALS 2.

result = abs( -1 ). "Betrag
result = ipow( base = 4 exp = 2 ). "Potenz
result = nmax( val1 = 3 val2 = 5 ). "Maximalwert
result = cos( '6.2' ). "Kosinus
result = round( val = '3.426' dec = 1 ). "Rundungsfunktion
```
