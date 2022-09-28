---
title: Übungsaufgabe ABAP-09
description: ""
---

Erstelle das ABAP-Programm `Z???_ABAP_09`, welches alle Buchungen zu einer eingegebenen Kundennummer liest, bearbeitet und auf dem Bildschirm ausgibt. Verwende zum Lesen der Buchungen den Funktionsbaustein aus Übungsaufgabe [ABAP-08](abap08.md). Lösche vor der 
Ausgabe alle Buchungen, bei denen das Flugdatum vor einem eingegebenen Datum liegt, ändere bei allen Flügen das Flugdatum ab (neues Flugdatum = altes Flugdatum + 3 Tage) und sortiere die Buchungen aufsteigend nach der Buchungsnummer.

## Eingabe
```
Ausführen (F8)

Kundenummer: 1
Deadline:    01.01.2020
```

## Ausgabe
```
ID der Fluggesellschaft, Verbidnungsnummer, Flugdatum, Buchungsnummer, Kundennummer, Kundentyp
UA, 3517, 27.04.2021, 9
LH, 0400, 03.04.2022, 84
```