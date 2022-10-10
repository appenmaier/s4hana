---
title: ABAP-Programm ZABAP_DEMO_ABAP_14
description: 'Lesende Datenbankzugriffe'
sidebar_position: 140
---

```abap
REPORT zabap_demo_abap_14.

PARAMETERS p_carrid TYPE s_carr_id.
PARAMETERS p_connid TYPE s_conn_id.

DATA connection TYPE spfli.
DATA connections TYPE TABLE OF spfli.

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
+ Lesen mehrerer Datensätze
*-------------------------------------------------------------------*
SELECT FROM spfli
 FIELDS *
 WHERE carrid = @p_carrid
 ORDER BY carrid, connid
 INTO TABLE @connections.
IF sy-subrc <> 0.
  MESSAGE e002(zabap) WITH p_carrid.
ENDIF.

*-------------------------------------------------------------------*
* Definition der Zielvariablen
*-------------------------------------------------------------------*
* Angabe passender Felder
SELECT SINGLE FROM spfli
 FIELDS carrid, connid, airpfr, airpto
 INTO @connection.

* Kopieren namensgleicher Felder
SELECT SINGLE FROM spfli
 FIELDS *
 INTO CORRESPONDING FIELDS OF @connection2.

* Inlinedeklaration
SELECT SINGLE FROM spfli
 FIELDS *
 INTO @DATA(connection3).
```

[Nachrichtenklasse ZABAP](message_class_zabap.md)
