---
title: System S4D einrichten
description: ""
sidebar_position: 20
tags: []
---

## Schulungssystem einrichten

- [SAP Learning Class](https://class.learning.sap.com/) öffnen
- Folgende Informationen eingeben und Drucktaste Logon betätigen
  - System: `Das Schulungssystem` (z.B. ST-UT44S-016)
  - Username: `Dein Schulungssystem Benutzername` (z.B. A71674013-000)
  - Password: `Dein Schulungssystem Passwort` (z.B. fDE_S4D400_22)
- WTS-Initialisierung starten (_Start - Initialize Environment - Initialize ADM-WTS_)
- Drucktaste `OK` betätigen
- Drucktaste `OK` betätigen

## ABAP-Projekt anlegen

- SAP Logon starten (_Start - SAP Applications - SAP Logon_)
- Eclipse starten (_Start - SAP Applications - Eclipse_)
- Willkommensbildschirm schließen
- Drucktaste `Open Perspective` betätigen
- Perspektive `ABAP` auswählen und Drucktaste `OK` betätigen
- Drucktaste `New` betätigen und Option `ABAP Project` auswählen
- Verbindung `S4D` auswählen und Drucktaste `Next >` betätigen
- Drucktaste `Next >` betätigen
- Folgende Informationen eingeben und Drucktaste Finish betätigen
  - Client: `100`
  - User: `Dein S4D Benutzername` (z.B. TRAIN-00)
  - Password: `Dein S4D Passwort` (z.B. Welcome2023)
  - Language: `EN`

## ABAP-Entwicklungspaket anlegen

- Rechtsklick auf das erstellte ABAP Projekt
- Option `New - ABAP Package` auswählen
- Folgende Informationen eingeben und Drucktaste `Next >` betätigen
  - Name: `Z` + `Deine Gruppennummer` (z.B. Z00)
  - Description: `Dein Name` (z.B. Max Müller)
- Folgende Informationen eingeben und Drucktaste `Next >` betätigen
  - Software Component: `HOME`
  - Transport Layer: `ZS4D`
- Drucktaste `Finish` betätigen
