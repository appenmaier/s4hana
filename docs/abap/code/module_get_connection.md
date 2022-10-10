
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
