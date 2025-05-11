export const complianceData = {
  mainPage: {
    title: "KYD Compliance Mapping by Industry",
    introParagraph: "KYD empowers organizations to meet diverse compliance obligations by providing robust developer identity validation, comprehensive risk detection, and fostering trust-based decision-making throughout the hiring and engagement lifecycle. Discover how KYD aligns with specific industry standards below.",
  },
  industries: [
    {
      slug: "banking",
      name: "Banking & Finance",
      headline: "Banking & Finance Compliance with KYD",
      overviewParagraph: "The banking and financial services sector faces rigorous compliance requirements aimed at preventing money laundering, sanctions evasion, and cyber threats. KYD supports these institutions by helping verify developer identities, monitor for anomalous behavior, and ensure compliance with global financial regulations such as FATF, DORA, and the USA PATRIOT Act.",
      complianceTable: [
        { feature: "Screen against sanctions lists", regulations: "OFAC, FATF, BSA/AML, USA PATRIOT Act, Basel III, DORA Art. 15, 28", details: "Cross-references developer metadata with international watchlists" },
        { feature: "Detect anonymization and proxy behaviors", regulations: "FATF, DORA Art. 6, Basel III, NIST SP 800-53 (AU-6), CISA", details: "Detects disposable emails, inconsistent IP locations, anonymization patterns" },
        { feature: "Continuous trust monitoring", regulations: "DORA Art. 14, NIST SP 800-137, EO 14028 Sec. 10", details: "Monitors trust posture with automated rescoring based on new events or metadata" },
        { feature: "Provide audit trail for access decisions", regulations: "GDPR Art. 5, HIPAA §164.312(b), Basel III, SOC 2 CC7.2", details: "Maintains scoring history, rationale, and flagged risk indicators for auditability" },
        { feature: "Screen for export control and dual-use risk", regulations: "EAR, FATF, Basel III, DFARS 252.204-7012", details: "Flags export-controlled developer origins or affiliations" },
        { feature: "Verify developer identity", regulations: "ISO/IEC 27001 A.6.1.2, NIST SP 800-63-3, DORA Art. 6", details: "Confirms consistent, human, verified identity from public and metadata signals" },
      ],
    },
    {
      slug: "healthcare",
      name: "Healthcare & Life Sciences",
      headline: "Healthcare & Life Sciences Compliance with KYD",
      overviewParagraph: "Organizations in healthcare and life sciences must protect patient data, clinical trial integrity, and proprietary IP. KYD aligns with HIPAA, HITECH, and FDA cybersecurity expectations by validating developer identities and providing audit trails to support secure access to sensitive systems and data.",
      complianceTable: [
        { feature: "Verify developer identity", regulations: "HIPAA, HITECH, FDA 21 CFR Part 11", details: "Establishes persistent digital identity across systems" },
        { feature: "Provide audit trail for access decisions", regulations: "HIPAA §164.312(b), ISO/IEC 27701, GDPR Art. 5", details: "Maintains full scoring history and rationale for access decisions" },
        { feature: "Detect anonymization and proxy behaviors", regulations: "HIPAA, CISA, FDA cybersecurity guidance", details: "Flags temporary emails, anonymized geolocation activity, and unusual patterns" },
        { feature: "Continuous trust monitoring", regulations: "HIPAA risk management, NIST SP 800-137", details: "Automated rescoring based on ongoing developer metadata and behavior" },
      ],
    },
    {
      slug: "defense",
      name: "Defense & Aerospace",
      headline: "Defense & Aerospace Compliance with KYD",
      overviewParagraph: "Defense and aerospace firms operate under stringent national security mandates such as ITAR, DFARS, and CMMC. KYD helps prevent adversarial access to sensitive systems by screening developers for export control risk, anonymization behaviors, and identity inconsistencies.",
      complianceTable: [
        { feature: "Screen for export control and dual-use risk", regulations: "ITAR, DFARS, EAR, CMMC", details: "Detects affiliations with controlled regions or entities, screens for dual-use risk" },
        { feature: "Verify developer identity", regulations: "CMMC, ITAR", details: "Ensures human and verified identity for sensitive codebases" },
        { feature: "Provide audit trail for access decisions", regulations: "CMMC, DFARS 252.204-7012", details: "Maintains complete traceability of trust decisions and rationale" },
        { feature: "Detect anonymization and proxy behaviors", regulations: "CMMC, ITAR", details: "Flags burner identities and foreign-origin behavioral inconsistencies" },
      ],
    },
    {
      slug: "energy",
      name: "Critical Infrastructure & Energy",
      headline: "Critical Infrastructure & Energy Compliance with KYD",
      overviewParagraph: "Operators of critical infrastructure—including energy, utilities, and water systems—must comply with standards from FERC, NERC CIP, CISA, and the EPA. KYD enables real-time detection of insider threats and developer behaviors that could signal risk to supervisory control and data acquisition (SCADA) and industrial control systems (ICS).",
      complianceTable: [
        { feature: "Detect anomalous developer behavior", regulations: "FERC, DOE, NERC CIP, CISA, EPA", details: "Identifies time-of-day anomalies, IP geolocation changes, and risk spikes" },
        { feature: "Continuous trust monitoring", regulations: "NERC CIP, CISA, NIST SP 800-137", details: "Performs real-time rescoring as threats and behaviors evolve" },
        { feature: "Screen against sanctions lists", regulations: "OFAC, FATF, DOE, CISA", details: "Cross-matches public and metadata signals against sanctions lists" },
      ],
    },
    {
      slug: "telecom",
      name: "Telecommunications & Internet Infrastructure",
      headline: "Telecommunications & Internet Infrastructure Compliance with KYD",
      overviewParagraph: "Telecommunications firms and internet backbone providers must secure the integrity of their systems from infiltration, surveillance, or sabotage. KYD supports compliance with FCC, Team Telecom, and EO 13913 by identifying anonymized behaviors and verifying developer provenance across geographies.",
      complianceTable: [
        { feature: "Detect anonymization and proxy behaviors", regulations: "FCC, Team Telecom, EO 13913", details: "Identifies location inconsistencies and use of anonymizing infrastructure" },
        { feature: "Verify developer identity", regulations: "FCC, Team Telecom", details: "Confirms verified, persistent digital identity" },
        { feature: "Continuous trust monitoring", regulations: "EO 13913, CISA", details: "Recalculates trust posture based on behavior and environmental changes" },
      ],
    },
    {
      slug: "government",
      name: "Government & Public Sector",
      headline: "Government & Public Sector Compliance with KYD",
      overviewParagraph: "Government agencies and digital service contractors face oversight from FISMA, FedRAMP, and various executive orders. KYD enhances zero-trust implementation by delivering persistent developer identity verification and audit-ready trust scoring.",
      complianceTable: [
        { feature: "Provide audit trail for trust decisions", regulations: "FISMA, FedRAMP, NIST SP 800-53", details: "Delivers full trust scoring breakdown and rationale in audit-friendly format" },
        { feature: "Verify developer identity", regulations: "FISMA, NIST SP 800-63", details: "Ensures only authenticated, trustworthy developers are onboarded" },
        { feature: "Screen for sanctions and geopolitical risk", regulations: "OFAC, Team Telecom, EO 13913", details: "Surfaces links to sanctioned regions or flagged affiliations" },
      ],
    },
    {
      slug: "semiconductor",
      name: "High-Tech & Semiconductor",
      headline: "High-Tech & Semiconductor Compliance with KYD",
      overviewParagraph: "High-tech firms, especially in AI and semiconductor design, must comply with EAR, the CHIPS Act, and international trade controls. KYD supports export control compliance and risk visibility by flagging dual-use concerns and emerging behaviors such as AI-generated code contributions.",
      complianceTable: [
        { feature: "Screen for export control and dual-use risk", regulations: "EAR, CHIPS Act, EU AI Act", details: "Maps developer location and flags export-sensitive affiliations" },
        { feature: "Flag LLM-generated or AI-assisted contributions", regulations: "EU AI Act, EO 14028, ISO/IEC 42001", details: "Surfaces statistical indicators of code generation by LLMs" },
        { feature: "Provide audit trail for contributor access", regulations: "SOC 2, ISO/IEC 27701, EAR", details: "Generates evidence-based access scoring and event tracking" },
      ],
    }
  ]
}; 