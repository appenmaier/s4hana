---
title: ABAP-CDS-07
description: ""
---

1. Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `Z???_CustomerWithTravels`
2. Erstelle die ausführbare Klasse `ZCL_???_ABAP_CDS_07`, welche alle Kunden samt den dazugehörigen Reiseinformationen liest und anzeigt. Verwende zum Lesen der Daten die ABAP CDS View aus Aufgabenteil 1

## ER-Modell

```mermaid
erDiagram

    "Z???_Customer" ||--|| "/DMO/CUSTOMER" : ""
    "Z???_Travel" ||--|| "/DMO/TRAVEL" : ""
    "Z???_CustomerWithTravels" ||--|| "Z???_Customer" : "Only Customers from Germany"
    "Z???_CustomerWithTravels" ||--o{ "Z???_Travel" : ""

    "Z???_CustomerWithTravels" {
        numc(6) CustomerId PK
        char(40) FirstName
        char(40) LastName
        char(10) Title
        char(60) Street
        char(10) PostalCode
        char(40) City
        association _Travels
    }

    "Z???_Customer" {
        numc(6) CustomerId PK
        char(40) FirstName
        char(40) LastName
        char(10) Title
        char(60) Street
        char(10) PostalCode
        char(40) City
        char(3) CountryCode
    }
```
