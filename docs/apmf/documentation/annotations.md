---
title: Annotationen
description: ''
sidebar_position: 30
tags: []
---

## Annotationen für Basic Interface-Views und Composite Interface-Views
| Typ             | Annotation                                          |
| --------------- | --------------------------------------------------- |
| View-Annotation | `@VDM.viewType: #BASIC`                             |
| View-Annotation | `@VDM.viewType: #COMPOSITE`                         |
| Feld-Annotation | `@EndUserText.label: 'CarrierID'`                   |
| Feld-Annotation | `@EndUserText.quickInfo: 'CarrierID'`               |
| Feld-Annotation | `@Semantics.quantity.unitOfMeasure: 'DistanceUnit'` |
| Feld-Annotation | `@Semantics.amount.currencyCode: 'CurrencyCode'`    |

## Annotationen für Transactional Interface-Views
| Typ             | Annotation                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| View-Annotation | `@VDM.viewType: #TRANSACTIONAL`                                                 |
| View-Annotation | `@ObjectModel.transactionalProcessingEnabled: true`                             |
| View-Annotation | `@ObjectModel.compositionRoot: true`                                            |
| View-Annotation | `@ObjectModel.modelCategory: #BUSINESS_OBJECT`                                  |
| View-Annotation | `@ObjectModel.writeActivePersistence: 'ZVABAPFLIGHT'`                           |
| View-Annotation | `@ObjectModel.representativKey: ['CarrierID', 'ConnectionID', 'FlightDate']`    |
| View-Annotation | `@ObjectModel.semanticKey: 'Flight'`                                            |
| View-Annotation | `@ObjectModel.createEnabled: true`                                              |
| View-Annotation | `@ObjectModel.updateEnabled: true`                                              |
| View-Annotation | `@ObjectModel.deleteEnabled: true`                                              |
| Feld-Annotation | `@ObjectModel.readOnly: true`                                                   |
| Feld-Annotation | `@ObjectModel.mandatory: true`                                                  |
| Feld-Annotation | `@ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]` |
| Feld-Annotation | `@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]`                        |
| Feld-Annotation | `@Semantics.systemDateTime.lastChangedAt: true`                                 |
| Feld-Annotation | `@Semantics.user.lastChangedBy: true`                                           |

## Annotationen für Transactional Consumption-Views
| Typ             | Annotation                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| View-Annotation | `@VDM.viewType: #CONSUMPTION`                                                   |
| View-Annotation | `@OData.publish: true`                                                          |
| View-Annotation | `@Metadata.allowExtensions: true`                                               |
| View-Annotation | `@Search.searchable: true`                                                      |
| View-Annotation | `@ObjectModel.transactionalProcessingDelegated: true`                           |
| View-Annotation | `@ObjectModel.createEnabled: true`                                              |
| View-Annotation | `@ObjectModel.updateEnabled: true`                                              |
| View-Annotation | `@ObjectModel.deleteEnabled: true`                                              |
| Feld-Annotation | `@Search.defaultSearchElement: true`                                            |
| Feld-Annotation | `@Search.fuzzinessThreshold: 0.7`                                               |
| Feld-Annotation | `@ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]` |
| Feld-Annotation | `@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]`                        |
| Feld-Annotation | `@Consumption.valueHelp: '_ArrivalAirport'`                                     |

## Annotationen für Metadaten-Erweiterungen
| Typ             | Annotation                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| View-Annotation | `@UI.headerInfo.title.value: 'CarrierID'`                                                                                 |
| View-Annotation | `@UI.headerInfo.description.Value: 'ConnectionID'`                                                                        |
| View-Annotation | `@UI.headerInfo.typeName: 'Connection'`                                                                                   |
| View-Annotation | `@UI.headerInfo.typeNamePlural: 'Connections'`                                                                            |
| Feld-Annotation | `@UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Connection Information'}]`                          |
| Feld-Annotation | `@UI.facet: [{ position: 20, type: #LINEITEM_REFERENCE, targetElement: '_Flights', label: 'Flights' }]`                   |
| Feld-Annotation | `@UI.lineItem: [{ position: 10 }]`                                                                                        |
| Feld-Annotation | `@UI.lineItem: [{ position: 10, type: #FOR_ACTION, dataAction: 'BOPF:SWITCH_FLIGHT_TYPE', label: 'Switch Flight Type' }]` |
| Feld-Annotation | `@UI.selectionField: [{ position: 10 }]`                                                                                  |
| Feld-Annotation | `@UI.identification: [{ position: 10 }]`                                                                                  |
| Feld-Annotation | `@UI.hidden: true`                                                                                                        |
