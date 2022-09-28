---
title: Demo ABAP-05
description: 'Fallunterscheidungen'
sidebar_position: 50
---

```abap
REPORT zabap_demo_abap_05.

DATA carrier_id TYPE s_carr_id VALUE 'LH'.
DATA flight_date TYPE s_date VALUE '20211026'.

*-------------------------------------------------------------------*
* Einfache Fallunterscheidungen
*-------------------------------------------------------------------*
IF NOT ( flight_date >= '20210101' AND flight_date <= '20211231' ) OR carrier_id = 'LH'.
  WRITE: 'true'.
ELSE.
  WRITE: 'false'.
ENDIF.

IF carrier_id IS INITIAL.
  WRITE: / 'carrier_id IS INITIAL'.
ENDIF.

*-------------------------------------------------------------------*
* Komplexe Fallunterscheidungen
*-------------------------------------------------------------------*
CASE carrier_id.
  WHEN 'LH' OR 'lh' OR 'lH' OR 'Lh'.
    WRITE: / 'Lufthansa'.
  WHEN 'AA'.
    WRITE: / 'American Airlines'.
  WHEN OTHERS.
    WRITE: / carrier_id.
ENDCASE.
```
