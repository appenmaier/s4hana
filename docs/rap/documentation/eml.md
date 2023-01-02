---
title: Entity Manipulation Language (EML)
description: ''
sidebar_position: 50
tags: []
---

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
