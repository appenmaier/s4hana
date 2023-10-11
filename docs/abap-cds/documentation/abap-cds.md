---
title: ABAP CDS
description: ""
sidebar_position: 10
tags: []
---

Das klassische Anwendungsdesign im SAP-Umfeld folgt dem Data-to-Code-Ansatz, was bedeutet, dass intensive Berechnungen in der Applikationsschicht durchgeführt werden. Bei modernen Datenbankplattformen wie SAP HANA bietet sich jedoch ein datensatzorientierter Ansatz an. Bei diesem erfolgen die intensiven Berechnungen in der Datenbankschicht, weswegen dieser Ansatz auch als Code-to-Data-Ansatz bezeichnet wird.

![image](https://user-images.githubusercontent.com/47243617/210434025-9ab05a86-7cbd-4cdf-a6e8-274040fa7caf.png)

Die Core Data Services sind eine Sammlung domänenspezifischer Sprachen und Services für die Definition und Nutzung semantisch reicher Datenmodelle:

- Mit Hilfe der _Data Definition Language_ (DDL) können Datenbanktabellen und Datenbankviews definiert werden
- Mit Hilfe der _Query Language_ (QL) können die Daten von Datenbanktabellen und Datenbankviews gelesen werden
- Mit Hilfe der _Data Control Language_ (DCL) können Zugriffsrechte definiert werden

Im Gegensatz zu den HANA CDS, welche spezifisch für SAP HANA entwickelt wurden, sind die ABAP CDS datenbankunabhängig.
