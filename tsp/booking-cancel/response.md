# response Schema

```
http://maasglobal.com/tsp/bookings-cancel/response.json
```

Response schema for canceling a booking through a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [tsp/booking-cancel/response.json](response.json) |

## Schema Hierarchy

- response `http://maasglobal.com/tsp/bookings-cancel/response.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`
  - [booking-option](../../core/booking-option.md) `http://maasglobal.com/core/booking-option.json`
  - [booking-meta](../../core/booking-meta.md) `http://maasglobal.com/core/booking-meta.json`

# response Properties

| Property                  | Type         | Required     | Nullable | Defined by             |
| ------------------------- | ------------ | ------------ | -------- | ---------------------- |
| [cost](#cost)             | cost         | Optional     | No       | response (this schema) |
| [leg](#leg)               | `object`     | Optional     | No       | response (this schema) |
| [meta](#meta)             | booking-meta | Optional     | No       | response (this schema) |
| [state](#state)           | `enum`       | **Required** | No       | response (this schema) |
| [terms](#terms)           | terms        | Optional     | No       | response (this schema) |
| [token](#token)           | `object`     | Optional     | No       | response (this schema) |
| [tspId](#tspid)           | `string`     | **Required** | No       | response (this schema) |
| [tspProduct](#tspproduct) | `object`     | Optional     | No       | response (this schema) |

## cost

`cost`

- is optional
- type: cost
- defined in this schema

### cost Type

- [cost](booking.md) – `http://maasglobal.com/core/components/cost.json`

## leg

A subset of the standard leg (../core/leg.json)

`leg`

- is optional
- type: `object`
- defined in this schema

### leg Type

`object` with following properties:

| Property         | Type | Required     |
| ---------------- | ---- | ------------ |
| `agencyId`       |      | Optional     |
| `departureDelay` |      | Optional     |
| `endTime`        |      | **Required** |
| `from`           |      | **Required** |
| `mode`           |      | **Required** |
| `startTime`      |      | **Required** |
| `to`             |      | **Required** |

#### agencyId

`agencyId`

- is optional
- type: agencyId

##### agencyId Type

- [agencyId](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

#### departureDelay

`departureDelay`

- is optional
- type: duration

##### departureDelay Type

- [duration](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/duration`

#### endTime

`endTime`

- is **required**
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### from

Starting location's lat and lon pair of this request

`from`

- is **required**
- type: place

##### from Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

#### mode

`mode`

- is **required**
- type: travel-mode

##### mode Type

- [travel-mode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

#### startTime

`startTime`

- is **required**
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### to

`to`

- is **required**
- type: place

##### to Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

## meta

`meta`

- is optional
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](../../core/booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

## state

For normal full cancellation, end state would be CANCELLED. For booking that has multi tickets, if not all of them are
cancelled, response state will be RESERVED

`state`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#state-known-values).

### state Known Values

| Value       | Description |
| ----------- | ----------- |
| `CANCELLED` |             |
| `RESERVED`  |             |

## terms

`terms`

- is optional
- type: terms
- defined in this schema

### terms Type

- [terms](booking.md) – `http://maasglobal.com/core/components/terms.json`

## token

The validity token (such as booking ID, travel ticket etc.) that MaaS clients will display to validate the trip when
starting the leg.

`token`

- is optional
- type: `object`
- defined in this schema

### token Type

`object` with following properties:

| Property           | Type   | Required |
| ------------------ | ------ | -------- |
| `data`             | object | Optional |
| `meta`             | object | Optional |
| `validityDuration` | object | Optional |

#### data

Arbitrary ticket data for the client

`data`

- is optional
- type: `object`

##### data Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### meta

Arbitrary metadata the TSP may pass along the ticket to the client (e.g. a booking code, base64 encoded binary)

`meta`

- is optional
- type: `object`

##### meta Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### validityDuration

The rules that MaaS will interpret to schedule, re-validate or cancel the booking.

`validityDuration`

- is optional
- type: `object`

##### validityDuration Type

`object` with following properties:

| Property    | Type | Required |
| ----------- | ---- | -------- |
| `endTime`   |      | Optional |
| `startTime` |      | Optional |

#### endTime

The finishing time the ticket is valid for

`endTime`

- is optional
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### startTime

The starting time from which the ticket is valid

`startTime`

- is optional
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## tspId

`tspId`

- is **required**
- type: `string`
- defined in this schema

### tspId Type

`string`

- minimum length: 1 characters
- maximum length: 256 characters

## tspProduct

Defines what kind of TSP product the booking option represents.

`tspProduct`

- is optional
- type: `object`
- defined in this schema

### tspProduct Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

Unique identifier for the product

`id`

- is **required**
- type: `string`

##### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters