---
sidebar_position: 2
title: TIP Overview
---

# Truss Improvement Proposals (TIPs)
TIPs describe proposed changes to the Truss Protocol.

## TIPs
|TIP|Title|Status|
|---|---|---|
|[TIP-1](tip-0001.md)|Truss Initial Contracts|Draft|

## Contributing
### Review TIPs
Everyone is encouraged to review existing TIPs and provide feedback.
### New TIP Process
* If you're not yet sure if your idea should a TIP, start by opening a Github issue and create your TIP draft there first to ask for feedback from the community.
* To propose a TIP, fork this repository and create a pull request for your TIP with status *Draft*. The TIP number can remain undetermined at this stage. Use the [TIP-TEMPLATE.md](tip-TEMPLATE.md) file as your starting point and see Successful TIP includes for what a TIP should contain. Also, use existing TIPs as examples.
* Repo custodians will review the TIP PR and comment. Once comments have been addressed, the TIP will be merged to Master with the status *Draft*.
* Reach out to the community and solicit feedback on your TIP.
* Continue to update your TIP based on community feedback and submit pull requests as needed. Once you feel the community has contributed and the TIP is ready, creare a pull request to update the status to *Accepted*.
* Once repo custodians accept your TIP, you can code your solution and submit pull requests to the relevant repo.
* After the code has been merged and deployed to Mainnet, the status will be changed to *Final*.
### Discussing a TIP
Create an issue describing the TIP or section of a TIP you would like to open up for discussion. Assign it to the author of that TIP.

## TIP Type
* Core - improvements requiring a consensus fork
* Functionality - adds or modifies functionality without need for consensus fork
* Standard - documents standards used in Truss Protocol

## TIP Status
* Draft - a TIP that is open for consideration.
* Accepted - a TIP that is planned for immediate adoption. Changes may still be made as required by development.
* Final - a TIP that has been adopted, coded, merged, and deployed by the block producers on Truss mainnet.
* Deferred - a TIP that is not being considered for immediate adoption. May be reconsidered in the future.

## Successful TIP includes
### Preamble
Each TIP must begin with an RFC 822 style header preamble, preceded and followed by three hyphens (---). This header is also termed “front matter” by Jekyll. The headers must appear in the following order. All other headers are required.
```
---
TIP: TIP number
title: TIP title
status: TIP status
type: TIP type
author: a list of the author’s or authors’ name(s) and/or username(s), or name(s) and email(s)
created: TIP create date
updated: TIP update date
---
```
### Abstract
A short (~200 word) description of the technical issue being addressed.

### Motivation
An explanation of why the existing protocol specification is inadequate to address the problem that the TIP solves.

### Specification
Detailed definition of what is being changed, e.g. actions, API end-points, processing logic, exception handling, fees, etc.

### Rationale
The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made.

### Implementation
Initially this section should include technical implementation strategy, such how this change made (contracts, core, etc.), how will the specification be accomplished in code, how will the code be tested/deployed. Before development beings, create a master ticket in the Truss repo to track progress on development towards this TIP.

### Backwards Compatibility
All TIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The TIP must explain how the author proposes to deal with these incompatibilities.

### Future considerations
This section may include proposals for how the new functionality could be enhanced in the future.

### Discussion link
Provide a link(s) to where this TIP is being discussed.
