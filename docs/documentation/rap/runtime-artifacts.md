---
title: Laufzeitartefakte einer RAP-Anwendung
description: ""
sidebar_position: 20
tags: []
---

Für die Entwicklung von SAP Fiori Apps nach RAP kommen nachfolgende Laufzeitartefakte zum Einsatz:

**Kategorie _Dictionary_**

- _Datenbanktabellen_ legen das Datenmodell fest

**Kategorie _Core Data Services_**

- _BO Base Views_ und _BO Projection Views_ legen das Datenmodell des RAP BOs fest
- _Behavior Definitions_ und _Behavior Projections_ legen das transaktionale Verhalten des RAP BOs fest
- _Metadata Extensions_ legen die Oberfläche fest
- _Access Controls_ steuern die Lesezugriffe

**Kategorie _Business Services_**

- _Service Definitions_ legen den Umfang des Geschäftsservices fest
- _Service Bindings_ legen das Kommunikationsprotokoll sowie die Art des Geschäftsservices fest

**Kategorie _Source Code Library_**

- _Verhaltensimplementierungen_ beinhalten die Implementierungen des transaktionalen Verhaltens

```mermaid
flowchart
 subgraph Dictionary
   table(Datenbankabelle)
 end
 subgraph Core Data Services
   data_definition(BO Base View)
   bo_projection(BO Projection)
   behavior_definition(Behavior Definition)
   behavior_projection(Behavior Projection)
   metadata_extension(Metadata Extensions)
   access_control(Access Control)
 end
 subgraph Business Service
   service_definition(Service Definition)
   service_binding(Service Binding)
 end
 subgraph Source Code Library
   implementation(Verhaltensimplementierung)
 end

 service_binding --> service_definition
 service_definition --> bo_projection
 bo_projection --> data_definition
 metadata_extension --> bo_projection
 access_control --> bo_projection
 behavior_projection --> bo_projection
 data_definition --> table
 behavior_definition --> data_definition
 implementation --> behavior_definition
```
