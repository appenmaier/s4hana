---
title: OData-Service veröffentlichen
description: ''
sidebar_position: 10
---

- ABAP Development Tools starten
- Consumption-View um Annotation `OData.publish: true` ergänzen und aktivieren
- Drucktaste **Open SAP GUI** betätigen
- Drucktaste **OK** betätigen
- Transaktion **/n/IWFND/MAINT_SERVICE** ausführen
- Drucktaste **Add Service** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Get Services** betätigen
    - System Alias: **LOCAL**
    - Technical Service Name: `Der Name der CDS-View` + **_CDS** (z.B. ZC_00_ConnectionTP_CDS)
- Den erstellten Service markieren und Drucktaste **Add Selected Services** betätigen
- Nachfolgende Informationen eingeben und Drucktaste **Continue** betätigen
    - Package Assignment: `Dein Entwicklungspaket` (z.B. Z00)
- Drucktaste **Own Requests** betätigen
- Transportauftrag markieren und Drucktaste **Choose** betätigen
- Drucktaste **Continue** betätigen
- Drucktaste **Continue** betätigen
- Drucktaste **Continue** betätigen