---
title: RESTful ABAP Programmiermodell (RAP)
description: ''
sidebar_position: 10
tags: []
---

Die Architektur einer RAP-Anwendung umfasst die nachfolgenden Bereiche:

- _Business Objects_ stellen das Datenmodell dar und definieren das Verhalten, also die datenbezogene Logik. Sie werden über ABAP CDS-Views, Verhaltensdefinitionen sowie Verhaltensimplementierungen definiert
- _Business Object Projections_ ermöglichen das Festlegen spezifischer Business-Objekte für einen bestimmten Business-Service. Sie bestehen aus ABAP CDS-Projektionsviews, Verhaltensprojektionen sowie spezifischen Implementierungen
- _Service Definitions_ legen den Umfang eines Services fest. Dies umfasst insbesondere die _Business Object Projections_, die der Service bereitstellen soll
- _Service Bindings_ definieren das Kommunikationsprotokoll (OData v2 oder OData v4) sowie die Art des Services (UI-Service oder Web-Service)
- _SAP Fiori UIs_ stellen Oberflächen für häufig verwendete Anwendungsmuster bereit
- _Web APIs_ bieten eine öffentliche Schnittstelle für den Zugriff auf die Services

![image](https://user-images.githubusercontent.com/47243617/210181726-5976e706-e01f-4c0a-a1ba-da124e3f7216.png)
