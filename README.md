smart-horizon/
│
├── README.md
├── .gitignore
├── .env.example
├── docker-compose.yml
│
├── docs/
│   ├── implementation_plan.md
│   ├── architecture.md
│   ├── api-contract.md
│   ├── evidence-schema.json
│   ├── database-schema.md
│   ├── user-flow.md
│   ├── uiux-guidelines.md
│   └── demo-script.md
│
├── frontend/
│   │
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── index.html
│   │
│   ├── public/
│   │   ├── main_logo.png
│   │   ├── favicon.ico
│   │   └── images/
│   │       └── ...
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
│       │   │
│       │   ├── ui/
│       │   │   ├── Button.tsx
│       │   │   ├── Card.tsx
│       │   │   ├── Badge.tsx
│       │   │   ├── Modal.tsx
│       │   │   ├── Tooltip.tsx
│       │   │   ├── Tabs.tsx
│       │   │   ├── Dropdown.tsx
│       │   │   ├── Input.tsx
│       │   │   ├── Select.tsx
│       │   │   ├── Skeleton.tsx
│       │   │   └── EmptyState.tsx
│       │   │
│       │   ├── layout/
│       │   │   ├── Navbar.tsx
│       │   │   ├── Sidebar.tsx
│       │   │   ├── DashboardLayout.tsx
│       │   │   ├── PageHeader.tsx
│       │   │   └── Footer.tsx
│       │   │
│       │   ├── landing/
│       │   │   ├── HeroSection.tsx
│       │   │   ├── ProblemSection.tsx
│       │   │   ├── InvestigatorSection.tsx
│       │   │   ├── AgentArchitecture.tsx
│       │   │   ├── RiskIntelligence.tsx
│       │   │   ├── ExplainabilitySection.tsx
│       │   │   ├── GraphSection.tsx
│       │   │   ├── ComplianceSection.tsx
│       │   │   ├── InvestigationFlow.tsx
│       │   │   ├── ReportSection.tsx
│       │   │   ├── HumanDecisionSection.tsx
│       │   │   ├── ThreatWatch.tsx
│       │   │   ├── FAQSection.tsx
│       │   │   ├── FinalCTA.tsx
│       │   │   └── Footer.tsx
│       │   │
│       │   ├── auth/
│       │   │   ├── RoleSelector.tsx
│       │   │   ├── LoginForm.tsx
│       │   │   ├── MFAForm.tsx
│       │   │   └── AuthLayout.tsx
│       │   │
│       │   ├── dashboard/
│       │   │   ├── DashboardHeader.tsx
│       │   │   ├── StatsCards.tsx
│       │   │   ├── RiskOverview.tsx
│       │   │   ├── CaseStatusChart.tsx
│       │   │   ├── RiskTrendChart.tsx
│       │   │   └── RecentCases.tsx
│       │   │
│       │   ├── cases/
│       │   │   ├── CaseQueue.tsx
│       │   │   ├── CaseCard.tsx
│       │   │   ├── CaseFilters.tsx
│       │   │   ├── CaseStatusBadge.tsx
│       │   │   ├── SLATimer.tsx
│       │   │   └── CasePriority.tsx
│       │   │
│       │   ├── investigation/
│       │   │   ├── CaseOverview.tsx
│       │   │   ├── EvidencePanel.tsx
│       │   │   ├── RiskScore.tsx
│       │   │   ├── WhyFlagged.tsx
│       │   │   ├── SHAPChart.tsx
│       │   │   ├── CounterEvidence.tsx
│       │   │   ├── Counterfactual.tsx
│       │   │   ├── TransactionGraph.tsx
│       │   │   ├── InvestigationTimeline.tsx
│       │   │   ├── AIInvestigation.tsx
│       │   │   ├── CompliancePanel.tsx
│       │   │   └── RecommendedActions.tsx
│       │   │
│       │   ├── reports/
│       │   │   ├── InvestigationReport.tsx
│       │   │   ├── STRDraft.tsx
│       │   │   ├── CTRDraft.tsx
│       │   │   ├── FMRDraft.tsx
│       │   │   ├── AuditReport.tsx
│       │   │   └── ReportExport.tsx
│       │   │
│       │   ├── approval/
│       │   │   ├── ApprovalPanel.tsx
│       │   │   ├── ApprovalHistory.tsx
│       │   │   ├── EscalationModal.tsx
│       │   │   └── DecisionButtons.tsx
│       │   │
│       │   ├── audit/
│       │   │   ├── AuditTimeline.tsx
│       │   │   ├── AuditTable.tsx
│       │   │   └── ModelDecisionLog.tsx
│       │   │
│       │   └── common/
│       │       ├── RiskBadge.tsx
│       │       ├── AgentStatus.tsx
│       │       ├── ConfidenceBadge.tsx
│       │       ├── SourceCitation.tsx
│       │       └── LoadingState.tsx
│       │
│       ├── pages/
│       │   ├── Landing.tsx
│       │   │
│       │   ├── auth/
│       │   │   ├── SelectRole.tsx
│       │   │   ├── Login.tsx
│       │   │   └── MFA.tsx
│       │   │
│       │   ├── dashboard/
│       │   │   ├── Dashboard.tsx
│       │   │   ├── Cases.tsx
│       │   │   ├── CaseDetails.tsx
│       │   │   ├── Investigation.tsx
│       │   │   ├── Reports.tsx
│       │   │   ├── Approvals.tsx
│       │   │   ├── Audit.tsx
│       │   │   └── Settings.tsx
│       │   │
│       │   └── errors/
│       │       ├── NotFound.tsx
│       │       └── Unauthorized.tsx
│       │
│       ├── hooks/
│       │   ├── useCases.ts
│       │   ├── useCase.ts
│       │   ├── useInvestigation.ts
│       │   ├── useTheme.ts
│       │   └── useAuth.ts
│       │
│       ├── services/
│       │   ├── api.ts
│       │   ├── caseService.ts
│       │   ├── investigationService.ts
│       │   ├── reportService.ts
│       │   └── authService.ts
│       │
│       ├── store/
│       │   ├── authStore.ts
│       │   ├── caseStore.ts
│       │   └── uiStore.ts
│       │
│       ├── types/
│       │   ├── case.ts
│       │   ├── investigation.ts
│       │   ├── evidence.ts
│       │   ├── report.ts
│       │   ├── user.ts
│       │   └── api.ts
│       │
│       ├── data/
│       │   ├── mockCases.ts
│       │   ├── mockInvestigation.ts
│       │   └── mockReports.ts
│       │
│       └── utils/
│           ├── formatters.ts
│           ├── riskUtils.ts
│           └── dateUtils.ts
│
├── backend/
│   │
│   ├── requirements.txt
│   ├── .env
│   ├── main.py
│   │
│   └── app/
│       │
│       ├── main.py
│       │
│       ├── api/
│       │   ├── cases.py
│       │   ├── alerts.py
│       │   ├── investigations.py
│       │   ├── reports.py
│       │   ├── approvals.py
│       │   ├── audit.py
│       │   └── auth.py
│       │
│       ├── agents/
│       │   ├── orchestrator.py
│       │   ├── data_agent.py
│       │   ├── risk_agent.py
│       │   ├── compliance_agent.py
│       │   ├── reason_agent.py
│       │   ├── report_agent.py
│       │   └── decision_agent.py
│       │
│       ├── ml/
│       │   ├── train_xgboost.py
│       │   ├── train_random_forest.py
│       │   ├── anomaly_detection.py
│       │   ├── predict.py
│       │   ├── shap_explainer.py
│       │   └── models/
│       │
│       ├── graph/
│       │   ├── transaction_graph.py
│       │   ├── graph_analysis.py
│       │   ├── pattern_detection.py
│       │   └── graph_serializer.py
│       │
│       ├── rag/
│       │   ├── ingest.py
│       │   ├── retriever.py
│       │   ├── embeddings.py
│       │   ├── vector_store.py
│       │   └── citations.py
│       │
│       ├── llm/
│       │   ├── client.py
│       │   ├── prompts/
│       │   │   ├── investigation.txt
│       │   │   ├── compliance.txt
│       │   │   ├── report.txt
│       │   │   └── orchestrator.txt
│       │   └── schemas.py
│       │
│       ├── reports/
│       │   ├── investigation_report.py
│       │   ├── str_generator.py
│       │   ├── ctr_generator.py
│       │   ├── fmr_generator.py
│       │   └── pdf_generator.py
│       │
│       ├── database/
│       │   ├── database.py
│       │   ├── models.py
│       │   ├── schemas.py
│       │   └── seed.py
│       │
│       ├── services/
│       │   ├── case_service.py
│       │   ├── investigation_service.py
│       │   ├── approval_service.py
│       │   └── audit_service.py
│       │
│       ├── security/
│       │   ├── auth.py
│       │   ├── rbac.py
│       │   ├── permissions.py
│       │   └── audit.py
│       │
│       └── utils/
│           ├── logging.py
│           ├── validators.py
│           └── config.py
│
├── data/
│   │
│   ├── synthetic/
│   │   ├── customers.csv
│   │   ├── transactions.csv
│   │   ├── alerts.csv
│   │   ├── devices.csv
│   │   └── cases.csv
│   │
│   ├── regulatory/
│   │   ├── RBI/
│   │   ├── NPCI/
│   │   ├── PMLA/
│   │   ├── FATF/
│   │   └── FIU_IND/
│   │
│   └── processed/
│       ├── features/
│       └── embeddings/
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
