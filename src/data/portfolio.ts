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
  focus: string
  impact: string
  media?: Array<{
    caption: string
    imageId: 'risk-lab' | 'abc-ppc' | 'abc-overlay'
  }>
  stack: string[]
  highlights: string[]
  links?: Array<{
    label: string
    href: string
  }>
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

export type TimelineDetailCard = {
  id: string
  yearLabel: string
  title: string
  logoId: 'nus' | 'hpb' | 'uoft' | 'infinity' | null
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
  imageId?: 'nus-groupmates' | 'hpb-interns' | 'uoft-exchange' | 'risk-lab' | null
  imageCaption?: string
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

export const heroStats = [
  { value: 2, suffix: '', label: 'Featured projects' },
  { value: 4, suffix: '', label: 'Core technical lanes' },
  { value: 12, suffix: '+', label: 'Tools in rotation' },
]

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
    id: 'now',
    year: 'Now',
    title: 'Continual Learning',
    side: 'left',
    detailId: 'continual',
  },
  {
    id: 'nus-grad',
    year: '2026',
    title: 'Graduated from National University of Singapore',
    side: 'right',
    detailId: 'nus',
  },
  {
    id: 'internship',
    year: '2025',
    title: 'Data Engineering & Architecture internship',
    side: 'left',
    detailId: 'internship',
  },
  {
    id: 'uoft-exchange',
    year: '2024',
    title: 'Exchange at University of Toronto',
    side: 'right',
    detailId: 'uoft',
  },
  {
    id: 'nus-start',
    year: '2022',
    title: 'Matriculated to National University of Singapore',
    side: 'left',
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
      { label: 'DSA3101 Data Science in Practice', grade: 'A', href: 'https://nusmods.com/courses/DSA3101' },
      { label: 'DSA4211 High-Dimensional Statistical Analysis', grade: 'A', href: 'https://nusmods.com/courses/DSA4211' },
      { label: 'ST4245 Multivariate Statistical Analysis', grade: 'A-', href: 'https://nusmods.com/courses/ST4245' },
      { label: 'CS2030 Programming Methodology II', grade: 'A-', href: 'https://nusmods.com/courses/CS2030' },
      { label: 'MA2311 Techniques in Advanced Calculus', grade: 'A-', href: 'https://nusmods.com/courses/MA2311' },
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
  continual: {
    id: 'continual',
    yearLabel: 'Now',
    title: 'Continual Learning',
    logoId: 'infinity',
    summary:
      'Currently building a Market Risk Engine that helps users explore portfolio risk through historical VaR, Expected Shortfall, rolling risk metrics, and backtesting.',
    body: [
      'I am interested in projects that combine data science, financial risk, and engineering to create practical tools for decision-making.',
    ],
    imageId: 'risk-lab',
    imageCaption: 'Current portfolio risk lab and market risk engine workbench.',
    tags: ['Portfolio growth', 'Iteration', 'Continual learning'],
  },
}

export const projects: Project[] = [
  {
    id: 'market-risk-engine',
    title: 'Market Risk Engine',
    category: 'Quantitative Analytics',
    summary:
      'An interactive Streamlit application for exploring portfolio risk through historical VaR, Expected Shortfall, rolling risk metrics, and backtesting diagnostics.',
    focus: 'Built a portfolio risk workbench that turns market-risk calculations into a usable interface for inspection and decision support.',
    impact:
      'Shows how quantitative finance work can move beyond notebooks into a clearer product surface, where risk metrics, comparisons, and diagnostics are easier to interrogate.',
    media: [
      {
        imageId: 'risk-lab',
        caption: 'Portfolio risk lab interface used to inspect historical VaR, Expected Shortfall, rolling metrics, and backtesting views.',
      },
    ],
    stack: ['Python', 'Pandas', 'Streamlit', 'Historical VaR', 'Expected Shortfall', 'Backtesting'],
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
    stack: ['Python', 'Approximate Bayesian Computation', 'Simulation', 'MCMC', 'SMC', 'Synthetic Likelihood'],
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
