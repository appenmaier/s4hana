---
title: Anleitungen
description: ""
sidebar_position: 30
---

## OData-Service veröffentlichen
- ABAP Development Tools starten
- Consumption-View um Annotation `OData.publish: true` ergänzen und aktivieren
- Drucktaste **Open SAP GUI** betätigen
- Drucktaste **OK** betätigen
- Transaktion **/n/IWFND/MAINT_SERVICE** ausführen
- Drucktaste **Add Service** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Get Services** betätigen
    - System Alias: **LOCAL**
    - Technical Service Name: `Der Name der CDS-View`**_CDS** (z.B. ZC_00_ConnectionTP_CDS)
- Den erstellten Service markieren und Drucktaste **Add Selected Services** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Continue** betätigen
    - Package Assignment: `Dein Entwicklungspaket` (z.B. Z00)
- Drucktaste **Own Requests** betätigen
- Transportauftrag markieren und Drucktaste **Choose** betätigen
- Drucktaste **Continue** betätigen
- Drucktaste **Continue** betätigen
- Drucktaste **Continue** betätigen

## SAP Fiori Elements App erstellen
- SAP BAS starten
- Den erstellten Development Space öffnen
- Drucktaste **Start from template** betätigen
- Option **SAP Fiori application** auswählen und Drucktaste **Start >** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Application Type: **SAP Fiori Elements**
    - Option: **List Report Object Page**
- Nachfolgende Informationen eingeben und Drucktaste **Login** betätigen
    - Data Scource: **Connect to a System**
    - System: `Das erstellte System` (z.B. S4D)
    - Service username: `Dein S4D Benutzername` (z.B. TRAIN-00)
    - Service password:`Dein S4D Passwort` (z.B. Welcome2022)
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Service: `Der Name der CDS-View`**_CDS** (z.B. ZC_00_ConnectionTP_CDS)
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Main entity: `Die Main Entity` (z.B. ZC_00_ConnectionTP)
    - Navigation entity: `Die Navigation Entity` (z.B. ZC_00_FlightTP)
- Nachfolgende Informationen eingeben und Drucktaste **Finish** betätigen
    - Module name: `Der Modul Name` (z.B. connection)
    - Application Titel: `Der Application Title` (z.B. Connection)
 
## Mapping View erstellen
- ABAP Development Tools starten
- Funktion **File - New - Other...** ausführen
- Option **Dictionary View** auswählen und Drucktaste **Finish** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Finish** betätigen
    - Package: _**Entwicklungspaket_** (z.B. Z00)
    - Name: _**Name der Mapping View_** (z.B. ZV00CONNECTION)
- Option **Database View** auswählen und Drucktaste **Continue** betätigen
- Nachfolgende Informationen eingeben und Reiter **View Fields** auswählen
    - Short Description: _**Kurzbezeichnung**_ (z.B. Mapping View: Connection)
    - Tables: _**Datenbanktabelle**_ (z.B. SPFLI)
- Drucktaste **Table fields** betätigen
- Alle relevanten Felder markieren und Drucktaste **Copy** betätigen
- In der Spalte **View field** alle relevanten Bezeichnungen anpassen und Reiter **Maint.Status** auswählen
- Option **read and change** auswählen und Drucktaste **Activate** betätigen
- Drucktaste **Save** betätigen
- Drucktaste **Own Requests** betätigen
- Transportauftrag markieren und Drucktaste **Choose** betätigen
- Drucktaste **Continue** betätigen
