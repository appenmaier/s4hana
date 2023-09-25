---
title: Modularisierung mit Funktionsbausteinen
description: ''
sidebar_position: 90
tags: []
---

Mit Hilfe von Modularisierungseinheiten kann Quellcode gekapselt werden. Vorteile von Modularisierung sind neben der Wiederverwendbarkeit die erhöhte Übersichtlichkeit, sowie die verbesserte Wartbarkeit des Codes. ABAP kennt zwei globale 
Modularisierungseinheiten: Funktionsbausteine in Funktionsgruppen und Methoden in globale Klassen.

Parameter dienen dem Datenaustausch zwischen der aufrufenden FUnktion und der Modularisierungseinheit. Die Menge aller Parameter wird als Schnittstelle (bei Funktionsbausteinen) bzw. als Signatur (bei Methoden) bezeichnet.

## Funktionsgruppen
Funktionsgruppen sind Sammlungen von Funktionsbausteinen, die verwandte Funktionalitäten besitzen bzw. auf den selben Daten operieren. Sie besitzen neben Funktionsbausteinen auch Datenobjekte (die alle Funktionsbausteine der Funktionsgruppe verwenden können). 
Wird ein Funktionsbaustein aufgerufen, wird die gesamte Funktionsgruppe geladen und die Funktionsgruppe sowie die dazugehörigen globalen Daten bleiben bis zur Beendigung des aufrufenden Programms erhalten.

![image](https://user-images.githubusercontent.com/47243617/210174065-db8aa422-15b0-4d57-afa0-838a5ec31c6f.png)

## Definition von Funktionsbausteinen
Funktionsbausteine verfügen über Eigenschaften (z.B. Kurzbeschreibung), lokale Datenobjekte bzw. lokale Typdefinitionen sowie über eine Schnittstelle. Die Schnittstelle eines Funktionsbausteins besteht aus Import-, Export- und Changing-Parametern sowie den 
Ausnahmen.

```abap showLineNumbers
FUNCTION calculate_power
  IMPORTING
    i_base     TYPE i
    i_exponent TYPE i DEFAULT 2
  EXPORTING
    e_result   TYPE i.

  e_result = i_base ** i_exponent.

ENDFUNCTION.
```

:::note Hinweis
Der Zusatz `OPTIONAL` bewirkt, dass ein Import Parameter beim Aufruf des Funktionsbausteins nicht angegeben werden muss, mit dem Zusatz `DEFAULT` kann ein Import-Parameter mit einem Wert vorbelegt werden.
:::

## Aufruf von Funktionsbausteinen
Funktionsbausteine werden mit der Anweisung `CALL FUNCTION` aufgerufen. Der EXPORTING-Block enthält dabei die Import-Parameter des Funktionsbausteins, der IMPORTING-Block die Export-Parameter.

```abap showLineNumbers
DATA result TYPE i.

CALL FUNCTION 'CALCULATE_POWER'
  EXPORTING
    i_base     = 5
    i_exponent = 3
  IMPORTING
    e_result   = result.
```

## Klassische Ausnahmen
Innerhalb eines Funktionsbausteins kann mit der Anweisung `RAISE` eine Ausnahme ausgelöst werden. Die Verarbeitung des Funktionsbausteins wird dabei nach Auslösen der Ausnahme abgebrochen.

```abap showLineNumbers
FUNCTION calculate_power
  IMPORTING
    i_base     TYPE i
    i_exponent TYPE i DEFAULT 2
  EXPORTING
    e_result   TYPE i
  EXCEPTIONS
    negative_exponent.

  IF i_exponent < 0.
    RAISE negative_exponent.
  ENDIF.
  
  e_result = i_base ** i_exponent.

ENDFUNCTION.
```

Durch die Angabe eines EXCEPTIONS-Blockes können beim Aufruf eines Funktionsbausteins mögliche Ausnahmen abgefangen werden. Der im EXCEPTIONS-Block angegebene Returncode wird im Ausnahmefall in das Systemfeld `SY-SUBRC` geschrieben und ermöglicht so eine
spezifische Fehlerbehandlung.

```abap showLineNumbers
DATA result TYPE i.

CALL FUNCTION 'CALCULATE_POWER'
  EXPORTING
    i_base            = 5
    i_exponent        = 3
  IMPORTING
    e_result          = result
  EXCEPTIONS
    negative_exponent = 1
    OTHERS            = 2.
CASE sy-subrc.
  WHEN 1.
    out->write( 'negative_exponent' ).
  WHEN 2.
    out->write( 'others' ).
ENDCASE.
```
