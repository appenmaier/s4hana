---
title: Allgemeine Syntax
description: ""
sidebar_position: 10
tags: []
---

ABAP-Quellcode besteht aus einzelnen Anweisungen. Diese dürfen beliebig eingerückt werden, können sich über mehrere Zeilen erstrecken und müssen mit einem Punkt abgeschlossen werden. Zwischen den Wörtern einer Anweisung muss mindestens ein Leerzeichen stehen.

Zeilen, die mit einem Stern beginnen, werden vom Laufzeitsystem als Kommentarzeile erkannt und ignoriert. Doppelte Anführungszeichen kennzeichnen den Rest einer Zeile als Kommentar.

```abap showLineNumbers
DATA text TYPE c LENGTH 25.        " Declaration
text = 'Ein Ring sie zu knechten'. " Value Assignment
out->write( text ).                " Output
```

:::note

ABAP unterscheidet nicht zwischen Groß- und Kleinschreibung.

:::
