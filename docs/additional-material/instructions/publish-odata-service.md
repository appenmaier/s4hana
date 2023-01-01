---
title: OData Service veröffentlichen 
description: ''
sidebar_position: 50
tags: []
---

:::danger Hinweis
tbd
:::

- ABAP Development Tools starten
- Consumption-View um Annotation `OData.publish: true` ergänzen und aktivieren
- Drucktaste `Open SAP GUI` betätigen

![image](https://user-images.githubusercontent.com/47243617/210176077-750c79e6-864c-4783-8048-bee554a36187.png)
- Drucktaste `OK` betätigen
- Transaktion `n/IWFND/MAINT_SERVICE` ausführen

![image](https://user-images.githubusercontent.com/47243617/210176050-7aa80479-b5c8-41a6-826e-ea717c3fe645.png)
- Drucktaste `Add Service` betätigen

![image](https://user-images.githubusercontent.com/47243617/210176084-8918b7cc-b38f-4799-b2f3-22346ddeee1d.png)
- Nachfolgende Informationen eingeben und Drucktaste `Get Services` betätigen
    - System Alias: `LOCAL`
    - Technical Service Name: `Der Name der CDS-View` + `_CDS` (z.B. ZC_00_ConnectionTP_CDS)

![image](https://user-images.githubusercontent.com/47243617/210176293-6f2f48ca-883b-4f4f-ab2e-921cfe214a41.png)
- Den erstellten Service markieren und Drucktaste `Add Selected Services` betätigen

![image](https://user-images.githubusercontent.com/47243617/210176099-1de17b1d-10ba-463a-a9aa-44a0aeee61c1.png)
- Nachfolgende Informationen eingeben und Drucktaste `Continue` betätigen
    - Package Assignment: `Dein Entwicklungspaket` (z.B. Z00)

![image](https://user-images.githubusercontent.com/47243617/210176116-f0efddb0-978b-45c1-ab91-859f207f8c1d.png)
![image](https://user-images.githubusercontent.com/47243617/210176234-2e889460-11fa-42db-8dcc-cfdc1adbfd12.png)
- Drucktaste `Own Requests` betätigen
- Transportauftrag markieren und Drucktaste `Choose` betätigen
- Drucktaste `Continue` betätigen
- Drucktaste `Continue` betätigen
- Drucktaste `Continue` betätigen
