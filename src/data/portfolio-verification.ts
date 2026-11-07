/** Editorial provenance only; never imported by pages or client scripts.
 * The owner clarified that the redesign MD is factual personal context to use publicly.
 * Current CV supplied by the owner resolves roles, periods, scope and AWS certification.
 * Missing URLs and illustrative design examples remain separate from supplied facts.
 */
export const contentSources = {
  ownerConfirmation: 'Owner explicitly approved using the redesign MD as portfolio context in this conversation.',
  brief: 'docs/PORTFOLIO_REDESIGN_CODEX.md',
  currentCv: 'public/Diogo CV.pdf — Diogo_Abregu_CV_NTT_DATA_Software_IA.pdf',
  restored: [
    'Meowlab / FacturaYa purpose, agent workflows, development status and platform design context',
    'Capictive founder role, Jan–Apr 2026, 35 candidates, approximately 5,000 CVs and 10,000 users',
    'M+S Junior Consultant role from July 2026 and marketplace / multi-agent development work',
    'RADAR, CHIMLE and LACCEI 2026 research context',
    'AWS Certified Cloud Practitioner, September 2026',
    'Microsoft Student Ambassadors membership as community participation',
    'Expected graduation December 2027 from the owner-provided brief',
  ],
};

export interface EditorialCheck {
  status: 'TODO_VERIFY';
  field: string;
  source: string;
  reason: string;
}
export const editorialChecks: EditorialCheck[] = [
  { status: 'TODO_VERIFY', field: 'certifications.aws.credentialUrl', source: 'Owner MD and current CV', reason: 'Certification is displayed. No credential URL or badge identifier was supplied, so there is no invented verification button.' },
  { status: 'TODO_VERIFY', field: 'community.microsoft.level / dates', source: 'Owner MD', reason: 'Membership is displayed as community participation. No level, start date, or Microsoft employment is inferred.' },
  { status: 'TODO_VERIFY', field: 'projects.meowlab.websiteUrl; relatedWork.radar / chimle.links', source: 'Owner MD and current CV', reason: 'Descriptions are displayed. Public demo, paper DOI and repository URLs not supplied are not invented.' },
  { status: 'TODO_VERIFY', field: 'projects.capictive.websiteUrl.accessibility', source: 'Existing real capictive.app URL', reason: 'The description, role and supplied metrics are published. The domain still failed TLS/HTTP checks in this environment; its public code is linked instead of offering it as a working demo.' },
  { status: 'TODO_VERIFY', field: 'projects.print-system.specificToolAuthorization / modelProvider', source: 'Owner MD and public code', reason: 'The product purpose and tool-integration engineering focus are displayed. No unprovided authorization protocol, financial action, or model provider is asserted.' },
  { status: 'TODO_VERIFY', field: 'relatedWork.radar.relationshipToMeowlab', source: 'Owner MD and current CV', reason: 'RADAR is included as further engineering work. A standalone product/module classification is left open for a future case study.' },
  { status: 'TODO_VERIFY', field: 'legacy.experience.metrics / legacy.education.percentageClaims', source: 'Historical JSON', reason: 'Numbers absent from the supplied MD/current CV, such as 40% efficiency improvements, are not automatically restored.' },
];
