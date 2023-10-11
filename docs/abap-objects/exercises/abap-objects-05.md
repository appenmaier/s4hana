---
title: ABAP-Objects-05
description: ""
---

1. Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an
2. Passe das ABAP-Programm `Z???_ABAP_OBJECTS_AIRPLANES` so an, dass auch bei fehlerhaften Objekterzeugungen kein Laufzeitfehler auftritt

## Klassendiagramm

![image](https://user-images.githubusercontent.com/47243617/210181576-48899b93-d146-4f82-ba1c-61c57acc7de1.png)

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Passe den Konstruktor so an, dass die Ausnahme `CX_PARAMETER_INVALID` ausgelöst wird, wenn mindestens einer der beiden eingehenden Parameter initial ist
