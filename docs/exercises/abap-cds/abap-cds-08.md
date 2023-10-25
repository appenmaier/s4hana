---
title: ABAP-CDS-08
description: ""
---

Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `ZE_???_Customer`.

## ER-Modell

```mermaid
erDiagram

    I_Customer ||--|| DMOCUSTOMER : ""
    E_Customer ||--|| I_Customer  : ""
    E_Customer ||--o{ DMOBOOKING : ""

    E_Customer {
        association _Bookings
    }
```
