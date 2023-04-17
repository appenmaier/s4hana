---
title: ABAP Environment einrichten (SAP VT und DHBW RV)
description: ''
sidebar_position: 40
tags: []
---

## ABAP Development Tools installieren
- ABAP Development Tools herunterladen (https://adt.only.sap/)
- ZIP-Datei entpacken
- Programm `ABAPDevelopmentTools.exe` ausführen

## abapGit installieren
- Eclipse starten
- Funktion `Help - Install new Software... - Install new Software` ausführen 
- Folgende Informationen eingeben und `Enter` betätigen
    - Work with: `https://eclipse.abapgit.org/updatesite/`
- Option `abapGit for ABAP Devleopment Tools (ADT)` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next >` betätigen
- Drucktaste `Select All` betätigen
- Drucktaste `Trust Selected` betätigen
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
