---
title: Datenobjekte
description: ""
sidebar_position: 30
tags: []
---

Datenobjekte sind benannte Speicherbereiche, die zur Laufzeit Werte aufnehmen. In ABAP wird zwischen variablen Datenobjekten (veränderbar) und fixen Datenobjekten (unveränderbar) unterschieden.

## Deklaration variabler Datenobjekte

Bei der Deklaration eines Datenobjekts werden der Laufzeitumgebung Bezeichner und Datentyp mitgeteilt. Die Deklaration erfolgt über das Schlüsselwort `DATA`.

```abap showLineNumbers
TYPES t_decimal_16_2 TYPE p LENGTH 16 DECIMALS 2.

DATA carrier_id    TYPE c LENGTH 3.         " Using ABAP Default Type
DATA flight_price  TYPE t_decimal_16_2.     " Using Local Datatype
DATA connection_id TYPE /dmo/connection_id. " Using Data Element
```

:::note

Mit dem Zusatz `LENGTH` wird bei unvollständigen Datentypen die Länge in Byte angegeben. Beim Datentyp `P` kann zusätzlich mit `DECIMALS` die Anzahl der Nachkommastellen festgelegt werden.

:::

## Wertzuweisung

Mit dem Zuweisungsoperator `=` wird dem Operanden auf der linken Seite der Wert des Ausdrucks auf der rechten Seite zugewiesen. Bei unterschiedlichen Typen führt ABAP automatisch eine Typkonvertierung durch, sofern eine entsprechende Konvertierungsregel existiert.

```abap showLineNumbers
" Assignment Operator
DATA carrier_id TYPE /dmo/carrier_id.
carrier_id = 'LH'.

" Static Default Value
DATA flight_date TYPE /dmo/flight_date VALUE '20230101'.

" Inline Declaration
DATA(connection_id) = '0400'.
```

:::note

Mit dem Zusatz `VALUE` kann der Wert eines elementaren Datenobjekts bereits bei der Deklaration vorbelegt werden.

:::

## Initialisierung

Mit der Anweisung `CLEAR` wird der Inhalt eines Datenobjekts auf den Initialwert zurückgesetzt.

```abap showLineNumbers
DATA carrier_id TYPE /dmo/carrier_id VALUE 'LH'.
CLEAR carrier_id.
```

## Deklaration fixer Datenobjekte

Fixe Datenobjekte haben Datenwerte, die sich zur Laufzeit nicht mehr ändern lassen. Man unterscheidet Literale (fixe Datenobjekte ohne Bezeichner) und Konstanten (fixe Datenobjekte mit Bezeichner). Konstanten werden mit dem Schlüsselwort `CONSTANTS` definiert.

```abap showLineNumbers
CONSTANTS co_pi TYPE p LENGTH 2 DECIMALS 2 VALUE '3.14'.
```

## Systemfelder

Systemfelder sind eingebaute Datenobjekte, die das Laufzeitsystem selbst befüllt. Die folgende Tabelle zeigt die wichtigsten Systemfelder:

| Systemfeld | Inhalt                          |
| ---------- | ------------------------------- |
| SY-MANDT   | Anmeldemandant des Benutzers    |
| SY-UNAME   | Anmeldename des Benutzers       |
| SY-LANGU   | Anmeldesprache des Benutzers    |
| SY-DATLO   | Systemdatum des Benutzers       |
| SY-TIMLO   | Systemzeit des Benutzers        |
| SY-INDEX   | Schleifenzähler                 |
| SY-TABIX   | Tabellenindex                   |
| SY-DBCNT   | Datensatzzähler                 |
| SY-SUBRC   | Returncode einer ABAP-Anweisung |
