export type NavSection = 'home' | 'about' | 'projects' | 'skills' | 'contact'

export type NavItem = {
  id: NavSection
  label: string
}

export type Project = {
  id: string
  title: string
  category: string
  summary: string
  statusNote?: string
  archived?: boolean
  focus: string
  impact: string
  media?: Array<{
    caption: string
    imageId: 'usage-pipeline' | 'risk-lab-2-0' | 'risk-lab' | 'abc-ppc' | 'abc-overlay'
  }>
  stack: Array<string | ProjectStackItem>
  highlights: string[]
  links?: Array<{
    label: string
    href: string
  }>
}

export type ProjectStackItem = {
  label: string
  tone?: 'warm'
}

export type SkillGroup = {
  id: string
  title: string
  summary: string
  capabilities: string[]
  tools: string[]
}

export type TimelineMilestone = {
  id: string
  year: string
  title: string
  side: 'left' | 'right'
  detailId: string
}

export type TechLogoId =
  | 'oceanbase'
  | 'starrocks'
  | 'kafka'
  | 'flink'
  | 's3'
  | 'iceberg'
  | 'spark'
  | 'airflow'
  | 'java'
  | 'springboot'
  | 'timescale'
  | 'react'
  | 'typescript'

export type TechStackItem = {
  name: string
  logoId: TechLogoId
}

export type TimelineDetailCard = {
  id: string
  yearLabel: string
  title: string
  logoId: 'nus' | 'hpb' | 'uoft' | 'infinity' | 'vanguard' | null
  summary: string
  body: string[]
  courseResultsHeading?: string
  courseResults?: Array<{
    label: string
    grade: string
    href?: string
  }>
  notableMentions?: string[]
  skillsLabel?: string
  skills?: string[]
  techStack?: TechStackItem[]
  imageId?: 'nus-groupmates' | 'hpb-interns' | 'uoft-exchange' | 'usage-pipeline' | null
  imageCaption?: string
  imageHref?: string
  tags: string[]
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Chris Yong',
  role: 'Early Career Data Professional',
  // heroSummary:
  //   'Welcome to my portfolio site!',
  // heroLead:
  //   'Portfolio site for employers, collaborators, and teams looking for someone who can move between modeling, engineering, and usable product thinking.',
  aboutLead:
    'My work sits at the intersection of analytical rigor, implementation discipline, and stakeholder clarity.',
  aboutBody:
    'I am most energized by problems where the output has to be both technically credible and practically useful. That usually means shaping raw data into workflows, interfaces, and explanations that let other people trust what they are seeing.',
  aboutBodyExtended:
    'Whether the work starts as risk analysis, inference, experimentation, or reporting, I care about how the final system behaves in the hands of its audience. Good analytics should not stop at accuracy; it should land clearly, travel well, and hold up under pressure.',
}

export const principles = [
  {
    title: 'Decision-first thinking',
    description:
      'I like outputs that help someone decide, not just outputs that prove I did the analysis.',
  },
  {
    title: 'Engineering that reads clearly',
    description:
      'Systems should be structured enough to maintain, extend, and explain without friction.',
  },
  {
    title: 'Calm communication',
    description:
      'When a problem is technical or high stakes, clarity becomes part of the technical work itself.',
  },
]

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'vanguard',
    year: 'Now',
    title: 'Data Engineer at Vanguard Software',
    side: 'right',
    detailId: 'vanguard',
  },
  {
    id: 'now',
    year: 'Now',
    title: 'Continual Learning',
    side: 'right',
    detailId: 'continual',
  },
  {
    id: 'nus-grad',
    year: '2026',
    title: 'Graduated from National University of Singapore',
    side: 'left',
    detailId: 'nus',
  },
  {
    id: 'internship',
    year: '2025',
    title: 'Data Engineering & Architecture internship',
    side: 'right',
    detailId: 'internship',
  },
  {
    id: 'uoft-exchange',
    year: '2024',
    title: 'Exchange at University of Toronto',
    side: 'left',
    detailId: 'uoft',
  },
  {
    id: 'nus-start',
    year: '2022',
    title: 'Matriculated to National University of Singapore',
    side: 'right',
    detailId: 'nus',
  },
]

export const timelineDetailCards: Record<string, TimelineDetailCard> = {
  nus: {
    id: 'nus',
    yearLabel: '2022 / 2026',
    title: 'National University of Singapore',
    logoId: 'nus',
    summary:
      'My time at NUS shaped my technical foundation across statistics, programming, machine learning, and data-driven problem solving.',
    body: [
      'I developed an interest in building practical analytical systems, especially in risk analytics, simulation, and data engineering.',
    ],
    courseResultsHeading: 'Relevant Courses',
    courseResults: [
      { label: 'DSA4211 High-Dimensional Statistical Analysis', grade: 'A', href: 'https://nusmods.com/courses/DSA4211/' },
      { label: 'DSA3101 Data Science in Practice', grade: 'A', href: 'https://nusmods.com/courses/DSA3101/' },
      { label: 'ST3247 Simulation', grade: 'A', href: 'https://nusmods.com/courses/ST3247/' },
      { label: 'HS1502 Conceptual Introduction to Machine Learning', grade: 'A', href: 'https://nusmods.com/courses/HS1502/' },
      { label: 'ST4234 Bayesian Statistics', grade: 'A-', href: 'https://nusmods.com/courses/ST4234/' },
      { label: 'ST4245 Statistical Methods For Finance', grade: 'A-', href: 'https://nusmods.com/courses/ST4245/' },
      { label: 'ST4250 Multivariate Statistical Analysis', grade: 'A-', href: 'https://nusmods.com/courses/ST4250/' },
      { label: 'CS2030 Programming Methodology II', grade: 'A-', href: 'https://nusmods.com/courses/CS2030/' },
      { label: 'MA2311 Techniques in Advanced Calculus', grade: 'A-', href: 'https://nusmods.com/courses/MA2311/' },
    ],
    skillsLabel: 'Skills learnt',
    skills: [
      'Applied high-dimensional and multivariate statistical methods to complex datasets.',
      'Built end-to-end data science workflows with an emphasis on practical implementation and teamwork.',
      'Strengthened object-oriented programming, abstraction, and software design fundamentals.',
      'Developed mathematical maturity for modelling, optimisation, and analytical reasoning.',
      'Connected statistical thinking with machine learning and data-driven problem solving in applied settings.',
    ],
    imageId: 'nus-groupmates',
    imageCaption: 'DSA3101 project groupmates during Data Science in Practice.',
    tags: ['National University of Singapore', 'Foundations', 'Graduation'],
  },
  internship: {
    id: 'internship',
    yearLabel: '2025',
    title: 'Data Engineering & Architecture internship',
    logoId: 'hpb',
    summary:
      'Worked on health-related data workflows involving data preparation, validation, geotagging, and stakeholder coordination.',
    body: [
      'The internship strengthened my understanding of how data engineering supports reliable analytics, especially when working with operational datasets where accuracy, consistency, and traceability matter.',
    ],
    skillsLabel: 'Skills used',
    skills: ['Azure Databricks', 'Python / Pyspark', 'SQL', 'ETL Pipeline Orchestration', 'Geotagging', 'Stakeholder Management'],
    imageId: 'hpb-interns',
    imageCaption: 'Internship cohort at Health Promotion Board.',
    tags: ['Data engineering', 'Architecture', 'Internship'],
  },
  uoft: {
    id: 'uoft',
    yearLabel: '2024',
    title: 'Exchange at University of Toronto',
    logoId: 'uoft',
    summary:
      'Rediscovered how much I enjoy learning for its own sake.',
    body: [
      'Studying in a new academic environment encouraged me to be more curious, independent, and open-minded in how I approached unfamiliar ideas.',
      'Explored courses across urban data analytics, survey sampling, and mathematical proofs, which broadened the way I think about data, systems, and real-world problem solving.',
      'Reminded me that learning is not only about outcomes, but also about curiosity, perspective, and the willingness to engage deeply with new fields.',
    ],
    notableMentions: ['Urban Data Analytics 80/100 (A-)'],
    skillsLabel: 'Skills learnt',
    skills: ['Database Systems', 'Urban Data Analytics', 'Statistical Modelling', 'Survey Sampling', 'Discrete Mathematics'],
    imageId: 'uoft-exchange',
    imageCaption: 'Exchange semester at the University of Toronto.',
    tags: ['University of Toronto', 'Exchange', 'Adaptability'],
  },
  vanguard: {
    id: 'vanguard',
    yearLabel: 'Now',
    title: 'Data Engineer at Vanguard Software',
    logoId: 'vanguard',
    summary:
      'Engineering and maintaining production-grade data infrastructure that supports high-volume transactional and analytical workloads across real-time and batch processing systems.',
    body: [
      'I build and operate end-to-end data pipelines spanning OceanBase-based OLTP systems, Kafka event streams, Apache Flink stream processing, and StarRocks analytical data warehouses, alongside batch workflows on Apache Spark and Apache Iceberg over Amazon S3, orchestrated with Apache Airflow.',
      'Change Data Capture (CDC) and incremental ingestion patterns reliably propagate operational data into downstream analytical platforms, so I work across the full data lifecycle — ingestion, transformation, storage, and analytical serving — supporting data products and reporting workloads that need both low-latency and large-scale historical processing.',
    ],
    skillsLabel: 'Stack in use',
    techStack: [
      { name: 'OceanBase', logoId: 'oceanbase' },
      { name: 'StarRocks', logoId: 'starrocks' },
      { name: 'Kafka', logoId: 'kafka' },
      { name: 'Apache Flink', logoId: 'flink' },
      { name: 'Amazon S3', logoId: 's3' },
      { name: 'Apache Iceberg', logoId: 'iceberg' },
      { name: 'Spark', logoId: 'spark' },
      { name: 'Airflow', logoId: 'airflow' },
    ],
    tags: ['Vanguard Software', 'Data engineering', 'Streaming & batch'],
  },
  continual: {
    id: 'continual',
    yearLabel: 'Now',
    title: 'Continual Learning',
    logoId: 'infinity',
    summary:
      'Deep diving into systems design for resilient data pipelines that handle both batch and streaming data.',
    body: [
      'I am studying how pipelines stay correct and available under real-world failure: durable buffering, ordered processing, retries, dead-letter handling, and keeping raw data as the traceable source behind every derived metric.',
      'I put these ideas into practice through Usage Observatory, an event-streaming pipeline that captures app usage from my iPhone, processes it through Kafka, and serves session and trend metrics to a live dashboard.',
    ],
    skillsLabel: 'Stack in use',
    techStack: [
      { name: 'Java', logoId: 'java' },
      { name: 'Spring Boot', logoId: 'springboot' },
      { name: 'Kafka', logoId: 'kafka' },
      { name: 'TimescaleDB', logoId: 'timescale' },
      { name: 'React', logoId: 'react' },
      { name: 'TypeScript', logoId: 'typescript' },
    ],
    imageId: 'usage-pipeline',
    imageCaption: 'Usage Observatory pipeline: capture, validate, buffer, transform, store, serve, and see.',
    imageHref: 'https://behavior-dashboard.taildcd567.ts.net/',
    tags: ['Systems design', 'Batch & streaming', 'Continual learning'],
  },
}

export const projects: Project[] = [
  {
    id: 'usage-observatory',
    title: 'Usage Observatory',
    category: 'Data Engineering',
    summary:
      'An event-streaming pipeline that captures app usage from my iPhone in real time, processes it through Kafka, and serves session and trend metrics to a live dashboard.',
    focus:
      'Built the pipeline end to end: an iPhone Shortcut emits OPEN and CLOSE events, a Spring Boot ingestion API validates them, Kafka buffers them, and a stream processor pairs them into sessions and time rollups stored in TimescaleDB.',
    impact:
      'Separates the write path from the read path, so ingestion and processing can absorb bursts of events while a dedicated analytics API serves the dashboard from sessions and rollups, with raw events kept as the traceable source behind every metric.',
    media: [
      {
        imageId: 'usage-pipeline',
        caption: 'Live pipeline view: capture, validate, buffer, transform, store, serve, and see, with a dead-letter topic for failed events.',
      },
    ],
    stack: [
      { label: 'Java', tone: 'warm' },
      { label: 'Spring Boot', tone: 'warm' },
      { label: 'Kafka', tone: 'warm' },
      'TimescaleDB',
      'React',
      'TypeScript',
    ],
    highlights: [
      'Ingestion API checks a collector token and validates a versioned event contract before publishing to Kafka.',
      'Events are keyed by device so each phone\'s events stay in order in a partitioned, durable log while processing catches up.',
      'Stream processor pairs opens and closes into sessions and writes events, sessions, and hourly or daily rollups to TimescaleDB.',
      'Failed events are retried twice and then parked on a dead-letter topic (app-usage-events.dlq.v1) instead of being lost, so valid events keep flowing.',
    ],
    links: [{ label: 'Live Dashboard', href: 'https://behavior-dashboard.taildcd567.ts.net/' }],
  },
  {
    id: 'market-risk-engine-2-0',
    title: 'Market Risk Engine 2.0',
    category: 'Quantitative Research',
    archived: true,
    summary:
      'A new iteration of the Market Risk Engine aimed at moving beyond the first Streamlit prototype toward broader market-aware risk calculations and a stronger research foundation.',
    focus:
      'Reframing the project around deeper quantitative finance research so portfolio risk estimates can account for richer market structure and more realistic drivers.',
    impact:
      'Extends the original portfolio-risk workflow into a more research-led engine that aims to incorporate additional market factors, sharper assumptions, and a more durable analytical architecture.',
    media: [
      {
        imageId: 'risk-lab-2-0',
        caption: 'Early Market Risk Engine 2.0 interface and workflow snapshot.',
      },
    ],
    stack: [
      { label: 'React 19', tone: 'warm' },
      { label: 'TypeScript', tone: 'warm' },
      { label: 'Vite', tone: 'warm' },
      'Python',
      'FastAPI',
    ],
    highlights: [
      'Recalibrating the first engine after seeing the practical limits of slow Streamlit rendering for an interactive risk workflow.',
      'Using "Trades, Quotes and Prices" by Bouchaud et al. as a reference point for expanding the modelling frame beyond standard classroom treatments of market risk.',
      'Treating this as a next-phase research and engineering build focused on broader market factors and stronger risk logic.',
    ],
    links: [
      { label: 'Live App', href: 'https://market-risk-engine-2-0.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Monoji77/market-risk-engine-2.0' },
    ],
  },
  {
    id: 'market-risk-engine',
    title: 'Market Risk Engine 1.0',
    category: 'Quantitative Analytics',
    archived: true,
    summary:
      'An interactive Streamlit application for exploring portfolio risk through historical VaR, Expected Shortfall, rolling risk metrics, and backtesting diagnostics.',
    statusNote:
      'Due to slow rendering of Streamlit apps, I am recalibrating to "Market Risk Engine 2.0". Furthermore, I am reading "Trades, Quotes and Prices" by Bouchaud et al. and will improve risk calculations in consideration of more market factors beyond what was taught in school in newer project.',
    focus: 'Built a portfolio risk workbench that turns market-risk calculations into a usable interface for inspection and decision support.',
    impact:
      'Supports custom portfolio risk calculations along with popular predefined portfolios like Tangency and Global Minimum Portfolios.',
    media: [
      {
        imageId: 'risk-lab',
        caption: 'Portfolio risk lab interface used to inspect historical VaR, Expected Shortfall, rolling metrics, and backtesting views.',
      },
    ],
    stack: [{ label: 'Streamlit', tone: 'warm' }, 'Python'],
    highlights: [
      'Structured the application around the workflows a user actually needs: portfolio setup, rolling risk inspection, and backtesting review.',
      'Included historical VaR, Expected Shortfall, and rolling risk views so users can compare point estimates with time-varying behavior.',
      'Packaged the analysis into a Streamlit surface instead of leaving it as a static script or notebook.',
    ],
    links: [
      { label: 'Live App', href: 'https://market-risk-engine-chris.streamlit.app/' },
      { label: 'Code Base', href: 'https://github.com/Monoji77/personal_projects/tree/main' },
    ],
  },
  {
    id: 'abc-inference',
    title: 'ABC Inference for Epidemic Simulation',
    category: 'Simulation-Based Inference',
    summary:
      'Estimated epidemic parameters in an adaptive-network SIR model using Approximate Bayesian Computation when the likelihood was analytically intractable.',
    focus:
      'Built a simulation-based Bayesian inference workflow for the posterior of transmission, recovery, and rewiring parameters using summary-statistic matching and multiple likelihood-free inference methods.',
    impact:
      'Compared rejection ABC, regression-adjusted ABC, ABC-MCMC, SMC-ABC, and synthetic-likelihood MCMC on the same reduced-summary calibration, then used posterior predictive checks and summary-set diagnostics to understand what the model was actually identifying.',
    media: [
      {
        imageId: 'abc-ppc',
        caption: 'Posterior predictive checks across infected fraction, rewiring counts, and final degree histogram under the chosen Reduced set J calibration.',
      },
      {
        imageId: 'abc-overlay',
        caption: 'Baseline rejection ABC against regression-adjusted ABC, highlighting how local linear adjustment sharpened the posterior.',
      },
    ],
    stack: ['Python'],
    highlights: [
      'Estimated the posterior of beta, gamma, and rho in an adaptive epidemic model where direct likelihood evaluation was infeasible.',
      'Used observed summaries from 40 replicates and justified a reduced five-summary reference set that stayed close to the rich-summary posterior.',
      'Interpreted the residual beta-rho trade-off through joint posterior geometry and posterior predictive checks instead of stopping at point estimates.',
    ],
    links: [
      { label: 'Code Base', href: 'https://github.com/Monoji77/st3247-simulation-project/tree/main' },
      { label: 'Report', href: 'https://1drv.ms/b/c/20d4d925a0a39848/IQD_7vOB_7JwRIpa7VRm2iMAAZUUBXntI2Yi0QRFLvqb2Cc?e=SoEiKN' },
      { label: 'Course Context', href: 'https://alexxthiery.github.io/teaching/teaching.html' },
    ],
  },
]

export const featuredProjects = projects.filter((project) => !project.archived)

export const heroStats = [
  { value: featuredProjects.length, suffix: '', label: 'Featured projects' },
  { value: 4, suffix: '', label: 'Core technical lanes' },
  { value: 12, suffix: '+', label: 'Tools in rotation' },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'analytics',
    title: 'Analytics & Insight Design',
    summary:
      'Analysis work that moves from exploration to explanation without losing its shape.',
    capabilities: [
      'Exploratory analysis that surfaces the right questions quickly',
      'Insight framing built for non-technical audiences',
      'Dashboard and reporting decisions that prioritize scanning and comparison',
      'Narrative structure that makes technical output easier to trust',
    ],
    tools: ['Python', 'Pandas', 'SQL', 'Data visualization'],
  },
  {
    id: 'risk',
    title: 'Risk & Quantitative Thinking',
    summary:
      'Best suited to problems where uncertainty matters and the final answer needs to stand up to scrutiny.',
    capabilities: [
      'Scenario-oriented thinking for decision support',
      'Model interpretation and risk communication',
      'Research and simulation workflows with uncertainty in view',
      'Problem framing for high-consequence analytical contexts',
    ],
    tools: ['Time series', 'Simulation', 'Statistical inference', 'Risk reporting'],
  },
  {
    id: 'engineering',
    title: 'Data Engineering & Delivery',
    summary:
      'Implementation choices that make the analytical work repeatable, maintainable, and easier to hand off.',
    capabilities: [
      'Reusable data workflows and clear project structure',
      'Component-driven interfaces for presenting technical work',
      'Lightweight systems thinking across data, logic, and UI layers',
      'A steady bias toward maintainability and readability',
    ],
    tools: ['React', 'TypeScript', 'Vite', 'Workflow design'],
  },
  {
    id: 'communication',
    title: 'Product Framing & Communication',
    summary:
      'The part of the work that connects technical depth to the people who need the result.',
    capabilities: [
      'Choosing the right level of detail for the audience',
      'Translating technical systems into usable interfaces',
      'Building momentum with concise, low-friction communication',
      'Shaping projects so the value is visible without explanation overload',
    ],
    tools: ['Writing', 'Presentation logic', 'Interface copy', 'Stakeholder framing'],
  },
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'chrisyong2009@live.com',
    href: 'mailto:chrisyong2009@live.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Monoji77',
    href: 'https://github.com/Monoji77',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yong-chs',
    href: 'https://www.linkedin.com/in/yong-chs',
  },
]
