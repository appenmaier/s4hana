---
title: ABAP-CDS-07
description: ""
---

1. Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `ZI_???_CustomerWithTravels`
2. Erstelle die ausführbare Klasse `ZCL_???_ABAP_CDS_07`, welche alle Kunden liest und anzeigt. Verwende zum Lesen der Kunden die ABAP CDS View aus Aufgabenteil 1

## ER-Modell

```mermaid
erDiagram

    I_Customer ||--|| "/DMO/CUSTOMER" : ""
    I_Travel ||--|| "/DMO/TRAVEL" : ""
    I_CustomerWithTravels ||--|| I_Customer : "Only Customers from Germany"
    I_CustomerWithTravels ||--o{ I_Travel : ""

    I_CustomerWithTravels {
        numc(6) CustomerId PK
        char(40) FirstName
        char(40) LastName
        char(10) Title
        char(60) Street
        char(10) PostalCode
        char(40) City
        association _Travels
    }

    I_Customer {
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
