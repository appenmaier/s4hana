---
title: RESTful ABAP Programmiermodell (RAP)
description: ''
sidebar_position: 10
---

:::danger Hinweis
Work in Progress
:::

## Informationsquellen
- SAP Standardschulungen
    - [CLD400: Developing with SAP BTP, ABAP Environment](https://training.sap.com/course/cld400-developing-with-sap-business-technology-platform-btp---abap-environment-classroom-015-g-en/?)
    - [S4D437: Transactional Apps with the ABAP RESTful Application Programming Model](https://training.sap.com/course/s4d437-transactional-apps-with-the-abap-restful-application-programming-model-classroom-022-g-en/?)
-	openSAP Kurse
    - [Introduction to ABAP in the Cloud](https://open.sap.com/courses/abap1)
    - [Building Apps with the ABAP RESTful Application Programming Model](https://open.sap.com/courses/cp13)
-	SAP Developers Tutorials
    - [Develop a Fiori App Using the ABAP RESTful Application Programming Model (Managed Scenario)](https://developers.sap.com/group.abap-env-restful-managed.html)
    - [Create a Travel App with SAP Fiori Elements Based on OData V4 RAP Service](https://developers.sap.com/group.fiori-tools-odata-v4-travel.html)
    - [Use abapGit to Transfer Your On-Premise ABAP Source Code to the Cloud](https://developers.sap.com/tutorials/abap-environment-abapgit.html)
-	SAP Hilfeseiten
    - [ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_PLATFORM_2021/fc4c71aa50014fd1b43721701471913d/289477a81eec4d4e84c0302fb6835035.html?locale=en-US)
    - [ABAP Reference Flight Scenario](https://help.sap.com/docs/ABAP_PLATFORM_2021/fc4c71aa50014fd1b43721701471913d/a9d7c7c140a0408dbc5966c52d156b49.html?locale=en-US)
- Nachschlagewerk: [ABAP RESTful Application Programming Model](https://help.sap.com/doc/3750bcdf7b8045e18f1b759e6d2b000b/Cloud/en-US/ABAP_RESTful_Programming_Model_EN.pdf)
- Fiori Elements Travel-Demo Generator: `/DMO/CL_FE_TRAVEL_GENERATOR`
- Rheinwerk-Buch: [ABAP RESTful Programming Model – ABAP Development for SAP S/4HANA](https://www.rheinwerk-verlag.de/abap-restful-application-programming-model-das-umfassende-handbuch/)

## Architektur
![image](https://user-images.githubusercontent.com/47243617/202891827-c294a4bd-efe5-464c-bc30-43de79816a62.png)

## Laufzeitartefakte
![image](https://user-images.githubusercontent.com/47243617/202892502-6dbfc72d-928c-4dd7-a717-a88a0201e4bb.png)

## Anwendungsszenario
![image](https://user-images.githubusercontent.com/47243617/202892529-9e9f0ca1-6830-4cd9-9568-f735de72b9f3.png)

## UI-Annotationen: List Report
![image](https://user-images.githubusercontent.com/47243617/202893358-7a914f1c-78b6-47c9-b8aa-7c9f574a6ad0.png)

## UI-Annotationen: Object Page

## EML-Anweisungen
| Operation      | Anweisung                         | Abgeleiteter Datentyp                   |
| -------------- | --------------------------------- | --------------------------------------- |
| Read           | `READ ENTITY <Entität>`           | `FOR READ IMPORT <Entität>`             |
| Read           | `READ ENTITY <Entität>`           | `FOR READ RESULT <Entität>`             |
| Read           | `READ ENTITY <Entität>`           | `FOR READ LINK <Entität>`               |
| Create         | `MODIFY ENTITY <Entität> CREATE`  | `FOR CREATE <Entität>`                  |
| Update         | `MODIFY ENTITY <Entität> UPDATE`  | `FOR UPDATE <Entität>`                  |
| Delete         | `MODIFY ENTITY <Entität> DELETE`  | `FOR DELETE <Entität>`                  |
| Execute Action | `MODIFY ENTITY <Entität> EXECUTE` | `FOR ACTION IMPORT <Entität>~<Action>`  |
| Execute Action | `MODIFY ENTITY <Entität> EXECUTE` | `FOR ACTION RESULT <Entität>~<Action>`  |
| Execute Action | `MODIFY ENTITY <Entität> EXECUTE` | `FOR ACTION REQUEST <Entität>~<Action>` |

## Rückgabeoperanden
| Operand    | Abgeleiteter Datentyp                   | Beschreibung                                           |
| `FAILED`   | `RESPONSE FOR FAILED <Wurzelentität>`   | Alle Entitäten, bei denen die EML-Anweisung fehlschlug |
| `REPORTED` | `RESPONSE FOR REPORTED <Wurzelentität>` | Alle Nachrichten                                       |
| `MAPPED`   | `RESPONSE FOR MAPPED <Wurzelentität>`   | Alle temporären Schlüssel                              |

## Aufbau der abgeleiteten Datentypen
| Abgeleitete Datentypen                  | Aufbau der abgeleiteten Datentypen                                     |
| --------------------------------------- | ---------------------------------------------------------------------- |
| `FOR READ IMPORT <Entität>`             | Schlüsselfelder, Feldgruppe `%control`                                 |
| `FOR READ RESULT <Entität>`             | Schlüsselfelder, Datenfelder                                           |
| `FOR CREATE <Entität>`                  | Feldgruppe `%cid`, Schlüsselfelder, Datenfelder, Feldgruppe `%control` |
| `FOR UPDATE <Entität>`                  | Schlüsselfelder, Datenfelder, Feldgruppe `%control`                    |
| `FOR DELETE <Entität>`                  | Feldgruppe `%cid_ref`, Schlüsselfelder                                 |
| `RESPONSE FOR FAILED <Wurzelentität>`   | Entitäten                                                              |
| `RESPONSE FOR REPORTED <Wurzelentität>` | Entitäten, Feldgruppe `%others`                                        |
| `RESPONSE FOR MAPPED <Wurzelentität>`   | Entitäten                                                              |


## Inhalte der Feldgruppen
| Feldgruppe | Aufbau |
| %control   |        |
| %cid




