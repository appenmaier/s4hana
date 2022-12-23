---
title: SAP Fiori Elements App erstellen
description: ''
sidebar_position: 20
---

- SAP BAS starten
- Den erstellten Development Space öffnen
- Drucktaste **Start from template** betätigen
- Option **SAP Fiori application** auswählen und Drucktaste **Start >** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Application Type: **SAP Fiori Elements**
    - Option: **List Report Object Page**
- Nachfolgende Informationen eingeben und Drucktaste **Login** betätigen
    - Data Scource: **Connect to a System**
    - System: `Die erstellte Systemverbindung` (z.B. S4D_100)
    - Service username: `Dein S4D Benutzername` (z.B. TRAIN-00)
    - Service password:`Dein S4D Passwort` (z.B. Welcome2022)
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Service: `Der Name der CDS-View` + **_CDS** (z.B. ZC_00_ConnectionTP_CDS)
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Main entity: `Die Wurzelknoten-Entität` (z.B. ZC_00_ConnectionTP)
    - Navigation entity: `Die Kindknoten-Entität` (z.B. ZC_00_FlightTP)
- Nachfolgende Informationen eingeben und Drucktaste **Finish** betätigen
    - Module name: `Der Modul Name` (z.B. connection)
    - Application Titel: `Der Anwendungsname` (z.B. Connection)
