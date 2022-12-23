---
title: RESTful ABAP Programmiermodell (RAP)
description: ''
sidebar_position: 10
---

:::danger Hinweis
Work in Progress
:::

## Architektur
![image](https://user-images.githubusercontent.com/47243617/202891827-c294a4bd-efe5-464c-bc30-43de79816a62.png)

## Laufzeitartefakte
![image](https://user-images.githubusercontent.com/47243617/202892502-6dbfc72d-928c-4dd7-a717-a88a0201e4bb.png)

## Anwendungsszenario
![image](https://user-images.githubusercontent.com/47243617/202892529-9e9f0ca1-6830-4cd9-9568-f735de72b9f3.png)

## UI-Annotationen: List Report
![image](https://user-images.githubusercontent.com/47243617/202893358-7a914f1c-78b6-47c9-b8aa-7c9f574a6ad0.png)

## UI-Annotationen: Object Page
![image](https://user-images.githubusercontent.com/47243617/202980258-4e2c817d-b86d-44d8-a3e2-f443461755fd.png)

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
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| `FAILED`   | `RESPONSE FOR FAILED <Wurzelentität>`   | Alle Entitäten, bei denen die EML-Anweisung fehlschlug |
| `REPORTED` | `RESPONSE FOR REPORTED <Wurzelentität>` | Alle Nachrichten                                       |
| `MAPPED`   | `RESPONSE FOR MAPPED <Wurzelentität>`   | Alle temporären Schlüssel                              |

## Aufbau der abgeleiteten Datentypen
| Abgeleitete Datentypen                  | Aufbau der abgeleiteten Datentypen                                                                              |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `FOR READ IMPORT <Entität>`             | ![image](https://user-images.githubusercontent.com/47243617/202980604-18edce03-d570-46f2-8685-f07c4e7f4848.png) |
| `FOR READ RESULT <Entität>`             | ![image](https://user-images.githubusercontent.com/47243617/202980589-4365ce22-3f87-490a-959c-f4354695ecbd.png) |
| `FOR CREATE <Entität>`                  | ![image](https://user-images.githubusercontent.com/47243617/202980642-77a95760-4750-4928-a706-f88b63aae06c.png) |
| `FOR UPDATE <Entität>`                  | ![image](https://user-images.githubusercontent.com/47243617/202980678-32034d53-119a-4652-a680-0b2491621017.png) |
| `FOR DELETE <Entität>`                  | ![image](https://user-images.githubusercontent.com/47243617/202980707-30e9a89b-1f19-4b54-a451-4e952b4dce7f.png) |
| `RESPONSE FOR FAILED <Wurzelentität>`   | ![image](https://user-images.githubusercontent.com/47243617/202980427-cee0fcae-3575-4978-bc59-427dc7c9843f.png) |
| `RESPONSE FOR REPORTED <Wurzelentität>` | ![image](https://user-images.githubusercontent.com/47243617/202980405-b85e2dcb-040e-4eec-a89a-c05ad50a1c40.png) |
| `RESPONSE FOR MAPPED <Wurzelentität>`   | ![image](https://user-images.githubusercontent.com/47243617/202980435-6594bfde-bb28-4e28-9721-8a7cf593e36d.png) |
