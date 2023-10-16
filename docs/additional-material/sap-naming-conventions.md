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

| Typ                                      | Bezeichner                                         | Beispiel                       |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------ |
| Paket                                    | <Namensraum\><Beschreibung\>                       | `ZABAP`                        |
| Klasse                                   | <Namensraum\>CL\_<Komponente\>\_<Beschreibung\>    | `ZCL_ABAP_FLIGHT`              |
| Ausnahmenklasse                          | <Namensraum\>CX\_<Komponente\>\_<Beschreibung\>    | `ZCX_ABAP_INVALID_TYPE`        |
| Nachrichtenklasse                        | <Namensraum\>CM\_<Komponente\>\_<Beschreibung\>    | `ZCM_ABAP_FLIGHT`              |
| Schnittstelle                            | <Namensraum\>IF\_<Komponente\>\_<Beschreibung\>    | `ZIF_ABAP_PARTNER`             |
| Programm                                 | <Namensraum\><Komponente\>\_<Beschreibung\>        | `ZABAP_DEMO`                   |
| Domäne                                   | <Namensraum\><Komponente\>\_<Beschreibung\>        | `ZABAP_CHAR3`                  |
| Datenelement                             | <Namensraum\><Komponente\>\_<Beschreibung\>        | `ZABAP_CARRIER_ID`             |
| Strukturtyp                              | <Namensraum\><Komponente\>\_<Beschreibung\>        | `ZABAP_FLIGHT`                 |
| Tabellentyp                              | <Namensraum\><Komponente\>\_<Beschreibung\>        | `ZABAP_FLIGHTS`                |
| Datenbanktabelle (Anwendungstabelle)     | <Namensraum\><Komponente\>\A<Beschreibung\>        | `ZABAPAFLIGHT`                 |
| Datenbanktabelle (Entwurfstabelle)       | <Namensraum\><Komponente\>\D<Beschreibung\>        | `ZABAPDFLIGHT`                 |
| Message Class                            | <Namensraum\><Komponente\><Beschreibung\>          | `ZABAPFLIGHT`                  |
| ABAP CDS: Basic Interface View           | <Namensraum\>\_<Komponente\>I\_\_<Beschreibung\>   | `ZABAP_I_Flight`               |
| ABAP CDS: Restricted Interface View      | <Namensraum\>\_<Komponente\>R\_\_<Beschreibung\>   | `ZABAP_R_Flight`               |
| ABAP CDS: Composite Interface View       | <Namensraum\>\_<Komponente\>I\_\_<Beschreibung\>   | `ZABAP_I_FlightWithConnection` |
| ABAP CDS: Transactional Interface View   | <Namensraum\>\_<Komponente\>I\_\_<Beschreibung\>TP | `ZABAP_I_FlightTP`             |
| ABAP CDS: Consumption View               | <Namensraum\>\_<Komponente\>C\_<Beschreibung\>     | `ZABAP_C_Flight`               |
| ABAP CDS: Projection View                | <Namensraum\>\_<Komponente\>C\_<Beschreibung\>     | `ZABAP_C_Flight`               |
| ABAP CDS: Transactional Consumption View | <Namensraum\>\_<Komponente\>C\_<Beschreibung\>TP   | `ZABAP_C_FlightTP`             |
| ABAP CDS: Wertehilfe                     | <Namensraum\>\_<Komponente\>C\_<Beschreibung\>VH   | `ZABAP_C_AirportVH`            |
| ABAP CDS: Abstract View                  | <Namensraum\>A\_<Komponente\>\_<Beschreibung\>     | `ZABAP_A_Flight`               |
| ABAP CDS: Extension View                 | <Namensraum\>E\_<Komponente\>\_<Beschreibung\>     | `ZABAP_E_Flight`               |
| ABAP CDS: Access Control                 | <Name der CDS-View\>                               | `ZABAP_C_FLIGHT`               |
| ABAP CDS: Metadata Extension             | <Name der CDS-View\>                               | `ZABAP_C_FLIGHT`               |

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
