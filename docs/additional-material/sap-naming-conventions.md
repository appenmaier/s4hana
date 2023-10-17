---
title: SAP Namensrichtlinien
description: ""
sidebar_position: 30
tags: []
---

Bei der Entwicklung im SAP-Umfeld gilt es, bestimmte Qualitätsstandards einzuhalten. Darunter zählen unter anderem auch die Namensrichtlinien für Entwicklungsobjekte und Datenobjekte.

:::note Hinweis
Weitere Programmierrichtlinien können der [ABAP Dokumentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abennaming_gdl.htm) entnommen werden.
:::

## Namensrichtlinien für Entwicklungsobjekte

| Typ                                      | Bezeichner                                       | Beispiel                       |
| ---------------------------------------- | ------------------------------------------------ | ------------------------------ |
| Paket                                    | <Namensraum\><Beschreibung\>                     | `ZABAP`                        |
| Klasse                                   | <Namensraum\>CL\_<Komponente\>\_<Beschreibung\>  | `ZCL_ABAP_FLIGHT`              |
| Ausnahmenklasse                          | <Namensraum\>CX\_<Komponente\>\_<Beschreibung\>  | `ZCX_ABAP_INVALID_TYPE`        |
| Nachrichtenklasse                        | <Namensraum\>CM\_<Komponente\>\_<Beschreibung\>  | `ZCM_ABAP_FLIGHT`              |
| Schnittstelle                            | <Namensraum\>IF\_<Komponente\>\_<Beschreibung\>  | `ZIF_ABAP_PARTNER`             |
| Programm                                 | <Namensraum\><Komponente\>\_<Beschreibung\>      | `ZABAP_DEMO`                   |
| Domäne                                   | <Namensraum\><Komponente\>\_<Beschreibung\>      | `ZABAP_CHAR3`                  |
| Datenelement                             | <Namensraum\><Komponente\>\_<Beschreibung\>      | `ZABAP_CARRIER_ID`             |
| Strukturtyp                              | <Namensraum\><Komponente\>\_<Beschreibung\>      | `ZABAP_FLIGHT`                 |
| Tabellentyp                              | <Namensraum\><Komponente\>\_<Beschreibung\>      | `ZABAP_FLIGHTS`                |
| Datenbanktabelle (Anwendungstabelle)     | <Namensraum\><Komponente\>\_<Beschreibung\>\_A   | `ZABAP_FLIGHT_A`               |
| Datenbanktabelle (Entwurfstabelle)       | <Namensraum\><Komponente\>\_<Beschreibung\>\_D   | `ZABAP_FLIGHT_D`               |
| Message Class                            | <Namensraum\><Komponente\>\_<Beschreibung\>      | `ZABAP_FLIGHT`                 |
| ABAP CDS: Basic Interface View           | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>   | `ZI_ABAP_Flight`               |
| ABAP CDS: Restricted Interface View      | <Namensraum\>R\_<Komponente\>\_<Beschreibung\>   | `ZR_ABAP_Flight`               |
| ABAP CDS: Composite Interface View       | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>   | `ZI_ABAP_FlightWithConnection` |
| ABAP CDS: Transactional Interface View   | <Namensraum\>I\_<Komponente\>\_<Beschreibung\>TP | `ZI_ABAP_FlightTP`             |
| ABAP CDS: Consumption View               | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>   | `ZC_ABAP_Flight`               |
| ABAP CDS: Projection View                | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>   | `ZC_ABAP_Flight`               |
| ABAP CDS: Transactional Consumption View | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>TP | `ZC_ABAP_FlightTP`             |
| ABAP CDS: Wertehilfe                     | <Namensraum\>C\_<Komponente\>\_<Beschreibung\>VH | `ZC_ABAP_AirportVH`            |
| ABAP CDS: Abstract View                  | <Namensraum\>A\_<Komponente\>\_<Beschreibung\>   | `ZA_ABAP_Flight`               |
| ABAP CDS: Extension View                 | <Namensraum\>E\_<Komponente\>\_<Beschreibung\>   | `ZE_ABAP_Flight`               |
| ABAP CDS: Access Control                 | <Name der CDS-View\>                             | `ZC_ABAP_FLIGHT`               |
| ABAP CDS: Metadata Extension             | <Name der CDS-View\>                             | `ZC_ABAP_FLIGHT`               |

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
