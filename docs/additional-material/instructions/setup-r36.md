---
title: System R36 einrichten
description: ''
sidebar_position: 30
tags: []
---

## ABAP Development Tools installieren
[SAP Development Tools - ABAP](https://tools.hana.ondemand.com/#abap)

## ABAP-Projekt anlegen
- Eclipse starten
- Willkommensbildschirm schließen
- Drucktaste `Open Perspective` betätigen
- Perspektive `ABAP` auswählen und Drucktaste `OK` betätigen
- Drucktaste `New` betätigen und Option `ABAP Project` auswählen
- Drucktaste `new system connection` betätigen
- Folgende Informationen eingeben, Option `Activate Secure Network Communication (SNC)` deaktivieren und Drucktaste `Next >` betätigen
    - System ID: `R36`
    - Connection Type: `Group Selection`
    - Message Server: `R36z` 
    - Group: `UCC_Logon`
    - SAProuter String: `/H/141.44.38.2/S/3299`
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

:::note Hinweis
Gegebenenfalls muss ein [Visual C 2013 Update](https://support.microsoft.com/de-de/topic/update-for-visual-c-2013-redistributable-package-d8ccd6a5-4e26-c290-517b-8da6cfdf4f10) installiert werden.
:::

:::note Hinweis
Das SAP GUI kann [hier](https://jlubox.uni-giessen.de/dl/fi5KGHFPo61eE6jv21cMYKcc/SAP-GUI.7.60C4-JLU) heruntergeladen werden.
:::
