# 🛡️ Smart Horizon

### AI-Powered Multi-Agent Financial Crime Investigation Platform

> **AI recommends. Human decides. System documents.**

Smart Horizon is an autonomous financial-crime investigation platform designed to help investigators analyze suspicious financial activity, collect contextual evidence, assess risk, explain why a transaction was flagged, retrieve relevant regulatory information, generate investigation reports, and support human decision-making.

The system is designed around a **human-in-the-loop** investigation workflow rather than allowing AI to independently make material financial decisions.

---

## 🎯 Problem

Traditional financial fraud systems primarily focus on **detecting suspicious transactions and generating alerts**.

The major challenge begins after an alert is generated:

* Investigators must manually collect transaction history.
* Customer and KYC information must be reviewed.
* Related accounts and transaction relationships must be investigated.
* Risk factors must be understood.
* Regulatory requirements must be checked.
* Investigation reports must be prepared.
* Decisions and evidence must be documented.

Smart Horizon focuses on this investigation layer.

### Our Goal

Transform:

```text
Suspicious Alert
      ↓
Manual Investigation
      ↓
Multiple Systems
      ↓
Manual Evidence Collection
      ↓
Manual Analysis
      ↓
Manual Report
      ↓
Human Decision
```

into:

```text
Suspicious Alert
      ↓
Digital Investigator
      ↓
Evidence Collection
      ↓
Risk + Graph Analysis
      ↓
XAI + Regulatory RAG
      ↓
AI Investigation
      ↓
Report Generation
      ↓
Human Approval
      ↓
Audit Trail
```

---

# 🧠 System Architecture

```text
                    BANK / PAYMENT ECOSYSTEM
          CBS • UPI • IMPS • NEFT • RTGS • Cards
                              │
                              ▼
                     DATA / ALERT INPUT
                              │
                              ▼
                        CASE MANAGER
                              │
                              ▼
                    ORCHESTRATOR AGENT
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                ▼
        DATA AGENT       RISK AGENT       COMPLIANCE AGENT
             │                │                │
       Transaction       ML / XAI          RAG / Regulations
       Customer          Graph             KYC / AML
       KYC / Device      Risk Signals      PEP / Sanctions
             └────────────────┼────────────────┘
                              ▼
                     EVIDENCE PACKAGE
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
             XAI ENGINE                 RAG ENGINE
                │                           │
          SHAP / Features           RBI / NPCI / PMLA
                │                    FATF / FIU-IND
                └─────────────┬─────────────┘
                              ▼
                    REASON / REPORT AGENT
                              │
                              ▼
                    HUMAN INVESTIGATOR
                              │
                    ┌─────────┼─────────┐
                    ▼         ▼         ▼
                 APPROVE   ESCALATE   REQUEST
                              │
                              ▼
                         AUDIT TRAIL
```

This architecture combines the source implementation plan's score/context/reason/decision pipeline with the expanded data, risk, compliance and reporting agents.

---

# 🚀 Implementation Roadmap

## Phase 0 — Project Foundation

### Objective

Establish the common technical and product foundation before parallel development begins.

### Tasks

* [ ] Create GitHub repository
* [ ] Define team responsibilities
* [ ] Define project architecture
* [ ] Freeze Evidence Package JSON schema
* [ ] Define API contracts
* [ ] Set up environment variables
* [ ] Set up frontend project
* [ ] Set up backend project
* [ ] Set up database
* [ ] Create project documentation

### Deliverables

```text
Repository
Architecture
Evidence Schema
API Contract
Development Environment
Initial UI Shell
```

The implementation plan specifically recommends freezing the Evidence Package schema at the beginning because it acts as the contract between the system components.

---

# Phase 1 — Product UI & Design System

### Objective

Build the complete visual foundation of Smart Horizon.

### Frontend

* [ ] Design system
* [ ] Typography
* [ ] Color tokens
* [ ] Dark mode
* [ ] Light mode
* [ ] Responsive layout
* [ ] Buttons
* [ ] Cards
* [ ] Badges
* [ ] Tables
* [ ] Modals
* [ ] Loading states
* [ ] Empty states
* [ ] Error states

### Landing Page

* [ ] Navbar
* [ ] Hero
* [ ] Problem section
* [ ] Investigation section
* [ ] Agent architecture
* [ ] Risk intelligence
* [ ] Explainability
* [ ] Graph section
* [ ] Compliance
* [ ] Investigation workflow
* [ ] Reports
* [ ] Human decision
* [ ] Threat watch
* [ ] FAQ
* [ ] CTA
* [ ] Footer

### Deliverable

```text
Complete Smart Horizon public website
```

---

# Phase 2 — Authentication & Role-Based Access

### Objective

Create the entry point into the investigation platform.

### User Flow

```text
Landing Page
      ↓
Access Platform
      ↓
Select Role
      ↓
Login
      ↓
MFA
      ↓
Role Dashboard
```

### Roles

```text
Investigator
    ↓
Investigates suspicious cases

Manager
    ↓
Reviews / approves decisions

Administrator
    ↓
Controls platform / security
```

### Tasks

* [ ] Role selection
* [ ] Login interface
* [ ] MFA interface
* [ ] Role-based navigation
* [ ] Protected routes
* [ ] Logout
* [ ] Unauthorized page

---

# Phase 3 — Investigation Dashboard

### Objective

Create the primary workspace for investigators.

### Dashboard

```text
Dashboard
│
├── Risk Overview
├── Active Cases
├── Critical Cases
├── Cases Resolved
├── Risk Trend
├── Case Distribution
└── Recent Investigations
```

### Case Queue

```text
Case Queue
│
├── Case ID
├── Customer
├── Transaction
├── Risk Score
├── Priority
├── Status
├── SLA
└── Assigned Investigator
```

### Features

* [ ] Search
* [ ] Filter
* [ ] Sort
* [ ] Priority
* [ ] Risk level
* [ ] Case status
* [ ] SLA timer

The architecture identifies the case queue, priority, SLA timer and lifecycle as core case-management functionality.

---

# Phase 4 — Case Investigation

### Objective

Create the main investigation workspace.

```text
Case
│
├── Overview
├── Evidence
├── Risk
├── Graph
├── Timeline
├── Compliance
├── AI Investigation
├── Reports
└── Approval
```

### Case Overview

* [ ] Customer information
* [ ] Transaction information
* [ ] Alert reason
* [ ] Case status
* [ ] Risk level
* [ ] Assigned investigator

### Evidence

* [ ] Transaction history
* [ ] Customer profile
* [ ] KYC/CDD information
* [ ] Device signals
* [ ] IP signals
* [ ] Location
* [ ] Velocity
* [ ] Previous cases

### Deliverable

```text
Complete Case Investigation UI
```

---

# Phase 5 — Risk Intelligence & Explainability

### Objective

Explain **why the system considers a case suspicious**.

### Risk

```text
Risk Score
     ↓
0 ─────────────── 100

LOW
MEDIUM
HIGH
CRITICAL
```

### Explainability

* [ ] SHAP feature contribution
* [ ] Feature importance
* [ ] Supporting evidence
* [ ] Counter-evidence
* [ ] Counterfactual explanation
* [ ] Natural-language explanation
* [ ] Confidence score

### Example

```text
Why Flagged?

+ High transaction velocity
+ Fan-out transaction pattern
+ Unusual location
+ Device reused across accounts

Confidence: 92%
```

The architecture requires each case to expose risk score, contributing factors, supporting/counter evidence and explainability.

---

# Phase 6 — Transaction Graph Intelligence

### Objective

Visualize relationships between accounts and transactions.

### Graph

```text
Account A
    │
    ├──── ₹50,000 ────→ Account B
    │                       │
    │                       └──→ Account C
    │
    └──── ₹75,000 ────→ Account D
```

### Detection

* [ ] Fan-in
* [ ] Fan-out
* [ ] Circular transactions
* [ ] Transaction chains
* [ ] Rapid turnover
* [ ] Suspicious relationships

### Frontend

* [ ] Interactive graph
* [ ] Zoom
* [ ] Pan
* [ ] Node details
* [ ] Edge details
* [ ] Risk highlighting
* [ ] Transaction amount display

The architecture identifies transaction-graph investigation as a critical capability.

---

# Phase 7 — Multi-Agent Investigation Engine

### Objective

Connect the investigation workflow into specialized agents.

```text
Alert
  ↓
Orchestrator
  ↓
┌──────────────┬───────────────┬────────────────┐
│              │               │
Data Agent     Risk Agent      Compliance Agent
│              │               │
Evidence       ML + Graph      RAG
│              │               │
└──────────────┴───────────────┘
                ↓
          Reason Agent
                ↓
          Report Agent
                ↓
        Decision Layer
```

### Agents

#### Orchestrator Agent

* [ ] Receive case
* [ ] Decompose investigation
* [ ] Coordinate agents
* [ ] Validate outputs
* [ ] Maintain case state

#### Data Agent

* [ ] Transaction history
* [ ] Customer information
* [ ] KYC
* [ ] Device
* [ ] IP
* [ ] Geo
* [ ] Previous cases

#### Risk Agent

* [ ] Risk score
* [ ] ML prediction
* [ ] Velocity
* [ ] Geo-velocity
* [ ] Graph patterns
* [ ] XAI

#### Compliance Agent

* [ ] KYC/CDD/EDD
* [ ] PEP
* [ ] Sanctions
* [ ] AML
* [ ] Regulatory retrieval

#### Reason Agent

* [ ] Findings
* [ ] Evidence reasoning
* [ ] Counter-evidence
* [ ] Investigation hypotheses
* [ ] Recommended next steps

#### Report Agent

* [ ] Investigation summary
* [ ] Timeline
* [ ] STR draft
* [ ] CTR/FMR support
* [ ] Audit summary

The architecture defines these specialized agent responsibilities explicitly.

---

# Phase 8 — RAG & Regulatory Intelligence

### Objective

Ground regulatory responses in verified sources.

### Knowledge Base

```text
RBI
NPCI
PMLA
FATF
FIU-IND
Bank Policies
```

### Pipeline

```text
Regulatory Documents
        ↓
Document Processing
        ↓
Chunking
        ↓
Embeddings
        ↓
Vector Database
        ↓
Semantic Retrieval
        ↓
LLM
        ↓
Answer + Citation
```

### Frontend

```text
Compliance Panel

Regulatory Finding
        ↓
Source
        ↓
Citation
        ↓
View Source
```

RAG is identified in the architecture as a mandatory backbone for grounding regulatory answers and allowing regulatory documents to be updated without retraining the LLM.

---

# Phase 9 — AI Investigation & Reports

### Objective

Turn structured evidence into an investigator-ready explanation.

### AI Investigation

```text
Evidence
   +
Risk
   +
Graph
   +
Compliance
   +
XAI
   ↓
AI Investigation
```

### Output

```text
Risk Assessment

Key Findings

Supporting Evidence

Counter Evidence

Regulatory Implications

Recommended Actions

Questions for Analyst

Confidence

Sources
```

The source architecture's LLM contract requires structured output, separation of facts/model signals/inference/recommendation, source references for regulatory statements and an explicit insufficient-evidence state.

---

# Phase 10 — Human Decision & Approval

### Objective

Keep the investigator and manager in control.

```text
AI Recommendation
        ↓
Human Investigator
        ↓
┌──────────┬───────────┬──────────────┐
│          │           │
Approve   Escalate   Request Evidence
        ↓
Manager Approval
        ↓
Final Decision
```

### Features

* [ ] Recommendation panel
* [ ] Approve
* [ ] Reject
* [ ] Escalate
* [ ] Request evidence
* [ ] Manager approval
* [ ] Maker-checker
* [ ] Kill switch
* [ ] Decision history

The architecture explicitly requires human review and maker-checker approval for material actions.

---

# Phase 11 — Audit & Governance

### Objective

Record every important system and human action.

```text
Alert Created
      ↓
Case Created
      ↓
Agent Analysis
      ↓
Risk Generated
      ↓
AI Recommendation
      ↓
Analyst Review
      ↓
Manager Decision
      ↓
Case Closed
```

### Audit Information

```text
Who
What
When
Action
Model Version
Evidence Version
Decision
```

The architecture calls for immutable/tamper-evident audit trails and model decision history.

---

# Phase 12 — Testing, Security & Guardrails

### Objective

Make the system safe and demo-ready.

### Testing

* [ ] Frontend tests
* [ ] Backend tests
* [ ] API tests
* [ ] Agent tests
* [ ] ML evaluation
* [ ] RAG evaluation
* [ ] End-to-end testing

### Guardrails

* [ ] LLM hallucination protection
* [ ] RAG citation validation
* [ ] Prompt injection testing
* [ ] Missing evidence handling
* [ ] Insufficient evidence response
* [ ] RBAC
* [ ] Human approval
* [ ] Kill switch
* [ ] Structured JSON validation
* [ ] Audit logging

The architecture identifies hallucination, prompt injection, agent coordination failure, false positives, data leakage and unauthorized actions as key failure modes.

---

# Phase 13 — Integration & Deployment

### Objective

Move from development environment to a working deployed demo.

### Frontend

```text
Vercel
```

### Backend

```text
Railway / Render
```

### Tasks

* [ ] Connect frontend to real API
* [ ] Remove unnecessary mock data
* [ ] Configure environment variables
* [ ] Deploy frontend
* [ ] Deploy backend
* [ ] Configure CORS
* [ ] Test production APIs
* [ ] Test authentication
* [ ] Test complete investigation flow

The implementation plan specifically recommends deploying the frontend and backend before the final polish period rather than waiting until the end.

---

# Phase 14 — Final Demo & Hackathon Preparation

### Objective

Create a reliable end-to-end demonstration.

### Demo Cases

#### Case 1 — Clear Fraud

```text
Mule Account
+
Fan-out Pattern
+
High Risk
+
AI Investigation
+
STR Draft
```

#### Case 2 — False Positive

```text
High-volume legitimate merchant
        ↓
System investigates
        ↓
Counter-evidence
        ↓
Case dismissed
```

#### Case 3 — Compliance Investigation

```text
Suspicious Transaction
        ↓
RAG
        ↓
Regulatory Citation
        ↓
AI Recommendation
        ↓
Human Approval
        ↓
Audit Trail
```

### Final Preparation

* [ ] Demo script
* [ ] Pitch deck
* [ ] Architecture diagram
* [ ] Product screenshots
* [ ] Backup screenshots
* [ ] Backup demo video
* [ ] Judge Q&A
* [ ] Production URL verification
* [ ] Full-team rehearsal

---

# 📁 Repository Structure

```text
smart-horizon/
│
├── README.md
├── .gitignore
├── .env.example
├── docker-compose.yml
│
├── docs/
│   ├── implementation-plan.md
│   ├── architecture.md
│   ├── api-contract.md
│   ├── evidence-schema.json
│   ├── database-schema.md
│   ├── user-flow.md
│   ├── uiux-guidelines.md
│   └── demo-script.md
│
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   │
│   ├── public/
│   │   ├── main_logo.png
│   │   ├── favicon.ico
│   │   └── images/
│   │
│   └── src/
│       │
│       ├── main.tsx
│       ├── router.tsx
│       ├── index.css
│       │
│       ├── assets/
│       │   ├── images/
│       │   ├── icons/
│       │   └── illustrations/
│       │
│       ├── components/
│       │   ├── ui/
│       │   ├── layout/
│       │   ├── landing/
│       │   ├── auth/
│       │   ├── dashboard/
│       │   ├── cases/
│       │   ├── investigation/
│       │   ├── reports/
│       │   ├── approval/
│       │   ├── audit/
│       │   └── common/
│       │
│       ├── pages/
│       │   ├── Landing.tsx
│       │   ├── auth/
│       │   └── dashboard/
│       │
│       ├── hooks/
│       ├── services/
│       ├── store/
│       ├── types/
│       ├── data/
│       └── utils/
│
├── backend/
│   ├── requirements.txt
│   ├── main.py
│   │
│   └── app/
│       ├── api/
│       ├── agents/
│       ├── ml/
│       ├── graph/
│       ├── rag/
│       ├── llm/
│       ├── reports/
│       ├── database/
│       ├── services/
│       ├── security/
│       └── utils/
│
├── data/
│   ├── synthetic/
│   ├── regulatory/
│   │   ├── RBI/
│   │   ├── NPCI/
│   │   ├── PMLA/
│   │   ├── FATF/
│   │   └── FIU_IND/
│   └── processed/
│
├── models/
│   ├── xgboost/
│   ├── random_forest/
│   ├── anomaly/
│   └── explainability/
│
├── tests/
│   ├── frontend/
│   ├── backend/
│   ├── agents/
│   ├── ml/
│   ├── rag/
│   └── integration/
│
└── deployment/
    ├── vercel/
    ├── railway/
    └── docker/
```

---

# 👥 Team Responsibilities

| Member   | Role          | Primary Area                                       |
| -------- | ------------- | -------------------------------------------------- |
| Member 1 | Frontend / UI | `frontend/src/components`                          |
| Member 2 | Frontend / UX | `frontend/src/pages`, `landing`, `auth`, `reports` |
| Member 3 | Backend       | `backend/app/api`, `database`, `services`          |
| Member 4 | ML / Graph    | `backend/app/ml`, `graph`                          |
| Member 5 | AI / Agents   | `backend/app/agents`, `llm`, `rag`                 |

---

# 🏆 Hackathon Priority

Not every architecture component has equal priority.

## P0 — Must Have

* [ ] Multi-agent orchestration
* [ ] Risk scoring
* [ ] At least one trained ML model
* [ ] Transaction graph
* [ ] RAG
* [ ] XAI / SHAP
* [ ] LLM investigation
* [ ] Case summary
* [ ] Investigator dashboard
* [ ] Case queue

## P1 — Should Have

* [ ] Timeline
* [ ] Audit reporting
* [ ] STR draft
* [ ] Geo-velocity
* [ ] Velocity analysis

## P2 — If Time Allows

* [ ] IP enrichment
* [ ] Device enrichment
* [ ] Knowledge graph expansion

## Future Scope

* [ ] Real behavioral analytics
* [ ] Real device fingerprinting
* [ ] Consortium device reputation
* [ ] GNN-based fraud-ring detection
* [ ] Advanced behavioral models

This prioritization follows the uploaded architecture's P0/P1/P2/future scope rather than treating every possible feature as mandatory for the hackathon.

---

# 🔄 Final End-to-End Workflow

```text
                SUSPICIOUS TRANSACTION
                         │
                         ▼
                    ALERT INPUT
                         │
                         ▼
                    CASE CREATED
                         │
                         ▼
                    RISK PRIORITY
                         │
                         ▼
                  ORCHESTRATOR
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
       DATA            RISK         COMPLIANCE
       AGENT           AGENT           AGENT
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                  EVIDENCE PACKAGE
                         │
                ┌────────┴────────┐
                ▼                 ▼
              XAI                 RAG
                │                 │
                └────────┬────────┘
                         ▼
                  AI INVESTIGATION
                         │
                         ▼
                    CASE REPORT
                         │
                         ▼
                  HUMAN REVIEW
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
           APPROVE    ESCALATE    REQUEST
              │
              ▼
         MANAGER REVIEW
              │
              ▼
          FINAL ACTION
              │
              ▼
          AUDIT TRAIL
              │
              ▼
          CASE CLOSED
```

## 📌 Core Principle

> **Smart Horizon does not replace the investigator. It gives the investigator the evidence, intelligence, explanation and regulatory context required to make a faster and more informed decision.**

The architecture's central principle is therefore:

**AI recommends → Human decides → System documents.**
