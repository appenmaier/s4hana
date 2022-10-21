---
title: ZCL_D_ABAP_LOCATIONS
description: 'Determinierung: Ziel- und Startlokation'
---

```abap
CLASS zcl_d_abap_locations DEFINITION PUBLIC INHERITING FROM /bobf/cl_lib_d_supercl_simple FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS /bobf/if_frw_determination~execute REDEFINITION.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.

CLASS zcl_d_abap_locations IMPLEMENTATION.

  METHOD /bobf/if_frw_determination~execute.
   
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
      SELECT SINGLE FROM scitairp
       FIELDS *
       WHERE airport = connection->departureairportid
       INTO @DATA(departure_city).
      IF sy-subrc <> 0.
        CONTINUE.
      ENDIF.
      SELECT SINGLE FROM scitairp
       FIELDS *
       WHERE airport = connection->arrivalairportid
       INTO @DATA(arrival_city).
      IF sy-subrc <> 0.
        CONTINUE.
      ENDIF.
      connection->departurecity = departure_city-city.
      connection->departurecountrycode = departure_city-country.
      connection->arrivalcity = arrival_city-city.
      connection->arrivalcountrycode = arrival_city-country.
      io_modify->update(
        EXPORTING
          iv_node = is_ctx-node_key
          iv_key  = connection->key
          is_data = connection ).
    ENDLOOP.

  ENDMETHOD.
  
ENDCLASS.
```
