---
title: Demo 6
description: ""
sidebar_position: 60
---

```abap
REPORT zabap_demo_abap_06.

* Java: int i = 1;
*       while(i <= 10) {
*         System.out.println(i);
*         i++;
*       }
WHILE sy-index <= 10.
  WRITE: / sy-index.
ENDWHILE.

* Java: for(int i = 1; i <= 10; i++) {
*         System.out.println(i);
*       }
DO 10 TIMES.
  WRITE: / sy-index.
ENDDO.

* Java: int i = 1;
*       do {
*         System.out.println(i);
*         i++;
*       } while(i <= 10);
DO.
  WRITE: / sy-index.
  IF sy-index <= 10.
    EXIT.
  ENDIF.
ENDDO.
```
