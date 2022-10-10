---
title: ABAP-Programm ZABAP_DEMO_ABAP_10
description: 'Strukturen'
sidebar_position: 100
---

```abap
REPORT zabap_demo_abap_10.

*-------------------------------------------------------------------*
* Deklaration von Strukturen
*-------------------------------------------------------------------*
DATA connection TYPE zabap_connection.

*-------------------------------------------------------------------*
* Zugriff auf Strukturkomponenten
*-------------------------------------------------------------------*
connection-carrier_id = 'LH'.
connection-connection_id = '0400'.
connection-city_from = 'FRANKFURT'.
connection-city_to = 'NEW YORK'.

WRITE: connection-carrier_id, connection-connection_id, connection-city_from, connection-city_to.
```

[Strukturtyp ZABAP_CONNECTION](structure_type_zabap_connection.md)
