---
title: SAP Namensrichtlinien
description: ''
sidebar_position: 40
tags: []
---

Bei der Entwicklung im SAP-Umfeld gilt es, bestimmte Qualitätsstandards einzuhalten. Darunter zählen unter anderem auch die Namensrichtlinien für Entwicklungsobjekte und Datenobjekte.   

:::note Hinweis
Weitere Programmierrichtlinien können der [ABAP Dokumentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm) entnommen werden.
:::

## Namensrichtlinien für Entwicklungsobjekte
| Typ                                      | Bezeichner                                      | Beispiel                      |
| ---------------------------------------- | ----------------------------------------------- | ------------------------------ |
| Paket                                    | <Namensraum\><Beschreibung\>                    | `ZABAP`                        |
| Klasse                                   | <Namensraum\>CL\_<Komponente\>\_<Beschreibung\> | `ZCL_ABAP_FLIGHT`              |
| Ausnahmenklasse                          | <Namensraum\>CX\_<Komponente\>\_<Beschreibung\> | `ZCX_ABAP_INVALID_TYPE`        |
| Nachrichtenklasse                        | <Namensraum\>CM\_<Komponente\>\_<Beschreibung\> | `ZCM_ABAP_FLIGHT`              |
| Schnittstelle                            | <Namesnraum\>IF\_<Komponente\>\_<Beschreibung\> | `ZIF_ABAP_PARTNER`             |
| Programm                                 | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAP_DEMO`                   |
| Funktionsgruppe                          | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAP_FLIGHT`                 |
| Funktionsbaustein                        | <Namensraum\>\_<Komponente\>\_<Beschreibung\>   | `Z_ABAP_GET_FLIGHTS`           |
| Domäne                                   | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAP_CHAR3`                  |
| Datenelement                             | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAP_CARRIER_ID`             |
| Strukturtyp                              | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAP_FLIGHT`                 |
| Tabellentyp                              | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAP_FLIGHTS`                |
| Datenbanktabelle                         | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAPFLIGHT`                  |
| Datenbankview                            | <Namensraum\><Komponente\>\_<Beschreibung\>     | `ZABAPVFLIGHT`                 |
| ABAP CDS: Basic Interface-View           | <Namensraum\>I_<Komponente\>\_<Beschreibung\>   | `ZI_ABAP_Flight`               |
| ABAP CDS: Composite Interface-View       | <Namensraum\>I_<Komponente\>\_<Beschreibung\>   | `ZI_ABAP_FlightWithConnection` |
| ABAP CDS: Transactional Interface-View   | <Namensraum\>I_<Komponente\>\_<Beschreibung\>TP | `ZI_ABAP_FlightTP`             |
| ABAP CDS: Consumption-View               | <Namensraum\>C_<Komponente\>\_<Beschreibung\>   | `ZC_ABAP_Flight`               |
| ABAP CDS: Transactional Consumption-View | <Namensraum\>C_<Komponente\>\_<Beschreibung\>TP | `ZC_ABAP_FlightTP`             | 
| ABAP CDS: Value Help                     | <Namensraum\>C_<Komponente\>\_<Beschreibung\>VH | `ZC_ABAP_AirportVH`            |
| ABAP CDS: Extension View                 | <Namensraum\>E_<Komponente\>\_<Beschreibung\>   | `ZE_ABAP_Flight`               |
| ABAP CDS: Access Control                 | <Name der CDS-View\>                            | `ZI_ABAP_FLIGHT`               |
| ABAP CDS: Metadaten-Extension            | <Name der CDS-View\>                            | `ZC_ABAP_FLIGHT`               |

| Namensraum        | Beispiel   |
| ----------------- | ---------- |
| Prefix-Namensraum | /DMO/      |
| Kunden-Namensraum | Z          |
| SAP-Namensraum    |FLIGHTMODEL |

## Namensrichtlinien für Datenobjekte
| Prefix                  | Beispiel                |
| ----------------------- | ----------------------- |
| G: globale Datenobjekte | `g_number_of_vehicles`  |
| CO: Konstanten          | `co_pi`                 |
| I: Import-Parameter     | `i_carrier_id`          |
| E: Export-Parameter     | `e_carriers`            |
| R: Rückgabewert         | `r_carrier`             |
| P: Eingabe-Parameter    | `p_carrid`              |
| TY: Datentyp            | `ty_carrier`            |