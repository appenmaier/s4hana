---
title: Demo 8
description: ""
sidebar_position: 80
---

```abap
REPORT zabap_demo_abap_08.

* Definitionen und Deklarationen
PARAMETERS p_carrid TYPE s_carr_id DEFAULT 'LH'.
PARAMETERS p_connid TYPE s_conn_id DEFAULT '0400'.

* Dynamische Wertvorbelegung
INITIALIZATION.
  IF sy-langu = 'E'.
    p_connid = '0401'.
  ENDIF.

* Eingabeprüfungen
AT SELECTION-SCREEN ON p_carrid.
  IF p_carrid IS INITIAL.
    MESSAGE i000(zabap).
  ENDIF.

AT SELECTION-SCREEN ON p_connid.
  IF p_connid IS INITIAL.
    MESSAGE w001(zabap).
  ENDIF.

AT SELECTION-SCREEN.
  IF p_carrid IS INITIAL AND p_connid IS INITIAL.
    MESSAGE e002(zabap) WITH 'P_CARRID' 'P_CONNID'.
  ENDIF.

* Hauptverarbeitung
START-OF-SELECTION.
  WRITE: p_carrid, p_connid.
```
