---
title: R36 einrichten (DHBW)
description: ""
sidebar_position: 40
tags: []
---

## ABAP-Projekt anlegen

- [ABAP Development Tools](../adt.md) starten
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
