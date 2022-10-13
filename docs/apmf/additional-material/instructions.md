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
    - Technical Service Name _Name der CDS-View_**_CDS** (z.B. ZC_00_ConnectionTP_CDS)
- Service _Name der CDS-View_**_CDS** (z.B. ZC_00_ConnectionTP_CDS) markieren und Drucktaste **Add Selected Services** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Continue** betätigen
    - Package Assignment: _Entwicklungspaket_ (z.B. Z00)
- Drucktaste **Own Requests** betätigen
- Transportauftrag markieren und Drucktaste **Choose** betätigen
- Drucktaste **Continue** betätigen
- Drucktaste **Continue** betätigen
- Drucktaste **Continue** betätigen

## SAP Fiori Elements App erstellen
- SAP BAS starten
- Development Space _**Development Space**_ (z.B. dev) öffnen
- Drucktaste **Start from template** betätigen
- Option **SAP Fiori application** auswählen und Drucktaste **Start >** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Application Type: **SAP Fiori Elements**
    - Option: **List Report Object Page**
- Nachfolgende Informationen eingeben und Drucktaste **Login** betätigen
    - Data Scource: **Connect to a System**
    - System: _**System**_ (z.B. S4D)
    - Service username: _**Username**_ (z.B. TRAIN-00)
    - Service password: _**Password**_ (z.B. Welcome)
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Service: _**Name der CDS-View**_**_CDS** (z.B. ZC_00_ConnectionTP_CDS)
- Nachfolgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Main entity: _**Main Entity**_ (z.B. ZC_00_ConnectionTP)
    - Navigation entity: _**Navigation Entity**_ (z.B. ZC_00_FlightTP)
- Nachfolgende Informationen eingeben und Drucktaste **Finish** betätigen
    - Module name: _**Modul Name**_ (z.B. connection)
    - Application Titel: _**Application Title**_ (z.B. Connection)
 
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
