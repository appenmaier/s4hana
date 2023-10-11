---
title: Laufzeitartefakte
description: ""
sidebar_position: 20
tags: []
---

Für die Entwicklung von SAP-Fiori-Apps nach RAP kommen nachfolgende Laufzeitartefakte zum Einsatz:

- _Restricted Interface Views_ und _Projection Views_ legen das Datenmodell fest
- _Metadata Extensions_ legen die Oberfläche fest
- _Access Controls_ steuern die Lesezugriffe
- _Behavior Definitions_ legen das transaktionale Verhalten fest
- _Behavior Implementation Classes_ beinhalten die Verhaltensimplementierungen
- _Service Definitions_ legen den Umfang fest
- _Service Bindings_ legen das Kommunikationsprotokoll sowie die Art des Geschäftsservices fest

```mermaid
flowchart
    serviceBinding ---> serviceDefinition
    serviceDefinition ---> projectionView
    projectionView ---> restrictedInterfaceView
    restrictedInterfaceView ---> databaseTable
    accessControl2 ---> projectionView
    accessControl1 ---> restrictedInterfaceView
    behaviorDefinition2 ---> projectionView
    behaviorDefinition1 ---> restrictedInterfaceView
    behaviorDefinition1 ---> behaviorImplementationClass
    metadataExtension ---> projectionView


    serviceBinding(Service Binding)
    serviceDefinition(Service Definition)
    behaviorImplementationClass[[Behavior Implementation Class]]
    behaviorDefinition1(Behavior Definition)
    behaviorDefinition2(Behavior Definition)
    accessControl1(Access Control)
    accessControl2(Access Control)
    metadataExtension(Metadata Extension)
    projectionView[Projection View]
    restrictedInterfaceView[Restricted Interface View]
    databaseTable[(Database Table)]
```
