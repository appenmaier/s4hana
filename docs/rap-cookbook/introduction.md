---
title: Einführung
description: ""
sidebar_position: 5
---

Diese Kochbuch stellt eine Schritt-für-Schritt-Anleitung zur Entwicklung einer transaktionalen SAP Fiori elements App zur Verwaltung von Reisen und den dazugehörigen Buchungen auf Grundlage des ABAP RESTful Application Programming Models (RAP) dar. Im Rahmen der Entwicklung werden Schritt für Schritt die nachfolgend dargestellten Laufzeitartefakte erstellt und erweitert:

```mermaid
flowchart
    zuitravelv2 -.-> zuitravel
    zuitravel -.-> zctravel
    zctravel <-.-> zcbooking
    zctravel -.-> zrtravel
    zcbooking -.-> zrbooking
    zrtravel <-.-> zrbooking
    zrtravel -.-> zatravel
    zrbooking -.-> zabooking
    zrtravelBD -.-> zrtravel
    zctravelBP -.-> zctravel
    zrtravelAC -.-> zrtravel
    zctravelAC -.-> zctravel
    zctravelME -.-> zctravel
    zcbookingME -.-> zcbooking
    zrtravelBD -.-> zbptravel
    zbptravel -.-> zcmtravel
    zcmtravel -.-> ztravel

    subgraph Dictionary
        zatravel[(ZATRAVEL)]
        zabooking[(ZABOOKING)]
    end

    subgraph Messages
        ztravel(Message Class\nZTRAVEL)
    end

    subgraph Core Data Services
        zrtravel(Restricted Interface View\nZR_Travel)
        zrbooking(Restricted Interface View\nZR_Booking)

        zctravel(Projection View\nZC_Travel)
        zcbooking(Projection View\nZC_Booking)

        zrtravelBD(Behavior Definition\nZR_TRAVEL)
        zctravelBP(Behavior Projection\nZC_TRAVEL)

        zrtravelAC(Access Control\nZR_TRAVEL)
        zctravelAC(Access Control\nZC_TRAVEL)

        zctravelME(Metadata Extension\nZC_TRAVEL)
        zcbookingME(Metadata Extension\nZC_BOOKING)
    end

    subgraph Business Services
        zuitravel(Service Definition\nZUI_TRAVEL)
        zuitravelv2(SBervice Binding\nZUI_TRAVEL_V2)
    end

    subgraph Source Code Library
        zbptravel(Behavior Implementation Class\nZBP_TRAVEL)
        zcmtravel(ABAP Class\nZCM_TRAVEL)
    end
```
