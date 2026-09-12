---
title: "OSINT Automation Engine"
category: "security / osint"
year: 2026
client: "Internship Fox&Fish Cyberdefence"
summary: "Modular reconnaissance pipeline for pentest engagements. Starts from a VAT number or domain name and enriches recursively - every new data point automatically triggers the next round of research."
stack: ["n8n", "PostgreSQL", "Docker", "Python", "WhoisXML", "Shodan"]
---

## What it does

From a company name or website address to a list of all people involved, potential email addresses and ever-leaked passwords linked to those email addresses.

One automated pipeline that gathers, links and scores all relevant OSINT data about a target. Starts from a VAT number or domain name - from there it's enriched recursively. Every data point found can trigger a new round of research.

The result is not a raw data dump but a scored overview: every fact carries a confidence score based on the source and cross-validation with other findings.

## Architecture

One Docker container with n8n as orchestrator. Each data source has its own isolated flow - built modularly so flows can be maintained and extended independently without touching the rest.
API calls to external sources wherever possible, Google dorking for the rest.
PostgreSQL acts as the central hub. Engagement data is fully wiped after the engagement is completed and delivered.

## Integrations

| Data source | What it delivers |
|----------|------|
| KBO (Belgian company registry) | Belgian company registry lookups via VAT number or name. |
| HIBP / Snusbase | Breach checking - checking email addresses and domains against known data leaks. |
| WhoisXML / SecurityTrails | Domain and DNS intelligence - historical records, subdomains, IP reputation. |
| LinkedIn dorking | Person and organization profiling via structured search queries. |
| Shodan | Infrastructure reconnaissance - open ports, services, vulnerable systems. |
| Local breach DB | Self-hosted database with all data leaks relevant to Belgium, directly queryable without external API calls. |

## Status

Given the necessary licenses/API keys, this can be instantly reactivated.
