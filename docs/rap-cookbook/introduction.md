---
title: Einführung
description: ""
sidebar_position: 5
---

Diese Kochbuch stellt eine Schritt-für-Schritt-Anleitung zur Entwicklung einer transaktionalen SAP Fiori elements App zur Verwaltung von Reisen und den dazugehörigen Buchungen auf Grundlage des _ABAP RESTful Application Programming Models_ (RAP) dar.

## ER-Modell

```mermaid
erDiagram
   Travel ||--o{ Booking : ""
```

## Entwicklungsobjekte

| Kategorie           | Unterkategorie        | Entwicklungsobjekt   | Anmerkungen                       |
| ------------------- | --------------------- | -------------------- | --------------------------------- |
| Authorizations      | Authorization Fields  | ZAGENCY_ID           | Berechtigungsfeld Reisebüronummer |
| Authorizations      | Authorization Objects | ZAGENCY              | Berechtigungsobjekt Reisebüro     |
| Business Services   | Service Bindings      | ZUI_TRAVEL_O2        | Service Binding Reise             |
| Business Services   | Service Bindings      | ZUI_TRAVEL_O4        | Service Binding Reise             |
| Business Services   | Service Definitions   | ZUI_TRAVEL           | Service Definition Reise          |
| Core Data Services  | Access Controls       | ZC_TRAVELTP          | Zugriffskontrolle Reise           |
| Core Data Services  | Behavior Definitions  | ZC_TRAVELTP          | Behavior Projection Reise         |
| Core Data Services  | Behavior Definitions  | ZR_TRAVELTP          | Behavior Definition Reise         |
| Core Data Services  | Data Definitions      | ZA_BookingFee        | Abstract View Buchungsgebühr      |
| Core Data Services  | Data Definitions      | ZC_BookingTP         | BP Projection View Buchung        |
| Core Data Services  | Data Definitions      | ZC_TravelTP          | BO Projection View Reise          |
| Core Data Services  | Data Definitions      | ZI_CustomerText      | Interface View Kundenname         |
| Core Data Services  | Data Definitions      | ZI_CustomerVH        | Interface View Kunde              |
| Core Data Services  | Data Definitions      | ZI_StatusVH          | Interface View Status             |
| Core Data Services  | Data Definitions      | ZR_BookingTP         | BO Base View Buchung              |
| Core Data Services  | Data Definitions      | ZR_TravelTP          | BO Base View Reise                |
| Core Data Services  | Data Definitions      | ZI_Booking           | Basic Interface View Buchung      |
| Core Data Services  | Data Definitions      | ZI_Travel            | Basic Interface View Reise        |
| Core Data Services  | Metadata Extensions   | ZC_BOOKING           | Metadata Extension Buchung        |
| Core Data Services  | Metadata Extensions   | ZC_TRAVEL            | Metadata Extension Reise          |
| Dictionary          | Database Tables       | ZBOOKING_A           | Anwendungstabelle Buchung         |
| Dictionary          | Database Tables       | ZTRAVEL_A            | Anwendungstabelle Reise           |
| Dictionary          | Database Tables       | ZBOOKING_D           | Entwurfstabelle Buchung           |
| Dictionary          | Database Tables       | ZTRAVEL_D            | Entwurfstabelle Reise             |
| Source Code Library | Classes               | ZCL_TRAVEL_GENERATOR | ABAP-Klasse Reise-Generator       |
| Source Code Library | Classes               | ZCM_TRAVEL           | Nachrichtenklasse Reise           |
| Source Code Library | Classes               | ZBP_TRAVEL           | Verhaltensimplementierung Reise   |
| Texts               | Message Classes       | ZTRAVEL              | Message Class Reise               |
