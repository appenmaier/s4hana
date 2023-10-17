---
title: ABAP Development Tools
description: ""
sidebar_position: 10
tags: []
---

Die _ABAP Development Tools_ (ADT) ist eine auf Eclipse basierende Entwicklungsumgebung, die für die Anwendungsentwicklung in SAP S/4HANA verwendet wird.

## ABAP Development Tools installieren

- Option 1: [ABAP Development Tools](https://adt.only.sap/) (nur SAP intern)
- Option 2: [SAP Development Tools - ABAP](https://tools.hana.ondemand.com/#abap)

## abapGit installieren

- ABAP Development Tools starten
- Funktion `Help - Install new Software... - Install new Software` ausführen
- Folgende Informationen eingeben und `Enter` betätigen
  - Work with: `https://eclipse.abapgit.org/updatesite/`
- Option `abapGit for ABAP Devleopment Tools (ADT)` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next >` betätigen
- Drucktaste `Select All` betätigen
- Drucktaste `Trust Selected` betätigen
- Drucktaste `Restart Now` betätigen

## ABAP Cleaner installieren

- ABAP Development Tools starten
- Funktion `Help - Install new Software... - Install new Software` ausführen
- Folgende Informationen eingeben und `Enter` betätigen
  - Work with: `https://sap.github.io/abap-cleaner/updatesite/`
- Option `ABAP Cleaner for ABAP Devleopment Tools (ADT)` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next >` betätigen
- Drucktaste `Select All` betätigen
- Drucktaste `Trust Selected` betätigen
- Drucktaste `Restart Now` betätigen

## ABAP Cloud Project erstellen

- [SAP BTP Trial Account anlegen](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
- [SAP BTP ABAP Environment Trial User erstellen](https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html)
- Rechtsklick auf das erstellte ABAP-Cloud-Projekt
- Option `New - ABAP Package` auswählen
- Folgende Informationen eingeben, Option `Add to favorite packages` auswählen und Drucktaste `Next >` betätigen
  - Name: `Z` + `Deine Kennung (z.B. Matrikelnummer)`
  - Description: `Eine beliebige Beschreibung (z.B. Dein Name)`
  - Superpackage: `ZLOCAL`
- Option `Create a new request` auswählen, folgende Informationen eingeben und Drucktaste `Finish` betätigen
  - Request Description: `Eine beliebige Beschreibung (z.B. Dein Name)`

## Hilfreiche Tastenkürzel

- _Ctrl+1_: Quick Fix
- _Ctrl+4_: Clean Up With Automated ABAP Cleaner
- _Ctrl+7_: Toggle Comment
- _Ctrl+F3_: Activate
- _Ctrl+S_: Save
- _Ctrl+Shift+A_: Open ABAP Development Object
- _Ctrl+Space_: Content Assist
- _F1_: Show ABAP Language Help
- _F2_: Show Element Info
- _F8_: Run As ABAP Application
- _Shift+F1_: Format

## Hilfreiche Einstellungen (Window - Preferences)

- _General - Editors - Text Editors - Spelling - Enable spell checking_: Deaktivieren
- _General - Keys - Show key binding when command is invoked - Through keyboard_: Aktivieren
- _General - Keys - Show key binding when command is invoked - Through mouse click_: Aktivieren

## Hilfreiche Views (Window - Show View - Other...)

- ABAP - ABAP Element Info
- ABAP - Feed Reader
- General - Problems
- General - Properties
- General - Outline
