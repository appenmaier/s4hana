---
title: Sandbox-System ST6 einrichten
description: ''
sidebar_position: 100
tags: []
---

## User für ST6 beantragen
- **[GRC Service Map](https://vmw4958.wdf.sap.corp:44344/sap/bc/webdynpro/sap/grfn_service_map?WDCONFIGURATIONID=ZDLM_GRAC_FPM_AC_LPD_HOME&sap-config-mode=&sap-client=100&sap-language=EN)** öffnen
- Funktion **Create User Access Request** ausführen
- Funktion **User Access – Add – System** ausführen
- Folgende Informationen eingeben und Drucktaste **GO** betätigen
    - System: **ST6_001**
- Eintrag **ST6_001** markieren und Drucktaste **Add** betätigen
- Drucktaste **OK** betätigen
- Drucktaste **Submit** betätigen

## ABAP Development Tools installieren
- JDK herunterladen und installieren
- Eclipse herunterladen, installieren und starten
- Funktion **Help - Install new Software... - Install new Software...** ausführen 
- Folgende Informationen eingeben und **Enter** betätigen
    - Work with: **https://tools.hana.ondemand.com/latest**
- Option **ABAP Development Tools** auswählen und Drucktaste **Next >** betätigen
- Drucktaste **Next >** betätigen
- Option **I accept the terms of the license agreements** auswählen und Drucktaste **Finish** betätigen
- Drucktaste **Restart Now** betätigen

## ABAP-Projekt anlegen
- SAP Logon herunterladen und installieren
- SAP Logon starten
- Funktion **Neu** ausführen
- Folgende Informationen eingeben und **ENTER** betätigen
    - Suche nach: **ST6**
- Option **ST6** markieren und Drucktaste **Weiter >** betätigen
- Option **PUBLIC** markieren und Drucktaste **Fertig stellen** betätigen
- Eclipse starten
- Willkommensbildschirm schließen
- Drucktaste **Open Perspective** betätigen
- Perspektive **ABAP** auswählen und Drucktaste **OK** betätigen
- Drucktaste **New** betätigen und Option **ABAP Project** auswählen
- Verbindung **ST6** auswählen und Drucktaste **Next >** betätigen
- Drucktaste **Next >** betätigen
- Folgende Informationen eingeben und Drucktaste **Finish** betätigen
    - Client: **001**
    - User: `Dein ST6 Benutzername`
    - Password: `Dein ST6 Passwort`
    - Language: **EN**

:::danger Hinweis
Das ST6 ist von außerhalb des SAP Netzwerks nur über VPN (Big IP Client oder Global Protect) erreichbar.
:::
 
## ABAP-Entwicklungspaket anlegen
- Rechtsklick auf das erstellte ABAP-Projekt
- Option **New - ABAP Package** auswählen
- Folgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Name: **TEST_** + `Dein I-User`
    - Description: `Dein Name`
- Folgende Informationen eingeben und Drucktaste **Next >** betätigen
    - Software Component: **LOCAL**
- Drucktaste **Finish** betätigen

## BAS einrichten
- So noch nicht geschehen, einen Trial Account für die SAP BTP erstellen (_S4DEV - Col21 - Participant Handbook - Exercise 8_)
- So noch nicht geschehen, einen Dev Space für das Business Application Studio anlegen (_S4DEV - Col21 - Participant Handbook - Exercise 9_)
 
## SAP Cloud Connector einrichten
- SAP Cloud Connector [herunterladen](https://tools.hana.ondemand.com/#cloud) und installieren/entpacken 
- SAP Cloud Connector starten (**go.bat**)
- Browser starten
- Zu **https://localhost:8443** navigieren
- Folgende Informationen eingeben und Drucktaste **Login** betätigen
    - Name: **Administrator**
    - Description: **manage**
- Passwort ändern
- Folgende Informationen eingeben und Drucktaste **Save** betätigen
    - Region: `SAP BTP Trial Account - Subaccount - Region`
    - Subaccount: `SAP BTP Trial Account - Subaccount - Subaccount ID`
    - Display Name: `Dein Name`
    - Subaccount User: `Deine SAP BTP E-Mail-Adresse`
    - Password: `Dein SAP BTP Passwort`
- Option **Cloud To On Premise** auswählen und Drucktaste **Add (Mapping Virtual To Internal System)** betätigen
- Option **ABAP-System** auswählen und Drucktaste **Next** betätigen
- Option **HTTPS** auswählen und Drucktaste **Next** betätigen
- Folgende Informationen eingeben und Drucktaste **Next** betätigen
    - Internal Host: **ldcist6.wdf.sap.corp**
    - Internal Port: **44300**
- Folgende Informationen eingeben und Drucktaste **Next** betätigen
    - Internal Host: **st6**
    - Internal Port: **44300**
- Option **None** auswählen und Drucktaste **Next** betätigen
- Option **Use Virtual Host** auswählen und Drucktaste **Next** betätigen
- Option **Check Internal Host** markieren und Drucktaste **Next** betätigen
- Eintrag **st6:44300** markieren und Drucktaste **Add (Resources Of st6:44300)** betätigen
- Folgende Informationen eingeben, Option **Path and All Sub-Paths** auswählen und Drucktaste **Save** betätigen
    - URL path: **sap/opu**
- Optional: Drucktaste **Check availablity of internal host** betätigen

![image](https://user-images.githubusercontent.com/47243617/195268810-704c4d7d-b9bc-4a89-a27f-df0ef704c59e.png)

:::note Hinweis
Weitere Informationen zur Installation und Konfiguration können [hier](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html) gefunden werden.
:::

## SAP BTP Trial Subaccount einrichten
- An der SAP BTP anmelden
- Option **SAP BTP Trial Account - Subaccount - Connectivity - Destinations** auswählen und Drucktaste **New Destination** betätigen
- Folgende Informationen eingeben und Drucktaste **New Property** betätigen
    - Name: **ST6_001**
    - Type: **HTTP**
    - Description: **ST6_001**
    - URL: **https://st6:44300**
    - Proxy Type: **OnPremise**
    - Authentication: **NoAuthentication**
- Option **HTML5.DynamicDestiantion** auswählen, als Wert **true** eingeben und Drucktaste **New Property** betätigen
- Option **sap-client** auswählen, als Wert **001** eingeben und Drucktaste **New Property** betätigen
- Option **WebIDEEnabled** auswählen, als Wert **true** eingeben und Drucktaste **New Property** betätigen
- Option **WebIDEUsage** auswählen, als Wert **dev_abap,odata_abap** eingeben und Drucktaste **Save** betätigen
- Optional: Drucktaste **Check availability of destination connection** betätigen

![image](https://user-images.githubusercontent.com/47243617/195268820-b5bf1984-0f3d-4c38-bac0-16d2541c10b4.png)
