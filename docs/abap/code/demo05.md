---
title: Demo 5
description: ""
sidebar_position: 50
---

```abap
REPORT zabap_demo_abap_05.

DATA carrier_id TYPE s_carr_id VALUE 'LH'.
DATA flight_date TYPE s_date VALUE '20211026'.

* Einfache Fallunterscheidung
* Java: if(!(flightDate >= "20210101" && flightDate <= "20211231") || carrierId == "LH") {
*         System.out.println(true);
*       } else {
*         System.out.println(false);
*       }
IF NOT ( flight_date >= '20210101' AND flight_date <= '20211231' ) OR carrier_id = 'LH'.
  WRITE: / 'X'.
ELSE.
  WRITE: / ''.
ENDIF.

IF carrier_id IS INITIAL.
  WRITE: / 'X'.
ENDIF.

* Komplexe Fallunterscheidung
* Java: switch(carrierId) {
*         case "lh":
*         case "lH":
*         case "Lh":
*         case "LH":
*           System.out.println("Lufthansa");
*           break;
*         case "AA":
*           System.out.println("American Airlines");
*           break;
*         default:
*           System.out.println(carrierId);
*           break;
*       }
CASE carrier_id.
  WHEN 'LH' OR 'lh' OR 'lH' OR 'Lh'.
    WRITE: / 'Lufthansa'.
  WHEN 'AA'.
    WRITE: / 'American Airlines'.
  WHEN OTHERS.
    WRITE: / carrier_id.
ENDCASE.
```
