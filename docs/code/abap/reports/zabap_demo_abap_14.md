---
title: ZABAP_DEMO_ABAP_14
description: 'Lesende Datenbankzugriffe'
---

```abap
* Open SQL (Read)
REPORT zabap_demo_abap_14.

PARAMETERS p_carrid TYPE s_carr_id.
PARAMETERS p_connid TYPE s_conn_id.

DATA connection TYPE spfli.
DATA connection2 TYPE zabap_connection.
DATA flights TYPE TABLE OF sflight.

*-------------------------------------------------------------------*
* Lesen eines Einzelsatzes
*-------------------------------------------------------------------*
SELECT SINGLE FROM spfli
 FIELDS *
 WHERE carrid = @p_carrid AND connid = @p_connid
 INTO @connection.
IF sy-subrc <> 0.
  MESSAGE e002(zabap) WITH p_carrid p_connid.
ENDIF.

*-------------------------------------------------------------------*
* Lesen mehrerer Datensätze
*-------------------------------------------------------------------*
SELECT FROM sflight
 FIELDS *
 WHERE carrid = @p_carrid AND connid = @p_connid
 ORDER BY carrid, connid
 INTO TABLE @flights.
IF sy-subrc <> 0.
  MESSAGE e002(zabap) WITH p_carrid p_connid.
ENDIF.

*-------------------------------------------------------------------*
* Definition der Zielvariablen
*-------------------------------------------------------------------*
* Angabe einer passenden Zielvariablen
SELECT SINGLE FROM spfli
 FIELDS carrid, connid, cityfr, cityto
 INTO @connection2.

* Kopieren namensgleicher Felder
SELECT SINGLE FROM spfli
 FIELDS carrid, connid, cityfr, cityto
 INTO CORRESPONDING FIELDS OF @connection.

* Inlinedeklaration
SELECT SINGLE FROM spfli
 FIELDS carrid, connid, cityfr, cityto
 INTO @DATA(connection3).
```

[Strukturtyp ZABAP_CONNECTION](../data-types/zabap_connection.md)

[Nachrichtenklasse ZABAP](../message-classes/zabap.md)
