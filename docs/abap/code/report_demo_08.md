---
title: ABAP-Programm ZABAP_DEMO_ABAP_08
description: 'Klassische ABAP-Programme'
sidebar_position: 80
---

```abap
REPORT zabap_demo_abap_08.

*-------------------------------------------------------------------*
* Definitionen und Deklarationen
*-------------------------------------------------------------------*
PARAMETERS p_carrid TYPE s_carr_id DEFAULT 'LH'.
PARAMETERS p_connid TYPE s_conn_id DEFAULT '0400'.

*-------------------------------------------------------------------*
* Dynamische Wertvorbelegungen
*-------------------------------------------------------------------*
INITIALIZATION.
  IF sy-langu = 'E'.
    p_connid = '0401'.
  ENDIF.

*-------------------------------------------------------------------*
* Eingabeprüfungen
*-------------------------------------------------------------------*
AT SELECTION-SCREEN ON p_carrid.
  IF p_carrid IS INITIAL.
    MESSAGE e000(zabap) WITH 'Carrier ID'.
  ENDIF.

AT SELECTION-SCREEN ON p_connid.
  IF p_connid IS INITIAL.
    MESSAGE e000(zabap) WITH 'Connection ID'.
  ENDIF.

*-------------------------------------------------------------------*
* Hauptverarbeitung
*-------------------------------------------------------------------*
START-OF-SELECTION.
  WRITE: p_carrid, p_connid.
```