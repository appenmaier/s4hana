---
title: ABAP RESTful Application Programming Model (RAP)
description: ""
sidebar_position: 15
tags: []
---

Das _ABAP RESTful Application Programming Model_ (RAP) wird vor allem für die Anwendungsentwicklung in SAP S/4HANA (Cloud) verwendet. Es unterstützt die Entwicklung aller Arten von SAP Fiori Apps, Web APIs sowie Events und basiert auf erprobten Technologien und Frameworks wie den Core Data Services (CDS) zur Definition semantisch reichhaltiger Datenmodelle sowie einer Service-Infrastruktur zur Erstellung von OData-Services.

## Architektur einer RAP-Anwendung

Die Architektur einer RAP-Anwendung umfasst die nachfolgenden Bereiche:

**Datenmodellierung und Verhalten**

- _RAP Business Objects_ (RAP BOs) legen das Datenmodell für transaktionale Anwendungen fest und beinhalten neben den Daten auch die datenbezogene Logik, also das Verhalten
- _CDS Entities_ ermöglichen die Definition von nicht-transaktionalen Datenmodellen, die für Abfragen verwendet werden können

**Service-Bereitstellung**

- _RAP BO Projections_ und _Interfaces_ ermöglichen die Definition spezifischer Geschäftsservices
- _Service Definitions_ legen den Umfang eines Geschäftsservices fest
- _Service Bindings_ legen das Kommunikationsprotokoll (OData v2 oder OData v4) sowie die Art des Geschäftsservices (UI, Web API oder Event) fest

**Service-Verwendung**

- _SAP Fiori UIs_ stellen Oberflächen für häufig verwendete Anwendungsmuster bereit
- _Web APIs_ bieten eine öffentliche Schnittstelle für den Zugriff auf die Geschäftsservices
- _Events_ ermöglichen das asynchrone Konsumieren von RAP BOs

```mermaid
flowchart LR
    binding ---> api
    binding ---> ui
    binding ---> event
    definition ---> binding
    projection ---> definition
    interface ---> definition
    bo ---> projection
    bo ---> interface
    entity --> definition

    subgraph Service-Verwendung
        ui(SAP Fiori UI)
        api(Web API)
        event(Event)
    end

    subgraph Service-Bereitstellung
        binding(Service Binding)
        definition(Service Defintion)
        projection(RAP BO Projection)
        interface(Interface)
    end

    subgraph Datenmodellierung und Verhalten
        bo(RAP Business Object)
        entity(CDS Entity)
    end
```

## Laufzeitartefakte einer RAP-Anwendung

Für die Entwicklung von SAP Fiori Apps nach RAP kommen nachfolgende Laufzeitartefakte zum Einsatz:

- _Restricted Interface Views_ und _Projection Views_ legen das Datenmodell des RAP BOs fest
- _Metadata Extensions_ legen die Oberfläche fest
- _Access Controls_ steuern die Lesezugriffe
- _Behavior Definitions_ und _Behavior Projections_ legen das transaktionale Verhalten des RAP BOs fest
- _Behavior Implementation Classes_ beinhalten die Verhaltensimplementierungen
- _Service Definitions_ legen den Umfang des Business Services fest
- _Service Bindings_ legen das Kommunikationsprotokoll sowie die Art des Business Services fest

```mermaid
flowchart
    serviceBinding -.- serviceDefinition
    serviceDefinition -.- projectionView
    projectionView -.- restrictedInterfaceView
    restrictedInterfaceView -.- databaseTable
    accessControl2 -.- projectionView
    accessControl1 -.- restrictedInterfaceView
    behaviorProjection -.- projectionView
    behaviorDefinition -.- restrictedInterfaceView
    behaviorDefinition -.- behaviorImplementationClass
    metadataExtension -.- projectionView

    subgraph Business Services
        serviceBinding(Service Binding)
        serviceDefinition(Service Definition)
    end

    subgraph Source Code Library
        behaviorImplementationClass(Behavior Implementation Class)
    end

    subgraph Core Data Services
        behaviorDefinition(Behavior Definition)
        behaviorProjection(Behavior Projection)
        accessControl1(Access Control)
        accessControl2(Access Control)
        metadataExtension(Metadata Extension)
        projectionView(Projection View)
        restrictedInterfaceView(Restricted Interface View)
    end

    subgraph Dictionary
        databaseTable[(Database Table)]
    end
```
