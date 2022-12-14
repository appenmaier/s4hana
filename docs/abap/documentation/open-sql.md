---
title: Datenbankzugriffe mit Open SQL
description: ''
sidebar_position: 120
tags: []
---

Die Structured Query Language (SQL) stellt die erste Wahl dar, wenn es um den Zugriff auf Datenbanken-Verwaltungssysteme (DBMS) geht. SQL umfasst die 3 Untersprachen DDL (Data Definition Language), DML (Data Manipulation Language) und DCL (Data Control Language). DDL wird zum Erzeugen und Verwalten von Datenbanktabellen und Views, DML zum Lesen und Ändern von Datenbanktabellen-Inhalten und DCL zum Festlegen von Zugriffsberechtigungen verwendet. Obwohl SQL größtenteils standardisiert ist, besitzt jede Datenbank einen eigenen SQL-Dialekt mit datenbankspezifischen Eigenheiten. ABAP verwendet das datenbankunabhängige Open SQL, welches vom Datenbankverwaltungssystem dynamisch in natives SQL umgesetzt wird.

:::note Hinweis
Open SQL umfasst lediglich Sprachelemente aus dem Bereich DML.
:::

## Transparente Tabellen
Eine transparente Tabelle stellt eine plattformunabhängige Beschreibung einer Datenbanktabelle dar. Bei der Aktivierung einer transparenten Tabelle in der System Library wird automatisch eine entsprechende Datenbanktabelle erzeugt.

![image](https://user-images.githubusercontent.com/47243617/210174452-64c2e0e9-3d52-4d1c-ab0d-2e88e55a8a53.png)

:::note Hinweis
Transparente Tabellen können bei der Programmierung wie Strukturtypen verwendet werden.
:::

## Lesende Datenbankzugriffe
Lesende Datenbankzugriffe werden mit Hilfe der Anweisung `SELECT` umgesetzt:
- Die FROM-Klausel benennt die Datenquelle (Datenbanktabelle oder View)
- Die FIELDS-Klausel beschreibt, welche Felder gelesen werden sollen
- Die WHERE-Klausel legt die zu selektierenden Zeilen fest
- Die INTO-Klausel definiert, wohin die selektierten Daten geschrieben werden sollen

![image](https://user-images.githubusercontent.com/47243617/210174652-87cc7d3f-e9e4-4d69-8a95-6a4e68e3e0b9.png)

Mit der Anweisung `SELECT SINGLE` wird ein einzelner Datensatz gelesen, mit dem Zusatz `INTO TABLE` können mehrere Zeilen einer Datenbanktabelle oder einer View direkt als Block in eine interne Tabelle kopiert werden (Array Fetch). Um einen eindeutigen Zugriff 
zu gewährleisten, müssen dabei alle Schlüsselfelder in der WHERE-Klausel angegeben werden (Ausnahme: Mandant).

```abap
DATA carrier_id TYPE s_carr_id VALUE 'LH' .
DATA connection_id TYPE s_conn_id VALUE '0400'.
DATA connection TYPE spfli.
DATA connections TYPE TABLE OF spfli.

* Lesen eines Einzelsatzes
SELECT SINGLE FROM spfli FIELDS * WHERE carrid = @carrier_id
 AND connid = @connection_id INTO @connection.
IF sy-subrc <> 0.
  ...
ENDIF.

* Lesen mehrerer Datensätze
SELECT FROM spfli FIELDS * WHERE carrid = @carrier_id INTO TABLE @connections.
IF sy-subrc <> 0.
  ...
ENDIF.
```

:::note Hinweis
Mit dem optionalen Zusatz `ORDER BY` können die gelesenen Datensätze sortiert werden.
:::

## Definition der Zielvariablen
Bei Selektion von bestimmten Feldern muss in der INTO-Klausel eine Variable gewählt werden, die den gleichen Aufbau wie die Feldliste besitzt. Der Zusatz `CORRESPONDING FIELDS OF` der INTO-Klausel bewirkt, dass nur gleichnamige Felder der Zielvariable befüllt 
werden.

```abap
DATA connection TYPE connection.

* Angabe passender Felder
SELECT SINGLE FROM spfli FIELDS carrid, connid INTO @connection.
IF sy-subrc <> 0.
  ...
ENDIF.

* Kopieren namensgleicher Felder
SELECT SINGLE FROM spfli FIELDS * INTO CORRESPONDING FIELDS OF @connection.
IF sy-subrc <> 0.
  ...
ENDIF.

* Inlinedeklaration
SELECT SINGLE FROM spfli FIELDS * INTO @DATA(connection2).
IF sy-subrc <> 0.
  ...
ENDIF.
```

:::note Hinweis
Bei nicht übereinstimmenden Feldtypen wird eine (aufwändige) Typkonvertierung durchgeführt.
:::

## Schreibende Datenbankzugriffe
Für schreibende Datenbankzugriffe stellt ABAP die Anweisungen `INSERT` (Hinzufügen), `UPDATE` (Ändern) sowie `DELETE` (Löschen) zur Verfügung.

```abap
DATA connection TYPE spfli.

connection-mandt = sy-mandt.
connection-carrid = 'LH'.
connection-connid = '0400'.
connection-cityfrom = 'FRANKFURT'.
connection-cityto = 'NEW YORK'.

* Hinzufügen eines Datensatzes
INSERT spfli FROM @connection.
IF sy-subrc <> 0.
  ...
ENDIF.

* Ändern eines Datensatzes
UPDATE spfli FROM @connection.
IF sy-subrc <> 0.
  ...
ENDIF.

* Lösches eines Datensatzes
DELETE spfli FROM @connection.
IF sy-subrc <> 0.
  ...
ENDIF.
```
