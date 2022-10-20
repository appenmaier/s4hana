---
title: Objekte und Referenzvariablen
description: ''
sidebar_position: 30
tags: []
---

Variablen, die mit einer Klasse typisiert werden, bezeichnet man als Referenzvariablen. Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen keine elementaren Werte in den Variablen gespeichert, sondern die Speicheradressen der erzeugten Objekte,
also die Referenzen auf die erzeugten Objekte. Referenzvariablen werden mit dem Schlüsselwort `DATA` und dem Zusatz `TYPE REF TO` definiert.

![image](https://user-images.githubusercontent.com/47243617/194848783-fa4c98a6-05db-41da-9b7d-1d682ca5b1f8.png)

```abap
CLASS cl_main IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.
    DATA vehicle TYPE REF TO cl_vehicle.
    DATA vehicles TYPE TABLE OF REF TO cl_vehicle.
  ENDMETHOD.

ENDCLASS.
```

Mit dem Operator `NEW` können Objekte erzeugt werden.

```abap
CLASS cl_main IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.
    DATA vehicle TYPE REF TO cl_vehicle.
    DATA vehicles TYPE TABLE OF REF TO cl_vehicle.

    vehicle = NEW cl_vehicle( make = |Porsche| model = |911| ).
    vehicles = VALUE #( BASE vehicles ( vehicle ) ).

    vehicle = NEW cl_vehicle( make = |MAN| model = |TGX| ).
    vehicles = VALUE #( BASE vehicles ( vehicle ) ).

    vehicle = NEW cl_vehicle( make = |Opel| model = |Zafira Life| ).
    vehicles = VALUE #( BASE vehicles ( vehicle ) ).
  ENDMETHOD.

ENDCLASS.
```

:::note Hinweis
Der Initialwert einer Referenzvariablen ist die leere Referenz.
:::

## Zugriff auf Attribute und Methoden
Der Zugriff auf "normale" Attribute und Methoden erfolgt über die Angabe der Referenzvariablen sowie den Objekt-Komponentenselektor `->`, der Zugriff auf Klassenelemente über die Angabe der Klasse sowie den Klassen-Komponentenselektor `=>`.

```abap
CLASS cl_main IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.
    DATA vehicle TYPE REF TO cl_vehicle.
    DATA vehicles TYPE TABLE OF REF TO cl_vehicle.

    LOOP AT vehicles INTO vehicle.
      out->write( vehicle->to_string( ) ).
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
```

:::note Hinweis
Besitzt eine Methode ausschließlich IMPORTING-Parameter, kann beim Aufruf der Methode der Zusatz `EXPORTING` weggelassen werden, besitzt eine Methode nur genau einen IMPORTING-Parameter, kann beim Aufruf der Methode auch der Formalparameter weggelassen werden.
:::
