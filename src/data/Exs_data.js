// EXS DATA CONFIGURATION
// Centralized data for EXS website
// Author: PrasetyoBayu07

export const EXS_CONFIG = {
  // Site Information
  site: {
    name: "EXS Digital Solutions",
    shortName: "EXS",
    tagline: "Innovate. Create. Elevate.",
    description: "Professional digital agency providing web development, mobile apps, UI/UX design, and digital marketing solutions.",
    url: "https://exs-kappa.vercel.app",
    repo: "https://github.com/PrasetyoBayu07/Exs",
    version: "1.0.0",
    author: "PrasetyoBayu07",
    year: new Date().getFullYear()
  },

  // Contact Information
  contact: {
    email: "hello@exs-digital.com",
    phone: "+62 812-3456-7890",
    address: "Jakarta, Indonesia",
    workingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed"
    },
    social: {
      github: {
        url: "https://github.com/PrasetyoBayu07",
        icon: "github",
        label: "GitHub"
      },
      linkedin: {
        url: "#",
        icon: "linkedin",
        label: "LinkedIn"
      },
      twitter: {
        url: "#",
        icon: "twitter",
        label: "Twitter"
      },
      instagram: {
        url: "#",
        icon: "instagram",
        label: "Instagram"
      }
    }
  },

  // Navigation Items
  navigation: [
    { id: 1, name: "Home", href: "#home", icon: "home" },
    { id: 2, name: "Services", href: "#services", icon: "services" },
    { id: 3, name: "Projects", href: "#projects", icon: "projects" },
    { id: 4, name: "About", href: "#about", icon: "about" },
    { id: 5, name: "Contact", href: "#contact", icon: "contact" }
  ],

  // Hero Section Data
  hero: {
    title: "Transform Your Digital",
    highlight: "Presence",
    subtitle: "We build exceptional digital experiences that drive growth, engage users, and deliver measurable results for businesses worldwide.",
    buttons: [
      { text: "View Our Work", href: "#projects", variant: "primary" },
      { text: "Get Free Consultation", href: "#contact", variant: "secondary" }
    ],
    stats: [
      { value: "150+", label: "Projects Completed" },
      { value: "50+", label: "Happy Clients" },
      { value: "5+", label: "Years Experience" },
      { value: "24/7", label: "Support" }
    ]
  },

  // Services Data
  services: [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Performance Optimized", "SEO Friendly", "Scalable Architecture"],
      color: "#4F46E5"
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["iOS & Android", "Offline Support", "Push Notifications", "App Store Deployment"],
      color: "#10B981"
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "#F59E0B"
    },
    {
      id: 4,
      icon: "⚡",
      title: "Performance Optimization",
      description: "Speed up your existing website or application with our performance optimization services.",
      features: ["Core Web Vitals", "Lazy Loading", "Image Optimization", "Caching Strategies"],
      color: "#8B5CF6"
    },
    {
      id: 5,
      icon: "🔒",
      title: "Security Audits",
      description: "Comprehensive security assessments and implementations to protect your digital assets.",
      features: ["Penetration Testing", "Code Review", "Security Headers", "SSL/TLS Setup"],
      color: "#EF4444"
    },
    {
      id: 6,
      icon: "📈",
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies to grow your online presence and generate leads.",
      features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      color: "#3B82F6"
    }
  ],

  // Projects Data
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with cart, payments, and admin dashboard.",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/PrasetyoBayu07",
      imageColor: "#4F46E5",
      status: "completed"
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description: "Mobile app for workout tracking, nutrition planning, and progress monitoring.",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "https://github.com/PrasetyoBayu07",
      imageColor: "#10B981",
      status: "completed"
    },
    {
      id: 3,
      title: "Real Estate Dashboard",
      description: "Dashboard for property management with analytics and reporting features.",
      category: "Web Application",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "#",
      githubUrl: "https://github.com/PrasetyoBayu07",
      imageColor: "#F59E0B",
      status: "completed"
    },
    {
      id: 4,
      title: "Travel Booking System",
      description: "Comprehensive platform for booking flights, hotels, and activities.",
      category: "Web Application",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "https://github.com/PrasetyoBayu07",
      imageColor: "#8B5CF6",
      status: "completed"
    },
    {
      id: 5,
      title: "Finance Tracker",
      description: "Personal finance management app with budgeting and investment tracking.",
      category: "Mobile App",
      technologies: ["Flutter", "SQLite", "GraphQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/PrasetyoBayu07",
      imageColor: "#3B82F6",
      status: "completed"
    },
    {
      id: 6,
      title: "Educational Platform",
      description: "Online learning platform with video courses, quizzes, and certificates.",
      category: "Web Application",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "https://github.com/PrasetyoBayu07",
      imageColor: "#EC4899",
      status: "completed"
    }
  ],

  // Team Data
  team: [
    {
      id: 1,
      name: "Bayu Prasetyo",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 5+ years experience in building scalable web applications.",
      expertise: ["React", "Node.js", "AWS", "DevOps"],
      initials: "BP"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Creative designer passionate about creating intuitive and beautiful user experiences.",
      expertise: ["Figma", "Adobe Creative", "Prototyping", "Design Systems"],
      initials: "SC"
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Mobile Developer",
      bio: "Specialized in cross-platform mobile development using React Native and Flutter.",
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      initials: "AJ"
    }
  ],

  // Testimonials Data
  testimonials: [
    {
      id: 1,
      name: "Michael Rodriguez",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "EXS transformed our outdated website into a modern, high-performing platform. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      avatarColor: "#4F46E5"
    },
    {
      id: 2,
      name: "Sarah Williams",
      company: "StartupXYZ",
      role: "Founder",
      content: "The mobile app they developed for us has been a game-changer. User engagement increased by 300% in the first month.",
      rating: 5,
      avatarColor: "#10B981"
    },
    {
      id: 3,
      name: "David Kim",
      company: "Global Retail",
      role: "E-commerce Director",
      content: "Outstanding UI/UX design work. Our conversion rates improved significantly after the redesign.",
      rating: 5,
      avatarColor: "#F59E0B"
    }
  ],

  // Skills/Technologies
  technologies: [
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "Next.js", icon: "▲", category: "frontend" },
    { name: "TypeScript", icon: "TS", category: "frontend" },
    { name: "Node.js", icon: "⬢", category: "backend" },
    { name: "Python", icon: "🐍", category: "backend" },
    { name: "MongoDB", icon: "🍃", category: "database" },
    { name: "PostgreSQL", icon: "🐘", category: "database" },
    { name: "AWS", icon: "☁️", category: "devops" },
    { name: "Docker", icon: "🐳", category: "devops" },
    { name: "Figma", icon: "🎨", category: "design" },
    { name: "React Native", icon: "📱", category: "mobile" },
    { name: "Flutter", icon: "💙", category: "mobile" }
  ],

  // FAQ Data
  faq: [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, performance optimization, security audits, and digital marketing strategies."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the initial consultation."
    },
    {
      id: 3,
      question: "What is your pricing model?",
      answer: "We offer flexible pricing: fixed price for well-defined projects, time & materials for ongoing work, and monthly retainers for maintenance and support. We'll recommend the best option for your needs."
    },
    {
      id: 4,
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support packages including maintenance, updates, security monitoring, and performance optimization to ensure your digital products remain secure and up-to-date."
    },
    {
      id: 5,
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, and various databases and cloud platforms. We choose the best stack for each project."
    }
  ],

  // Footer Links
  footerLinks: {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Digital Marketing", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  },

  // Budget Options for Contact Form
  budgetOptions: [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "More than $50,000"
  ],

  // Company Values
  values: [
    {
      icon: "💡",
      title: "Innovation",
      description: "Always exploring new technologies and approaches"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Working together to achieve the best results"
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "Striving for perfection in everything we do"
    }
  ]
};

// Helper Functions
export const Exs_helpers = {
  // Format phone number
  formatPhone: (phone) => {
    return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  },

  // Get current year
  getCurrentYear: () => {
    return new Date().getFullYear();
  },

  // Generate random color
  getRandomColor: () => {
    const colors = ['#4F46E5', '#10B981', '#F59E0B', '#8B5CF6', '#3B82F6', '#EC4899'];
    return colors[Math.floor(Math.random() * colors.length)];
  },

  // Calculate project count
  getProjectCount: () => {
    return EXS_CONFIG.projects.length;
  },

  // Get technologies by category
  getTechnologiesByCategory: (category) => {
    return EXS_CONFIG.technologies.filter(tech => tech.category === category);
  },

  // Format currency
  formatCurrency: (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
};

// Export default
export default EXS_CONFIG;
