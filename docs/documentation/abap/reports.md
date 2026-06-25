---
title: Klassische ABAP-Programme
description: ""
sidebar_position: 80
tags: []
---

Klassische ABAP-Programme sind in ABAP geschriebene, ausführbare Entwicklungsobjekte. Sie können Komponenten wie Selektionsbilder zur Dateneingabe und ABAP-Listen zur Datenausgabe enthalten. Als Hintergrundjobs lassen sie sich zur Automatisierung von Routineaufgaben oder zur besseren Nutzung von Rechenressourcen einrichten.

```mermaid
flowchart
    report --PARAMETERS--> selectionScreen
    report --WRITE--> abapList
    report --MESSAGE--> message

    selectionScreen(Selektionsbild)
    report(ABAP-Programm)
    abapList(ABAP-Liste)
    message(Dialognachricht)
```

## Eingabe

Mit dem Schlüsselwort `PARAMETERS` wird ein Datenobjekt angelegt und implizit ein Selektionsbild mit einem Eingabefeld erzeugt. Der Zusatz `AS CHECKBOX` erzeugt Kontrollkästchen, `RADIOBUTTON GROUP` erzeugt Auswahlschalter.

```abap showLineNumbers
" Defintion of input fields
PARAMETERS p_carrid TYPE s_carr_id DEFAULT 'LH'.
PARAMETERS p_connid TYPE s_conn_id DEFAULT '0400'.

" Definition of checkboxes
PARAMETERS p_chckbx TYPE c AS CHECKBOX.

" Definition of radio buttons
PARAMETERS p_rdbtn1 TYPE c RADIOBUTTON GROUP grp.
PARAMETERS p_rdbtn2 TYPE c RADIOBUTTON GROUP grp.

IF p_chckbx = 'X'.
  WRITE: p_carrid, p_connid .
ENDIF.
```

:::note

Eine Wertvorbelegung bei Eingabeparametern erfolgt nicht über `VALUE`, sondern über `DEFAULT`.

:::

## Ausgabe

Mit dem Schlüsselwort `WRITE` wird der Inhalt eines Datenobjekts auf der aktuellen ABAP-Liste ausgegeben.

```abap showLineNumbers
PARAMETERS p_carrid TYPE s_carr_id.
PARAMETERS p_connid TYPE s_conn_id.

WRITE 'Flight Connection'.
ULINE.
WRITE: 'Carrier ID', 'Connection ID'.
WRITE: / p_carrid UNDER 'Carrier ID',
         p_connid UNDER 'Connection ID'.
```

:::note

Weitere Schlüsselwörter zur Definition der Ausgabe sind z.B. `NEW-LINE`, `SKIP` und `ULINE`.

:::

## Dialognachrichten

Mit der Anweisung `MESSAGE` werden Dialognachrichten an den Anwender gesendet. ABAP kennt die Nachrichtentypen _Information_ (I), _Setznachricht_ (S), _Warnung_ (W), _Fehler_ (E), _Abbruch_ (A) und _Kurzdump_ (X). Platzhalter in der Nachricht werden mit dem Zusatz `WITH` versorgt.

```abap showLineNumbers
PARAMETERS p_carrid TYPE s_carr_id.

IF p_carrid IS INITIAL.
  MESSAGE e000(flight) WITH p_carrid.
ENDIF.
```

## Textelemente

ABAP kennt verschiedene Arten von Textelementen:

- _Textsymbole_ ermöglichen die Übersetzung statischer Texte
- _Selektionstexte_ dienen als Beschriftungen für Eingabeparameter

```abap showLineNumbers
" Text literal
WRITE 'Hello World'.

" Text symbol
WRITE: / 'Hello World'(000).
WRITE: / TEXT-000.
```

:::note

Ist ein Eingabeparameter mit einem Datenelement typisiert, kann der Feldbezeichner des Datenelements als Selektionstext übernommen werden.

:::

## ABAP-Ereignisse

Beim Starten eines ABAP-Programms werden nacheinander verschiedene Ereignisse ausgelöst. Existiert zu einem Ereignis ein Verarbeitungsblock, wird dieser sequenziell ausgeführt:

- `INITIALIZATION` eignet sich für dynamische Wertevorbelegungen
- `AT SELECTION-SCREEN` eignet sich für Eingabeprüfungen
- Die Hauptverarbeitung findet im Ereignis `START-OF-SELECTION` statt

```abap showLineNumbers
" Definitions and Declarations
PARAMETERS p_from TYPE s_airp_from.
PARAMETERS p_to   TYPE s_airp_to.
PARAMETERS p_date TYPE s_date.

" Dynamic Assignments
INITIALIZATION.
  IF sy-langu = 'D'.
    p_from = 'FRA'.
    p_to = 'JFK'.
  ENDIF.

" Input checks
AT SELECTION-SCREEN ON p_date.
  IF p_date = sy-datlo .
    MESSAGE e001(flight) WITH p_date.
  ENDIF.

" Data Processing
START-OF-SELECTION.
  WRITE: p_from, p_to, p_date.
```

:::note

Die Hauptverarbeitung wird erst bei fehlerfreier Abarbeitung aller Eingabeprüfungen durchlaufen.

:::
