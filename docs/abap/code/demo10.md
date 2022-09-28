---
title: Demo ABAP-10
description: 'Strukturen'
sidebar_position: 100
---

## Strukturtyp ZABAP_CONNECTION
```sql
@EndUserText.label : 'Connection'
@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE
define structure zabap_connection {
  carrier_id    : s_carr_id;
  connection_id : s_conn_id;
  city_from     : s_from_cit;
  city_to       : s_to_city;
}
```

## ABAP-Programm ZABAP_DEMO_ABAP_10
```abap
REPORT zabap_demo_abap_10.

*-------------------------------------------------------------------*
* Deklaration von Strukturen
*-------------------------------------------------------------------*
DATA connection TYPE zabap_s_connection.

*-------------------------------------------------------------------*
* Zugriff auf Strukturkomponenten
*-------------------------------------------------------------------*
connection-carrier_id = 'LH'.
connection-connection_id = '0400'.
connection-city_from = 'FRANKFURT'.
connection-city_to = 'NEW YORK'.

WRITE: connection-carrier_id, connection-connection_id, connection-city_from, connection-city_to.
```
