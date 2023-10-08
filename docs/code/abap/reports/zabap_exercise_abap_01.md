---
title: ZABAP_EXERCISE_ABAP_01
description: 'Übungsaufgabe ABAP-01'
---

```abap
REPORT zabap_exercise_abap_01.

PARAMETERS p_name TYPE c LENGTH 20 LOWER CASE.

WRITE: 'Hallo', p_name, 'wie geht es Dir?'.
```