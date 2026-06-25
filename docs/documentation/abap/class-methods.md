---
title: Klassenmethoden
description: ""
sidebar_position: 90
tags: []
---

Modularisierungseinheiten kapseln Quellcode und verbessern damit Wiederverwendbarkeit, Übersichtlichkeit und Wartbarkeit. In ABAP werden zur Modularisierung sogenannte Klassenmethoden (auch statische Methoden genannt) eingesetzt. Sie werden innerhalb einer Klasse definiert und besitzen Parameter zum Datenaustausch zwischen aufrufender Funktion und der Methode. Die Gesamtheit aller Parameter bezeichnet man als Signatur.

- [Definition von Klassenmethoden](../abap-objects/classes-attributes-and-methods#definition-von-methoden-und-konstruktoren)
- [Aufruf von Klassenmethoden](../abap-objects/objects-and-references#zugriff-auf-attribute-und-methoden)
- [Fehlerbehandlung bei Klassenmethoden](../abap-objects/exceptions.md)

## Beispiel

Das folgende Beispiel zeigt die Klasse `cl_math` mit zwei statischen Methoden sowie deren Aufruf aus einer ausführbaren Klasse:

```abap title="CL_MATH.abap" showLineNumbers
CLASS cl_math DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS:
      add
        IMPORTING
          a        TYPE i
          b        TYPE i
        RETURNING
          VALUE(result) TYPE i,
      factorial
        IMPORTING
          n        TYPE i
        RETURNING
          VALUE(result) TYPE i.
ENDCLASS.

CLASS cl_math IMPLEMENTATION.
  METHOD add.
    result = a + b.
  ENDMETHOD.

  METHOD factorial.
    result = COND #( WHEN n <= 1 THEN 1
                     ELSE n * factorial( n - 1 ) ).
  ENDMETHOD.
ENDCLASS.
```

```abap title="CL_MAIN.abap" showLineNumbers
CLASS cl_main DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun.
ENDCLASS.

CLASS cl_main IMPLEMENTATION.
  METHOD if_oo_adt_classrun~main.
    out->write( cl_math=>add( a = 3 b = 7 ) ).       " 10
    out->write( cl_math=>factorial( n = 5 ) ).        " 120
  ENDMETHOD.
ENDCLASS.
```
