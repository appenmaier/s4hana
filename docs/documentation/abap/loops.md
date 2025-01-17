---
title: Schleifen
description: ""
sidebar_position: 70
tags: []
---

Schleifen können in ABAP entweder mit dem Schlüsselwort `WHILE` oder dem Schlüsselwort `DO` umgesetzt werden.

```abap showLineNumbers
" Head-controlled loop
WHILE sy-index <= 10.
  out->write( sy-index ).
ENDWHILE.

" Index loop
DO 10 TIMES.
  out->write( sy-index ).
ENDDO.

" Infinite loop
DO.
  out->write( sy-index ).
  IF sy-index = 10.
    EXIT.
  ENDIF.
ENDDO.
```

:::tip Hinweis

Das Systemfeld `SY-INDEX` beinhaltet den aktuellen Schleifendurchgang.

:::
