---
title: SAP Namensrichtlinien
description: ""
sidebar_position: 30
tags: []
---

Bei der Entwicklung im SAP-Umfeld gilt es, bestimmte Qualitätsstandards einzuhalten. Darunter zählen unter anderem auch die Namensrichtlinien für Entwicklungsobjekte.

:::tip Hinweis
Weitere Programmierrichtlinien können der [ABAP Dokumentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abennaming_gdl.htm) entnommen werden.
:::

## Namensrichtlinien für Entwicklungsobjekte

### Source Code Library

| Typ                       | Bezeichner                                      | Beispiel                |
| ------------------------- | ----------------------------------------------- | ----------------------- |
| ABAP-Klasse               | <Namensraum\>CL\_<Komponente\>\_<Beschreibung\> | `ZCL_ABAP_FLIGHT`       |
| Ausnahmenklasse           | <Namensraum\>CX\_<Komponente\>\_<Beschreibung\> | `ZCX_ABAP_INVALID_TYPE` |
| Nachrichtenklasse         | <Namensraum\>CM\_<Komponente\>\_<Beschreibung\> | `ZCM_ABAP_FLIGHT`       |
| Verhaltensimplementierung | <Namensraum\>BP\_<Komponente\>\_<Beschreibung\> | `ZBP_ABAP_FLIGHT`       |
| Schnittstelle             | <Namensraum\>IF\_<Komponente\>\_<Beschreibung\> | `ZIF_ABAP_PARTNER`      |
| ABAP-Programm             | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAP_DEMO`            |

### Core Data Services

| Typ                      | Bezeichner                                         | Beispiel                       |
| ------------------------ | -------------------------------------------------- | ------------------------------ |
| Basic Interface View     | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>     | `ZI_ABAP_Flight`               |
| BO Base View             | <Namensraum\>R\_<Komponente\>\_<Beschreibung\>TP   | `ZI_ABAP_FlightTP`             |
| Composite Interface View | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>     | `ZI_ABAP_FlightWithConnection` |
| Consumption View         | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>     | `ZC_ABAP_Flight`               |
| BO Projection View       | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>TP   | `ZC_ABAP_FlightTP`             |
| Wertehilfe               | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>VH   | `ZI_ABAP_AirportVH`            |
| Textelementview          | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>Text | `ZI_ABAP_AirportText`          |
| Abstract View            | <Namensraum\>A\_<Komponente\>\_<Beschreibung\>     | `ZA_ABAP_Flight`               |
| Extension View           | <Namensraum\>E\_<Komponente\>\_<Beschreibung\>     | `ZE_ABAP_Flight`               |
| Access Control           | <Name der CDS-View\>                               | `ZC_ABAP_FLIGHT`               |
| Metadata Extension       | <Name der Consumption View\>                       | `ZC_ABAP_FLIGHT`               |
| Behavior Definition      | <Name der BO Base View\>                           | `ZI_ABAP_FLIGHTTP`             |
| Behavior Projection      | <Name der BO Projection View\>                     | `ZC_ABAP_FLIGHTTP`             |

### Dictionary

| Typ               | Bezeichner                                     | Beispiel           |
| ----------------- | ---------------------------------------------- | ------------------ |
| Domäne            | <Namensraum\><Komponente\>\_<Beschreibung\>    | `ZABAP_CHAR3`      |
| Datenelement      | <Namensraum\><Komponente\>\_<Beschreibung\>    | `ZABAP_CARRIER_ID` |
| Strukturtyp       | <Namensraum\><Komponente\>\_<Beschreibung\>    | `ZABAP_FLIGHT`     |
| Tabellentyp       | <Namensraum\><Komponente\>\_<Beschreibung\>    | `ZABAP_FLIGHTS`    |
| Anwendungstabelle | <Namensraum\><Komponente\>\_<Beschreibung\>\_A | `ZABAP_FLIGHT_A`   |
| Entwurfstabelle   | <Namensraum\><Komponente\>\_<Beschreibung\>\_D | `ZABAP_FLIGHT_D`   |

### Sonstiges

| Typ                | Bezeichner                                                       | Beispiel             |
| ------------------ | ---------------------------------------------------------------- | -------------------- |
| Paket              | <Namensraum\><Beschreibung\>                                     | `ZABAP`              |
| Message Class      | <Namensraum\><Komponente\>\_<Beschreibung\>                      | `ZABAP_FLIGHT`       |
| Service Definition | <Namensraum\><Art\>\_<Komponente\>\_<Beschreibung\>              | `ZUI_ABAP_FLIGHT`    |
| Service Binding    | <Namensraum\><Art\>\_<Komponente\>\_<Beschreibung\>\_O<Version\> | `ZUI_ABAP_FLIGHT_O4` |

## Namensräume

| Namensraum        | Beispiel    |
| ----------------- | ----------- |
| Prefix-Namensraum | /DMO/       |
| Kunden-Namensraum | Z           |
| SAP-Namensraum    | FLIGHTMODEL |
