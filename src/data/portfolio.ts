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

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Featured Projects' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Chris Teo',
  role: 'Data Science & Analytics | Market Risk | Data Engineering',
  availability: 'Open to opportunities',
  heroSummary:
    'I design decision-ready analytics experiences that balance quantitative depth, clean implementation, and communication that helps people act with confidence.',
  heroLead:
    'Portfolio site for employers, collaborators, and teams looking for someone who can move between modeling, engineering, and usable product thinking.',
  aboutLead:
    'My work sits at the intersection of analytical rigor, implementation discipline, and stakeholder clarity.',
  aboutBody:
    'I am most energized by problems where the output has to be both technically credible and practically useful. That usually means shaping raw data into workflows, interfaces, and explanations that let other people trust what they are seeing.',
  aboutBodyExtended:
    'Whether the work starts as risk analysis, inference, experimentation, or reporting, I care about how the final system behaves in the hands of its audience. Good analytics should not stop at accuracy; it should land clearly, travel well, and hold up under pressure.',
}

export const heroStats = [
  { value: 3, suffix: '', label: 'Featured projects' },
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

export const projects: Project[] = [
  {
    id: 'market-risk-engine',
    title: 'Market Risk Engine',
    category: 'Quantitative Analytics',
    summary:
      'A risk-focused analytics workflow that turns market data into interpretable signals, scenarios, and reporting views for portfolio decision-making.',
    focus: 'Risk modeling, scenario design, and decision support presentation.',
    impact:
      'Shows how quantitative outputs can be packaged for people who need confidence in the result, not just raw calculations.',
    stack: ['Python', 'Pandas', 'Time series modeling', 'Dashboard design'],
    highlights: [
      'Structured portfolio risk views around what a stakeholder actually needs to inspect.',
      'Focused on signal readability rather than overcomplicated presentation.',
      'Designed with a practical reporting mindset, not just model completeness.',
    ],
  },
  {
    id: 'abc-inference',
    title: 'ABC Inference for Epidemic Simulation',
    category: 'Modeling & Research',
    summary:
      'A simulation-driven project exploring approximate Bayesian computation for inference under uncertainty in epidemiological systems.',
    focus: 'Inference workflows, uncertainty reasoning, and research-grade experimentation.',
    impact:
      'Demonstrates statistical depth while keeping the narrative grounded in what the model is actually helping us learn.',
    stack: ['Python', 'Simulation', 'Bayesian methods', 'Experiment design'],
    highlights: [
      'Worked through inference in settings where direct likelihood approaches are not always straightforward.',
      'Balanced modeling detail with interpretability and narrative framing.',
      'Built to support investigation rather than treat uncertainty as a side note.',
    ],
  },
  {
    id: 'gym-crowd-recommender',
    title: 'Gym Crowd Recommendation System',
    category: 'Applied Data Product',
    summary:
      'A recommendation-style system aimed at helping users find lower-crowd training windows using observed usage patterns and practical heuristics.',
    focus: 'User guidance, behavioral patterns, and analytics product framing.',
    impact:
      'Good example of turning analysis into a product-oriented recommendation experience instead of leaving it in notebook form.',
    stack: ['Recommendation logic', 'Behavior analysis', 'Interface thinking', 'User flow design'],
    highlights: [
      'Framed the problem around usefulness for the end user rather than model novelty alone.',
      'Used compact logic and presentation to support quick decision-making.',
      'Connected analytics directly to a habit-based everyday workflow.',
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
    value: 'replace-with-your-email@example.com',
    href: 'mailto:replace-with-your-email@example.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/your-username',
    href: 'https://github.com/your-username',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-handle',
    href: 'https://www.linkedin.com/in/your-handle',
  },
  {
    label: 'Resume',
    value: 'Add your hosted resume link',
    href: '#contact',
  },
]
