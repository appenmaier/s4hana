---
title: Vererbung und Schnittstellen
description: ''
sidebar_position: 50
tags: []
---

Bei der Modellierung von Klassen stellt man häufig fest, dass sich einige Klassen der Struktur und dem Verhalten nach anderen Klassen ähneln. In solchen Fällen hat man die Möglichkeit, die gemeinsamen Strukturen und Verhaltensweisen zu extrahieren und in einer 
allgemeineren Klasse unterzubringen. Dies führt zu Spezialisierungs- bzw. Generalisierungshierarchien. Die Beziheung zwischen den speziellen Klassen (den sogenannte Unterklassen) sowie der allgemeineren Klasse (der sogenannten Oberklasse) wird als Vererbung
bezeichnet.

## Implementieren von Vererbung
Vererbungen werden über den Zusatz `INHERITING FROM` realisiert. Das Überschreiben von Methoden erfolgt mit dem Zusatz `REDEFINITION`, der Zugriff auf Elemente der Oberklasse erfolgt über den reservierten Namen `SUPER`.

```abap
CLASS cl_car DEFINITION PUBLIC CREATE PUBLIC INHERITING FROM cl_vehicle.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        make  TYPE string
        model TYPE string
        seats TYPE i
      RAISING
        cx_initial_parameter.
    METHODS to_string REDEFINITION.
    ...
  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA seats TYPE i.

ENDCLASS.

CLASS cl_car IMPLEMENTATION.

  METHOD constructor.
    super->constructor( make = make model = model ).
    me->seats = seats.
  ENDMETHOD.
  ...
ENDCLASS.
```

## Polymoprhie
Unter Polymorphie (griechisch für Vielgestaltigkeit) versteht man in der Programmierung die Tatsache, dass eine Referenzvariable zur Laufzeit durch Typumwandlung auf Objekte unterschiedlicher Klassen zeigen kann und dass dadurch ein Methodenaufruf 
unterschiedliche Ergebnisse erzielen kann. Man spricht in diesem Zusammenhang auch vom statischen Datentyp einer Variablen (der zur Designzeit festgelegt wird) und vom dynamischen Datentyp (der zur Laufzeit zugewiesen wird). Die Typumwandlung von der 
abgeleiteten Unterklasse zur Oberklasse bezeichnet man als _Upcast_, die Rückumwandlung als _Downcast_. Der Downcast erfolgt dabei über den Operator `CAST`.


```abap
CLASS cl_main IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.
    DATA vehicle TYPE REF TO cl_vehicle.
    DATA car TYPE REF TO cl_car.

    car = NEW cl_car( make = |Porsche| model = |911| seats = 2 ).

    "Upcast
    vehicle = car.

    "Downcast ohne Typprüfung
    TRY.
      car = CAST #( vehicle ).
    CATCH cx_sy_move_cast_error INTO DATA(x).
      ...
    ENDTRY.

    "Downcast mit Typprüfung
    IF vehicle IS INSTANCE OF cl_car.
      car = CAST #( vehicle ) .
    ENDIF.
  ENDMETHOD.

ENDCLASS.
```

:::note Hinweis
Zur Typprüfung beim Downcast kann der Ausdruck `IS INSTANCE OF` verwendet werden.
:::

## Abstrakte und finale Klassen und Methoden
Das Schlüsselwort `ABSTRACT` ermöglicht die Definition von abstrakten Klassen und Methoden, das Schlüsselwort `FINAL` die Definition von finalen Klassen und Methoden:
- abstrakte Klassen können nicht instanziiert werden
- abstrakte Methoden besitzen keine Implementierung und müssen von den abgeleiteten Klassen implementiert werden.
- finale Klassen können nicht abgeleitet werden
- finale Methode können nicht überschrieben werden

## Schnittstellen
Schnittstellen (Interfaces) sind im Prinzip abstrakte Klassen, die ausschließlich abstrakte Methoden besitzen. Durch Schnittstellen wird sichergestellt, dass Klassen bestimmte Methoden bereitstellen und dass verschiedene Klassen miteinander kommunizieren können.
Sie werden mit dem Schlüsselwort `INTERFACE` definiert, in der implementierenden Klasse mit dem Schlüsselwort `INTERFACES` bekanntgegeben und können analog zu Klassen abgeleitet werden.

```abap
INTERFACE if_partner.

  METHODS to_string.  

ENDINTERFACE.
```

```abap
CLASS cl_rental DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES if_partner.
  ...
ENDCLASS.

CLASS cl_rental IMPLEMENTATION.

  METHOD if_partner~to_string.
    ...
  ENDMETHOD.

ENDCLASS.

```