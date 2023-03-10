---
title: ABAP Environment einrichten (SAP VT und DHBW RV)
description: ''
sidebar_position: 40
tags: []
---

## ABAP Development Tools installieren
- Eclipse starten
- Funktion `Help - Install new Software... - Install new Software` ausführen 
- Folgende Informationen eingeben und `Enter` betätigen
    - Work with: `https://tools.hana.ondemand.com/latest`
- Option `ABAP Development Tools` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next >` betätigen
- Option `I accept the terms of the license agreements` auswählen und Drucktaste `Finish` betätigen
- Drucktaste `Restart Now` betätigen

:::danger Hinweis
Die [Voraussetzungen für die Installation der ABAP Development Tools](https://tools.hana.ondemand.com/#abap) müssen beachtet werden. So muss z.B. gegebenenfalls ein [Visual C 2013 Update](https://support.microsoft.com/de-de/topic/update-for-visual-c-2013-redistributable-package-d8ccd6a5-4e26-c290-517b-8da6cfdf4f10) installiert werden.
:::

## abapGit installieren
- Eclipse starten
- Funktion `Help - Install new Software... - Install new Software` ausführen 
- Folgende Informationen eingeben und `Enter` betätigen
    - Work with: `https://eclipse.abapgit.org/updatesite/`
- Option `abapGit for ABAP Devleopment Tools (ADT)` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next >` betätigen
- TODO: Select All - Trust selected
- Drucktaste `Restart Now` betätigen

## ABAP-Cloud-Projekt anlegen
- [SAP BTP Trial Account anlegen](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
- [SAP BTP ABAP Environment Trial User erstellen](https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html)

## ABAP-Entwicklungspaket anlegen
- Rechtsklick auf das erstellte ABAP-Cloud-Projekt
- Option `New - ABAP Package` auswählen
- Folgende Informationen eingeben, Option `Add to favorite packages` auswählen und Drucktaste `Next >` betätigen
    - Name: `Z` + `Deine Kennung (z.B. Matrikelnummer)`
    - Description: `Dein Name`
    - Superpackage: `ZLOCAL`
- Option `Create a new request` auswählen, folgende Informationen eingeben und Drucktaste `Finish` betätigen
    - Request Description: `Dein Name`
