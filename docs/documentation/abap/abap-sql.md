---
title: Datenbankzugriffe mit ABAP SQL
description: ""
sidebar_position: 120
tags: []
---

Die Structured Query Language (SQL) ist die Standardsprache für den Zugriff auf Datenbankverwaltungssysteme (DBMS). SQL umfasst drei Untersprachen: DDL (Data Definition Language) zum Erzeugen und Verwalten von Datenbanktabellen und Views, DML (Data Manipulation Language) zum Lesen und Ändern von Tabelleninhalten sowie DCL (Data Control Language) zum Festlegen von Zugriffsberechtigungen. Obwohl SQL größtenteils standardisiert ist, besitzt jede Datenbank einen eigenen SQL-Dialekt. ABAP verwendet das datenbankunabhängige ABAP SQL, das vom Datenbankverwaltungssystem dynamisch in natives SQL umgesetzt wird.

:::note

ABAP SQL umfasst lediglich Sprachelemente aus dem Bereich DML.

:::

## Lesende Datenbankzugriffe

Lesende Datenbankzugriffe werden mit der Anweisung `SELECT` umgesetzt:

- Die `FROM`-Klausel benennt die Datenquelle (Datenbanktabelle oder View)
- Die `FIELDS`-Klausel beschreibt, welche Felder gelesen werden sollen
- Die `WHERE`-Klausel legt die zu selektierenden Zeilen fest
- Die `INTO`-Klausel definiert, wohin die selektierten Daten geschrieben werden

Mit `SELECT SINGLE` wird ein einzelner Datensatz gelesen; mit dem Zusatz `INTO TABLE` werden mehrere Zeilen direkt als Block in eine interne Tabelle kopiert (Array Fetch). Um einen eindeutigen Zugriff zu gewährleisten, müssen alle Schlüsselfelder in der `WHERE`-Klausel angegeben sein (Ausnahme: Mandant).

```abap showLineNumbers
DATA carrier_id    TYPE /dmo/carrier_id VALUE 'LH' .
DATA connection_id TYPE /dmo/connection_id VALUE '0400'.
DATA connection    TYPE /dmo/connection.
DATA connections   TYPE TABLE OF /dmo/connection.

" Read single entry
SELECT SINGLE FROM /dmo/connection
       FIELDS *
       WHERE carrier_id = @carrier_id AND connection_id = @connection_id
       INTO @connection.
IF sy-subrc <> 0.
  " Error Handling
ENDIF.

" Read multiple entries with array fetch
SELECT FROM /dmo/connection
       FIELDS *
       WHERE carrier_id = @carrier_id
       INTO TABLE @connections.
IF sy-subrc <> 0.
  " Error Handling
ENDIF.

" Read multiple entries with SELECT loop
SELECT FROM /dmo/connection
       FIELDS *
       WHERE carrier_id = @carrier_id
       INTO @connection.
  APPEND connection TO connections.
ENDSELECT.
```

:::note

Mit dem optionalen Zusatz `ORDER BY` werden die gelesenen Datensätze sortiert. Mit `UP TO n ROWS` wird die Anzahl der gelesenen Datensätze begrenzt.

:::

## Definition der Zielvariablen

Werden bestimmte Felder selektiert, muss die Variable in der `INTO`-Klausel denselben Aufbau wie die Feldliste haben. Mit dem Zusatz `CORRESPONDING FIELDS OF` werden nur gleichnamige Felder der Zielvariablen befüllt.

```abap showLineNumbers
DATA connection TYPE /dmo/connection.

SELECT SINGLE FROM /dmo/connection
       FIELDS client, carrier_id, connection_id, airport_from_id, airport_to_id
       INTO @connection.
IF sy-subrc <> 0.
  " Error Handling
ENDIF.

SELECT SINGLE FROM /dmo/connection
       FIELDS *
       INTO CORRESPONDING FIELDS OF @connection.
IF sy-subrc <> 0.
  " Error Handling
ENDIF.

SELECT SINGLE FROM /dmo/connection
       FIELDS *
       INTO @DATA(connection2).
IF sy-subrc <> 0.
  " Error Handling
ENDIF.
```

:::note

Bei nicht übereinstimmenden Feldtypen führt ABAP eine (aufwändige) Typkonvertierung durch.

:::

## Schreibende Datenbankzugriffe

Für schreibende Datenbankzugriffe stellt ABAP die Anweisungen `INSERT` (Hinzufügen), `UPDATE` (Ändern) und `DELETE` (Löschen) bereit.

```abap showLineNumbers
DATA connection TYPE /dmo/connection.

connection-client          = sy-mandt.
connection-carrier_id      = 'LH'.
connection-connection_id   = '0400'.
connection-airport_from_id = 'FRA'.
connection-airport_to_id   = 'JFK'.

" Insert operation
INSERT /dmo/connection FROM @connection.
IF sy-subrc <> 0.
  " Error Handling
ENDIF.

" Update operation
UPDATE /dmo/connection FROM @connection.
IF sy-subrc <> 0.
  " Error Handling
ENDIF.

" Delete operation
DELETE /dmo/connection FROM @connection.
IF sy-subrc <> 0.
  " Error Handling
ENDIF.
```
