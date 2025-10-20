---
title: ABAP-CDS-03
description: ""
---

Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `Z???_TravelWithCustomer`.

## ER-Modell

```mermaid
erDiagram

    "Z???_Customer" ||--|| "/DMO/CUSTOMER" : ""
    "Z???_Travel" ||--|| "/DMO/TRAVEL" : ""
    "Z???_TravelWithCustomer" }o--|| "Z???_Customer" : "Only Customers from Germany"
    "Z???_TravelWithCustomer" ||--|| "Z???_Travel" : ""

    "Z???_TravelWithCustomer" {
        numc(8) TravelId PK
        numc(6) AgencyId
        dats(8) BeginDate
        dats(8) EndDate
        curr(16-2) BookingFee
        curr(16-2) TotalPrice
        cuky(5) CurrencyCode
        string(1024) Description
        char(1) Status
        numc(6) CustomerId
        char(40) FirstName
        char(40) LastName
        char(10) Title
        char(60) Street
        char(10) PostalCode
        char(40) City
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

    "Z???_Travel" {
        numc(8) TravelId PK
        numc(6) AgencyId
        numc(6) CustomerId
        dats(8) BeginDate
        dats(8) EndDate
        curr(16-2) BookingFee
        curr(16-2) TotalPrice
        cuky(5) CurrencyCode
        string(1024) Description
        char(1) Status
    }
```

## Hinweis

Die Verknüpfung der beiden Datenquellen `"Z???__Travel` und `"Z???__Customer` soll in Form eines Inner Joins erfolgen.
