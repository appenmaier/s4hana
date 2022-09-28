---
title: Demo 7
description: ""
sidebar_position: 70
---

```abap
REPORT zabap_demo_abap_07.

WRITE: / |Anmeldename: { sy-uname }|.
WRITE: / |Datum des Clients: { sy-datlo DATE = ISO }|.
WRITE: / |Zeit des Clients: { sy-timlo TIME = ISO }|.
WRITE: / |Anmeldemandat: { sy-mandt }|.
WRITE: / |Anmeldesprache: { sy-langu }|.
```
