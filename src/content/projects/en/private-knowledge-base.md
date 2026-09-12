---
title: "Private Knowledge Base"
category: "security / knowledge"
year: 2026
summary: "Personal documentation hub for technical knowledge, pentest notes, hacking manuals and system administration references. The Ethical Hacking section sits behind Cloudflare Zero Trust, the rest is publicly accessible."
stack: ["MkDocs Material", "Markdown", "GitHub", "Cloudflare Zero Trust", "Python"]
---

## What it is

A personal knowledge base built around MkDocs Material to centrally manage technical knowledge, pentest notes, hacking manuals, network documentation and system administration references. Set up as a static documentation environment: fast, searchable, version-controlled and easy to keep extending.

Deliberately not set up as a loose collection of notes, but as a structured documentation hub with navigation per domain. Content is divided into ethical hacking, web application security, API security, tooling, Linux, enterprise networking, databases and regulations.

The focus is on usable operational knowledge: step-by-step guides, cheatsheets, test methods, tool references and technical context that needs to be found quickly during labs, pentests, preparation or reporting.

## Access security

The **Ethical Hacking** section contains sensitive content - hacking manuals and pentest techniques - and is therefore behind **Cloudflare Zero Trust**. Only users explicitly granted access can view that documentation. The rest of the knowledge base (web application security, API security, tooling, Linux, enterprise networking, databases and regulations) is simply publicly accessible.

That way the workflow stays practical as an online knowledge platform, without putting the most sensitive security content openly on the internet. Operational security as a design choice, not an afterthought.

## Technical stack

| Tool | Role |
|------|------|
| MkDocs Material | Documentation framework with built-in search, syntax highlighting, tabs and admonitions. |
| Markdown | Writing and maintenance format - plain text, version-controlled, quick to edit. |
| mkdocs.yml | Structured navigation - domains, sections and hierarchy centrally managed. |
| Custom CSS | Own dark theme in line with personal branding. |
| GitHub | Version control - every change tracked, rollback possible. |
| Cloudflare Zero Trust | Access layer around sensitive content - identity-based access, no open internet exposure. |

## Why this project

The knowledge base was built for my own learning and working process as an ethical hacker: being able to search quickly, reuse procedures, copy commands, structure concepts and centralize knowledge from training, labs and hands-on experience.

This project shows my attention to knowledge management and operational security. I don't just document technical knowledge - I also make sure sensitive information stays properly shielded.

## Status

Actively used and continuously expanded. Publicly accessible via knowledge.johanbeysen.be, with the exception of the Ethical Hacking section - which works by invitation only.
