---
title: Schleifen
description: ''
sidebar_position: 70
tags: []
---

Schleifen können in ABAP entweder mit dem Schlüsselwort `WHILE` oder dem Schlüsselwort `DO` umgesetzt werden.

```abap
* Kopfgesteuerte Schleife
WHILE sy-index <= 10.
  WRITE: / sy-index.
ENDWHILE.

* Zählschleife
DO 10 TIMES.
  WRITE: / sy-index.
ENDDO.

* Endlosschleife
DO.
  WRITE: / sy-index.
  IF sy-index <= 10.
    EXIT.
  ENDIF.
ENDDO.
```

:::note Hinweis
Das Systemfeld `SY-INDEX` beinhaltet den aktuellen Schleifendurchgang.
:::
