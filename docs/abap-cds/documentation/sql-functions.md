---
title: SQL-Funktionen
description: ''
sidebar_position: 30
tags: []
---

ABAP CDS unterstützen eine Reihe von SQL-Funktionen wie Fallunterscheidungen, Arithmetische Ausdrücke und eingebaute Funktionen.

## Fallunterscheidungen

```sql
define view Foo
  as select from Bar
{
  Option,
  case Option
    when 'A' then 'Option A'
    when 'B' then 'Option B'
    else '-'
  end   as Text
}
```

```sql
define view Foo
  as select from Bar
{
  Gender,
  Age,
  case when Age > 18 and Gender = 'M' then 'Herr'
       when Age > 18 and Gender = 'W' then 'Frau'
       else ''
  end     as Title
}
```
