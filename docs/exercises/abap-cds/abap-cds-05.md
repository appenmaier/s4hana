---
title: ABAP-CDS-05
description: ""
---

Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `Z???_CustomerKPIs`.

## ER-Modell

```mermaid
erDiagram

    "Z???_Customer" ||--|| "/DMO/CUSTOMER" : ""
    "Z???_Travel" ||--|| "/DMO/TRAVEL" : ""
    "Z???_TravelWithCustomer" }o--|| "Z???_Customer" : "Only Customers from Germany"
    "Z???_TravelWithCustomer" ||--|| "Z???_Travel" : ""
    "Z???_CustomerKPIs" ||--o{ "Z???_TravelWithCustomer" : "Only Customers with Total Revenue >= 5.000 Euro"

    "Z???_CustomerKPIs" {
        numc(6) CustomerId PK
        char(92) CustomerName
        char(60) Street
        char(10) PostalCode
        char(40) City
        curr(17-2) TotalRevenue "Sum of all Total Prices and Total Booking Fees"
        cuky(5) CurrencyCode
        dec(16) AverageDuration "Average of Travel Duration"
        int4(10) NumberOfDifferentAgencys "Number of different Agencys"
    }

    "Z???_TravelWithCustomer" {
        numc(8) TravelId PK
        numc(6) AgencyId
        dats(8) BeginDate
        dats(8) EndDate
        int4(10) Duration "Days between Begin Date and End Date"
        curr(16-2) BookingFee "Converted into Euro"
        curr(16-2) TotalPrice "Converted into Euro"
        cuky(5) CurrencyCode "EUR"
        string(1024) Description
        char(1) Status
        char(60) StatusText "Status Text"
        numc(6) CustomerId
        char(92) CustomerName "Title FirstName LastName"
        char(60) Street
        char(10) PostalCode
        char(40) City
    }
```

## Hinweise

- Das Feld `TotalRevenue` soll den gesamten Umsatz aller Reisen eines Kunden ausgeben
- Das Feld `AverageDuration` soll die durchschnittliche Reisedauer ausgeben
- Das Feld `NumberOfDifferentAgencys` soll die Anzahl unterschiedlicher Reisebüros eines Kunden ausgeben
