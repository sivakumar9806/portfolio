// Portfolio Data Store - Siva Kumar Vanjunathan (UI/UX & Product Designer)
// Designed in Pine Labs SignalIQ Aesthetic
const PORTFOLIO_DATA = {
  profile: {
    name: "Siva Kumar Vanjunathan",
    roleTag: "/Introducing/",
    titlePrimary: "PRODUCT & UI/UX DESIGNER",
    titleSecondary: "& WORDPRESS DEVELOPER",
    location: "Chennai, India / Remote Worldwide",
    availability: "Available for Full-Time & Design Engagements",
    statusBadge: "DESIGN SIGNAL ACTIVE",
    email: "vsivakumar6198@gmail.com",
    phone: "+91 8248602760",
    linkedin: "https://linkedin.com/in/siva-kumar-vanjunathan",
    behance: "https://behance.net/sivakumarv1",
    portfolioUrl: "https://behance.net/sivakumarv1",
    resumeUrl: "Siva_Kumar_Resume.pdf",
    bioShort: "Designing intuitive, user-centered digital products for web & mobile. Bridging user research, high-fidelity design systems, and AI-accelerated workflows to craft conversion-focused, accessible digital experiences.",
    stats: [
      { label: "USER INTERFACES SHIPPED", value: "24+", change: "Web & Mobile" },
      { label: "ACCESSIBILITY COMPLIANCE", value: "WCAG 2.1", change: "AAA Ready" },
      { label: "DESIGN-TO-DEV VELOCITY", value: "3.5x", change: "AI Workflow" },
      { label: "PROTOTYPE FIDELITY", value: "100%", change: "Interactive Figma" }
    ]
  },

  roles: [
    {
      id: "product-design",
      label: "01. Product & Interaction Designer",
      subhead: "User-Centered IA & High-Fidelity Interactive Prototypes",
      summary: "Translating complex user journeys into seamless, frictionless UI. Crafting responsive wireframes, design systems, animated transitions, and user-tested flows from discovery to checkout.",
      metrics: {
        methodology: "Design Thinking & Lean UX",
        userResearch: "Interviews & Heuristics",
        figmaFidelity: "Interactive Component Sets",
        usabilityRating: "96% Task Success Rate"
      },
      codeSnippet: `// Figma Design Token System & Interaction Specs
export const DesignSystemTokens = {
  typography: {
    display: 'Space Grotesk, sans-serif',
    editorial: 'Platypi, serif',
    body: 'DM Sans, sans-serif'
  },
  accessibility: {
    minTouchTarget: '48px',
    colorContrastRatio: '4.5:1 (WCAG AA)',
    focusRing: '2px solid #00F29D'
  },
  motion: {
    microInteraction: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    pageTransition: '300ms ease-in-out'
  }
};`
    },
    {
      id: "ai-design-ops",
      label: "02. AI-Powered Design Ops",
      subhead: "Accelerated Ideation, Research & Concept Generation",
      summary: "Leveraging state-of-the-art AI tools (Figma AI, FigJam AI, v0 by Vercel, Lovable, Claude, Gemini, Galileo AI) to rapidly synthesize user insights, generate variants, and compress concept-to-prototype cycles.",
      metrics: {
        ideationSpeed: "4x Concept Velocity",
        toolsMastered: "v0, Lovable, Figma AI, Uizard",
        researchSynthesis: "Automated Persona Mapping",
        workflowEfficiency: "+65% Faster Iteration"
      },
      codeSnippet: `// AI-Assisted Component Prompting & Design Logic
const ComponentSpec = {
  target: 'Mobile Banking Core Navigation',
  guidelines: ['WCAG 2.1 AAA', 'Thumb-Zone Reachability', 'Micro-haptics'],
  aiPipeline: ['FigJam AI Persona Synthesis', 'v0 Interactive Layout Scaffold', 'Figma Auto-Layout Polish'],
  outcome: 'Reduced transaction friction by 32%'
};`
    },
    {
      id: "web-wordpress",
      label: "03. WordPress & Frontend Integrator",
      subhead: "Responsive Web Development & Design System Implementation",
      summary: "Ensuring visual fidelity never gets lost in translation. Building responsive WordPress sites, reusable component libraries, and conversion-optimized landing pages with clean HTML, CSS, and CMS architecture.",
      metrics: {
        cmsMastery: "Custom WordPress & Elementor",
        responsiveBreakpoints: "Desktop, Tablet, Mobile",
        pageSpeedScore: "95+ Mobile Optimization",
        componentReuse: "85% Design System Match"
      },
      codeSnippet: `// Custom WordPress Responsive Theme Hook
function render_accessible_cta_button($text, $url, $aria_label) {
  return sprintf(
    '<a href="%s" class="btn-signal-action" role="button" aria-label="%s"><span>%s</span><svg width="14" height="14">...</svg></a>',
    esc_url($url), esc_attr($aria_label), esc_html($text)
  );
}`
    }
  ],

  comparatorData: {
    traditional: {
      title: "WHAT GENERIC UI/UX SEES",
      badge: "Fragmented & Inaccessible",
      items: [
        { label: "ACCESSIBILITY (WCAG)", val: "Ignored contrast & tiny touch targets", status: "FAIL" },
        { label: "USER RESEARCH", val: "Assumptions without usability validation", status: "HIGH RISK" },
        { label: "PROTOTYPING", val: "Static screenshots with no micro-interactions", status: "STATIC" },
        { label: "DESIGN-TO-DEV HANDOFF", val: "Broken auto-layouts & missing edge cases", status: "FRICTION" },
        { label: "INFORMATION ARCHITECTURE", val: "Cluttered menus and confused user navigation", status: "DROPOFF" }
      ],
      foir: "HIGH BOUNCE RATE",
      status: "POOR UX"
    },
    precision: {
      title: "WHAT SIVA'S DESIGN DELIVERS",
      badge: "100% User-Validated & Accessible",
      items: [
        { label: "WCAG ACCESSIBILITY", val: "Strict 4.5:1+ contrast & 48px touch targets", status: "WCAG AAA" },
        { label: "DATA-DRIVEN RESEARCH", val: "User interviews, persona synthesis & heuristic audits", status: "VALIDATED" },
        { label: "INTERACTIVE FIGMA FLOWS", val: "Fluid micro-interactions & realistic state transitions", status: "100% FIDELITY" },
        { label: "SYSTEMATIC DESIGN TOKENS", val: "Organized Figma components for seamless dev handoff", status: "REUSABLE" },
        { label: "CONVERSION-FIRST IA", val: "Streamlined onboarding & reduced checkout friction", status: "HIGH CONVERSION" }
      ],
      foir: "ZERO FRICTION",
      status: "PRODUCTION READY"
    }
  },

  bentoPillars: [
    {
      num: "01",
      tag: "ACCESSIBILITY & USABILITY AUDITS",
      title: "DIGITAL EXPERIENCES DESIGNED FOR EVERY HUMAN.",
      desc: "Good design is universally accessible. Inspired by real-world bank revamps like Bank of India, I conduct deep WCAG compliance audits, contrast checks, screen reader label optimization, and thumb-friendly touch target architectures.",
      chips: [
        { 
          id: "p1-l1",
          label: "L1", 
          val: "WCAG 2.1 COMPLIANCE",
          specTag: "WCAG_2.1_AAA_SPEC",
          code: `// WCAG 2.1 AA/AAA Compliance Verification Spec
const WCAGComplianceRule = {
  standard: 'WCAG 2.1 Level AAA',
  touchTargets: '>= 48x48 dp across all primary touch CTAs',
  colorContrast: 'Ratio >= 4.5:1 for body text, 7:1 for headers',
  screenReader: 'Explicit aria-labels & semantic heading hierarchy',
  focusOrder: 'Logical keyboard tab sequence & TalkBack support'
};`
        },
        { 
          id: "p1-l2",
          label: "L2", 
          val: "HEURISTIC EVALUATION",
          specTag: "HEURISTIC_EVAL_MAP",
          code: `// Nielsen Norman 10 Usability Heuristics Audit
const HeuristicEvaluation = {
  visibilityOfStatus: 'Real-time telemetry indicators & live feedback',
  matchRealWorld: 'Familiar banking language & thumb-friendly IA',
  userControl: 'One-tap undo, clear cancellation & back states',
  errorPrevention: 'Smart form masking & destructive action confirmation'
};`
        },
        { 
          id: "p1-testing",
          label: "TESTING", 
          val: "MODERATED USABILITY",
          specTag: "USABILITY_TEST_METRICS",
          code: `// Moderated Usability Testing & User Benchmark
const UsabilityTesting = {
  sampleSize: '12 Target Users across 3 demographic segments',
  taskPassRate: '96% on primary fund transfer flow',
  avgTimeToComplete: 'Reduced from 3m 40s to 1m 12s',
  systemUsabilityScale: 'SUS Score: 88.5 (Industry Benchmark: 68.0)'
};`
        },
        { 
          id: "p1-contrast",
          label: "CONTRAST", 
          val: "AAA 7:1 RATIO", 
          highlight: true,
          specTag: "CONTRAST_RATIO_ENGINE",
          code: `// Color Contrast & Token Verification Engine
const ContrastEngine = {
  primaryTextOnDark: '#FFFFFF on #05070A (Ratio: 18.2:1 - AAA Pass)',
  accentEmeraldOnDark: '#00F29D on #05070A (Ratio: 12.4:1 - AAA Pass)',
  dimTextOnCard: '#94A3B8 on #131822 (Ratio: 7.3:1 - AAA Pass)',
  ambientContrastAudit: 'VERIFIED_100%_PASS'
};`
        }
      ],
      interactiveWidget: "accessibility-inspector"
    },
    {
      num: "02",
      tag: "INTERACTIVE PROTOTYPING & MOTION",
      title: "MICRO-INTERACTIONS THAT FEEL TACTILE & ALIVE.",
      desc: "Static mockups cannot communicate product feel. For brands like Lay's, I build end-to-end interactive prototypes with animated transitions, dynamic cart state management, and delight-driven micro-interactions.",
      chips: [
        { 
          id: "p2-l1",
          label: "L1", 
          val: "FIGMA COMPONENTS",
          specTag: "FIGMA_COMPONENT_SPEC",
          code: `// Figma Component Variant Protocol
const ComponentArchitecture = {
  nestedVariants: '48 Reusable Interactive States',
  stateCoverage: ['Default', 'Hover', 'Active', 'Disabled', 'Loading'],
  autoLayoutProps: { fillContainer: true, gap: '12px', padding: '16px' },
  tokenLinkage: 'Signal Architecture Design System Tokens'
};`
        },
        { 
          id: "p2-l2",
          label: "L2", 
          val: "MOTION & PHYSICS",
          specTag: "SPRING_MOTION_PHYSICS",
          code: `// Tactile Motion & Spring Physics Parameters
const MotionPhysics = {
  hoverSpring: { stiffness: 400, damping: 28, mass: 1 },
  pageTransition: '350ms cubic-bezier(0.16, 1, 0.3, 1)',
  cartDrawerSlide: '280ms cubic-bezier(0.25, 1, 0.5, 1)',
  hapticFeedback: 'Web Audio synthesizer click on toggle'
};`
        },
        { 
          id: "p2-flow",
          label: "USER FLOW", 
          val: "DISCOVERY TO CHECKOUT",
          specTag: "ECOM_CONVERSION_FLOW",
          code: `// E-Commerce Conversion Flow Architecture
const FlowProtocol = {
  step1: 'Visual Flavor Explorer -> 60fps 3D card tilt',
  step2: 'Instant Add to Cart -> Badge haptic bounce animation',
  step3: 'Slide-over Cart Drawer -> Zero layout shift transition',
  step4: 'Streamlined One-Tap Checkout -> 3 steps reduced from 6'
};`
        },
        { 
          id: "p2-fidelity",
          label: "FIDELITY", 
          val: "PIXEL-ACCURATE", 
          highlight: true,
          specTag: "FIGMA_FIDELITY_TOKEN",
          code: `// Lay's Brand Prototype Interaction Parameters
const LayMotionProtocol = {
  hoverSpring: { stiffness: 400, damping: 28 },
  productFlipTransition: '350ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  cartDrawerSlide: '280ms ease-out',
  checkoutHaptics: 'Visual ripple validation on confirm'
};`
        }
      ],
      interactiveWidget: "motion-specs"
    },
    {
      num: "03",
      tag: "AI-ACCELERATED DESIGN SYSTEMS",
      title: "SCALING CONCEPTS 4X FASTER WITH AI DESIGN OPS.",
      desc: "Harnessing the latest AI design tools — from Figma AI & FigJam AI to v0 by Vercel, Lovable, Claude, and Galileo AI — to synthesize research notes into user personas, generate layout variants, and accelerate delivery.",
      chips: [
        { 
          id: "p3-l1",
          label: "L1", 
          val: "FIGMA AI & FIGJAM",
          specTag: "AI_PERSONA_SYNTHESIS",
          code: `// FigJam AI Synthesis & Persona Generation
const FigJamAISpec = {
  prompt: 'Synthesize 15 user interview transcripts into 3 personas',
  outputs: ['Primary: Mobile Power User', 'Secondary: Accessibility Focused'],
  painPointsIdentified: 8,
  clusteringSpeed: '10x faster synthesis velocity'
};`
        },
        { 
          id: "p3-l2",
          label: "L2", 
          val: "v0 / LOVABLE / AI",
          specTag: "GENERATIVE_UI_PIPELINE",
          code: `// Generative UI Exploration Pipeline
const RapidGenerativeUI = {
  toolset: ['v0 by Vercel', 'Lovable.dev', 'Galileo AI', 'Claude 3.7'],
  explorationVariants: '12 interactive UI iterations in 2 hours',
  codeHandoff: 'Clean semantic HTML / CSS / Tailwind tokens',
  designRefinement: 'Figma Auto-Layout component polish'
};`
        },
        { 
          id: "p3-synthesis",
          label: "SYNTHESIS", 
          val: "RAPID MAPPING",
          specTag: "AI_OPS_WORKFLOW",
          code: `// Desk Research & Qualitative Synthesis Pipeline
const DesignOpsWorkflow = [
  "1. Desk Research & Transcript Synthesis -> Claude / Gemini",
  "2. Persona & User Journey Mapping -> FigJam AI",
  "3. Rapid UI Layout Exploration -> v0 by Vercel / Lovable",
  "4. High-Fidelity Design System Finalization -> Figma Components"
];`
        },
        { 
          id: "p3-velocity",
          label: "VELOCITY", 
          val: "4X CONCEPT SPEED", 
          highlight: true,
          specTag: "VELOCITY_METRICS_LIVE",
          code: `// Velocity & Output Efficiency Metrics
const VelocityMetrics = {
  conceptToPrototype: '4x faster exploration cycle',
  designSystemConsistency: '90% component token reuse',
  timeToUserTesting: '2 days (previously 2 weeks)',
  stakeholderAlignment: 'Real-time interactive code preview'
};`
        }
      ],
      interactiveWidget: "ai-tool-grid"
    }
  ],

  projects: [
    {
      id: "proj-1",
      slug: "bank-of-india",
      title: "Bank of India: Core Banking Mobile App Revamp",
      subtitle: "Accessibility-First Redesign for Millions of Mobile Banking Users",
      category: "Fintech & Mobile UI/UX",
      featured: true,
      image: "assets/bank-of-india-preview.jpg",
      metrics: {
        accessibility: "WCAG 2.1 AAA",
        taskSuccess: "+42%",
        onboarding: "-60% Time",
        contrastScore: "100% Pass"
      },
      tags: ["Figma", "UI/UX Design", "Accessibility Audit", "WCAG 2.1", "Heuristic Evaluation", "Design System"],
      desc: "Conducted an end-to-end accessibility overhaul and UX redesign for Bank of India's mobile banking app. Restructured complex information architecture, streamlined onboarding and transaction flows, enlarged touch targets, and created a clean minimalist visual system.",
      impact: "Eliminated transaction confusion, improved screen reader compatibility, and reduced average onboarding drop-offs through tested intuitive navigational patterns.",
      liveUrl: "https://behance.net/sivakumarv1",
      githubUrl: "https://linkedin.com/in/siva-kumar-vanjunathan",
      architecturePoints: [
        "Rigorous accessibility audit resolving low-contrast ratios and undersized tap targets",
        "Streamlined fund transfer and bill payment flows reducing 7 steps down to 3",
        "High-fidelity Figma interactive prototype tested with moderated user groups"
      ]
    },
    {
      id: "proj-2",
      slug: "lays-brand",
      title: "Lay's Brand Website: Interactive E-Commerce Experience",
      subtitle: "End-to-End Responsive Prototype with Micro-Interactions",
      category: "Brand, E-Commerce & Motion Design",
      featured: true,
      image: "assets/lays-ecommerce-preview.jpg",
      metrics: {
        prototypeFidelity: "100% Figma",
        interactionFPS: "60 FPS Smooth",
        flowCoverage: "Cart to Checkout",
        components: "45+ Reusable"
      },
      tags: ["Figma", "Interactive Prototyping", "Micro-Interactions", "Motion Design", "Competitor Research"],
      desc: "Designed an engaging, vibrant e-commerce prototype for the iconic Lay's snack brand. Features custom micro-interactions, fluid flavor explorer tabs, animated transitions, and accessible navigation patterns.",
      impact: "Demonstrated realistic user flows for product discovery, flavor customization, and checkout; earned high praise for tactile micro-interactions and responsive adaptability.",
      liveUrl: "https://behance.net/sivakumarv1",
      githubUrl: "https://linkedin.com/in/siva-kumar-vanjunathan",
      architecturePoints: [
        "Desk and competitor research on global FMCG e-commerce best practices",
        "Interactive component states with smart animation and spring physics in Figma",
        "Conversion-focused call-to-action hierarchy and seamless cart drawer patterns"
      ]
    },
    {
      id: "proj-3",
      slug: "landing-pages-showcase",
      title: "Conversion-Focused Landing Pages & Design System",
      subtitle: "Component-Driven Typographic Design System & UI Showcase",
      category: "Web UI & Design Systems",
      featured: true,
      image: "assets/design-system-preview.jpg",
      metrics: {
        componentReuse: "90%",
        responsiveStyles: "Mobile-First",
        typographyHierarchy: "Strict Ratios",
        visualFidelity: "Pixel-Perfect"
      },
      tags: ["Figma", "Design Systems", "Typography", "WordPress Ready", "Visual Design", "Photoshop"],
      desc: "A showcase of high-converting web landing pages built on rigorous typographic hierarchy, modular component reuse, and conversion psychology for SaaS and agency clients.",
      impact: "Established a scalable component library speeding up design-to-development handoffs by 3.5x across client projects.",
      liveUrl: "https://behance.net/sivakumarv1",
      githubUrl: "https://linkedin.com/in/siva-kumar-vanjunathan",
      architecturePoints: [
        "Strict 8pt grid system with consistent spacing tokens and responsive breakpoints",
        "Reusable atomic UI components with auto-layout and nested variant properties",
        "WordPress-ready layout specifications ensuring 1:1 fidelity in final implementation"
      ]
    },
    {
      id: "proj-4",
      slug: "vehonitor-platform",
      title: "Vehonitor Web Platform & Design System",
      subtitle: "End-to-End Product Design & WordPress Implementation",
      category: "Product Design & WordPress",
      featured: false,
      metrics: {
        clientApproval: "100%",
        turnaroundTime: "2 Weeks",
        responsiveness: "All Devices",
        performanceScore: "96 / 100"
      },
      tags: ["Figma", "WordPress", "UI/UX", "Client Management", "Cross-Functional"],
      desc: "Designed and developed responsive web solutions and interactive prototypes at Vehonitor Private Limited, managing direct client relationships and coordinating cross-functional team handoffs.",
      impact: "Delivered scalable, high-quality digital solutions balancing user needs, business goals, and technical feasibility.",
      liveUrl: "https://behance.net/sivakumarv1",
      githubUrl: "https://linkedin.com/in/siva-kumar-vanjunathan",
      architecturePoints: [
        "End-to-end prototyping with micro-interactions and animated transitions",
        "Direct client communication translating business objectives into wireframes",
        "WordPress development ensuring lightning-fast load times and SEO structure"
      ]
    }
  ],

  skills: {
    "UX & Research": [
      { name: "User Flows & Information Architecture (IA)", level: 96, tag: "UX" },
      { name: "Wireframing & Usability Testing", level: 95, tag: "UX" },
      { name: "User Interviews & Persona Synthesis", level: 92, tag: "RESEARCH" },
      { name: "Accessibility Audits (WCAG 2.1 Guidelines)", level: 94, tag: "A11Y" }
    ],
    "Visual, UI & Motion": [
      { name: "Figma & FigJam (Auto-Layout, Tokens, Variants)", level: 98, tag: "FIGMA" },
      { name: "High-Fidelity Visual Systems & Mockups", level: 96, tag: "UI" },
      { name: "Interactive Micro-Interactions & Prototyping", level: 95, tag: "MOTION" },
      { name: "Adobe XD, Photoshop, Illustrator, Miro", level: 90, tag: "TOOLS" }
    ],
    "AI Tools & Web Tech": [
      { name: "AI Design Tools (v0, Lovable, Figma AI, Galileo AI)", level: 94, tag: "AI" },
      { name: "ChatGPT, Claude, Gemini, Copilot for UX Research", level: 96, tag: "AI" },
      { name: "WordPress Development & Elementor", level: 92, tag: "DEV" },
      { name: "Responsive HTML5/CSS3 & Dev Handoff", level: 90, tag: "DEV" }
    ]
  },

  experience: [
    {
      period: "NOV 2025 — PRESENT",
      role: "Product Designer & WordPress Developer",
      company: "Vehonitor Private Limited",
      location: "Chennai, India",
      description: "Leading end-to-end UI/UX design and WordPress development. Creating interactive prototypes with micro-interactions, managing client relationships, and coordinating cross-functional engineering teams.",
      highlights: [
        "Designed end-to-end prototypes with animated transitions and micro-interactions in Figma",
        "Managed client stakeholder relationships and aligned product vision with business goals",
        "Delivered responsive, accessible web solutions with streamlined developer handoffs"
      ]
    },
    {
      period: "OCT 2023 — OCT 2025",
      role: "Freelance UI/UX Designer",
      company: "Independent Design Practice",
      location: "Remote",
      description: "Partnered with global clients to deliver comprehensive UI/UX solutions, wireframes, prototypes, responsive interfaces, and scalable design systems.",
      highlights: [
        "Engineered full accessibility overhauls including Bank of India core banking mobile app revamp",
        "Built e-commerce interactive prototypes with micro-interactions for global brands (Lay's)",
        "Constructed reusable atomic component libraries and conversion-optimized landing pages"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA), General",
      institution: "Pondicherry University",
      period: "July 2022 — May 2024",
      highlight: "Specialized in business strategy, stakeholder management, and data-informed decision making."
    },
    {
      degree: "Bachelor of Engineering (B.E.), Civil Engineering",
      institution: "DMI College of Engineering",
      period: "June 2015 — May 2019",
      highlight: "Developed strong analytical problem-solving and structured design methodologies."
    }
  ],

  faqs: [
    {
      q: "What is your approach to balancing user needs with business goals?",
      a: "I leverage Design Thinking and Lean UX methodologies. By conducting user interviews and heuristic audits early, I identify core user pain points and align them with measurable business KPIs (such as conversion rate, onboarding completion, and task time reduction)."
    },
    {
      q: "How do you leverage AI tools in your UI/UX design workflow?",
      a: "I use AI as a high-speed design co-pilot: using ChatGPT/Claude for desk research and survey synthesis, FigJam AI for persona and user flow ideation, and tools like v0 by Vercel and Galileo AI for rapid layout exploration. This compresses ideation time by 4x, allowing more focus on pixel polish, accessibility, and user validation in Figma."
    },
    {
      q: "How do you ensure accessibility (WCAG) in your designs?",
      a: "Accessibility is integrated from day one: maintaining minimum 4.5:1 color contrast for standard text (7:1 for headers), designing 48x48px touch targets for mobile thumb ergonomics, structuring logical information hierarchy, and writing explicit screen reader labels."
    },
    {
      q: "Can you take a project from concept wireframes to a live WordPress website?",
      a: "Yes. In addition to high-fidelity Figma prototypes and design systems, I have hands-on experience building responsive, fast-loading WordPress websites, ensuring the final live product matches the design with 100% visual fidelity."
    },
    {
      q: "What tools do you use for prototyping and handoff?",
      a: "My primary suite is Figma (Auto-Layout 5.0, Component Variants, Smart Animate, Design Tokens), FigJam, Miro, Adobe Photoshop, Illustrator, and Adobe XD. For development handoff, I provide organized token documentation and annotated responsive specs."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
