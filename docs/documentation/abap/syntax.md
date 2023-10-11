---
title: Allgemeine Syntax
description: ""
sidebar_position: 10
tags: []
---

ABAP-Quellcode besteht aus einzelnen Anweisungen. Diese dürfen beliebig eingerückt werden, können mehrere Zeilen lang sein und müssen mit einem Punkt abgeschlossen werden. Wörter einer Anweisung müssen durch mindestens ein Leerzeichen getrennt werden.

Zeilen, die mit einem Stern beginnen, werden von Laufzeitsystem als Kommentarzeile erkannt und ignoriert. Doppelte Anführungszeichen kennzeichnen den Rest einer Zeile als Kommentar.

```abap showLineNumbers
DATA text TYPE c LENGTH 25. "Deklaration
text = 'Ein Ring sie zu knechten'. "Wertzuweisung
WRITE text. "Ausgabe
```

:::note Hinweis

ABAP unterscheidet nicht zwischen Groß- und Kleinschreibung.

:::
