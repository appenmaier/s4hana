---
title: ZCL_V_ABAP_AIRPORTS
description: 'Validierung: Ziel- und Startflughafen'
---

```abap
…    
    DATA connections TYPE ztiabap_connectiontp.

    "Daten lesen
    io_read->retrieve(
      EXPORTING
        iv_node       = is_ctx-node_key
        it_key        = it_key
      IMPORTING
        eo_message    = eo_message
        et_data       = connections
        et_failed_key = et_failed_key ).

    "Nachrichten-Container erstellen
    IF eo_message IS NOT BOUND.
      eo_message = /bobf/cl_frw_factory=>get_message( ).
    ENDIF.

    "Daten sequentiell durchlaufen
    LOOP AT connections REFERENCE INTO DATA(connection).
      "Daten prüfen
      IF connection->departureairportid = connection->arrivalairportid.
        "Meldung erzeugen
        DATA(message) = NEW zcm_abap_connection(
          textid          = zcm_abap_connection=>identical_airport_ids
          severity        = zcm_abap_connection=>co_severity_error
          i_carrier_id    = connection->carrierid
          i_connection_id = connection->connectionid ).
        eo_message->add_cm( message ).

        et_failed_key = VALUE #( BASE et_failed_key ( key = connection->key ) ).
        CONTINUE.
      ENDIF.
    ENDLOOP.
…
```
