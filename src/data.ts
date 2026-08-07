export interface Project {
  name: string;
  role: string;
  url: string;
  stack: string[];
  bullets: string[];
}

export interface Job {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  hash: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: 'Aleena Nawab',
  role: 'MERN Stack Developer',
  location: 'Islamabad, Pakistan',
  phone: '+92 371 7888372',
  email: 'aleenaknawab@gmail.com',
  github: 'github.com/aleenanawab',
  linkedin: 'linkedin.com/in/aleena-nawab-69128b3aa',
  website: 'portfoliowebsite30.netlify.app',
  summary:
    "MERN Stack Developer with 1+ year of hands-on internship experience building full-stack applications with React.js, Node.js, Express.js, and MongoDB. I design authentication systems, RESTful APIs, and responsive UIs — backed by a portfolio of self-built, production-deployed projects spanning team collaboration, HR management, e-commerce, and AI-augmented publishing.",
};

export const projects: Project[] = [
  {
    name: 'Vortask',
    role: 'Team Collaboration Platform',
    url: 'https://vortasky-app.vercel.app',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    bullets: [
      'Engineered a full-stack project management platform with Kanban boards, role-based access control, and real-time activity logs.',
      'Implemented secure JWT authentication and API token management supporting multi-user team workflows.',
      'Designed a RESTful API with 15+ endpoints; deployed to Vercel with a CI-ready Git workflow.',
    ],
  },
  {
    name: 'NextHire',
    role: 'HR Management Tool',
    url: 'https://employee-management-system1-six.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    bullets: [
      'Built a full-stack HR tool covering employee/department CRUD, secure login, payroll and leave tracking, and an analytics dashboard.',
      'Structured MongoDB collections for relational-style department-employee queries using aggregation pipelines.',
    ],
  },
  {
    name: 'E-Commerce Clothing Store',
    role: 'Shopping Platform',
    url: 'https://ecommerce-website-orig.netlify.app',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    bullets: [
      'Developed a complete shopping platform with product listings, cart management, order workflows, and user authentication.',
      'Managed global cart state via React Context API and integrated backend APIs for product and order persistence.',
    ],
  },
  {
    name: 'Lumina',
    role: 'AI-Augmented Blogging Platform',
    url: 'https://lumina-roan-five.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tiptap'],
    bullets: [
      'Designed a performance-optimized, dark glassmorphic frontend with a reusable component library and accessibility-first UI.',
      'Integrated an AI writing assistant using the Anthropic SDK with a rich-text (Tiptap) editor and quick-action content tools.',
    ],
  },
];

export const experience: Job[] = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'Uptech Sol Limited',
    location: 'Islamabad — Remote, Paid Internship',
    dates: 'Jan 2026 – Jun 2026',
    hash: 'a1c4e9f',
    bullets: [
      'Contributed to full-stack MERN business applications for live clients — authentication, CRUD operations, and third-party API integrations (project details confidential under client NDA).',
      'Built responsive React.js interfaces using reusable component architecture, helping reduce UI rebuild time.',
      'Assisted in designing and optimizing MongoDB schemas for real-world business data storage and retrieval.',
      'Participated in Agile sprints and code reviews alongside the engineering team.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Mateen Group of Companies',
    location: 'Remote, Paid Internship',
    dates: 'Jul 2025 – Dec 2025',
    hash: '7f2b810',
    bullets: [
      'Maintained and extended full-stack client web applications; assisted in troubleshooting and resolving production issues (project details confidential under client NDA).',
      'Helped develop and integrate RESTful backend APIs with React frontends to improve data-load performance.',
      'Collaborated remotely with cross-functional teams using Git/GitHub branching workflows.',
      'Refactored legacy components into reusable React hooks to reduce code duplication.',
    ],
  },
  {
    title: 'MERN Stack Developer — Fellowship',
    company: 'Buildables',
    location: 'Islamabad — Remote, Unpaid Fellowship',
    dates: 'Jan 2025 – Jun 2025',
    hash: '3d9e0c2',
    bullets: [
      'Completed an intensive fellowship covering full-stack development with React.js, Node.js, Express.js, and MongoDB, following industry best practices.',
      'Built and deployed multiple MERN applications with RESTful APIs, authentication, and cloud hosting.',
      'Practiced collaborative Git workflows, peer code reviews, and Agile project delivery.',
    ],
  },
];

export const skills: SkillGroup[] = [
  { label: 'frontend', items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'] },
  { label: 'backend', items: ['Node.js', 'Express.js', 'RESTful API Design', 'JWT & Session Mgmt'] },
  { label: 'database', items: ['MongoDB', 'Aggregation Pipelines', 'Query Optimization'] },
  { label: 'tooling', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Agile/Scrum', 'MVC', 'CRUD'] },
  { label: 'cloud_devops', items: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify'] },
];

export const education = [
  {
    degree: 'BS Computer Science',
    school: 'Virtual University of Pakistan',
    dates: 'April 2026 – Present (1st Semester)',
  },
  {
    degree: 'Intermediate',
    school: 'IMCG I-10/4, Islamabad',
    dates: 'September 2022 – May 2024',
  },
];

export const languages = ['English', 'Urdu'];
