---
title: Demo 10
description: ""
sidebar_position: 100
---

```sql
@EndUserText.label : 'Connection'
@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE
define structure zabap_s_connection {
  carrier_id      : s_carr_id;
  connection_id   : s_conn_id;
  airport_from_id : s_from_airp;
  airport_to_id   : s_to_airp;
}
```

```abap
REPORT zabap_demo_abap_10.

"Deklaration von Strukturen
DATA connection TYPE zabap_s_connection.

"Zugriff auf Strukturkomponenten
connection-carrier_id = 'LH'.
connection-connection_id = '0400'.
connection-airport_from_id = 'FRA'.
connection-airport_to_id = 'JFK'.

WRITE: connection-carrier_id, connection-connection_id.
```
