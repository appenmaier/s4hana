---
title: ABAP-CDS-06
description: ""
---

1. Erweitere die ABAP CDS View `ZI_???_CustomerKPIs` um einen Parameter, der es möglicht, die Kunden nach der Stadt zu filtern
2. Erstelle das ABAP-Programm `Z???_ABAP_CDS_06`, welches alle Kunden aus einer eingegebenen Stadt liest und absteigend sortiert nach dem Umsatz anzeigt. Verwende zum Lesen der Kunden die ABAP CDS View aus Aufgabenteil 1

## Eingabe

```
Ausführen (F8)

Stadt: Walldorf
```

## Ausgabe

```
Kundennummer, Name, Umsatz in Euro
105, Müller GmbH, 23.800
99, Frau Petra Fröhlich, 8.999
67, Herr Hans Maier, 7.354
```
