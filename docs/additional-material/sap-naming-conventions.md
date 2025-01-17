---
title: SAP Namensrichtlinien
description: ""
sidebar_position: 30
tags: []
---

Bei der Entwicklung im SAP-Umfeld gilt es, bestimmte Qualitätsstandards einzuhalten. Darunter zählen unter anderem auch die Namensrichtlinien für Entwicklungsobjekte und Datenobjekte.

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

| Typ                      | Bezeichner                                       | Beispiel                       |
| ------------------------ | ------------------------------------------------ | ------------------------------ |
| Basic Interface View     | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>   | `ZI_ABAP_Flight`               |
| BO Base View             | <Namensraum\>R\_<Komponente\>\_<Beschreibung\>   | `ZR_ABAP_Flight`               |
| Composite Interface View | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>   | `ZI_ABAP_FlightWithConnection` |
| Consumption View         | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>   | `ZC_ABAP_Flight`               |
| BO Projection View       | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>   | `ZC_ABAP_Flight`               |
| Wertehilfe               | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>VH | `ZC_ABAP_AirportVH`            |
| Abstract View            | <Namensraum\>A\_<Komponente\>\_<Beschreibung\>   | `ZA_ABAP_Flight`               |
| Extension View           | <Namensraum\>E\_<Komponente\>\_<Beschreibung\>   | `ZE_ABAP_Flight`               |
| Access Control           | <Name der CDS-View\>                             | `ZC_ABAP_FLIGHT`               |
| Metadata Extension       | <Name der CDS-View\>                             | `ZC_ABAP_FLIGHT`               |
| BO Behavior Definition   | <Name der CDS-View\>                             | `ZR_ABAP_FLIGHT`               |
| BO Behavior Projection   | <Name der CDS-View\>                             | `ZC_ABAP_FLIGHT`               |

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

## Namensrichtlinien für Datenobjekte

| Prefix                  | Beispiel               |
| ----------------------- | ---------------------- |
| G: globale Datenobjekte | `g_number_of_vehicles` |
| I: Import-Parameter     | `i_carrier_id`         |
| E: Export-Parameter     | `e_carrier`            |
| C: Changing-Parameter   | `c_carrier`            |
| R: Rückgabewert         | `r_carrier`            |
