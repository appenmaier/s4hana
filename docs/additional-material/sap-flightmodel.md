---
title: Das SAP Flugdatenmodell
description: ""
sidebar_position: 10
tags: []
---

In offiziellen SAP-Schulungen und ABAP-Büchern wird häufig ein Demo-Datenmodell, das sogenannte SAP Flugdatenmodel, verwendet. Man unterscheidet dabei zwischen dem klassischen und dem neuen SAP Flugdatenmodell.

## Das klassische SAP Flugdatenmodell

Das klassische SAP Flugdatenmodell wird standardmäßig mit jedem SAP ERP-System ausgeliefert. Zum Flugdatenmodell gehört das ABAP Programm `SAPBC_DATA_GENERATOR`, mit welchem die Datenbanktabellen des Flugdatenmodells befüllt werden können.

![image](https://user-images.githubusercontent.com/47243617/210216059-0c9f78e9-3231-418a-b83a-7ca01c6f1608.png)

:::note Hinweis
Alle Datenbanktabellen und Datentypen des Flugdatenmodells liegen im Paket `SAPBC_DATAMODEL`.
:::

## Das neue SAP Flugdatenmodell

Da das klassische SAP Flugdatenmodell einige Unstimmigkeiten im Datenmodell enthält, wurde für RAP ein neues Datenmodell entwickelt, das sogenannte _[ABAP Reference Flight Scenario](https://help.sap.com/docs/ABAP_PLATFORM_2021/fc4c71aa50014fd1b43721701471913d/a9d7c7c140a0408dbc5966c52d156b49.html?locale=en-US)_. Dieses muss vor der Verwendung mit Hilfe von [abapGit](https://abapgit.org/) importiert werden und enthält unter Anderem den Fiori Elements Travel-Demo Generator (Klasse `/DMO/CL_FE_TRAVEL_GENERATOR`).
