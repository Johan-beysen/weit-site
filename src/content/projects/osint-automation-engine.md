---
title: "OSINT Automation Engine"
category: "security / osint"
year: 2026
client: "Internship Fox&Fish Cyberdefence"
summary: "Modulaire reconnaissance pipeline voor pentesttrajecten. Vertrekt vanuit een btw-nummer of domeinnaam en verrijkt recursief - elk nieuw datapunt triggert automatisch een volgende onderzoeksronde."
stack: ["n8n", "PostgreSQL", "Docker", "Python", "WhoisXML", "Shodan"]
---

## Wat het doet

Van Bedrijfsnaam, of website adres naar een lijst van alle betrokken personen, potentiele mail adressen en ooit gelekte wachtwoorden gekoppeld aan die mail adressen. 

Eén geautomatiseerde pipeline die alle relevante OSINT-data over een doelwit verzamelt, verbindt en scoort. Vertrekt vanuit een btw-nummer of domeinnaam - van daaruit wordt recursief verrijkt. Elk gevonden datapunt kan een nieuwe onderzoeksronde triggeren.

Het resultaat is geen ruwe datadump maar een gescoord overzicht: elk feit draagt een betrouwbaarheidsscore op basis van de bron en kruisvalidatie met andere vondsten.


## Architectuur

Eén Docker container met n8n als orkestrator. Elke databron heeft een eigen afgeschermde flow - modulair opgezet zodat flows onafhankelijk onderhouden en uitgebreid kunnen worden zonder de rest te raken.
Api calls naar externe bronnen daar waar mogelijk, google Dorking naar andere. 
PostgreSQL fungeert als centrale hub. Engagement data wordt volledig gewist na afloop en oplevering van het engagement.

## Integraties

| Databron | Wat het oplevert |
|----------|------|
| KBO | Belgische bedrijfsregister lookups via btw of naam. |
| HIBP / Snusbase | Breach checking - e-mailadressen en domeinen toetsen aan bekende datalekken. |
| WhoisXML / SecurityTrails | Domein- en DNS intelligence - historische records, subdomeinen, IP-reputatie. |
| LinkedIn dorking | Persoons- en organisatieprofilering via gestructureerde zoekopdrachten. |
| Shodan | Infrastructuurreconnaissance - open poorten, services, kwetsbare systemen. |
| Lokale breach DB | Eigen gehoste database met alle voor België relevante datalekken, direct bevraagbaar zonder externe API calls. |

## Status

Mits voorziening van de nodige licenties/API key's is deze instant heractiveerbaar 
