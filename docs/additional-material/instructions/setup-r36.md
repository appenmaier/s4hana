---
title: Vorlesungs-System R36 einrichten
description: ''
sidebar_position: 30
tags: []
---

## ABAP Development Tools installieren
- JDK herunterladen und installieren
- Eclipse herunterladen, installieren und starten
- Funktion `Help - Install new Software... - Install new Software` ausführen 
- Folgende Informationen eingeben und `Enter` betätigen
    - Work with: `https://tools.hana.ondemand.com/latest`
- Option `ABAP Development Tools` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next ` betätigen
- Option `I accept the terms of the license agreements` auswählen und Drucktaste `Finish` betätigen
- Drucktaste `Restart Now` betätigen

## ABAP-Projekt anlegen
- Eclipse starten
- Willkommensbildschirm schließen
- Drucktaste `Open Perspective` betätigen
- Perspektive `ABAP` auswählen und Drucktaste `OK` betätigen
- Drucktaste `New` betätigen und Option `ABAP Project` auswählen
- Verbindung `R36` auswählen und Drucktaste `Next >` betätigen
- Folgende Informationen eingeben und Drucktaste `Next >` betätigen
    - Message Server: `R36z` 
- Folgende Informationen eingeben und Drucktaste `Finish` betätigen
    - Client: `233`
    - User: `DEVTG-` + `Deine Benutzernummer`
    - Password: `tlestart`
    - Language: `EN`
 
## ABAP-Entwicklungspaket anlegen
- Rechtsklick auf das erstellte ABAP-Projekt
- Option `New - ABAP Package` auswählen
- Folgende Informationen eingeben und Drucktaste `Next >` betätigen
    - Name: `ZTG` + `Deine Benutzernummer`
    - Description: `Dein Name`
- Folgende Informationen eingeben und Drucktaste `Next >` betätigen
    - Software Component: `HOME`
    - Transport Layer: `ZR36`
- Folgende Informationen eingeben und Drucktaste `Finish` betätigen
    - Request Description: `Dein Name` 

![image](https://user-images.githubusercontent.com/47243617/209351109-74022140-43f4-4ccb-afe7-5a9b743b4a53.png)

:::note Hinweis
Gegebenenfalls muss ein [Visual C 2013 Update](https://support.microsoft.com/de-de/topic/update-for-visual-c-2013-redistributable-package-d8ccd6a5-4e26-c290-517b-8da6cfdf4f10) installiert werden.
:::
