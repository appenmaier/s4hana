---
title: Klassen, Attribute und Methoden
description: ""
sidebar_position: 20
tags: []
---

Klassen in ABAP werden in einen Definitionsbereich sowie einen Implementierungsbereich aufgeteilt: Der Definitionsbereich beinhaltet die Definition aller Klassenkomponenten (Attribute, Methoden, Konstanten, Typen, Interfaces), der Implementierungsbereich
umfasst ausschließlich die Implementierungen der Methoden. Der Definitionsbereich ist zudem unterteilt in einen öffentlichen, einen geschützten sowie einen privaten Bereich.

## Definition von Attributen

"Normale" Attribute werden, wie Variablen, mit dem Schlüsselwort `DATA` deklariert, Klassenattribute mit dem Schlüsselwort `CLASS-DATA`. Zur Typisierung können ABAP-Standardtypen sowie lokale und globale Datentypen verwendet werden.

```abap title="CL_VEHICLE.abap" showLineNumbers
CLASS cl_vehicle DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    DATA make  TYPE string READ-ONLY.
    DATA model TYPE string READ-ONLY.
    CLASS-DATA number_of_vehicles TYPE i READ-ONLY.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS cl_vehicle IMPLEMENTATION.

ENDCLASS.
```

:::tip Hinweis

Mit dem Zusatz `READ-ONLY` können öffentliche Attribute so eingeschränkt werden, dass diese zwar nach außen sichtbar, aber nicht änderbar sind.

:::

## Definition von Methoden und Konstruktoren

"Normale" Methoden werden mit dem Schlüsselwort `METHODS` definiert, Klassenmethoden mit dem Schlüsselwort `CLASS-METHODS`. Die Signatur einer Methode kann Import-, Changing- und Rückgabe-Parameter sowie Ausnahmen umfassen. Der Konstruktor
besitzt in ABAP den reservierten Namen `CONSTRUCTOR`, der Klassenkonstruktor, der automatisch beim ersten Zugriff auf die Klasse aufgerufen wird, das Schlüsselwort `CLASS_CONSTRUCTOR`. Der Konstruktor kann nur IMPORTING-Parameter und Ausnahmen beinhalten,
der Klassenkonstruktor weder das eine noch das andere.

```abap title="CL_VEHICLE.abap" showLineNumbers
CLASS cl_vehicle DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    DATA make  TYPE string READ-ONLY.
    DATA model TYPE string READ-ONLY.
    CLASS-DATA number_of_vehicles TYPE i READ-ONLY.

    METHODS constructor
      IMPORTING
        make  TYPE string
        model TYPE string.

    METHODS to_string
      RETURNING VALUE(string) TYPE string.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS cl_vehicle IMPLEMENTATION.

ENDCLASS.
```

:::tip Hinweis

ABAP kennt keine überladene Methoden, stattdessen können mit dem Zusatz `OPTIONAL` Import-Parameter definiert werden, die beim Aufruf der Methode nicht angegeben werden müssen. Zudem können mit dem Zusatz `DEFAULT` Import-Parameter mit Werten vorbelegt werden.

:::

## Implementieren von Methoden

Die Implementierung von Methoden erfolgt im Implementierungsbereich der Klasse.

```abap title="CL_VEHICLE.abap" showLineNumbers
CLASS cl_vehicle DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    DATA make  TYPE string READ-ONLY.
    DATA model TYPE string READ-ONLY.
    CLASS-DATA number_of_vehicles TYPE i READ-ONLY.

    METHODS constructor
      IMPORTING
        make  TYPE string
        model TYPE string.

    METHODS to_string
      RETURNING VALUE(string) TYPE string.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS cl_vehicle IMPLEMENTATION.

  METHOD constructor.
    me->make = make.
    me->model = model.

    number_of_vehicles += 1.
  ENDMETHOD.

  METHOD to_string.
    string = |{ make } { model }|.
  ENDMETHOD.

ENDCLASS.
```

:::tip Hinweis

Das Schlüsselwort `ME` ermöglicht den Zugriff auf die Attribute und Methoden der Klasse.

:::
