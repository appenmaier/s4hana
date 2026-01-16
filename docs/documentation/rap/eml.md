---
title: Entity Manipulation Language (EML)
description: ""
sidebar_position: 40
tags: []
---

Die _Entity Manpipulation Language_ (EML) ermöglicht den lesenden und schreibenden Zugriff auf RAP BOs. Für den lesenden Zugriff stellt EML die Anweisung `READ ENTITIES`, für den schreibenden Zurgiff die Anweisung `MODIFY ENTITITES` mit den Zusatzwörtern `CREATE`, `CREATE_BY`, `UPDATE`, `DELETE` und `EXECUTE` zur Verfügung.

## Lesende Zugriffe

Für die lesenden Zugriffe sind vor allem zwei Parameter wichtig: der Import-Parameter, welcher die Schlüssel der zu lesenden Einträge enthält (`WITH`) sowie der Export-Parameter, welcher die erfolgreich gelesenen Einträge enthält (`RESULT`). Weitere Export-Parameter beinhalten Informationen zu etwaig erzeugten Nachrichten (`REPORTED`) und etwaig fehlgeschlagenen Schlüsseln (`FAILED`).

```abap showLineNumbers
DATA keys        TYPE TABLE FOR READ IMPORT ZI_ConnectionTP.
DATA connections TYPE TABLE FOR READ RESULT ZI_ConnectionTP.
DATA reported    TYPE RESPONSE FOR REPORTED ZI_ConnectionTP.
DATA failed      TYPE RESPONSE FOR FAILED ZI_ConnectionTP.

keys = VALUE #( ( CarrierId = 'LH' ConnectionId '0400' ) ).

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

:::info Hinweis

Der Zusatz `FIELDS` legt fest, welche Felder gelesen werden sollen. Schlüsselfelder müssen hierbei nicht explizit angegeben werden und der Zusatz `ALL FIELDS` ermöglicht das Lesen aller Felder.

:::

## Schreibende Zugriffe

Neben den bereits genannten Parametern der Leseanweisung besitzen die Operationen `CREATE` und `CREATE BY` den Parameter `MAPPED`, welcher die _Content IDs_ (CIDs) sowie die Schlüssel der erzeugten Einträge beinhaltet.
CIDs sind temporäre Schlüssel von RAP BO Einträgen; die Angabe von CIDs bei EML-Operationen wird dringend empfohlen.

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

:::info Hinweis

Der Zusatz `AUTO FILL CID` sorgt dafür, dass die CID automatisch befüllt wird.

:::
