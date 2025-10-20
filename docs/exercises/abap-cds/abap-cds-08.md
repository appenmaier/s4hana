---
title: ABAP-CDS-08
description: ""
---

Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `Z???_CustomerExtension"`.

## ER-Modell

```mermaid
erDiagram

    "Z???_Customer" ||--|| "/DMO/CUSTOMER" : ""
    "Z???_CustomerExtension" ||--|| "Z???_Customer"  : ""
    "Z???_CustomerExtension" ||--o{ "/DMO/BOOKING" : ""

    "Z???_CustomerExtension" {
        association _ZZBookings
    }
```
