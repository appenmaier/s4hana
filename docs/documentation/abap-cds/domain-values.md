---
title: Domänenfestwerte
description: ""
sidebar_position: 50
tags: []
---

Der Zugriff auf Domänenfestwerte über die ABAP CDS View `DDCDS_CUSTOMER_DOMAIN_VALUE`, der Zugriff auf die Texte zu den Domänenfestwerten über die ABAP CDS View `DDCDS_CUSTOMER_DOMAIN_VALUE_T`.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Travel'
define view entity I_Travel
  as select from /dmo/travel                                                   as Travel
    inner join   DDCDS_CUSTOMER_DOMAIN_VALUE_T( p_domain_name: '/DMO/STATUS' ) as Status
      on  Travel.status   = Status.value_low
      and Status.language = $session.system_language
{
  key Travel.travel_id as TravelId,
      Travel.status    as Status,
      Status.text      as StatusText
}
```

:::tip Hinweis

Die Sitzungsvariable `$session.system_language` enthält die Anmeldesprache und entspricht damit dem ABAP Systemfeld `SY-LANGU`.

:::
