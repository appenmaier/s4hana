---
title: ABAP-CDS-04
description: ""
---

Passe mit Hilfe des abgebildeten ER-Modells die ABAP CDS View `ZI_???_TravelWithCustomer` an.

## Grafische Ansicht

```mermaid
erDiagram

    I_Customer ||--|| DMOCUSTOMER : ""
    I_Travel ||--|| DMOTRAVEL : ""
    I_TravelWithCustomer }o--|| I_Customer : "Only Customers from Germany"
    I_TravelWithCustomer ||--|| I_Travel : ""

    I_TravelWithCustomer {
        numc(8) TravelId PK
        numc(6) AgencyId
        dats(8) BeginDate
        dats(8) EndDate
        int4(10) Duration "Days between Begin Date and End Date"
        curr(16-2) BookingFee "Converted into Euros"
        curr(16-2) TotalPrice "Converted into Euros"
        cuky(5) CurrencyCode "EUR"
        string(1024) Description
        numc(6) CustomerId
        char(92) CustomerName "Title FirstName LastName"
        char(60) Street
        char(10) PostalCode
        char(40) City
    }
```

## Hinweise

- Das Feld `Duration` soll die Reisedauer ausgeben
- Das Feld `CustomerName` soll, falls eine Anrede vorhanden ist, die verketteten Felder `Titel`, `Erster Name` und `Letzter Name` ausgeben, ansonsten nur die verketteten Felder `Erster Name` und `Letzter Name`
- Die Felder `BookingFee` und `TotalPrice` sollen die Beträge in Euro ausgeben (Stichtag: Beginn der Reise)
- Das Feld `CurrencyCode` soll den Wert `EUR` ausgeben
