---
title: ZABAP_DEMO_ABAP_07
description: 'Systemfelder'
---

```abap
* Sysetm Fields
REPORT zabap_demo_abap_07.

WRITE: |Anmeldename: { sy-uname }|.
WRITE: / |Datum des Clients: { sy-datlo DATE = USER }|.
WRITE: / |Zeit des Clients: { sy-timlo TIME = USER }|.
WRITE: / |Datum des Servers: { sy-datum DATE = USER }|.
WRITE: / |Zeit des Servers: { sy-uzeit TIME = USER }|.
WRITE: / |Anmeldemandant: { sy-mandt }|.
WRITE: / |Anmeldesprache: { sy-langu }|.
```
