---
title: Klassische ABAP-Programme
description: ""
sidebar_position: 80
tags: []
---

Klassische ABAP-Programme sind in ABAP geschriebene, ausführbare Entwicklungsobjekte. In klassischen ABAP-Programmen können Komponenten wie Selektionsbilder zur Eingabe von Daten sowie ABAP-Listen zur Ausgabe von Daten definiert werden. Klassische ABAP-Programme
können als Hintergrundjobs eingerichtet werden, um z.B. Routineaufgaben zu automatisieren oder um den Einsatz der Rechenressourcen zu optimieren.

![image](https://user-images.githubusercontent.com/47243617/210173695-f3321616-b64f-48ea-b4b9-b5c165b8806b.png)

## Eingabeparameter

Das Schlüsselwort `PARAMETERS` legt ein Datenobjekt an und erzeugt implizit ein Selektionsbild mit einem entsprechenden Eingabefeld. Der Zusatz `AS CHECKBOX` ermöglicht das Erzeugen von Kontrollkästchen, der Zusatz `RADIOBUTTON GROUP` das Erzeugen von
Auswahlschaltern.

```abap showLineNumbers
"Defintion von Eingabefeldern
PARAMETERS p_carrid TYPE /dmo/carrier_id DEFAULT 'LH'.
PARAMETERS p_connid TYPE /dmo/connection_id DEFAULT '0400'.

"Definition von Kontrollkästchen
PARAMETERS p_chckbx TYPE c AS CHECKBOX.

"Definition von Auswahlschaltern (mit Auswahlschaltergruppe)
PARAMETERS p_rdbtn1 TYPE c RADIOBUTTON GROUP grp.
PARAMETERS p_rdbtn2 TYPE c RADIOBUTTON GROUP grp.

IF p_chckbx = 'X'.
  WRITE: p_carrid, p_connid .
ENDIF.
```

:::note Hinweis
Eine Wertvorbelegung wird bei Eingabeparametern nicht über den Zusatz `VALUE`, sondern über den Zusatz `DEFAULT` realisiert.
:::

## Ausgabe

Das Schlüsselwort `WRITE` bereitet den Inhalt des Datenobjektes auf und gibt diesen auf der aktuellen ABAP-Liste aus.

```abap showLineNumbers
PARAMETERS p_carrid TYPE /dmo/carrier_id.
PARAMETERS p_connid TYPE /dmo/connection_id.

WRITE 'Flight Connection'.
ULINE.
WRITE: 'Carrier ID', 'Connection ID'.
WRITE: / p_carrid UNDER 'Carrier ID',
         p_connid UNDER 'Connection ID'.
```

:::note Hinweis
Weitere Schlüsselwörter zur Definition der Ausgabe sind z.B. `NEW-LINE`, `SKIP` und `ULINE`.
:::

## Dialognachrichten

Mit der Anweisung `MESSAGE` können Dialognachrichten an den Benutzer geschickt werden. ABAP kennt die Nachrichtentypen _Information_ (I), _Setznachricht_ (S), _Warnung_ (W), _Fehler_ (E), _Abbruch_ (A) sowie _Kurzdump_ (X). Platzhalter in der angegebenen
Nachricht können durch den Zusatz `WITH` versorgt werden.

```abap showLineNumbers
PARAMETERS p_carrid TYPE /dmo/carrier_id.

IF p_carrid IS INITIAL.
  MESSAGE e000(flight) WITH p_carrid.
ENDIF.
```

## Textelemente

ABAP kennt verschiedene Arten von Textelementen:

- Textsymbole ermöglichen die Übersetzung von statischen Texten
- Selektionstexte dienen als Beschriftungen für Eingabeparameter

```abap showLineNumbers
"Textliteral (nicht übersetzbar)
WRITE 'Hello World'.

"Textsymbol (übersetzbar)
WRITE: / 'Hello World'(000).
WRITE: / TEXT-000.
```

:::note Hinweis
Ist ein Eingabeparameter mit einem Datenelement typisiert, kann der Feldbezeichner des Datenelements als Selektionstext übernommen werden.
:::

## ABAP-Ereignisse

Beim Starten eines ABAP Programms werden nacheinander verschiedene Ereignisse ausgelöst. Existiert zu einem Ereignis ein Verarbeitungsblock, wird dieser sequenziell ausgeführt:

- Das Ereignis `INIZIALIZATION` kann für dynamische Wertevorbelegungen genutzt werden
- Das Ereignis `AT SELECTION-SCREEN` kann für Eingabeprüfungen verwendet werden
- Die Hauptverarbeitung findet im Ereignis `START-OF-SELECTION` statt

```abap showLineNumbers
"Definitionen und Deklarationen
PARAMETERS p_from TYPE /dmo/airport_from_id.
PARAMETERS p_to TYPE /dmo/airport_to_id.
PARAMETERS p_date TYPE /dmo/flight_date.

"Dynamische Wertevorbelegungen
INITIALIZATION.
  IF sy-langu = 'D'.
    p_from = 'FRA'.
    p_to = 'JFK'.
  ENDIF.

"Eingabeprüfungen
AT SELECTION-SCREEN ON p_date.
  IF p_date = sy-datlo .
    MESSAGE e001(flight) WITH p_date.
  ENDIF.

"Hauptverarbeitung
START-OF-SELECTION.
  WRITE: p_from, p_to, p_date.
```

:::danger Hinweis
Die Hauptverarbeitung wird erst bei fehlerfreier Abarbeitung aller Eingabeprüfungen durchlaufen.
:::
