---
title: Schulungssystem einrichten
description: ''
sidebar_position: 90
tags: []
---

## Schulungslandschaft einrichten
- Zu **https://class.learning.sap.com/** navigieren
- Folgende Informationen eingeben und Drucktaste **Logon** betätigen
    - System: `Das Schulungssystem` (z.B. ST-UT44S-016)
    - Username: `Dein Schulungssystem Benutzername` (z.B. A71674013-000)
    - Password: `Dein Schulungssystem Passwort` (z.B. fDE_S4D400_22)
- WTS-Initialisierung starten (**Start - Initialize Environment - Initialize ADM-WTS**)
- Drucktaste **OK** betätigen
- Drucktaste **OK** betätigen

## ABAP Development Tools einrichten
- SAP Logon starten (**Start - SAP Applications - SAP Logon**)
- Eclipse starten (**Start - SAP Applications - Eclipse**)
- Willkommensbildschirm schließen
- Drucktaste **Open Perspective** betätigen
- Perspektive **ABAP** auswählen und Drucktaste **OK** betätigen
- Drucktaste **New** betätigen und Option **ABAP Project** auswählen
- Verbindung **S4D** auswählen und Drucktaste **Next \>** betätigen
- Drucktaste **Next \>** betätigen
- Folgende Informationen eingeben und Drucktaste **Finish** betätigen
    - Client: **100**
    - User: `Dein S4D Benutzername` (z.B. TRAIN-00)
    - Password: `Dein S4D Passwort` (z.B. Welcome2022)
    - Language: **EN**

## ABAP-Entwicklungspaket anlegen
- Rechtsklick auf das erstellte ABAP Projekt
- Option **New - ABAP Package** auswählen
- Folgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Name: **Z** + `Deine Gruppennummer` (z.B. Z00)
    - Description: `Deine Name` (z.B. Max Müller)
- Folgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Software Component: **HOME**
    - Transport Layer: **ZS4D**
- Drucktaste **Finish** betätigen

## BAS einrichten (nur für UX400 und S4DEV)
- So noch nicht geschehen, einen Trial Account für die SAP BTP erstellen (_S4DEV - Col21 - Participant Handbook - Exercise 8_)
- So noch nicht geschehen, einen Dev Space für das Business Application Studio anlegen (_S4DEV - Col21 - Participant Handbook - Exercise 9_)
- Das Business Application Studio mit dem S4D verbinden (_S4DEV - Col21 - Participant Handbook - Exercise 10_)

:::danger Hinweis
Bei der Anmeldung am Cloud Connector (User: **Administrator**, Password: `Das Cloud Connector Passwort`) darauf achten, dass sich immer nur 2-3 Teilnehmer:innen gleichzeitig anmelden. Erscheint die Fehlermeldung **User authentication failed**, kurz warten und 
dann nochmals versuchen.
:::
