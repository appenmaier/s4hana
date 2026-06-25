---
title: Klassen, Attribute und Methoden
description: ""
sidebar_position: 20
tags: []
---

Klassen in ABAP sind in einen Definitionsbereich und einen Implementierungsbereich aufgeteilt: Der Definitionsbereich enthält alle Klassenkomponenten (Attribute, Methoden, Konstanten, Typen, Interfaces), der Implementierungsbereich ausschließlich die Methodenimplementierungen. Der Definitionsbereich ist zudem in einen öffentlichen, einen geschützten und einen privaten Bereich unterteilt.

## Definition von Attributen

Normale Attribute werden mit dem Schlüsselwort `DATA` deklariert, Klassenattribute mit `CLASS-DATA`. Zur Typisierung stehen ABAP-Standardtypen sowie lokale und globale Datentypen zur Verfügung.

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

:::note

Mit dem Zusatz `READ-ONLY` werden öffentliche Attribute so eingeschränkt, dass sie nach außen sichtbar, aber nicht änderbar sind.

:::

## Definition von Methoden und Konstruktoren

Normale Methoden werden mit `METHODS` definiert, Klassenmethoden mit `CLASS-METHODS`. Die Signatur einer Methode kann Import-, Changing- und Rückgabe-Parameter sowie Ausnahmen enthalten. Der Konstruktor trägt in ABAP den reservierten Namen `CONSTRUCTOR`, der Klassenkonstruktor das Schlüsselwort `CLASS_CONSTRUCTOR`. Der Klassenkonstruktor wird automatisch beim ersten Zugriff auf die Klasse aufgerufen. Der Konstruktor kann nur `IMPORTING`-Parameter und Ausnahmen enthalten, der Klassenkonstruktor weder noch.

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

:::note

ABAP kennt keine überladenen Methoden. Stattdessen können mit dem Zusatz `OPTIONAL` Import-Parameter definiert werden, die beim Methodenaufruf weggelassen werden dürfen. Mit `DEFAULT` lassen sich Import-Parameter mit Werten vorbelegen.

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

:::note

Mit dem Schlüsselwort `ME` wird auf die Attribute und Methoden der eigenen Klasse zugegriffen.

:::
