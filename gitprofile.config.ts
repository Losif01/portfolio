// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'losif01', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        projects: [
          'Losif01/Smart-Palm-System-Monitor',
          'Losif01/chess-m8',
          'Losif01/Miki-the-tutor',
          'Losif01/chess-game-analyzer',
          'Losif01/yf-clustering',
          'Losif01/Orthodox-Clusteringfr',
        ],
      },
    },
    external: {
      header: 'Top Projects',
      projects: [
        {
          title: 'Personal Secure Cloud',
          description:
            'A self-hosted observability stack featuring Prometheus and Grafana, deployed using Ansible and Kubernetes with integrated CI/CD workflows.',
          imageUrl:
            'cloud.jpeg',
          link: 'https://www.linkedin.com/posts/yousef-fawzi_devops-grafana-prometheus-activity-7445907820467748864-1coE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETIo0MBtPUk_Gx1mJOZh-1m34eh-VQAnw8',
        },
        {
          title: 'Miki The Tutor',
          description:
            'An AI assistant that helps you study and explains concepts for you',
          imageUrl:
            'miki.png', // Replace with an actual screenshot
          link: 'https://github.com/Losif01/Miki-the-tutor',
        },
        {
          title: 'AI Code Documentator',
          description:
            'it is frustrating to find a project with no proper docs for developers, so here is an AI that is actually useful and gives clear documentation for a code base',
          imageUrl:
            'AIDocs.png', // Replace with an actual screenshot
          link: 'https://gitlab.com/skillIssueCM/ai-code-documentator-agent',
        },
      ],
    },
  },
  seo: {
    title: 'Yousef Fawzi',
    description:
      'DevOps & MLOps Engineer specializing in Infrastructure as Code, Kubernetes, and Python backend development.',
    imageURL: '', // Add a link to your headshot or a preview image here
  },
  social: {
    linkedin: 'yousef-fawzi',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'yousefhadhood',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+201091722415',
    email: 'youseffawzi.work@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1XXoVqwwoB1mO8tTK04_tBwYdJSxqTmVt/view?usp=sharing',
  },
  skills: [
      // AI & MLOps
      'MLOps Pipelines',
      'Edge AI / Acoustic Edge Systems',
      'Streamlit',
      'FastAPI',
      'Python',
      'Pytorch',
      'Tensorflow',
      'Visualization',
      // Infrastructure & Orchestration
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Terraform',
      'Ansible',

      // CI/CD & Observability
      'Jenkins',
      'Git',
      'Prometheus',
      'Grafana',

      // Systems & Secure Networking
      'Linux Administration',
      'Bash scripting',
      'Tailscale',

      // Embedded Systems & IoT
      'ESP32',
      'Verilog',
      'Proteus',
    ],
  experiences: [
    {
      company: 'DEPI',
      position: 'DevOps Engineer Intern',
      from: 'November 2025',
      to: 'June 2026',
      companyLink: 'https://depi.gov.eg',
    },
    {
      company: 'CIB Egypt',
      position: 'AI intern',
      from: 'August 2025',
      to: 'September 2025',
      companyLink: 'https://www.cibeg.com/',
    },
    {
      company: 'National Telecom Institute',
      position: 'NLP / Agents intern',
      from: 'July 2025',
      to: 'August 2025',
      companyLink: 'https://www.nti.sci.eg',
    },
    {
      company: 'IEEE Egypt',
      position: 'ML/Data Scientist',
      from: 'September 2024',
      to: 'October 2024',
      companyLink: 'https://ieee.org.eg/',
    },
    {
      company: 'Information Technology Institute',
      position: 'IoT intern',
      from: 'August 2024',
      to: 'September 2024',
      companyLink: 'https://iti.gov.eg/home',
    },
    {
      company: 'National Telecom Institute',
      position: 'AI intern',
      from: 'July 2023',
      to: 'August 2023',
      companyLink: 'https://www.nti.sci.eg',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Faculty of Artificial Intelligence', // Replace with your exact university name
      degree: 'Bachelor of Artificial Intelligence',
      from: '2022',
      to: '2026',
    },
  ],
  publications: [],
  blog: {
    source: 'medium',
    username: 'yousefhadhood',
    limit: 5,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
