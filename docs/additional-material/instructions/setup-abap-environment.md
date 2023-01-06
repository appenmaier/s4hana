---
title: ABAP Environment einrichten (SAP VT und DHBW RV)
description: ''
sidebar_position: 100
tags: []
---

## ABAP Development Tools installieren
- JDK herunterladen und installieren
- Eclipse herunterladen, installieren und starten
- Funktion `Help - Install new Software... - Install new Software` ausführen 
- Folgende Informationen eingeben und `Enter` betätigen
    - Work with: `https://tools.hana.ondemand.com/latest`
- Option `ABAP Development Tools` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next >` betätigen
- Option `I accept the terms of the license agreements` auswählen und Drucktaste `Finish` betätigen
- Drucktaste `Restart Now` betätigen

## ABAP-Cloud-Projekt anlegen
- [SAP BTP Trial Account anlegen](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
- [SAP BTP ABAP Environment Trial User erstellen](https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html)

## ABAP-Entwicklungspaket anlegen
- Rechtsklick auf das erstellte ABAP-Cloud-Projekt
- Option `New - ABAP Package` auswählen
- Folgende Informationen eingeben, Option `Add to favorite packages` auswählen und Drucktaste `Next >` betätigen
    - Name: `Z` + `Deine Matrikelnummer`
    - Description: `Dein Name`
    - Superpackage: `ZLOCAL`
- Option `Create a new request` auswählen, folgende Informationen eingeben und Drucktaste `Finish` betätigen
    - Request Description: `Dein Name`
