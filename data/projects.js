// ============================================================
//  PROJECTS CONFIG — edit this file to add/remove projects
// ============================================================
//
//  category: "School" | "Game Jam" | "Hackathon" | "Personal" | "Open Source"
//  tech:     array of tech names (maps to colored pills below)
//  demo:     URL string or null
//  repo:     URL string or null
//
// ============================================================

export const CATEGORY_COLORS = {
  School:      { bg: '#1a1a2e', text: '#818cf8', border: '#3730a3' },
  'Game Jam':  { bg: '#1a1a0e', text: '#facc15', border: '#854d0e' },
  Hackathon:   { bg: '#0e1a1a', text: '#34d399', border: '#065f46' },
  Personal:    { bg: '#1a0e1a', text: '#c084fc', border: '#6b21a8' },
  'Open Source':{ bg: '#1a0e0e', text: '#fb923c', border: '#9a3412' },
};

export const TECH_COLORS = {
  'Python':      { bg: '#1e3a5f', text: '#ffdb50' },
  'JavaScript':  { bg: '#3b2f00', text: '#fbbf24' },
  'TypeScript':  { bg: '#1e3a5f', text: '#93c5fd' },
  'React':       { bg: '#0e2a3a', text: '#38bdf8' },
  'Next.js':     { bg: '#1a1a1a', text: '#e2e8f0' },
  'Node.js':     { bg: '#0f2a1a', text: '#4ade80' },
  'Tailwind':    { bg: '#0e2a3a', text: '#67e8f9' },
  'PostgreSQL':  { bg: '#1a2a3f', text: '#818cf8' },
  'MongoDB':     { bg: '#0f2a1a', text: '#4ade80' },
  'Redis':       { bg: '#2a0e0e', text: '#f87171' },
  'Docker':      { bg: '#0e2a3a', text: '#38bdf8' },
  'Git':         { bg: '#2a1a0e', text: '#fb923c' },
  'C++':         { bg: '#1a1a2e', text: '#818cf8' },
  'C':           { bg: '#1a1a1a', text: '#94a3b8' },
  'Java':        { bg: '#2a1a0e', text: '#fb923c' },
  'Rust':        { bg: '#2a1a0e', text: '#fdba74' },
  'Go':          { bg: '#0e2a3a', text: '#67e8f9' },
  'Unity':       { bg: '#1a1a1a', text: '#cbd5e1' },
  'Flask':       { bg: '#1a1a1a', text: '#94a3b8' },
  'FastAPI':     { bg: '#0f2a1a', text: '#34d399' },
  'Supabase':    { bg: '#0f2a1a', text: '#34d399' },
  'Firebase':    { bg: '#2a1e0e', text: '#fb923c' },
  'AWS':         { bg: '#2a1e0e', text: '#fbbf24' },
  'Linux':       { bg: '#2a1a0e', text: '#fb923c' },
  'OpenGL':      { bg: '#1a1a2e', text: '#818cf8' },
  'TensorFlow':  { bg: '#2a1a0e', text: '#fb923c' },
  'PyTorch':     { bg: '#2a1a0e', text: '#f87171' },
  'GraphQL':     { bg: '#2a0e2a', text: '#e879f9' },
  'REST API':    { bg: '#1a1a1a', text: '#94a3b8' },
  'WebSockets':  { bg: '#0e2a2a', text: '#2dd4bf' },
  'SQLite':      { bg: '#1a2a3f', text: '#818cf8' },
  'Base44':      { bg: '#ff4d00', text: '#000000' },
  'TKinter':     { bg: '#3b5d50', text: '#ced6a4' },
  'MySQL':       { bg: '#00566a', text: '#ffa42d' },
  'Chrome Browser API': { bg: '#112e5d', text: '#36cb5e' },
};

// ------------------------------------------------------------
//  ADD YOUR PROJECTS HERE
// ------------------------------------------------------------

const projects = [
  {
    id: 1,
    name: 'Krumel',
    description:
      'A cookies and trackers visualizer and dashboard for internet privacy',
    category: 'Hackathon',
    tech: ['React', 'TypeScript', 'Tailwind', 'Base44', 'Chrome Browser API'],
    demo: 'https://krumel-data-trace.base44.app/',
    repo: 'https://github.com/MDStephen/Krumel',
  },
  {
    id: 2,
    name: 'Work Tracker',
    description:
      'A tool for compiling and tracking work done across websites and local files',
    category: 'Personal',
    tech: ['Python', 'TKinter'],
    demo: null,
    repo: 'https://github.com/MDStephen/Work-Tracker',
  },
];

export default projects;
