---
title: ZCL_A_ABAP_SWITCH_FLIGHTTYPE
description: 'Action: Flugtyp wechseln'
---

```abap
CLASS zcl_a_abap_switch_flight_type DEFINITION PUBLIC INHERITING FROM /bobf/cl_lib_a_supercl_simple FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS /bobf/if_frw_action~execute REDEFINITION.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.

CLASS zcl_a_abap_switch_flight_type IMPLEMENTATION.

  METHOD /bobf/if_frw_action~execute.
  
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
      "Daten ändern und zurückschreiben
      connection->flighttype = 'X'.
      io_modify->update(
        EXPORTING
          iv_node = is_ctx-node_key
          iv_key  = connection->key
          is_data = connection ).
      "Meldung erzeugen
      message = NEW zcm_abap_connection(
        textid          = zcm_abap_connection=>switch_flight_type_successfully
        severity        = zcm_abap_connection=>co_severity_success
        i_carrier_id    = connection->carrierid
        i_connection_id = connection->connectionid ).
      eo_message->add_cm( message ).
    ENDLOOP.

  ENDMETHOD.
  
ENDCLASS.
```
