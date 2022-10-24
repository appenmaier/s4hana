---
title: ZABAP_DEMO_ABAP_15
description: 'Schreibende Datenbankzugriffe'
---

```abap
* Open SQL (Write)
REPORT zabap_demo_abap_15.

PARAMETERS p_carrid TYPE s_carr_id.
PARAMETERS p_connid TYPE s_conn_id.
PARAMETERS p_cityfr TYPE s_from_cit.
PARAMETERS p_cityto TYPE s_to_city.

PARAMETERS p_insert RADIOBUTTON GROUP opts.
PARAMETERS p_update RADIOBUTTON GROUP opts.
PARAMETERS p_delete RADIOBUTTON GROUP opts.

DATA connection TYPE spfli.

connection-mandt = sy-mandt.
connection-carrid = p_carrid.
connection-connid = p_connid.
connection-cityfrom = p_cityfr.
connection-cityto = p_cityto.

CASE 'X'.
*-------------------------------------------------------------------*
* Datensatz einfügen
*-------------------------------------------------------------------*
  WHEN p_insert.
    INSERT spfli FROM connection.
    IF sy-subrc <> 0.
      "Fehlerbehandlung
    ENDIF.
*-------------------------------------------------------------------*
* Datensatz ändern
*-------------------------------------------------------------------*
  WHEN p_update.
    UPDATE spfli FROM connection.
    IF sy-subrc <> 0.
      "Fehlerbehandlung
    ENDIF.
*-------------------------------------------------------------------*
* Datensatz löschen
*-------------------------------------------------------------------*
  WHEN p_delete.
    SELETE spfli FROM connection.
    IF sy-subrc <> 0.
      "Fehlerbehandlung
    ENDIF.
ENDCASE.
```
