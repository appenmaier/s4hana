---
title: ABAP-CDS-04
description: ""
---

Passe mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `Z???_TravelWithCustomer` an.

## Grafische Ansicht

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

- Das Feld `Duration` soll die Reisedauer ausgeben
- Das Feld `CustomerName` soll, falls eine Anrede vorhanden ist, die verketteten Felder `Title`, `FirstName` und `LastName` ausgeben, ansonsten nur die verketteten Felder `FirstName` und `LastName`
- Die Felder `BookingFee` und `TotalPrice` sollen die Beträge in Euro ausgeben (Stichtag: aktuelles Systemdatum)
- Das Feld `CurrencyCode` soll den Wert `EUR` ausgeben
- Das Feld `StatusText` soll den Text des Domänenfestwerts des Feldes `Status` in der Anmeldesprache ausgeben
