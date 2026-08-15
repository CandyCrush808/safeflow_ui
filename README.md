# Safe Flow Investigations

Safe Flow — Government-Grade Financial Crime Investigation Platform

Build a complete, production-quality landing website for Safe Flow, an AI-powered financial-crime investigation platform developed for the Safe Flow 2026 hackathon.

The product's internal name is Digital Investigator.

Safe Flow is NOT a consumer banking application and NOT a generic fraud checker.

It is an autonomous multi-agent financial-crime investigation system that receives suspicious transaction/financial-crime alerts, collects and enriches evidence, analyzes risk and transaction relationships, checks regulatory context, generates explainable investigation findings, prepares investigation reports, and presents recommendations to a human investigator.

The central product principle is:

AI recommends. Human decides. System documents.

The website must communicate trust, institutional credibility, explainability, security, compliance, and technological sophistication.

DESIGN REFERENCE

Use the provided Wishpay Finance Landing Page screenshot as a visual/layout reference.

Do NOT copy Wishpay branding, text, illustrations, logo, or exact layouts.

Borrow only these high-level principles:

Minimal premium fintech aesthetic

Strong centered hero typography

Generous whitespace

Editorial section hierarchy

Asymmetric feature cards

Large visual product mockups

Alternating light and dark sections

Purple gradient accents

Floating interface elements

Clear CTA hierarchy

Elegant typography

Strong visual rhythm

Transform that aesthetic into a more serious government / financial-regulatory / institutional technology visual language.

The final website should feel like:

Government Digital Platform + Financial Intelligence System + Premium Enterprise SaaS

It should NOT feel like:

a banking app

a crypto website

a flashy AI startup

a gaming dashboard

a marketing-heavy consumer fintech app

BRAND

Brand name:

Safe Flow

Product:

Digital Investigator

Possible hero tagline:

Financial Crime Investigation, Reimagined.

Alternative supporting line:

Turn suspicious financial activity into explainable, investigation-ready intelligence.

Use a professional Horizon shield/logo if an existing logo asset is available.

Do not redesign the logo unless necessary.

VISUAL LANGUAGE

Primary colors

Use a restrained institutional palette:

Deep Navy: #0B0714

Dark Purple: #241044

Government Purple: #4E1F6E

Electric Violet: #7138C8

Soft Lavender: #EDE7F7

Teal Accent: #71F2E2

White: #FFFFFF

Off White: #F7F7F9

Muted Gray: #6B6873

Border Gray: #E5E2EA

Risk colors:

LOW:
#2E8B57

MEDIUM:
#C58A00

HIGH:
#D97706

CRITICAL:
#B42318

Do not overuse gradients.

Use gradients only for:

hero visual accents

selected cards

CTA backgrounds

subtle glow effects

TYPOGRAPHY

Use a professional modern sans-serif.

Preferred:

Plus Jakarta Sans

Inter

IBM Plex Sans

Use a monospace font only for:

case IDs

transaction IDs

timestamps

model metadata

audit logs

technical values

Suggested monospace:

JetBrains Mono.

Typography should feel similar to a government digital service mixed with a premium enterprise platform.

Avoid overly futuristic fonts.

GLOBAL UI PRINCIPLES

The interface must have:

large whitespace

20–28px card radius

thin borders

subtle shadows

very restrained glassmorphism

strong typography

subtle hover states

smooth scroll

small micro-interactions

no excessive animation

no huge glowing effects

no excessive rounded pills

no unnecessary gradients

Use a maximum content width around:

1200–1280px.

Maintain excellent desktop layout and responsive mobile behavior.

WEBSITE STRUCTURE

Create each major section as a separate reusable React component.

Do NOT place the entire landing page in one component.

Use this structure:

src/components/landing/

Navbar.tsx
HeroSection.tsx
TrustBar.tsx
ProblemSection.tsx
InvestigatorSection.tsx
AgentArchitecture.tsx
RiskIntelligence.tsx
ExplainabilitySection.tsx
ComplianceSection.tsx
InvestigationFlow.tsx
HumanDecisionSection.tsx
ThreatWatch.tsx
FAQSection.tsx
FinalCTA.tsx
Footer.tsx

Each section must be independently editable.

01 — NAVBAR

Create:

Navbar.tsx

Minimal institutional navigation.

Left:

Safe Flow logo.

Center navigation:

Platform
Investigation
Intelligence
Compliance
About

Right:

Documentation
Sign In
Launch Investigator

Use a white/off-white background with a very subtle bottom border.

On scroll:

slightly reduce navbar height

add subtle backdrop blur

preserve readability

Mobile:

hamburger menu

compact logo

Launch Investigator CTA

02 — HERO SECTION

Create:

HeroSection.tsx

This is the most important visual section.

Use a clean off-white background.

Top small institutional badge:

FINANCIAL CRIME INTELLIGENCE PLATFORM

Main headline:

Financial Crime Investigation, Reimagined.

Supporting text:

Safe Flow transforms suspicious financial activity into explainable, investigation-ready intelligence — combining AI agents, risk analytics, transaction graphs and regulatory intelligence.

Primary CTA:

Launch Investigator

Secondary CTA:

Explore the Platform

Below the CTA, add subtle institutional metadata:

AI-ASSISTED INVESTIGATION
HUMAN-IN-THE-LOOP
AUDIT-READY

HERO VISUAL

Instead of a banking card like Wishpay, create a premium floating Digital Investigator interface preview.

Show a simplified case dashboard:

CASE FC-2026-00421

Risk Score
86 / 100
HIGH

Alert:
Unusual transaction velocity

Then small evidence chips:

7 transactions / 4 min
3 connected accounts
New device
Geo anomaly

On the right side show a tiny transaction graph.

Use subtle purple and teal highlights.

The visual should look like an actual enterprise investigation system.

Add very subtle floating labels:

RISK ANALYSIS
GRAPH INTELLIGENCE
RAG COMPLIANCE
XAI

03 — TRUST BAR

Create:

TrustBar.tsx

Immediately under hero.

Use small institutional statements rather than fake company logos.

Example:

BUILT FOR

Financial Crime Analysts
Compliance Teams
Risk Operations
Investigation Workflows

Then a thin divider.

Do NOT invent partnerships or government endorsements.

Do NOT claim official RBI/NPCI approval.

04 — PROBLEM SECTION

Create:

ProblemSection.tsx

Background:

Very light gray/off-white.

Heading:

Detection is only the beginning.

Supporting text:

Modern financial-crime systems can generate alerts. The difficult part begins after the alert — collecting evidence, understanding relationships, checking regulatory context, explaining risk and documenting the investigation.

Create a horizontal investigation journey:

ALERT
↓
EVIDENCE
↓
ANALYSIS
↓
COMPLIANCE
↓
INVESTIGATION
↓
DECISION

Use subtle animated connection lines.

Then introduce:

Horizon connects the investigation.

05 — INVESTIGATOR SECTION

Create:

InvestigatorSection.tsx

This should visually resemble the "strategic choice" section from the Wishpay reference.

Use a central Digital Investigator shield/abstract AI visual.

Around it place four capabilities:

01
DATA INTELLIGENCE

Transaction history
Customer profile
Device/IP
Geo signals

02
RISK INTELLIGENCE

Risk scoring
Anomaly detection
Velocity analysis
Graph patterns

03
COMPLIANCE INTELLIGENCE

KYC/CDD/EDD
PEP & sanctions
RBI/NPCI
PMLA/FATF

04
INVESTIGATION INTELLIGENCE

AI findings
Evidence linking
Case reasoning
Recommended actions

Headline:

One investigation. Every signal.

06 — MULTI-AGENT ARCHITECTURE

Create:

AgentArchitecture.tsx

Use a dark purple background inspired by the dark Wishpay section.

Heading:

One case. Multiple intelligent agents.

Show a clean visual architecture:

                ORCHESTRATOR

    ┌────────────┼────────────┐
    ↓            ↓            ↓

 DATA AGENT   RISK AGENT   COMPLIANCE AGENT

    └────────────┼────────────┘
                 ↓

            REASON AGENT
                 ↓
            REPORT AGENT
                 ↓
           HUMAN ANALYST


Each agent should have a short explanation.

Orchestrator:
Decomposes and coordinates investigation tasks.

Data Agent:
Collects and normalizes evidence.

Risk Agent:
Calculates risk and detects suspicious patterns.

Compliance Agent:
Retrieves and grounds regulatory context.

Reason Agent:
Converts evidence into investigator reasoning.

Report Agent:
Creates investigation-ready documentation.

Use animated connection lines, but keep animations subtle.

07 — RISK INTELLIGENCE

Create:

RiskIntelligence.tsx

White background.

Headline:

Risk you can see.

Create a large dashboard card.

Display:

RISK SCORE

86 / 100

HIGH

Then show feature contribution bars:

Transaction Pattern
+24

Graph Context
+18

Device / IP
+12

Location
+09

Account Profile
+07

Regulatory Signals
+04

Use SHAP-inspired visualization.

Add text:

Every risk score comes with an explanation.

Do not claim a specific model accuracy unless real measured results are available.

08 — EXPLAINABILITY SECTION

Create:

ExplainabilitySection.tsx

Use a split layout.

Left:

Headline:

Don't just flag it. Explain it.

Right:

Investigation evidence panel.

Show:

WHY FLAGGED

Supporting Evidence

✓ 7 transactions in 4 minutes
✓ 3 connected accounts
✓ New device detected

Counter Evidence

✓ Previous legitimate high-value activity

Model Signal

High transaction velocity

AI Assessment

High-risk activity pattern requiring analyst review.

Then small labels:

SHAP
EVIDENCE
COUNTER-EVIDENCE
CONFIDENCE

The visual should communicate explainable AI rather than black-box AI.

09 — TRANSACTION GRAPH

Create:

Inside either ExplainabilitySection or a dedicated GraphSection.tsx.

Show a sophisticated but minimal network visualization.

Nodes:

Account A001
Account A004
Account A008
Account A012

Connections:

₹ amount
timestamp
transaction direction

Highlight suspicious patterns.

Labels:

FAN-OUT DETECTED
CONNECTED ENTITY
RAPID TURNOVER

Headline:

Follow the money.

Supporting text:

Transaction relationships reveal patterns that isolated transactions cannot.

Use animated node pulses very subtly.

10 — COMPLIANCE INTELLIGENCE

Create:

ComplianceSection.tsx

Background:

Very light lavender.

Headline:

Grounded in regulatory intelligence.

Show a RAG interface.

Example:

REGULATORY FINDING

Requirement identified

KYC / AML

Source

Verified regulatory document

Confidence

0.94

Then:

Every regulatory statement should be traceable to its source.

Show small source cards:

RBI
NPCI
PMLA
FATF
FIU-IND
DPDP

Do not state that Safe Flow is officially certified or approved by these organizations.

The section should communicate that the prototype uses verified regulatory documents as a knowledge base.

11 — INVESTIGATION FLOW

Create:

InvestigationFlow.tsx

Use a horizontal timeline.

01
Alert Received

02
Case Created

03
Evidence Collected

04
Risk Analyzed

05
Regulatory Context Checked

06
AI Investigation

07
Human Review

08
Case Resolution

Use elegant numbered nodes.

Heading:

From alert to investigation-ready case.

12 — REPORT GENERATION

Create:

ReportSection.tsx

Add this component even though it was not listed initially.

Show a document preview.

Title:

INVESTIGATION SUMMARY

Case:
FC-2026-00421

Risk:
HIGH

Recommendation:
ESCALATE

Sections:

Executive Findings
Evidence
Counter-Evidence
Risk Analysis
Regulatory Implications
Recommended Actions

Bottom buttons:

Generate PDF
Generate STR Draft

Add small text:

AI drafts. Structured templates preserve traceability.

13 — HUMAN DECISION SECTION

Create:

HumanDecisionSection.tsx

This should be visually important.

Use dark background.

Headline:

AI investigates. Humans decide.

Show:

AI DETECTS

↓

RISK + EVIDENCE

↓

AI RECOMMENDATION

↓

HUMAN ANALYST

↓

ALLOW
VERIFY
ESCALATE

Add a prominent:

KILL SWITCH

MANUAL OVERRIDE ENABLED

Then explain:

Safe Flow is designed to support investigators, not replace authorized decision-makers.

Do not claim the AI autonomously blocks accounts.

14 — THREAT WATCH

Create:

ThreatWatch.tsx

This is optional but useful for the homepage.

Headline:

Financial Crime Intelligence

Create 3 clean news/intelligence cards.

Categories:

Fraud Pattern
Regulatory Update
Threat Intelligence

Each card:

Category
Headline
Date
Short description
Read More

IMPORTANT:

Do not fabricate current news.

Use mock data during development and clearly structure the component so real news/API data can later be connected.

This section should be secondary to the investigator platform.

15 — FAQ

Create:

FAQSection.tsx

Use accordion style similar to the Wishpay reference.

Questions:

What is Safe Flow?

Who is Safe Flow designed for?

How does the Digital Investigator work?

Does the AI make the final financial decision?

How does Safe Flow explain a risk score?

How does regulatory RAG work?

What types of reports can be generated?

Can Safe Flow integrate with banking systems?

Use concise answers based on the actual architecture.

Do not invent capabilities that are not implemented.

16 — FINAL CTA

Create:

FinalCTA.tsx

Use deep purple background.

Large centered headline:

Turn alerts into investigations.

Supporting text:

Give investigators the evidence, intelligence and explanations they need to make informed decisions.

Primary CTA:

Launch Investigator

Secondary:

View Architecture

Add subtle abstract transaction-network graphics behind the CTA.

17 — FOOTER

Create:

Footer.tsx

Professional institutional footer.

Columns:

PLATFORM
Investigator
Risk Intelligence
Graph Analysis
Compliance
Reports

RESOURCES
Documentation
Architecture
Research
FAQ

COMPANY
About
Team
Contact

LEGAL
Privacy
Security
Terms

Bottom:

Safe Flow

Digital Investigator for Financial Crime Intelligence

Add:

© 2026 Safe Flow

Do not add fake government seals, certifications, partners or compliance badges.

INTERACTION DESIGN

Implement subtle interactions:

Navbar transitions on scroll

Button hover elevation

Card hover border glow

Graph node pulse

Risk score number animation

Section reveal on scroll

Timeline progressive reveal

FAQ accordion

Mobile menu animation

CTA hover effects

Keep animations professional.

Avoid:

excessive particle effects

spinning 3D objects everywhere

neon cyberpunk effects

aggressive parallax

excessive blur

excessive glassmorphism

The website should feel trustworthy enough for a bank or regulatory organization.

RESPONSIVE DESIGN

Desktop:
1200–1440px primary experience.

Tablet:
768–1199px.

Mobile:
320–767px.

On mobile:

stack all cards

collapse architecture diagram vertically

simplify graph visualization

preserve hero hierarchy

keep CTAs accessible

avoid horizontal overflow

convert navigation to hamburger

reduce decorative elements

ACCESSIBILITY

Implement:

semantic HTML

keyboard navigation

visible focus states

sufficient contrast

aria labels where required

accessible accordions

reduced-motion support

readable typography

IMPORTANT PRODUCT ACCURACY RULES

The website must represent the actual Safe Flow architecture.

The system:

receives suspicious alerts/transaction data

investigates cases

uses specialized agents

calculates risk

analyzes transaction relationships

uses explainability

retrieves regulatory context through RAG

generates investigation reports

supports STR/CTR/FMR-style reporting workflows

keeps humans in the decision loop

maintains audit trails

The system does NOT:

replace a bank's core banking system

autonomously freeze accounts

claim official RBI approval

claim official NPCI certification

claim real-time bank integration unless implemented

fabricate accuracy statistics

fabricate partnerships

fabricate current fraud news

Use synthetic/mock data for the prototype.

CODE QUALITY

Use reusable components.

Avoid giant components.

Keep data separate from presentation.

Create mock data files separately.

Use TypeScript interfaces for:

Case
RiskScore
Evidence
Agent
RegulatorySource
InvestigationReport
ThreatItem

Use clean naming.

Keep animations and styling reusable.

Do not hardcode repeated UI structures unnecessarily.

FINAL VISUAL GOAL

The final website should feel like:

A government-backed financial intelligence platform from 2030, but designed with the cleanliness of a premium fintech SaaS product.

Reference visual hierarchy:

Wishpay's:
Hero
→ Strategic section
→ Feature cards
→ Dark feature section
→ Pricing/utility section
→ FAQ
→ CTA

Transform into:

Horizon:
Hero
→ Problem
→ Investigation capabilities
→ Multi-agent architecture
→ Risk intelligence
→ Explainability
→ Compliance
→ Investigation flow
→ Reports
→ Human decision
→ Threat intelligence
→ FAQ
→ CTA

The final result must be:

Professional
Minimal
Institutional
Trustworthy
Modern
Government-oriented
Fintech-grade
AI-powered without looking gimmicky

Do not make it look like a generic AI landing page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d44a6d7e-4d5e-40db-966a-15b379fd96e8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
