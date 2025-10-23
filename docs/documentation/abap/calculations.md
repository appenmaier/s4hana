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

" Arithmetic Operators
result = 5 + 3.
result = 5 - 3.
result = 5 * 3.
result = 5 / 3.

result = 5 ** 3.
result = 5 DIV 3.
result = 5 MOD 3.

" Assignment Operators
result += 3.
result -= 3.
result *= 3.
result /= 3.
```

Für weitere mathematische Berechnungen stellt ABAP eine Reihe eingebauter Funktionen zur Verfügung:

- Allgemeine numerische Funktionen
- Ganzzahlige Potenzfunktion
- Numerische Extremwertfunktionen
- Gleitpunktfunktionen
- Rundungsfunktionen

```abap showLineNumbers
DATA result TYPE p LENGTH 16 DECIMALS 2.

result = abs( -1 ).
result = ipow( base = 4 exp = 2 ).
result = nmax( val1 = 3 val2 = 5 ).
result = cos( '6.2' ).
result = round( val = '3.426' dec = 1 ).
```
