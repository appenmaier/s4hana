---
title: ZABAP_EXERCISE_ABAP_02
description: 'Übungsaufgabe ABAP-02'
---

```abap
REPORT zabap_exercise_abap_02.

PARAMETERS p_id TYPE s_customer.
PARAMETERS p_name TYPE s_custname.
PARAMETERS p_city TYPE city.
PARAMETERS p_disc TYPE s_discount.

WRITE: p_id, p_name, p_city, p_disc.
```