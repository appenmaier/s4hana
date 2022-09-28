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

```abap
CLASS cl_vehicle DEFINITION PUBLIC CREATE PUBLIC.
  
  PUBLIC SECTION.
  
  PROTECTED SECTION.
  
  PRIVATE SECTION.
    DATA make  TYPE string.
    DATA model TYPE string.

ENDCLASS.
```

:::note Hinweis
Mit dem Zusatz `READ-ONLY` können öffentliche Attribute so eingeschränkt werden, dass diese zwar nach außen sichtbar, aber nicht änderbar sind.
:::

## Definition von Methoden und Konstruktoren
"Normale" Methoden werden mit dem Schlüsselwort `METHODS` definiert, Klassenmethoden mit dem Schlüsselwort `CLASS-METHODS`. Die Signatur einer Methode kann IMPORTING-, CHANGING-, EXPORTING- und RETURNING-Parameter, sowie Ausnahmen umfassen. Der Konstruktor
besitzt in ABAP den reservierten Namen `CONSTRUCTOR`, der Klassenkonstruktor, der automatisch beim ersten Zugriff auf die Klasse aufgerufen wird, das Schlüsselwort `CLASS_CONSTRUCTOR`. Der Konstruktor kann nur IMPORTING-Parameter und Ausnahmen beinhalten,
der Klassenkonstruktor weder das eine noch das andere.

```abap
CLASS cl_vehicle DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        make  TYPE string
        model TYPE string.
		
    METHODS get_make
      RETURNING VALUE(make) TYPE string.
	  
    METHODS get_model
      RETURNING VALUE(model) TYPE string.
	  
    METHODS to_string
      RETURNING VALUE(string) TYPE string.
	  
	CLASS-METHODS get_number_of_vehicles
      RETURNING VALUE(number_of_vehicles) TYPE string.
	  
    CLASS-METHODS class_constructor.

  PROTECTED SECTION.
  
  PRIVATE SECTION.
    DATA make  TYPE string.
    DATA model TYPE string.
    CLASS-DATA number_of_vehicles TYPE i.

ENDCLASS.
```

:::note Hinweis
ABAP kennt keine überladene Methoden, stattdessen können mit dem Zusatz `OPTIONAL` Import-Parameter definiert werden, die beim Aufruf der Methode nicht angegeben werden müssen. Zudem können mit dem Zusatz `DEFAULT` Import-Parameter mit Werten vorbelegt werden.
:::

## Implementieren von Methoden
Die Implementierung von Methoden erfolgt im Implementierungsbereich der Klasse.

```abap
CLASS cl_vehicle IMPLEMENTATION.

  METHOD constructor.
    me->make = make.
    me->model = model.
    number_of_vehicles += 1.
  ENDMETHOD.

  METHOD get_make.
    make = me->make.
  ENDMETHOD.

  METHOD get_model.
    model = me->model.
  ENDMETHOD.

  METHOD to_string.
    string = |{ make } { model }|.
  ENDMETHOD.

  METHOD get_number_of_vehicles.
    number_of_vehicles =
     cl_vehicle=>number_of_vehicles.
  ENDMETHOD.

  METHOD class_constructor.
  ENDMETHOD.

ENDCLASS.
```

:::note Hinweis
Das Schlüsselwort `ME` ermöglicht den Zugriff auf die Attribute und Methoden der Klasse.
:::