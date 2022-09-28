---
title: Demo 9
description: ""
sidebar_position: 90
---

```abap
FUNCTION Z_ABAP_SET_CONNECTION
  IMPORTING
    I_CARRIER_ID TYPE S_CARR_ID
    I_CONNECTION_ID TYPE S_CONN_ID
  EXCEPTIONS
    INITIAL_CARRIER_ID
    INITIAL_CONNECTION_ID.



* Eingabeprüfung
  IF i_carrier_id IS INITIAL.
    RAISE initial_carrier_id.
  ENDIF.

  IF i_connection_id IS INITIAL.
    RAISE initial_connection_id.
  ENDIF.

  g_carrier_id = i_carrier_id.
  g_connection_id = i_connection_id.

ENDFUNCTION.
```

```abap
REPORT zabap_demo_abap_09.

PARAMETERS p_carrid TYPE s_carr_id DEFAULT 'LH'.
PARAMETERS p_connid TYPE s_conn_id DEFAULT '0400'.

DATA carrier_id TYPE s_carr_id.
DATA connection_id TYPE s_conn_id.

CALL FUNCTION 'Z_ABAP_SET_CONNECTION'
  EXPORTING
    i_carrier_id          = p_carrid
    i_connection_id       = p_connid
  EXCEPTIONS
    initial_carrier_id    = 1
    initial_connection_id = 2
    OTHERS                = 3.
IF sy-subrc <> 0.
  CASE sy-subrc.
    WHEN 1.
      WRITE: |Error: initial carrier id|.
    WHEN 2.
      WRITE: |Error: initial connection id|.
    WHEN OTHERS.
      WRITE: |Internal Error|.
  ENDCASE.
ENDIF.

CLEAR: p_carrid, p_connid.

CALL FUNCTION 'Z_ABAP_GET_CONNECTION'
  IMPORTING
    e_carrier_id    = carrier_id
    e_connection_id = connection_id.

WRITE: / carrier_id, connection_id.
```
