---
title: ABAP-Programm ZABAP_DEMO_ABAP_09
description: 'Funktionsbausteine'
sidebar_position: 90
---

## Funktionsbaustein Z_ABAP_GET_CONNECTION
```abap
FUNCTION Z_ABAP_GET_CONNECTION
  IMPORTING
    I_CARRIER_ID    TYPE S_CARR_ID
    I_CONNECTION_ID TYPE S_CONN_ID
  EXPORTING
    E_CITY_FROM     TYPE S_FROM_CIT
    E_CITY_TO       TYPE S_TO_CITY
  EXCEPTIONS
    INITIAL_CARRIER_ID
    INITIAL_CONNECTION_ID.

  IF i_carrier_id IS INITIAL.
    RAISE initial_carrier_id.
  ENDIF.

  IF i_connection_id IS INITIAL.
    RAISE initial_connection_id.
  ENDIF.

  e_city_from = ''.
  e_city_to = ''.

ENDFUNCTION.
```

## ABAP-Programm ZABAP_DEMO_ABAP_09
```abap
REPORT zabap_demo_abap_09.

PARAMETERS p_carrid TYPE s_carr_id DEFAULT 'LH'.
PARAMETERS p_connid TYPE s_conn_id DEFAULT '0400'.

DATA city_from TYPE s_from_cit.
DATA city_to TYPE s_to_city.

CALL FUNCTION 'Z_ABAP_GET_CONNECTION'
  EXPORTING
    i_carrier_id          = p_carrid
    i_connection_id       = p_connid
  IMPORTING
    e_city_from           = city_from
    e_city_to             = city_to
  EXCEPTIONS
    initial_carrier_id    = 1
    initial_connection_id = 2
    OTHERS                = 3.
CASE sy-subrc.
  WHEN 1.
    MESSAGE e000(zabap) WITH 'Carrier ID'.
  WHEN 2.
    MESSAGE e000(zabap) WITH 'Connection ID'.
  WHEN 3.
    MESSAGE e001(zabap).
ENDCASE.

WRITE: city_from, city_to.
```

## Nachrichtenklasse ZABAP
```
000, Initial Parameter: &1
001, Internal Error
```
