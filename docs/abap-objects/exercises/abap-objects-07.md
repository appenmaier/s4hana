---
title: Übungsaufgabe ABAP-Objects-07
description: ''
---

1. Lege den globalen Tabellentypen `Z???_AIRPLANES` anhand der abgebildeten Informationen an
2. Erstelle die Klasse `ZCL_???_CARRIER` anhand des abgebildeten Klassendiagramms
3. Passe das ABAP-Programm `Z???_ABAP_OBJECTS_AIRPLANES` so an, dass neben den Flugzeugen auch eine Fluggesellschaft erzeugt wird. Die Flugzeuge sollen der Fluggesellschaft zugewiesen und alle Informationen der Fluggesellschaft auf dem Bildschirm ausgegeben 
werden

## Informationen zum globalen Tabellentypen `Z???_AIRPLANES`
- Referenztyp: `ZCL_???_AIRPLANE`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel
	
## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/210181592-d55466fc-c9d0-4623-8864-359e37d2a606.png)

## Hinweise zur Klasse `ZCL_???_CARRIER`
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `GET_BIGGEST_CARGO_PLANE()` soll das Frachtflugzeug mit der größten Frachtkapazität zurückgeben
- Die Methode `TO_STRING()` soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zurückgeben
