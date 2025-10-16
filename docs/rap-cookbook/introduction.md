---
title: Einführung
description: ""
sidebar_position: 5
---

Diese Kochbuch stellt eine Schritt-für-Schritt-Anleitung zur Entwicklung einer transaktionalen SAP Fiori elements App zur Verwaltung von Reisen und den dazugehörigen Buchungen auf Grundlage des ABAP RESTful Application Programming Models (RAP) dar.

## ER-Modell

```mermaid
erDiagram
   Travel ||--o{ Booking : ""
```

## Laufzeitartefakte

```mermaid
block-beta
   columns 1
   block
      space
      space
      space
      UI_TRAVEL_V2["UI_TRAVEL_V2
                   Service Binding"]
      space
      space
      space
   end
   block
      C_TRAVEL["C_TRAVEL
               Behavior Projection"]
      space
      space
      UI_TRAVEL["UI_TRAVEL
                Service Definition"]
      space
      space
      space
   end
   block     
      C_TRAVEL2["C_TRAVEL
                Metadata Extension"]
      space
      C_Travel["C_Travel
               BO Projection View"]
      space
      C_Booking["C_Booking
                BO Projection View"]
      space
      C_BOOKING["C_BOOKING
                Metadata Extension"]
   end
   block
      I_TRAVEL["I_TRAVEL
               Behavior Definition"]
      space
      I_Travel["I_Travel
               BO Base View"]
      space
      I_Booking["I_Booking
                BO Base View"]
      space
      space
   end
   block
      space
      space
      R_Travel["R_Travel
               Restricted View"]
      space
      R_Booking["R_Booking
                Restricted View"]
      space
      space
   end
   block
      BP_TRAVEL["BP_TRAVEL
                Behavior Implementation"]
      space
      TRAVEL_A[("TRAVEL_A")]
      space
      BOOKING_A[("BOOKING_A")]
      space
      space
   end

   UI_TRAVEL_V2-->UI_TRAVEL
   UI_TRAVEL-->C_Travel
   UI_TRAVEL-->C_Booking
   C_Travel-->I_Travel
   C_TRAVEL-->C_Travel
   C_TRAVEL2-->C_Travel
   C_BOOKING-->C_Booking
   C_Booking-->I_Booking
   C_Travel-->C_Booking
   C_Booking-->C_Travel
   I_Travel-->R_Travel
   I_TRAVEL-->I_Travel
   I_TRAVEL-->BP_TRAVEL
   I_Travel-->I_Booking
   I_Booking-->I_Travel
   I_Booking-->R_Booking
   R_Travel-->TRAVEL_A
   R_Booking-->BOOKING_A
```

## Entwicklungsobjekte

| Kategorie           | Unterkategorie        | Entwicklungsobjekt   | Anmerkungen                       |
| ------------------- | --------------------- | -------------------- | --------------------------------- |
| Authorizations      | Authorization Fields  | ZAGENCY_ID           | Berechtigungsfeld Reisebüronummer |
| Authorizations      | Authorization Objects | ZAGENCY              | Berechtigungsobjekt Reisebüro     |
| Business Services   | Service Bindings      | ZUI_TRAVEL_V2        | Service Binding Reise             |
| Business Services   | Service Bindings      | ZUI_TRAVEL_V4        | Service Binding Reise             |
| Business Services   | Service Definitions   | ZUI_TRAVEL           | Service Definition Reise          |
| Core Data Services  | Access Controls       | ZC_TRAVEL            | Zugriffskontrolle Reise           |
| Core Data Services  | Access Controls       | ZR_TRAVEL            | Zugriffskontrolle Reise           |
| Core Data Services  | Behavior Definitions  | ZC_TRAVEL            | Behavior Projection Reise         |
| Core Data Services  | Behavior Definitions  | ZI_TRAVEL            | Behavior Definition Reise         |
| Core Data Services  | Data Definitions      | ZA_BookingFee        | Abstract View Buchungsgebühr      |
| Core Data Services  | Data Definitions      | ZC_Booking           | BP Projection View Buchung        |
| Core Data Services  | Data Definitions      | ZC_Travel            | BO Projection View Reise          |
| Core Data Services  | Data Definitions      | ZI_CustomerText      | Interface View Kundenname         |
| Core Data Services  | Data Definitions      | ZI_CustomerVH        | Interface View Kunde              |
| Core Data Services  | Data Definitions      | ZI_StatusVH          | Interface View Status             |
| Core Data Services  | Data Definitions      | ZI_Booking           | BO Base View Buchung              |
| Core Data Services  | Data Definitions      | ZI_Travel            | BO Base View Reise                |
| Core Data Services  | Data Definitions      | ZR_Booking           | Restricted View Buchung           |
| Core Data Services  | Data Definitions      | ZR_Travel            | Restricted View Reise             |
| Core Data Services  | Metadata Extensions   | ZC_BOOKING           | Metadata Extension Buchung        |
| Core Data Services  | Metadata Extensions   | ZC_TRAVEL            | Metadata Extension Reise          |
| Dictionary          | Database Tables       | Z_BOOKING_A          | Anwendungstabelle Buchung         |
| Dictionary          | Database Tables       | Z_TRAVEL_A           | Anwendungstabelle Reise           |
| Dictionary          | Database Tables       | Z_BOOKING_D          | Entwurfstabelle Buchung           |
| Dictionary          | Database Tables       | Z_TRAVEL_D           | Entwurfstabelle Reise             |
| Source Code Library | Classes               | ZCL_TRAVEL_GENERATOR | ABAP-Klasse Reise-Generator       |
| Source Code Library | Classes               | ZCM_TRAVEL           | Nachrichtenklasse Reise           |
| Source Code Library | Classes               | ZBP_TRAVEL           | Verhaltensimplementierung Reise   |
| Texts               | Message Classes       | Z_TRAVEL             | Message Class Reise               |


