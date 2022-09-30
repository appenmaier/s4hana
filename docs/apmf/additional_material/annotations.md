---
title: Annotationen
description: ''
sidebar_position: 10
---

## Basic Interface-Views (Wurzelknoten/Unterknoten)

### View-Annotationen
- `@VDM.viewType: #BASIC`

### Feld-Annotationen
- `@EndUserText.label: 'CarrierID'`
- `@EndUserText.quickInfo: 'CarrierID'`
- `@Semantics.quantity.unitOfMeasure: 'DistanceUnit'`
- `@Semantics.amount.currencyCode: 'CurrencyCode'`

## Composite Interface-View (Wurzelknoten/Unterknoten)

### View-Annotationen
- `@VDM.viewType: #COMPOSITE`

### Feld-Annotationen
- `@EndUserText.label: 'CarrierID'`
- `@EndUserText.quickInfo: 'CarrierID'`
- `@Semantics.quantity.unitOfMeasure: 'DistanceUnit'`
- `@Semantics.amount.currencyCode: 'CurrencyCode'`
 
## Transactional Interface-Views (Unterknoten)

### View-Annotationen
- `@VDM.viewType: #TRANSACTIONAL`
- `@ObjectModel.writeActivePersistence: 'ZVABAPFLIGHT'`
- `@ObjectModel.representativKey: ['CarrierID', 'ConnectionID', 'FlightDate']`
- `@ObjectModel.semanticKey: ['CarrierID', 'ConnectionID', 'FlightDate']`
- `@ObjectModel.createEnabled: true`
- `@ObjectModel.updateEnabled: true`
- `@ObjectModel.deleteEnabled: true`

### Feld-Annotationen
- `@ObjectModel.readOnly: true`
- `@ObjectModel.mandatory: true`
- `@ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]`
- `@Semantics.systemDateTime.lastChangedAt: true`
- `@Semantics.user.lastChangedBy: true`

## Transactional Interface-Views (Wurzelknoten)

### View-Annotationen
- `@VDM.viewType: #TRANSACTIONAL`
- `@ObjectModel.transactionalProcessingEnabled: true`
- `@ObjectModel.compositionRoot: true`
- `@ObjectModel.writeActivePersistence: 'ZVABAPCONNECTION'`
- `@ObjectModel.modelCategory: #BUSINESS_OBJECT`
- `@ObjectModel.representativKey: ['CarrierID', 'ConnectionID']`
- `@ObjectModel.semanticKey: ['CarrierID', 'ConnectionID']`
- `@ObjectModel.createEnabled: true`
- `@ObjectModel.updateEnabled: true`
- `@ObjectModel.deleteEnabled: true`

### Feld-Annotationen
- `@ObjectModel.readOnly: true`
- `@ObjectModel.mandatory: true`
- `@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]`
- `@Semantics.systemDateTime.lastChangedAt: true`
- `@Semantics.user.lastChangedBy: true`
 
## Transactional Consumption-Views (Unterknoten)

### View-Annotationen
- `@VDM.viewType: #CONSUMPTION`
- `@Metadata.allowExtensions: true`
- `@Search.searchable: true`
- `@ObjectModel.createEnabled: true`
- `@ObjectModel.updateEnabled: true`
- `@ObjectModel.deleteEnabled: true`

### Feld-Annotationen
- `@Search.defaultSearchElement: true`
- `@Search.fuzzinessThreshold: 0.7`
- `@ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]`
- `@Consumption.valueHelp: '_PlaneType'`

## Transactional Consumption-Views (Wurzelknoten)

### View-Annotationen
- `@VDM.viewType: #CONSUMPTION`
- `@OData.publish: true`
- `@Metadata.allowExtensions: true`
- `@Search.searchable: true`
- `@ObjectModel.transactionalProcessingDelegated: true`
- `@ObjectModel.createEnabled: true`
- `@ObjectModel.updateEnabled: true`
- `@ObjectModel.deleteEnabled: true`

### Feld-Annotationen
- `@Search.defaultSearchElement: true`
- `@Search.fuzzinessThreshold: 0.7`
- `@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]`
- `@Consumption.valueHelp: '_ArrivalAirport'`
 
## Metadaten-Erweiterungen (Wurzelknoten/Unterknoten)

### View-Annotationen
- `@UI.headerInfo.title.value: 'CarrierID'`
- `@UI.headerInfo.description.Value: 'ConnectionID'`
- `@UI.headerInfo.typeName: 'Connection'`
- `@UI.headerInfo.typeNamePlural: 'Connections'`

### Feld-Annotationen
- `@UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Connection Information'}]`
- `@UI.facet: [{ position: 20, type: #LINEITEM_REFERENCE, targetElement: '_Flights', label: 'Flights' }]`
- `@UI.lineItem: [{ position: 10 }]`
- `@UI.lineItem: [{ position: 10, type: #FOR_ACTION, dataAction: 'BOPF:SWITCH_DISTANCE_UNIT', label: 'Switch Distance Unit' }]`
- `@UI.selectionField: [{ position: 10 }]`
- `@UI.identification: [{ position: 10 }]`
- `@UI.hidden: true`