---
title: ABAP-Programm ZABAP_DEMO_ABAP_06
description: 'Schleifen'
---

```abap
REPORT zabap_demo_abap_06.

*-------------------------------------------------------------------*
* Kopfgesteuerte Schleifen
*-------------------------------------------------------------------*
WHILE sy-index <= 10.
  WRITE: / sy-index.
ENDWHILE.

*-------------------------------------------------------------------*
* Zählschleifen
*-------------------------------------------------------------------*
DO 10 TIMES.
  WRITE: / sy-index.
ENDDO.

*-------------------------------------------------------------------*
* Endlosschleifen
*-------------------------------------------------------------------*
DO.
  WRITE: / sy-index.
  IF sy-index <= 10.
    EXIT.
  ENDIF.
ENDDO.
```
