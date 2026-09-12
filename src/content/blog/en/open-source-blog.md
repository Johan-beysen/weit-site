---
title: "Open source: what it actually means (and when it's the right choice)"
category: "security / open source"
year: 2026
date: 2026-09-11
summary: "What open source software really means, which risks come into play (Log4Shell, the xz backdoor) and when it's the better choice over a managed solution."
---

During my training, in personal experiments and in assignments for clients, I often faced the same choice: which digital solution fits best here?

Whether it's an operating system, firewall, CRM, SIEM (Security Information and Event Management - software that collects and analyzes security logs) or another application, there's almost always a wide range of options. Open source solutions are usually among them. But what does open source actually mean?

## More than just "the code is visible"

Open source literally means "open source". For software, that means the source code is available and can be inspected. But it doesn't stop there.

True open source software is offered under a license that also gives users the right to use, study, modify and - under certain conditions - redistribute the software.

With proprietary software, the source code usually stays with the vendor. That's not automatically bad, but as a user you have to trust that the application does what the vendor says it does.

## Transparency as a control mechanism

With open source, the workings can be independently examined. Not just by employees or auditors appointed by the vendor, but in principle by anyone with sufficient technical knowledge. Developers, security researchers and users can study the code, report bugs and propose improvements.

That transparency doesn't provide absolute certainty. A publicly available codebase isn't necessarily thoroughly reviewed, and a large number of users doesn't automatically mean someone checks every part. But in active projects with a healthy community, open source does enable independent review and collaboration. That's an important difference.

You don't have to rely solely on what a vendor tells you about their software. It can be technically investigated which data is processed, which external systems the application communicates with, and how certain security functions are implemented.

## Customizability: the advantage for advanced users

For advanced users and organizations, open source offers another advantage: customizability. Functionality can be extended, integrations can be custom-built, and if a project heads in a different direction, it remains technically possible to keep building yourself or maintain your own fork.

## "Free" doesn't mean "costless"

Price often plays a role too. A lot of open source software can be used without purchase or subscription costs. That doesn't mean the software has no license, or is truly free of cost. Installation, hosting, configuration, updates, monitoring, training and support still require time and expertise.

With many projects you can therefore choose between a free community version and paid services such as managed hosting, professional support, enterprise features or an SLA (Service Level Agreement - a contract with agreed response times and guarantees).

## The flip side: dependencies and supply-chain risks

Transparency is no guarantee against vulnerable or malicious code. Modern software rarely consists of a single standalone project. Applications build on libraries, frameworks and other dependencies, which in turn use other components. Every link adds code, maintainers and its own development and release process.

Log4Shell showed in 2021 how large that dependency can become. A critical vulnerability in Log4j, a widely used Java library, turned out to be present in countless applications and products. Many organizations initially didn't even know the library was used somewhere in their software supply chain. The incident mainly showed how difficult it is to have a complete overview of all software components in use.

The xz backdoor of 2024 exposed a different risk. After a long process of contributing and building trust, a malicious contributor gained increasing influence within the project. Eventually, through manipulated test files and the build process, a heavily obfuscated backdoor was added to release versions 5.6.0 and 5.6.1 of xz Utils.

Software engineer Andres Freund discovered the attack after noticing unusual behavior and unexpected delays with SSH. The discovery didn't come from a planned code audit, but from someone within the open source ecosystem itself. The open nature of the project then made it possible to quickly analyze, publicly document and contain the attack. Because the affected versions were still mainly present in experimental distributions, the actual spread remained limited.

These incidents don't prove that open source is inherently less secure. They do show that visible source code alone isn't enough. Organizations need to know which components they use, how actively they're maintained and who's responsible for security updates.

For anyone working on security, that means among other things: taking inventory of dependencies, maintaining a Software Bill of Materials (SBOM - a list of all software components and their origin), automatically checking for known vulnerabilities, and pinning versions in a controlled way while still updating them. Pinning versions without an update process can actually cause vulnerable software to keep running longer.

## The key nuance: more control, more responsibility

And that brings us to the heart of the trade-off: more control also means more responsibility.

Proprietary software often offers seamless transitions between adjacent domains - think of the collaboration between a SIEM, a firewall and detection agents within a single vendor's package. With open source, you more often have to roll up your sleeves yourself to get the different platforms to work together properly.

That seamlessness mainly applies within the ecosystem of a single vendor, though. As soon as you combine proprietary products from different vendors, the same integration problem shows up as with open source - and sometimes it's even more stubborn, because APIs are closed or expensive. So the real contrast is less "open source versus proprietary" and more "single-vendor stack versus multi-vendor stack".

## When is open source a good choice?

Open source often makes sense when:

- control over data and technology is important;
- you want to limit dependency on a single vendor;
- customizations or specific integrations are needed;
- open standards and data portability matter;
- you have enough knowledge in-house or through a partner for management and maintenance;
- the project is actively maintained and has a clear security policy.

A managed solution more often makes sense when:

- your organization has no capacity for updates, monitoring and incident follow-up;
- contractual response times and a single point of contact matter;
- predictable operational costs outweigh maximum technical freedom;
- a fully integrated ecosystem demonstrably saves time and management effort.

A managed solution doesn't have to be proprietary, either. Many open source vendors offer hosting, maintenance and support with an SLA.

So the choice consists of more than "open source or proprietary". I look at three separate questions: how much control is needed, who carries the operational responsibility, and how dependent does the client become on a single vendor or ecosystem?

Open source isn't a goal in itself. It's the right choice when the freedom it offers outweighs the responsibility that comes with it.
