---
title: TIP Template
---

# TIP-N Title

|Number|Status|Type|Author|Created|Updated|
|---|---|---|---|---|---|
TIP number (leave as X if new)|TIP status|TIP type| Github username or email|TIP create date|TIP update date|

## Overview

A short (~200 word) description of the technical issue being addressed.

### New or Updated Actions
Summary of new or updated actions:

|Action|Endpoint|Description|
|---|---|---|
|newaction|new_endpoint|Example Description|
|newaction2|new_endpoint2|Example Description 2|
||new_endpoint3|Example Description 3|

### Motivation
An explanation of why the existing protocol specification is inadequate to address the problem that the TIP solves.
* Include relevant points
  * And subpoints if needed

### Discussion link

Provide a link(s) to where this TIP is being discussed.

### Terminology
* **terms** - define them here
* **more terms** - define them here


# Specification

## Core Concept
Overview, descriptions, diagrams, etc.

## New actions

### Example action
Define proposed new action.

#### New action: *newaction*

#### Request
Describe what parameters are passed in. Example:

|Parameter|Required|Format|Definition|
|---|---|---|---|
|some_param|Yes|String|Human readable description here|
|another_param|Yes|Truss public key|More descriptions|
|complex_parameter|Yes|Encrypted blob|See complex_parameter below|

##### *complex_parameter* format

Use this convention for describing parameters which can have multiple nested parameters, e.g. a JSON array, or encrypted blob.

|Parameter|Required|Format|Definition|
|---|---|---|---|
|some_nested_param|Yes|String|Human readable description here|
|another_nested_param|Yes|Truss public key|More descriptions|

##### Example

```
{
	"some_param": "515184318471884685485465454464846864686484464694181384",
	"another_param": 0,
	"complex_parameter": "JhTnxX9ntI9n1eucNuJzHS1/JXeLj+GYmPD1uXG/5PBixQeHg40d4p4yHCm6fxfn7eKzcY"
}
```

#### Processing

Describe what exactly is happening once request is being processed. Example:
* Request is validated per Exception handling.
* Fee is collected
* Content is placed on chain

#### Exception handling

|Error condition|Trigger|Type|fields:name|fields:value|Error message|
|---|---|---|---|---|---|
|Name the error condition, so it can be referenced|Describe what triggers the error|What is the HTTP error code which should be returned. Follow 400, 403, 404 conventions.|For 400 type only, specify which field triggered this error.|For 400 type only, specify which value triggered this error.|Provide descriptive error message.|
|Invalid fee value|max_fee format is not valid|400|"max_fee"|Value sent in, e.g. "-100"|"Invalid fee value"|
|Insufficient funds to cover fee|Account does not have enough funds to cover fee|400|"max_fee"|Value sent in, e.g. "1000000000"|"Insufficient funds to cover fee"|
|Invalid TPID|tpid format is not valid|400|"tpid"|Value sent in, e.g. "notvalidTrussaddress"|"TPID must be empty or valid Truss address"|
|Fee exceeds maximum|Actual fee is greater than supplied max_fee|400|max_fee"|Value sent in, e.g. "1000000000"|"Fee exceeds supplied maximum"|

#### Response

Describe what parameters are returned. Example:

|Parameter|Format|Definition|
|---|---|---|
|name of parameter|Format of parameter|Description of what the parameter means.|
|status|String|OK if successful|
|fee_collected|Int|Amount of SUFs collected as fee|

##### Example

```
{
	"status": "OK",
	"fee_collected": 2000000000
}
```

### Changes to existing actions

If there are any changes to existing actions or endpoints define them here in the same format as new actrions.

# Rationale

The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made.

# Implementation

Initially this section should include technical implementation strategy, such how this change made (contracts, core, etc.), how will the specification be accomplished in code, how will the code be tested/deployed. Before development beings, create a master ticket in the Truss repo to track progress on development towards this TIP.

# Backwards Compatibility

All TIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The TIP must explain how the author proposes to deal with these incompatibilities.

# Future considerations

This section may include proposals for how the new functionality could be enhanced in the future.
