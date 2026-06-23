import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Target,
  Search,
  BarChart3,
  Globe,
  Code,
  Award,
  Calendar,
  GraduationCap,
  Building2,
  Briefcase,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  LineChart,
  Palette,
  Users,
  Settings,
  Monitor,
  FileText,
  Link,
  Rocket,
  Eye,
  MousePointer,
  Award as BadgeIcon,
} from 'lucide-react';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold font-display text-secondary-900"
          >
            Vimalraj
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link px-4 py-2 text-sm font-medium ${
                  activeSection === link.href.slice(1)
                    ? 'nav-link-active'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary text-sm">
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-secondary-100 shadow-soft-lg animate-fade-in-down">
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-secondary-600 hover:bg-secondary-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-primary text-center mt-4"
              >
                Let's Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle top-20 -left-20 animate-float" />
        <div className="floating-circle bottom-20 -right-20 animate-float animation-delay-500" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-glow-lg">
                <span className="text-5xl font-bold text-white font-display">V</span>
              </div>
            </div>
          </div>

          {/* Subtitle */}

          {/* Main Heading */}
          <h1
            className={`text-display-lg md:text-display-xl font-display text-secondary-900 mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Vimalraj</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-secondary-600 mb-4 font-medium transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Digital Marketer & SEO Analyst
          </p>

          {/* Description */}
          <p
            className={`text-lg text-secondary-500 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Driving organic growth, improving search visibility, and helping businesses
            achieve sustainable digital success through data-driven SEO strategies.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a href="#projects" className="btn-primary gap-2 group">
              View My Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { value: '70+', label: 'Keywords Ranked', icon: Target },
              { value: '5+', label: 'Projects Delivered', icon: Rocket },
              { value: '1.5+', label: 'Years Experience', icon: TrendingUp },
              { value: '100%', label: 'Client Satisfaction', icon: BadgeIcon },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-secondary-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-secondary-400 hover:text-primary-500 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const expertise = [
    {
      icon: Search,
      title: 'SEO Strategy & Keyword Research',
      description:
        'In-depth keyword research, competitor analysis, and search intent mapping to drive sustainable organic growth.',
    },
    {
      icon: Code,
      title: 'Technical SEO',
      description:
        'Technical audits focused on crawlability, indexing, site architecture, Core Web Vitals, and performance.',
    },
    {
      icon: Target,
      title: 'On-Page SEO',
      description:
        'Optimizing meta tags, content, heading structures, internal linking, and user experience.',
    },
    {
      icon: Globe,
      title: 'Local SEO',
      description:
        'Google Business Profile optimization, local citations, and improving visibility in local search results.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="badge-primary mb-4">About Me</span>
          <h2 className="section-title text-balance">
            Passionate About Digital Growth
          </h2>
          <p className="section-subtitle mx-auto">
            Helping businesses improve their online visibility and achieve
            sustainable growth through strategic SEO.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 p-8 flex flex-col items-center justify-center text-white">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <LineChart className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Organic Growth Expert</h3>
                <p className="text-white/80 text-center">Driving results through data-driven SEO strategies</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-500/10 rounded-xl -z-10" />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-8 bg-white rounded-xl shadow-soft-lg p-4 border border-secondary-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-secondary-900">
                      Organic Traffic
                    </div>
                    <div className="text-xs text-accent-600 font-medium">
                      +150% Growth
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-soft text-xs font-medium text-secondary-600">
                <span className="inline-flex items-center gap-1">
                  <Award className="w-3 h-3 text-primary-500" />
                  SEO Expert
                </span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`space-y-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-secondary-900">
                Hello! I'm Vimalraj
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                A passionate Digital Marketer and SEO Analyst with hands-on experience in
                improving website visibility, increasing organic traffic, and driving online
                growth through effective digital marketing strategies.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                I specialize in On-Page SEO, Off-Page SEO, Technical SEO, Local SEO, Keyword
                Research, Content Optimization, and Website Performance Analysis. My approach
                combines data-driven insights with practical SEO techniques to help businesses
                achieve better search engine rankings and long-term digital success.
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-secondary-600">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-sm">Dharmapuri, India</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-600">
                <Briefcase className="w-4 h-4 text-primary-500" />
                <span className="text-sm">Open to Opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-600">
                <GraduationCap className="w-4 h-4 text-primary-500" />
                <span className="text-sm">B.E. CSE (80.4%)</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/vimalraj-digital-marketer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`card-hover p-6 group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                {item.title}
              </h4>
              <p className="text-secondary-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const responsibilities = [
    'Executing SEO strategies to improve website rankings and online visibility',
    'Conducting keyword research and competitor analysis',
    'Performing On-Page and Technical SEO optimization',
    'Monitoring website performance using Google Analytics and Search Console',
    'Managing Local SEO campaigns and Google Business Profiles',
    'Optimizing website content for better search engine performance',
    'Tracking SEO metrics and preparing performance reports',
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="section bg-secondary-50 relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="badge-accent mb-4">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            Building expertise through real-world projects and continuous learning.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="card-hover p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-soft shrink-0">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-secondary-900">
                    SEO Analyst
                  </h3>
                  <p className="text-primary-600 font-medium mt-1">
                    FreelancerInd Technology Pvt Ltd (Weblogicks)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-secondary-500 md:text-right">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Dec 2024 - Jun 2026
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-secondary-500 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Dharmapuri, Tamil Nadu</span>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-secondary-700 uppercase tracking-wider">
                Key Responsibilities
              </h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-600" />
                    </div>
                    <span className="text-secondary-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Projects */}
        <div className="mt-16">
          <h3
            className={`text-xl font-semibold text-secondary-900 text-center mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Academic Projects (2019-2023)
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Crop Yield Estimation',
                icon: BarChart3,
                description:
                  'Developed a system to predict crop output using data analysis techniques and statistical models.',
              },
              {
                title: 'Tourism Management System',
                icon: Globe,
                description:
                  'Designed and managed a tourism platform focused on customer management and booking operations.',
              },
              {
                title: 'Multiple Tie-up Business Management',
                icon: Building2,
                description:
                  'Developed a system to manage business partnerships, records, and operational workflows.',
              },
            ].map((project, index) => (
              <div
                key={project.title}
                className={`card-hover p-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-50 flex items-center justify-center mb-4">
                  <project.icon className="w-5 h-5 text-secondary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-secondary-500 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'NCON Turbines',
      industry: 'Manufacturing',
      color: 'from-primary-500 to-primary-700',
      overview:
        'Leading industrial steam turbine manufacturer focused on improving B2B inquiry generation through organic search.',
      strategy: [
        'Comprehensive keyword research & competitor analysis',
        'On-page & technical SEO optimization',
        'High-quality backlink acquisition',
        'Performance monitoring & optimization',
      ],
      results: [
        '20+ target keywords ranked on Google',
        'Significant organic visibility increase',
        'Qualified B2B inquiries generated',
        'Strong backlink profile built',
      ],
      keywords: [
        'Steam Turbine Manufacturers',
        'Back Pressure Steam Turbine Manufacturers',
        'Steam Turbine Suppliers',
      ],
    },
    {
      title: 'Shirdi Sai Krupa Astrology',
      industry: 'Astrology',
      color: 'from-orange-500 to-orange-700',
      overview:
        'Astrology services provider targeting consultation inquiries from Bangalore local search.',
      strategy: [
        'Local SEO optimization',
        'Google Business Profile enhancement',
        'Keyword-focused content optimization',
        'Strategic backlink building',
      ],
      results: [
        'Achieved first-page Google rankings',
        'Increased website traffic & visibility',
        'Improved consultation inquiries',
        'Enhanced online authority',
      ],
      keywords: [
        'Best Astrologer in Bangalore',
        'Astrologer in Bangalore',
        'Best Astrologer in BTM Layout',
      ],
    },
    {
      title: 'Sri Sai Balaji Astro Centre',
      industry: 'Astrology',
      color: 'from-orange-600 to-orange-800',
      overview:
        'Astrology center focused on local search rankings and consistent lead generation.',
      strategy: [
        'Service page optimization',
        'Google Business Profile management',
        'Keyword mapping & content enhancement',
        'Off-page SEO & citation building',
      ],
      results: [
        'First-page rankings achieved',
        'Increased organic reach',
        'Consistent consultation leads',
        'Improved local search performance',
      ],
      keywords: ['Best Astrologer in Bangalore', 'Astrologer in Bangalore'],
    },
    {
      title: 'The Board Company',
      industry: 'Manufacturing',
      color: 'from-yellow-500 to-yellow-700',
      overview:
        'Signage manufacturing company targeting high-intent local keywords in Bangalore.',
      strategy: [
        'Industry-focused keyword research',
        'Service page optimization',
        'Local SEO improvements',
        'Technical SEO enhancements',
      ],
      results: [
        '15+ target keywords ranked',
        'Improved search visibility',
        'Enhanced inquiry generation',
        'Strengthened local presence',
      ],
      keywords: [
        'LED Sign Board Manufacturers in Bangalore',
        'Signage Manufacturer In Bangalore',
        'Digital Video Boards in Bangalore',
      ],
    },
    {
      title: 'Bangalore SEO Expert',
      industry: 'Digital Marketing',
      color: 'from-accent-600 to-accent-800',
      overview:
        'SEO services in highly competitive digital marketing niche through strategic implementation.',
      strategy: [
        'Competitive keyword research',
        'Service page optimization',
        'Technical SEO improvements',
        'Content marketing & link building',
      ],
      results: [
        'Top rankings achieved',
        'Increased organic visibility',
        'Improved user engagement',
        'Enhanced lead generation',
      ],
      keywords: [
        'SEO Expert in Bangalore',
        'Hire SEO Expert in Bangalore',
        'SEO Freelancer Bangalore',
      ],
    },
  ];

  const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    'Manufacturing': Settings,
    'Astrology': Sparkles,
    'Digital Marketing': Target,
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="section bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="badge-primary mb-4">Projects</span>
          <h2 className="section-title">Featured SEO Projects</h2>
          <p className="section-subtitle mx-auto">
            Real results from real projects. See how I've helped businesses grow
            their organic presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const IconComponent = industryIcons[project.industry] || Globe;
            return (
              <div
                key={project.title}
                className={`card-hover overflow-hidden transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Visual Header */}
                  <div className={`relative h-64 lg:h-auto lg:col-span-1 bg-gradient-to-br ${project.color} p-8 flex flex-col justify-between`}>
                    <div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-sm text-sm font-medium ${project.title === 'The Board Company' ? 'bg-secondary-900/80 text-white' : 'bg-white/20 text-white'}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                        {project.industry}
                      </span>
                    </div>
                    <div>
                      <div className={`w-14 h-14 rounded-xl backdrop-blur-sm flex items-center justify-center mb-4 ${project.title === 'The Board Company' ? 'bg-secondary-900/80' : 'bg-white/20'}`}>
                        <IconComponent className={`w-7 h-7 ${project.title === 'The Board Company' ? 'text-yellow-400' : 'text-white'}`} />
                      </div>
                      <h3 className={`text-2xl font-bold ${project.title === 'The Board Company' ? 'text-secondary-900' : 'text-white'}`}>{project.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <p className="text-secondary-600 mb-6">
                      {project.overview}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Strategy */}
                      <div>
                        <h4 className="text-sm font-semibold text-secondary-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Strategy
                        </h4>
                        <ul className="space-y-2">
                          {project.strategy.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-secondary-600"
                            >
                              <Check className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-sm font-semibold text-secondary-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {project.results.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-secondary-600"
                            >
                              <Sparkles className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Ranking Keywords */}
                    <div>
                      <h4 className="text-sm font-semibold text-secondary-700 uppercase tracking-wider mb-3">
                        Top Ranking Keywords
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="tech-badge"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const seoSkills = [
    { name: 'On-Page SEO', level: 95 },
    { name: 'Off-Page SEO', level: 90 },
    { name: 'Technical SEO', level: 85 },
    { name: 'Local SEO', level: 92 },
    { name: 'Keyword Research', level: 95 },
    { name: 'Content Optimization', level: 88 },
  ];

  const marketingSkills = [
    { name: 'Social Media Management', level: 85 },
    { name: 'Google Ads', level: 78 },
    { name: 'Meta Ads', level: 75 },
    { name: 'GBP Optimization', level: 92 },
    { name: 'Analytics & Reporting', level: 88 },
  ];

  const tools = [
    { name: 'Google Search Console', icon: Search },
    { name: 'Google Analytics', icon: LineChart },
    { name: 'SEMrush', icon: Target },
    { name: 'Ubersuggest', icon: Zap },
    { name: 'Google Keyword Planner', icon: BarChart3 },
    { name: 'Canva', icon: Palette },
    { name: 'AI Content Tools', icon: Sparkles },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="section bg-secondary-50 relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="badge-secondary mb-4">Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for driving organic growth and digital success.
          </p>
        </div>

        {/* Skills Bars */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* SEO Skills */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-lg font-semibold text-secondary-900 mb-6 flex items-center gap-2">
              <Search className="w-5 h-5 text-primary-500" />
              SEO Skills
            </h3>
            <div className="space-y-5">
              {seoSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-secondary-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${300 + index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Skills */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-lg font-semibold text-secondary-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary-500" />
              Marketing Skills
            </h3>
            <div className="space-y-5">
              {marketingSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-secondary-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${400 + index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-6 text-center">
            Tools I Use
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className={`card-hover p-4 text-center group transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${500 + index * 50}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <tool.icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-xs font-medium text-secondary-700 leading-tight block">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science and Engineering',
      institution: 'Nandha College of Technology',
      location: 'Erode',
      duration: '2019 - 2023',
      score: '80.4%',
      icon: GraduationCap,
      color: 'primary',
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'HSC',
      institution: 'Government Higher Secondary School',
      location: 'Dharmapuri',
      duration: '2018 - 2019',
      score: '71.83%',
      icon: BadgeIcon,
      color: 'secondary',
    },
    {
      degree: 'Secondary School Leaving Certificate',
      field: 'SSLC',
      institution: 'Apollo Matriculation School',
      location: 'Pennagaram',
      duration: '2016 - 2017',
      score: '92.6%',
      icon: BadgeIcon,
      color: 'accent',
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="section bg-white relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="badge-primary mb-4">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle mx-auto">
            A strong foundation in computer science engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <div
              key={item.institution}
              className={`relative pl-8 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="timeline-line" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0">
                <div
                  className={`timeline-dot ${
                    item.color === 'primary'
                      ? 'bg-primary-100 border-primary-500'
                      : item.color === 'accent'
                      ? 'bg-accent-100 border-accent-500'
                      : 'bg-secondary-100 border-secondary-500'
                  }`}
                >
                  <item.icon
                    className={`w-3 h-3 ${
                      item.color === 'primary'
                        ? 'text-primary-500'
                        : item.color === 'accent'
                        ? 'text-accent-500'
                        : 'text-secondary-500'
                    }`}
                  />
                </div>
              </div>

              {/* Content Card */}
              <div className="card-hover p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {item.degree}
                    </h3>
                    <p className="text-secondary-600">{item.field}</p>
                    <div className="flex items-center gap-2 mt-2 text-secondary-500 text-sm">
                      <Building2 className="w-4 h-4" />
                      <span>
                        {item.institution}, {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:text-right">
                    <div className="flex items-center gap-2 text-secondary-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                    <div
                      className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                        item.color === 'primary'
                          ? 'bg-primary-100 text-primary-700'
                          : item.color === 'accent'
                          ? 'bg-accent-100 text-accent-700'
                          : 'bg-secondary-100 text-secondary-700'
                      }`}
                    >
                      {item.score}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 6382939779',
      href: 'tel:+916382939779',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vimalrajgcse@gmail.com',
      href: 'mailto:vimalrajgcse@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'vimalraj-digital-marketer',
      href: 'https://www.linkedin.com/in/vimalraj-digital-marketer',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dharmapuri, Tamil Nadu, India',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section bg-secondary-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-display-md md:text-display-lg text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Ready to improve your organic visibility? I'm available for SEO
            projects, consulting, and full-time opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contactInfo.map((item, index) => (
            <div
              key={item.label}
              className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group transition-all duration-500 hover:bg-white/10 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-secondary-400 text-sm mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-white font-medium hover:text-primary-400 transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white font-medium text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="mailto:vimalrajgcse@gmail.com"
            className="inline-flex items-center gap-2 btn bg-white text-secondary-900 hover:bg-secondary-100 shadow-soft-lg"
          >
            <Mail className="w-5 h-5" />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-secondary-950 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold font-display text-white">
              Vimalraj
            </a>
            <p className="text-secondary-400 text-sm mt-1">
              Digital Marketer & SEO Analyst
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vimalraj-digital-marketer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary-400 hover:bg-primary-500 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vimalrajgcse@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary-400 hover:bg-primary-500 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+916382939779"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary-400 hover:bg-primary-500 hover:text-white transition-all"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-secondary-500 text-sm">
              &copy; {new Date().getFullYear()} Vimalraj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Scroll to Top Button
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/40 transition-all flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
