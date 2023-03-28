---
title: Datenobjekte
description: ''
sidebar_position: 30
tags: []
---

## Deklaration von variablen Datenobjekten
Bei der Deklaration eines Datenobjekts werden der Laufzeitumgebung Bezeichner und Datentyp des Datenobjekts bekanntgegeben. Die Deklaration erfolgt über das Schlüsselwort `DATA`.

```abap
DATA carrier_id TYPE c LENGTH 3.
DATA connection_id TYPE s_conn_id.
```

:::note Hinweis
Mit dem Zusatz `LENGTH` kann bei unvollständigen Datentypen die Länge des Datentyps in Byte angegeben werden und beim Datentyp `P` kann zusätzlich mit dem Zusatz `DECIMALS` die Anzahl der Nachkommastellen angegeben werden.
:::

## Wertzuweisung
Mit dem Zuweisungsoperator `=` wird dem Operanden der linken Seite der Wert des Ausdrucks der rechten Seite zugewiesen. Bei unterschiedlichen Typen wird automatisch eine Typkonvertierung durchgeführt, falls eine entsprechende Konvertierungsregel existiert.

```abap
DATA carrier_id TYPE s_carr_id.
carrier_id = 'LH'.

DATA(flight_date) = '20210104'.

DATA connection_id TYPE s_conn_id VALUE '0400'.
```

:::note Hinweis
Mit dem Zusatz `VALUE` kann der Wert eines elementaren Datenobjekts schon bei der Deklaration vorbelegt werden.
:::

## Initialisierung
Mit der Anweisung `CLEAR` kann der Inhalt eines Datenobjekts auf den Initialwert zurückgesetzt werden.

```abap
DATA carrier_id TYPE s_carr_id.
carrier_id = 'LH'.
CLEAR carrier_id.
```

## Deklaration fixer Datenobjekte
Datenwerte von fixen Datenobjekten können zur Laufzeit nicht mehr verändert werden. Man unterscheidet dabei zwischen Literalen (fixe Datenobjekten ohne Bezeichner) und Konstanten (fixe Datenobjekte mit Bezeichner). Konstanten werden mit dem Schlüsselwort 
`CONSTANTS` definiert.

```abap
CONSTANTS co_pi TYPE p LENGTH 2 DECIMALS 2 VALUE '3.14'.
```

## Systemfelder
Systemfelder sind eingebaute Datenobjekte, die von der Laufzeitumgebung geändert werden.

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
