---
title: Entity Manipulation Language (EML)
description: ""
sidebar_position: 40
tags: []
---

Die _Entity Manipulation Language_ (EML) ermöglicht den lesenden und schreibenden Zugriff auf RAP BOs. Für lesende Zugriffe steht `READ ENTITIES`, für schreibende Zugriffe `MODIFY ENTITIES` mit den Zusatzwörtern `CREATE`, `CREATE_BY`, `UPDATE`, `DELETE` und `EXECUTE` zur Verfügung.

## Lesende Zugriffe

Mit `READ ENTITIES` werden ein oder mehrere Einträge eines RAP BOs gelesen. Für lesende Zugriffe sind vor allem zwei Parameter wichtig: der Import-Parameter mit den Schlüsseln der zu lesenden Einträge (`WITH`) und der Export-Parameter mit den erfolgreich gelesenen Einträgen (`RESULT`). Weitere Export-Parameter enthalten Informationen zu erzeugten Nachrichten (`REPORTED`) und fehlgeschlagenen Schlüsseln (`FAILED`).

```abap showLineNumbers
DATA keys        TYPE TABLE FOR READ IMPORT ZI_ConnectionTP.
DATA connections TYPE TABLE FOR READ RESULT ZI_ConnectionTP.
DATA reported    TYPE RESPONSE FOR REPORTED ZI_ConnectionTP.
DATA failed      TYPE RESPONSE FOR FAILED ZI_ConnectionTP.

keys = VALUE #( ( CarrierId = 'LH' ConnectionId = '0400' ) ).

READ ENTITIES OF ZI_ConnectionTP
     ENTITY Connection
     ALL FIELDS
     WITH keys
     RESULT connections
     REPORTED reported
     FAILED failed.
IF failed IS NOT INITIAL.
  " Error Handling
ENDIF.
```

:::note

Mit `FIELDS` wird festgelegt, welche Felder gelesen werden sollen. Schlüsselfelder müssen dabei nicht explizit angegeben werden; `ALL FIELDS` liest alle Felder.

:::

## Schreibende Zugriffe

Neben den bereits genannten Parametern der Leseanweisung enthalten `CREATE` und `CREATE BY` den Parameter `MAPPED`, der die _Content IDs_ (CIDs) sowie die Schlüssel der erzeugten Einträge enthält.

:::tip

CIDs sind temporäre Schlüssel von RAP BO Einträgen; ihre Angabe bei EML-Operationen wird dringend empfohlen.

:::

```abap showLineNumbers
DATA connections_for_create TYPE TABLE FOR CREATE ZI_ConnectionTP.
DATA connections_for_update TYPE TABLE FOR UPDATE ZI_ConnectionTP.
DATA connections_for_delete TYPE TABLE FOR DELETE ZI_ConnectionTP.
DATA flights_for_create     TYPE TABLE FOR CREATE ZI_ConnectionTP\_Flights.
DATA connections_for_action TYPE TABLE FOR ACTION IMPORT ZI_ConnectionTP~ConvertDistance.
DATA mapped                 TYPE RESPONSE FOR MAPPED ZI_ConnectionTP.
DATA reported               TYPE RESPONSE FOR REPORTED ZI_ConnectionTP.
DATA failed                 TYPE RESPONSE FOR FAILED ZI_ConnectionTP.

" Create operation
connections_for_create = VALUE #( ( CarrierId = 'LH' ConnectionId = '0400' ) ).

MODIFY ENTITIES OF ZI_ConnectionTP
       ENTITY Connection
       CREATE
       FIELDS ( CarrierId ConnectionId )
       AUTO FILL CID
       WITH connections_for_create
       MAPPED mapped
       REPORTED reported
       FAILED failed.
IF failed IS NOT INITIAL.
  " Error Handling
ENDIF.

" Create By operation
flights_for_create = VALUE #( ( CarrierId = 'LH' ConnectionId = '0400' )
                                %target   = VALUE #( ( CarrierId = 'LH' ConnectionId = '0400' FlightDate = '20231013' )
                                                     ( CarrierId = 'LH' ConnectionId = '0400' FlightDate = '20240909' )
                                                     ( CarrierId = 'LH' ConnectionId = '0400' FlightDate = '20251024' ) ) ) ).

MODIFY ENTITIES OF ZI_ConnectionTP
       ENTITY Connection
       CREATE BY \_Flights
       FIELDS ( CarrierId ConnectionId FlightDate )
       AUTO FILL CID
       WITH flights_for_create
       MAPPED mapped
       REPORTED reported
       FAILED failed.
IF failed IS NOT INITIAL.
  " Error Handling
ENDIF.

" Update operation
connections_for_update = VALUE #( ( CarrierId = 'LH' ConnectionId = '0400' AirportFromId = 'FRA' AirportToId = 'JFK' ) ).

MODIFY ENTITIES OF ZI_ConnectionTP
       ENTITY Connection
       UPDATE
       FIELDS ( AirportFromId AirportToId )
       WITH connections_for_update
       REPORTED reported
       FAILED failed.
IF failed IS NOT INITIAL.
  " Error Handling
ENDIF.

" Delete operation
connections_for_delete = VALUE #( ( CarrierId = 'LH' ConnectionId = '0400' ) ).

MODIFY ENTITIES OF ZI_ConnectionTP
       ENTITY Connection
       DELETE
       FROM connections_for_delete
       REPORTED reported
       FAILED failed.
IF failed IS NOT INITIAL.
  " Error Handling
ENDIF.

" Execute action operation
connections_for_action = VALUE #( ( CarrierId = 'LH' ConnectionId = '0400' %param-Unit = 'KM' ) ).

MODIFY ENTITIES OF ZI_ConnectionTP
       ENTITY Connection
       EXECUTE ConvertDistance
       FROM connections_for_action
       REPORTED reported
       FAILED failed.
IF failed IS NOT INITIAL.
  " Error Handling
ENDIF.
```

:::note

Mit `AUTO FILL CID` wird die CID automatisch befüllt.

:::

## Änderungen festschreiben

Schreibende EML-Operationen außerhalb von RAP-Handlermethoden (z.B. in einer ausführbaren Klasse) müssen abschließend mit `COMMIT ENTITIES` festgeschrieben werden. Erst damit werden die Änderungen dauerhaft in der Datenbank gespeichert und alle Determinations und Validierungen des RAP BOs ausgeführt.

```abap showLineNumbers
DATA reported TYPE RESPONSE FOR REPORTED ZI_ConnectionTP.
DATA failed   TYPE RESPONSE FOR FAILED ZI_ConnectionTP.

COMMIT ENTITIES
  RESPONSE OF ZI_ConnectionTP
  REPORTED DATA(commit_reported)
  FAILED   DATA(commit_failed).

IF commit_failed IS NOT INITIAL.
  " Error Handling
ENDIF.
```

:::warning

Innerhalb von RAP-Handlermethoden (Validierungen, Determinierungen, Actions) darf kein `COMMIT ENTITIES` verwendet werden – das Framework übernimmt den Commit-Zyklus.

:::
