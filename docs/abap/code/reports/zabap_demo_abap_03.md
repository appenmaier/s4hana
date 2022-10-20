---
title: ABAP-Programm ZABAP_DEMO_ABAP_03
description: 'Mathematische Operatoren und Funktionen'
---

```abap
REPORT zabap_demo_abap_03.

DATA result_i TYPE i.
DATA result_p TYPE p LENGTH 16 DECIMALS 2.

*-------------------------------------------------------------------*
* Mathematische Operatoren
*-------------------------------------------------------------------*
* Addition
result_i = 5 + 3.
WRITE: / '5 + 3 = ', result_i.

* Subtraktion
result_i = 5 - 3.
WRITE: / '5 - 3 = ', result_i.

* Multiplikation
result_i = 5 * 3.
WRITE: / '5 * 3 = ', result_i.

* Division
result_i = 5 / 3.
WRITE: / '5 / 3 = ', result_i.

result_p = 5 / 3.
WRITE: / '5 / 3 = ', result_p.

* Ganzzahlige Division
result_i = 5 DIV 3.
WRITE: / '5 DIV 3 = ', result_i.

result_i = 5 MOD 3.
WRITE: / '5 MOD 3 = ', result_i.

* Potenz
result_i = 5 ** 3.
WRITE: / '5 ** 3 = ', result_i.

* Inkrement/Dekrement
result_i = result_i + 1.
WRITE: / result_i.

ADD 1 TO result_i.
WRITE: / result_i.

*-------------------------------------------------------------------*
*Numerische Funktionen
*-------------------------------------------------------------------*
* Betrag
result_i = abs( -3 ).
WRITE: / result_i.

* Runden
result_p = round( val = '44.2875' dec = -1 ).
WRITE: / result_p.
```
