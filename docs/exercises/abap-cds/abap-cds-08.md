---
title: ABAP-CDS-08
description: ""
---

Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `ZE_???_Customer`.

## ER-Modell

```mermaid
erDiagram

    I_Customer ||--|| "/DMO/CUSTOMER" : ""
    E_Customer ||--|| I_Customer  : ""
    E_Customer ||--o{ "/DMO/BOOKING" : ""

    E_Customer {
        association _ZZBookings
    }
```
