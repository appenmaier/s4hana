---
title: ABAP-Programm ZABAP_DEMO_ABAP_02
description: 'Datentypen und Datenobjekte'
---

```abap
REPORT zabap_demo_abap_02.

*-------------------------------------------------------------------*
* Wichtige ABAP-Standardtypen
*-------------------------------------------------------------------*
TYPES ty_i TYPE i. "Ganze Zahl (Bsp: 42)
TYPES ty_string TYPE string. "Zeichenkette dynamischer Länge (Bsp: 'Hallo Welt')
TYPES ty_c1 TYPE c LENGTH 1. "Zeichenkette fester Länge (Bsp: 'X')
TYPES ty_n7 TYPE n LENGTH 7. "Numerische Folge fester Länge (Bsp: '8162549')
TYPES ty_d TYPE d. "Datum (Bsp: '20211012')
TYPES ty_t TYPE t. "Zeit (Bsp: '101133')
TYPES ty_p TYPE p LENGTH 16 DECIMALS 2. "Gepackte Zahl (Bsp: '823.44')

*-------------------------------------------------------------------*
* Deklaration variabler Datenobjekte
*-------------------------------------------------------------------*
DATA carrier_id TYPE c LENGTH 3. "ABAP Standardtyp
DATA carrier_id2 TYPE s_carr_id. "Datenelement

*-------------------------------------------------------------------*
* Wertzuweisungen
*-------------------------------------------------------------------*
carrier_id = 'LH'. "Zuweisungsoperator
DATA flight_date TYPE d VALUE '20211012'. "statische Vorbelegung
DATA(connection_id) = '0400'. "Inlinedeklaration

WRITE: carrier_id, flight_date, connection_id.

*-------------------------------------------------------------------*
* Initialisierung
*-------------------------------------------------------------------*
CLEAR carrier_id.

*-------------------------------------------------------------------*
* Deklaration fixer Datenobjekte
CONSTANTS co_pi TYPE p LENGTH 2 DECIMALS 2 VALUE '3.14'.

*-------------------------------------------------------------------*
* Deklaration von Eingabeparametern
*-------------------------------------------------------------------*
PARAMETERS p_id TYPE c LENGTH 3.
PARAMETERS p_id2 TYPE s_carr_id.

WRITE: p_id, p_id2.
```
