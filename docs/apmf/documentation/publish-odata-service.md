---
title: OData-Service veröffentlichen
description: ''
sidebar_position: 20
---

- ABAP Development Tools starten
- Consumption-View um Annotation `OData.publish: true` ergänzen und aktivieren
- Drucktaste `Open SAP GUI` betätigen

![image](https://user-images.githubusercontent.com/47243617/195563654-0b64434a-c97a-4e75-8980-a908312c580a.png)
- Drucktaste `OK` betätigen
- Transaktion `n/IWFND/MAINT_SERVICE` ausführen

![image](https://user-images.githubusercontent.com/47243617/195563787-980ca94f-2884-4123-b48e-d2335ba90637.png)
- Drucktaste `Add Service` betätigen

![image](https://user-images.githubusercontent.com/47243617/195563829-18c52f71-3b15-41d3-ad9b-2c55b0eb90c1.png)
- Nachfolgende Informationen eingeben und Drucktaste `Get Services` betätigen
    - System Alias: `LOCAL`
    - Technical Service Name: `Der Name der CDS-View` + `_CDS` (z.B. ZC_00_ConnectionTP_CDS)

![image](https://user-images.githubusercontent.com/47243617/195563900-e1736f2f-a931-4712-bfac-af4cee980dd6.png)
- Den erstellten Service markieren und Drucktaste `Add Selected Services` betätigen

![image](https://user-images.githubusercontent.com/47243617/195563937-2dcbc6f8-4006-4bc5-8ee4-1b708c39aca9.png)
- Nachfolgende Informationen eingeben und Drucktaste `Continue` betätigen
    - Package Assignment: `Dein Entwicklungspaket` (z.B. Z00)

![image](https://user-images.githubusercontent.com/47243617/195563984-4c08d2f1-7182-4fd0-a9a8-4194e83d8af4.png)
- Drucktaste `Own Requests` betätigen
- Transportauftrag markieren und Drucktaste `Choose` betätigen
- Drucktaste `Continue` betätigen
- Drucktaste `Continue` betätigen
- Drucktaste `Continue` betätigen
