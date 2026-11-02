/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no component changes required.
 */

export const profile = {
  name: "Arul Mangai Nayage S",
  shortName: "Arul Mangai Nayage",
  monogram: "AM.",
  role: "AI & Data Engineer",
  location: "Bengaluru, India",
  email: "arulmangainayages@gmail.com",
  availability: "Open to opportunities",
  // TODO: replace with your profile URLs
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  // TODO: drop your CV at public/resume.pdf, then set this to "/resume.pdf".
  // The "Résumé" button only renders when this is a non-empty string.
  resumeUrl: "",
};

export const nav = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "What I Do", id: "what-i-do" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export const hero = {
  eyebrow: "Hello, I'm Arul Mangai Nayage",
  headlineLead: "Engineering",
  headlineAccent: "Intelligence.",
  headlineTail: "Scaling Data.",
  description:
    "I'm an AI & Data Engineer building intelligent applications, autonomous AI agents, and scalable data pipelines that transform complex business problems into practical solutions.",
  highlights: [
    { value: "2+ Years", label: "Experience", tone: "on-surface" },
    { value: "AI + Data", label: "Engineering", tone: "primary" },
    { value: "Bengaluru", label: "India", tone: "secondary" },
  ],
  badges: [
    { label: "Agentic AI", dot: "primary", position: "top-right" },
    { label: "LLM Engineering", dot: "secondary", position: "middle-left" },
    { label: "Data Systems", dot: "primary-container", position: "bottom-right" },
  ],
};

export const marquee = [
  "Generative AI",
  "Agentic Systems",
  "Data Engineering",
  "Machine Learning",
  "RAG Pipelines",
  "AWS Cloud",
];

export const about = {
  eyebrow: "01 / About Me",
  heading: "Building intelligence. Engineering the data behind it.",
  body: [
    "I'm a results-driven AI & Data Engineer with 2+ years of experience across Machine Learning, Generative AI, Agentic AI, and Data Engineering. My work focuses on building intelligent applications, LLM-powered multi-agent systems, RAG pipelines, tool-integrated AI agents, and robust data ingestion and ETL pipelines across enterprise data sources.",
    "I enjoy transforming complex business requirements into scalable technical solutions, combining AI capabilities with reliable data infrastructure.",
  ],
  facts: [
    {
      label: "Methodology",
      value: "Algorithmic Precision + Operational Rigor",
      tone: "secondary",
    },
    {
      label: "Architecture",
      value: "Multi-Tenant Agentic Frameworks",
      tone: "primary",
    },
  ],
  schematic: {
    title: "System Schematic: AI Agent Retrieval Fabric",
    version: "v2.4 [Deployed]",
    layers: [
      {
        name: "Agentic Orchestration Layer",
        detail: "LangGraph Multi-Agent Workflows & Context Router",
        chip: "Stateful",
        tone: "secondary",
        connector: "Tool Calling & Embeddings",
      },
      {
        name: "Hybrid Knowledge Index (RAG)",
        detail: "Dense Vector Search + Dense Re-ranking Pipeline",
        chip: "<140ms",
        tone: "primary",
        connector: "CDC Ingestion & Cleansing",
      },
      {
        name: "Enterprise Data Foundation",
        detail: "AWS S3 Bronze/Silver/Gold Lakehouse & Glue Spark",
        chip: "ACID Medallion",
        tone: "tertiary",
      },
    ],
    footer: ["Continuous Integration / Automated Validation", "Zero-Drift Telemetry"],
  },
};

export const capabilities = {
  eyebrow: "02 / What I Do",
  heading: "Where intelligence meets engineering.",
  items: [
    {
      index: "01",
      title: "Agentic AI & Multi-Agent Systems",
      description:
        "Building intelligent agents that reason, interact with tools, and orchestrate complex workflows.",
      tags: ["LangGraph", "MCP", "Agentic AI", "LLMs"],
    },
    {
      index: "02",
      title: "Generative AI & RAG",
      description:
        "Developing LLM-powered applications and retrieval pipelines that make enterprise knowledge accessible and actionable.",
      tags: ["LLMs", "RAG", "LangGraph", "Python"],
    },
    {
      index: "03",
      title: "Machine Learning & Computer Vision",
      description:
        "Creating machine learning solutions for image understanding, OCR, prediction, and intelligent automation.",
      tags: ["YOLOv8", "OpenCV", "TensorFlow", "ONNX"],
    },
    {
      index: "04",
      title: "Data Engineering",
      description:
        "Engineering scalable enterprise data pipelines that ingest, transform, validate, and organize data from multiple sources into high-fidelity lakes and analytical warehouses.",
      tags: ["AWS Glue", "Spark", "AWS S3", "Athena", "ETL Pipelines", "Databricks"],
      wide: true,
    },
    {
      index: "05",
      title: "Backend & Cloud Engineering",
      description:
        "Building backend services and cloud-based architectures for intelligent applications and data platforms.",
      tags: ["Python", "FastAPI", "SQL", "AWS"],
    },
  ],
};

export const projects = {
  eyebrow: "03 / Selected Work",
  heading: "Turning complex challenges into engineered solutions.",
  items: [
    {
      id: "salesforce-developer-agent",
      title: "Salesforce Developer Agent",
      category: "Agentic AI / Developer Automation",
      description:
        "An autonomous multi-agent developer system featuring deep context orchestration, real-time code generation for Apex and LWC components, and seamless IDE integration via Model Context Protocol (MCP).",
      tags: ["LangGraph", "CopilotKit", "MCP Client", "Next.js"],
      metric: "Status: Orchestration pipeline active",
      tone: "primary",
      visual: "agent",
    },
    {
      id: "ocr-meter-reader",
      title: "OCR Meter Reader",
      category: "Computer Vision / OCR Automation",
      description:
        "Automated computer vision pipeline classifying over 12 electric and water meter models, detecting 7-segment and LCD digital displays, and extracting calibrated readings under diverse lighting and camera angles.",
      tags: ["Python", "YOLOv8", "OCR", "OpenCV", "ONNX Runtime"],
      metric: "99.2% accuracy across benchmark dataset",
      tone: "secondary",
      visual: "ocr",
    },
    {
      id: "enterprise-data-lake",
      title: "Enterprise Data Lake & ETL Pipeline",
      category: "Data Engineering / AWS Cloud",
      description:
        "Scalable AWS medallion architecture orchestrating multi-source ingestion (SAP, Salesforce, SQL Server, Excel) through raw, silver, and gold tiers with automated change data capture (CDC), partition pruning, and daily reconciliation.",
      tags: ["AWS S3", "AWS Glue", "Spark", "Athena", "Python"],
      metric: "Ingestion volume: >1.5 TB/week",
      tone: "primary-container",
      visual: "lakehouse",
    },
    {
      id: "llm-sql-assistant",
      title: "LLM-Based SQL Query Assistant",
      category: "Generative AI / Natural Language to SQL",
      description:
        "A conversational database co-pilot converting unstructured natural language into syntactically valid, schema-aware SQL queries with zero-shot query guardrails and interactive table evaluation.",
      tags: ["LLM", "SQL", "FastAPI", "React"],
      metric: "Syntax compliance: 99.4% first-pass",
      tone: "primary",
      visual: "sql",
    },
  ],
};

export const experience = {
  eyebrow: "04 / Professional Experience",
  heading: "Experience built through real-world engineering.",
  items: [
    {
      title: "Associate AI Engineer",
      company: "Appstrail Technology Pvt Ltd",
      period: "June 2025 – Present",
      mode: "On-site",
      tone: "primary",
      description:
        "Leading AI design and implementation workflows for mission-critical client projects. Developing production-ready multi-agent workflows and high-throughput data processing systems.",
      highlights: [
        {
          label: "Key Initiative 01",
          title: "Product Recommendation System",
          description:
            "Built an AI-powered vector recommendation engine tailored to dynamic inventory catalogues.",
          tone: "secondary",
        },
        {
          label: "Key Initiative 02",
          title: "Planogram Analysis System",
          description:
            "Designed computer vision models for retail shelf compliance and automated Share of Shelf optimization.",
          tone: "primary",
        },
        {
          label: "Key Initiative 03",
          title: "Internal Product Support Chatbot",
          description:
            "Engineered a multi-tenant enterprise RAG assistant with conversational routing and live telemetry.",
          tone: "muted",
        },
      ],
      columns: 3,
    },
    {
      title: "AI/ML Intern",
      company: "Appstrail Technology Pvt Ltd",
      period: "August 2024 – June 2025",
      mode: "On-site",
      tone: "secondary",
      description:
        "Formed core hands-on engineering foundation spanning computer vision, natural language processing, automated workflow bots, and data pipeline structuring.",
      highlights: [
        {
          label: "Key Project",
          title: "Meter Reading Extraction System",
          description:
            "Researched and trained YOLO-based computer vision architecture for automatic identification of utility meters and alphanumeric readout parsing.",
          tone: "secondary",
        },
        {
          label: "Key Project",
          title: "Google Meet Automated Scheduler",
          description:
            "Developed automated scheduling bot integrating Google Calendar and Workspace APIs with natural language appointment parsing.",
          tone: "primary",
        },
      ],
      columns: 2,
    },
  ],
};

export const skills = {
  eyebrow: "05 / Technical Skills",
  heading: "The technologies behind my work.",
  groups: [
    {
      title: "Programming",
      tone: "primary",
      items: ["Python", "SQL", "C", "HTML", "CSS"],
    },
    {
      title: "AI / Generative AI",
      tone: "secondary",
      items: ["LangGraph", "RAG", "Agentic AI", "LLMs", "MCP"],
    },
    {
      title: "Machine Learning",
      tone: "tertiary",
      items: [
        "NumPy",
        "Pandas",
        "TensorFlow",
        "Scikit-learn",
        "Matplotlib",
        "YOLOv8",
        "OpenCV",
        "ONNX Runtime",
      ],
    },
    {
      title: "Cloud / Data Engineering",
      tone: "primary-container",
      items: [
        "AWS S3",
        "AWS Glue",
        "Spark",
        "Athena",
        "ETL",
        "Data Lakes",
        "Databricks",
      ],
      wide: true,
    },
    {
      title: "Database & Tools",
      tone: "secondary",
      items: ["MSSQL", "SQL", "Tableau"],
      footnote: "Data Warehousing & BI Telemetry Ready",
    },
  ],
};

export const education = {
  eyebrow: "06 / Education",
  heading: "Academic foundation.",
  degreeLabel: "Bachelor of Technology",
  degree: "Information Technology",
  institution: "Sri Ramakrishna Engineering College, Coimbatore",
  score: "CGPA: 8.45",
  period: "2021 – 2025",
  description:
    "Rigorous curriculum focused on distributed systems, database design, algorithms, machine learning principles, and modern enterprise software engineering paradigms.",
};

export const recognition = {
  eyebrow: "07 / Recognition",
  heading: "Achievements & Publications.",
  items: [
    {
      label: "Research Publication",
      title: "Prediction of FMCG Share Prices in India Using LSTM",
      description:
        "Scopus-indexed research paper presented at Swinburne University, Malaysia. Built deep learning recurrent networks evaluating time-series financial dynamics.",
      source: "Swinburne University, Malaysia",
      date: "Oct 2023",
      tone: "secondary",
    },
    {
      label: "Ideathon 6.0",
      title: "Runner-Up (Open Innovation Contest)",
      description:
        "Recognized for designing an intelligent systems prototype addressing real-world problem constraints through engineering innovation at SREC Coimbatore.",
      source: "SREC Coimbatore",
      date: "Feb 2024",
      tone: "primary",
    },
    {
      label: "Innovate'23",
      title: "Best Social Impact Award",
      description:
        "Awarded top honors among 200+ competing engineering teams for developing applied data technology with demonstrable community social utility.",
      source: "200+ Teams Evaluated",
      date: "Dec 2023",
      tone: "secondary",
    },
  ],
};

export const contact = {
  eyebrow: "08 / Contact",
  heading: "Let's engineer something meaningful.",
  description:
    "Interested in AI innovation, intelligent applications, data engineering, or building solutions that make a difference? Let's connect.",
  subjects: [
    "AI Architecture",
    "Data Engineering",
    "Multi-Agent Systems",
    "Consultation",
  ],
};
