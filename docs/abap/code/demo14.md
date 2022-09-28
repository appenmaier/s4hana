---
title: Demo 14
description: ""
sidebar_position: 140
---

```abap
REPORT zabap_demo_abap_14.

* SELECT FROM <Datenbanktabelle, Datenbankview>
*  FIELDS <Spalte 1>, <Spalte 2>, …
*  WHERE <Bedingung>
*  INTO @<Zielvariable>.

PARAMETERS p_carrid TYPE s_carr_id.
PARAMETERS p_connid TYPE s_conn_id.

DATA connection TYPE spfli.
DATA connections TYPE TABLE OF spfli.

"Lesen eines Einzelsatzes
SELECT SINGLE FROM spfli FIELDS *
 WHERE carrid = @p_carrid AND connid = @p_connid
 INTO @connection.
IF sy-subrc <> 0.
  MESSAGE 'Error: no Data' TYPE 'E'.
ENDIF.

"Lesen mehrerer Datensätze
SELECT FROM spfli FIELDS *
 WHERE carrid = @p_carrid
 ORDER BY carrid, connid
 INTO TABLE @connections.
IF sy-subrc <> 0.
  MESSAGE 'Error: no Data' TYPE 'E'.
ENDIF.

"Definition der Zielvariablen
"Angabe passender Felder
SELECT SINGLE FROM spfli FIELDS carrid, connid, airpfr, airpto
 INTO @connection.

"Kopieren namensgleicher Felder
SELECT SINGLE FROM spfli FIELDS *
 INTO CORRESPONDING FIELDS OF @connection2.

"Inlinedeklaration
SELECT SINGLE FROM spfli FIELDS *
 INTO @DATA(connection3).
```
