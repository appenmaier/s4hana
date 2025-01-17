---
title: ABAP Objects
description: ""
sidebar_position: 30
tags: []
---

ABAP Objects stellt die objektorientierte Erweiterung von ABAP dar. Es enthält nur objektorientierte Konzepte, die sich in anderen objektorientierten Programmiersprachen bewährt haben und die in einem betriebswirtschaftlichen Umfeld sinnvoll sind.
gilt, dass ABAP-Objects-Anweisungen in prozeduralen ABAP-Programmen verwendet werden können.

:::tip Hinweis

Im objektorientierten Kontext gelten strengere Typprüfungen als in prozeduralen und obsolete Anweisungen werden als Syntaxfehler betrachtet.

:::

## Die Grundidee der Objektorientierung

In der objektorientierten Programmierung werden Beobachtungen aus der realen Welt zum Konzept der Objektorientierung zusammengefasst

- Eine Kategorie von ähnlichen Objekten bezeichnet man als _Klasse_
- Konkrete Ausprägungen bzw. Instanzen einer Klasse werden wiederum als _Objekte_ bezeichnet
- Die Eigenschaften von Objekten werden als _Attribute_, das Verhalten als _Methoden_ bezeichnet

```mermaid
flowchart LR
    car1(Bezeichner: car1\nDatentyp: cl_car\nWert: 1) --> o1[id: 1\nmake = Porsche\nmodel = 911\nseats = 2]
    car2(Bezeichner: car2\nDatentyp: cl_car\nWert: 2) --> o2[id: 2\nmake = Opel\nmodel = Zafira Life\nseats = 6]
    truck(Bezeichner: truck\nDatentyp: cl_truck\nWert: 3) --> o3[id: 3\nmake = MAN\nmodel = TGX\ncargo_in_tons = 40]
```

:::tip Hinweis

Jedes Objekt ist eindeutig identifizierbar.

:::

## Datenkapselung

Ein wesentlicher Grundsatz der Objektorientierung ist, dass Attribute durch Methoden gekapselt werden. Datenkapselung bedeutet, dass Attribute nicht direkt geändert werden können, sondern nur durch den indirekten Zugriff über Methoden. Typische Methoden zum
Lesen und Schreiben von Attributen sind die sogenannten Getter- bzw. Setter-Methoden.

```mermaid
flowchart LR
   subgraph Klasse
      direction LR
      subgraph privater Bereich
         attribut1(Attribut 1)
         attribut2(Attribut 2)
      end
      subgraph öffentlicher Bereich
         setter1(Setter für Attribut 1) -.-> attribut1
         setter2(Setter für Attribut 2) -.-> attribut2
         getter1(Getter für Attribut 1) -.-> attribut1
         getter2(Getter für Attribut 2) -.-> attribut2
      end
   end
```

Um die Sichtbarkeit von Attributen und Methoden zu definieren, existieren unterschiedliche Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem Ort aus Attribute und Methoden verwendet bzw. aufgerufen werden dürfen.

| Zugriffsrecht | Zugriff aus gleicher Klasse | Zugriff von einer Unterklasse | Zugriff von einer beliebigen Klasse |
| ------------- | --------------------------- | ----------------------------- | ----------------------------------- |
| `public`      | Ja                          | Ja                            | Ja                                  |
| `protected`   | Ja                          | Ja                            | Nein                                |
| `private`     | Ja                          | Nein                          | Nein                                |
