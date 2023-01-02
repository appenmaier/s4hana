---
title: Programmier-Projekt (SAP VT)
description: ''
sidebar_position: 10
---

## Szenario
Das Unternehmen Miles & More und die FRAPORT AG nutzen seit längerer Zeit SAP-Software und benötigen nun mehrere kundenspezifische Erweiterungen ihrer Systeme. Ihr seid Teil eines Projektteams und erhaltet 2 Aufträge. Die Projektleiterin bzw. der Projektleiter bei SAP für beide Kundenprojekte ist eine Mitarbeiterin bzw. ein Mitarbeiter aus dem Bereich Solution Management, der Ansprechpartner für die Schulungsumgebung ist Daniel Appenmaier. Für die Erstellung der Anwendungen habt Ihr insgesamt 5 Tage Zeit. Während der gesamten Projektphase solltet Ihr Euch regelmäßig mit Eurer Projektleiterin bzw. Eurem Projektleiter austauschen. Für programmiertechnische Fragen wendet Euch bitte an Eure Paten oder nutzt Google bzw. Euer SAP-Netzwerk.

## Auftrag 1
Entwickelt für das Reisebüro Miles & More zwei SAPUI5-Apps, welche es den Mitarbeiterinnen bzw. Mitarbeiten ermöglichen sollen, für den Kunden gemäß seiner Angaben Flüge und dazugehörige Buchungen zu suchen und anzuzeigen. Eine SAPUI5-App soll Freestyle, die andere mit Hilfe von Fiori Elements entwickelt werden.

### Funktionale Anforderungen
- Es soll eine Funktion zum Sortieren, Filtern und Anzeigen von Flügen geben
- Es sollen nur Flüge angezeigt werden, bei denen eine entsprechende Anzeigeberechtigung vorhanden ist
- Es sollen nur Flüge angezeigt werden, bei denen das Flugdatum in der Zukunft liegt
- Es soll zusätzlich die prozentuale Auslastung der Flüge angezeigt werden
- Es sollen zusätzliche Informationen zur Flugverbindung angezeigt werden
- Es soll eine Funktion zum Sortieren, Filtern und Anzeigen von Buchungen (exklusive der stornierten) zu einem ausgewählten Flug geben
- Es soll eine Funktion zum Hinzufügen, Bearbeiten und Löschen einer neuen Buchung geben
- Es soll eine Funktion zum Stornieren einer Buchung geben
- Es soll eine Funktion zum Anzeigen bereits vergangener Flüge geben

### Nichtfunktionale Anforderungen
- Die Anwendungen soll einfach und intuitiv zu bedienen sein
- Die Anwendungen soll leicht wart-, änder- und erweiterbar sein
- Die Anwendungen soll stabil und zuverlässig sein

### Rahmenbedinungen
- Alle relevanten Informationen sollen in Datenbanktabellen gespeichert werden
- Alle relevanten Informationen sollen mandantenabhängig gelesen und gespeichert werden
- Alle Entwicklungsobjekte sollen das Prefix `Z_` + `Euer Gruppenkürzel` verwenden
- Die Entwicklungssprache soll Englisch sein

## Auftrag 2
Entwickelt für die FRAPORT AG mehrere klassische ABAP-Programme für deren Call-Center. 

### Funktionale Anforderungen
- Linienpassagiere sollen Informationen zu ihren Flügen abfragen können
- Fluggesellschaften sollen ihre Flugdaten mit denen der FRAPORT AG telefonisch abgleichen können
- Reisebüros sollen das Call-Center als Auskunftsstelle für Last-Minute-Angebote nutzen können
- Das statistische Bundesamt soll für eine globale Studie Informationen über die Anzahl an Abflügen und Landungen je Land, je Stadt und je Flughafen abfragen können

### Nichtfunktionale Anforderungen
- Die Anwendungen soll einfach und intuitiv zu bedienen sein
- Die Anwendungen soll leicht wart-, änder- und erweiterbar sein
- Die Anwendungen soll stabil und zuverlässig sein

### Rahmenbedinungen
- Alle relevanten Informationen sollen in Datenbanktabellen gespeichert werden
- Alle relevanten Informationen sollen mandantenabhängig gelesen und gespeichert werden
- Alle Entwicklungsobjekte sollen das Prefix `Z` + `Euer Gruppenkürzel` verwenden
- Die Entwicklungssprache soll Englisch sein
