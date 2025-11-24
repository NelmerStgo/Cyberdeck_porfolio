export const profileThemedData = {
    title: "BREACH PROTOCOL: OPERATOR ARCHIVE",
    operatorId: "OPERATOR: NELMER_SANTIAGO",
    displayName: "NELMER SANTIAGO PADRÓN",
    protocolRole: "SYSTEMS ENGINEER (FRONTEND ARCHITECT)",
    coreSynopsis:
        "SYSTEMS ENGINEER SPECIALIZING IN FRONTEND ARCHITECTURE. PROTOCOL OPTIMIZED FOR REACT / TYPESCRIPT ECOSYSTEMS. FOCUS: HIGH-PERFORMANCE INTERFACES & UX.",
    artifacts: [
        {
            id: "A-001",
            label: "DAEMON: RESUME.PDF",
            description: "PROFILE DAEMON — FULL CV / EXPORTABLE",
            status: "DOWNLOAD READY",
            meta: { version: "2025-11", size: "220KB", lastUpdated: "2025-11-01T09:30Z", link: "/assets/daemons/resume.pdf" }
        },
        {
            id: "A-002",
            label: "ARTIFACT: PORTFOLIO-SHARD",
            description: "LIVE DEMO COLLECTION — UI / UX HIGHLIGHTS",
            status: "AVAILABLE",
            meta: { preview: "/demo/index.html", lastUpdated: "2025-09-20T15:00Z" }
        },
        {
            id: "A-003",
            label: "BUILD: DEMO-BUNDLE",
            description: "PRODUCTION-BUILD (MINIFIED) — SAMPLE DEPLOY",
            status: "ARCHIVED",
            meta: { tag: "demo-v1.0", created: "2024-06-02T12:00Z" }
        },
        {
            id: "A-004",
            label: "WHITEPAPER: UI-PERF",
            description: "FIELD LOG — OPTIMIZATIONS & LESSONS LEARNED",
            status: "AVAILABLE",
            meta: { conference: "UICON 2024", link: "/assets/papers/ui-perf.pdf" }
        }
    ],
    operations: [
        {
            id: "OP-2024-01",
            title: "FRONTEND OVERHAUL",
            role: "LEAD ARCHITECT",
            period: "2023 — 2024",
            outcome: "DEPLOYED (v2.1)",
            brief: "Rediseño de la arquitectura UI con foco en rendimiento y accesibilidad. Resultados: reducción de bundle 35%, TTI mejorado."
        },
        {
            id: "OP-2022-07",
            title: "DESIGN SYSTEM RUNTIME",
            role: "SYSTEMS INTEGRATOR",
            period: "2021 — 2022",
            outcome: "INTEGRATED",
            brief: "Implementación de sistema de diseño y librería de componentes para múltiples productos."
        }
    ],
    accreditations: [
        {
            id: "C-2018",
            cert: "ROOT_CERT: B.S. COMPUTER SYSTEMS",
            institution: "TECNOLÓGICO INSTITUTO X",
            issued: "2018"
        },
        {
            id: "C-2020",
            cert: "TRUSTED_MODULE: ADV WEB ARCH",
            institution: "INTENSIVE BOOTCAMP Y",
            issued: "2020"
        }
    ],
    shortcuts: [
        {
            id: "S-01",
            name: "BUILD & PACK",
            code: "npm run build && npm run pack",
            description: "Compila y empaqueta artefactos para deploy."
        },
        {
            id: "S-02",
            name: "LAUNCH DEMO",
            code: "serve ./dist -p 8080",
            description: "Servir demo localmente."
        }
    ],
    auditLogs: [
        { id: "L-01", event: "PROFILE DAEMON UPDATED", ts: "2025-11-01T09:30Z" },
        { id: "L-02", event: "ARTIFACT UPLOADED: PORTFOLIO-SHARD", ts: "2025-09-20T15:00Z" },
        { id: "L-03", event: "OPERATION DEPLOYED: FRONTEND OVERHAUL", ts: "2024-12-15T21:00Z" }
    ]
};