---
title: ABAP Development Tools verwenden
description: ''
sidebar_position: 40
tags: []
---

## Hilfreiche Tastaturkürzel

| Küzel            | Funktion                                    |
| ---------------- | ------------------------------------------- |
| Ctrl + Space     | Vorschlagsliste anzeigen                    |
| Shift + F1       | Quellcode formatieren                       |
| Ctrl + F3        | Entwicklungsobjekt aktivieren               |
| F1               | ABAP-Hilfe aufrufen                         |
| F2               | Element-Informationen anzeigen              |
| F8               | Entwicklungsobjekt ausführen                |
| Ctrl + 6         | SAP GUI öffnen                              |
| Ctrl + 1         | Quick-Fix ausführen                         |
| Ctrl + 7         | Quellcode auskommentieren / entkommentieren |
| Ctrl + >         | Quellcode auskommentieren                   |
| Ctrl + Shift + > | Quellcode entkommentieren                   |
| Ctrl + +         | Quellcode-Schriftgröße erhöhen              |
| Ctrl + -         | Quellcode-Schriftgröße verringern           |

## Perspektiven
![image](https://user-images.githubusercontent.com/47243617/210175633-03ba8e4d-c54e-4b95-be14-64e947298c88.png)

:::note Hinweis
Perspektiven können über _Window - Perspective - Reset Perspective..._ auf den Ursprungszustand zurückgesetzt werden.
:::

## Hilfreiche Funktionen der ABAP-Perspektive
![image](https://user-images.githubusercontent.com/47243617/210175644-784b9acb-d350-41da-8488-1d3e7dd1cd90.png)

## Hilfreiche Funktionen der Debugging-Perspektive
![image](https://user-images.githubusercontent.com/47243617/210175654-23183af8-d9e9-47a2-a60b-cead922afa63.png)

## Quellcode-Formatierung einrichten
- Option `Window - Preferences - ABAP Development - Editors - Source Code Editors - ABAP Formatter` auswählen
- Systemverbindung auswählen und Drucktaste `OK` betätigen
- Folgende Informationen eingeben und Drucktaste `OK` betätigen:
    - Indent Lines: `Ja`
    - Upper/Lower Case Conversion: `Custom`
    - Keywords: `Upper Case`
    - Identifiers: `Lower Case`
- Drucktaste `Apply and Close` betätigen

## Hilfreiche Transaktionen

| Transaktion          | Bezeichnung                    |
| -------------------- | ------------------------------ |
| SU01                 | User Maintenance               |
| SM12                 | Enqueue Administration         |
| SE09                 | Transport Organizer            |
| SE91                 | Message Maintenance            |
| ST22                 | ABAP Runtime Errors            |
| PFCG                 | Role Maintenance               |
| /IWFND/MAINT_SERVICE | Activate and Maintain Services |
| /IWFND/GW_CLIENT     | SAP Gateway Client             |

:::note Hinweis
Das Ausführen einer Transaktion erfolgt in der SAP GUI. Um eine Transaktion im aktuellen Modus auszuführen, muss der Transaktion das Kürzel `/n`, für einen Modus das Kürzel `/o` vorangestellt werden.
:::
