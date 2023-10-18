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
    zrtravel -.-> ztravela
    zrbooking -.-> zbookinga
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
        ztravela[(Z_TRAVEL_A)]
        zbookinga[(Z_BOOKING_A)]
    end

    subgraph Messages
        ztravel(Message Class\nZ_TRAVEL)
    end

    subgraph Core&#160Data&#160Services
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

    subgraph Business&#160Services
        zuitravel(Service Definition\nZUI_TRAVEL_V2)
        zuitravelv2(Service Binding\nZUI_TRAVEL_V2)
    end

    subgraph Source&#160Code&#160Library
        zbptravel(Behavior Implementation Class\nZBP_TRAVEL)
        zcmtravel(ABAP Class\nZCM_TRAVEL)
    end

    style Business&#160Services fill:#9abcf2
    style Source&#160Code&#160Library fill:#9abcf2
    style Core&#160Data&#160Services fill:#9abcf2
    style Dictionary fill:#9abcf2
    style Messages fill:#9abcf2
```
