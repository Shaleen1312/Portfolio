'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa'
import MobileMenu from '@/components/MobileMenu'
import ThemeToggle from '@/components/ThemeToggle'

type Project = {
  title: string
  description: string
  tech: string[]
  role: string
  image: string
  link?: string
}

type Skill = {
  category: string;
  items: string[];
};

type ExperienceItem = {
  role: string
  company: string
  duration: string
  description: string
}

const experience: ExperienceItem[] = [
  {
    role: "AI & Automation Engineer",
    company: "Scoreme Solutions Pvt Limited",
    duration: "Present",
    description: "Building agentic AI systems and automation pipelines, working across AI-driven product features and full-stack engineering."
  }
];

type Achievement = {
  title: string
  description: string
}

const achievements: Achievement[] = [
  {
    title: "Global Fintech Fest (GFF) 2026",
    description: "Represented Resurgent India at GFF 2026, showcasing the agentic credit-intelligence platform to banking and fintech industry leaders."
  },
  {
    title: "Public Launch — resurgentindia.ai",
    description: "Led the public launch of the platform as resurgentindia.ai, taking it from an internal tool to a live, client-facing commercial product."
  }
];

const defaultProjects: Project[] = [
  {
    title: "Atlas — Agentic Credit-Intelligence Platform",
    description: "A live commercial SaaS product powering resurgentindia.ai. AI agents turn a company's CIN into bank-ready credit deliverables — forensic audits, CMA workbooks, board notes, TEV studies, valuations, and AML/PEP screening — in minutes instead of weeks.",
    tech: ["React", "TypeScript", "AI Agents", "AWS"],
    role: "Core Engineer",
    image: "/project5.svg",
    link: "https://github.com/shaleen2004/atlas-agentic-credit-intelligence"
  },
  {
    title: "Ecommerce Electronic Shop",
    description: "A frontend website for online electronic sales, handling browsing and cart management.",
    tech: ["HTML", "Node.js", "CSS", "JavaScript"],
    role: "Frontend Developer",
    image: "/project1.jpg"
  },
  {
    title: "Bumbly Blogging Platform",
    description: "A blog-sharing website for individuals or groups to publish content.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    role: "UI Designer",
    image: "/project2.jpg"
  },
  {
    title: "Mini e-auction Portal",
    description: "A portal for users to take a bid for electronic items and which users take the highest bid can buy that item.",
    tech: ["React", "CSS", "JavaScript"],
    role: "Full Stack Developer",
    image: "/project4.jpg"
  }
];

const defaultSkills: Skill[] = [
  {
    category: "Programming",
    items: ["HTML", "CSS", "JavaScript", "C++", "Java", "SQL"]
  },
  {
    category: "Frameworks & Tools",
    items: ["React", "Node.js", "Git", "VS Code"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "MS Excel"]
  },
  {
    category: "Soft Skills",
    items: ["Time Management", "Leadership", "Communication", "Problem Solving"]
  }
];

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    label: "Phone",
    value: "+91 7888366272",
    href: "tel:+917888366272"
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    label: "Email",
    value: "schhabra50_be23@thapar.edu",
    href: "mailto:schhabra50_be23@thapar.edu"
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    label: "Location",
    value: "Ludhiana, Punjab",
    href: "https://maps.google.com/?q=Ludhiana,Punjab"
  }
]

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group"
    >
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg bg-background-light dark:bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-light to-accent-light dark:from-secondary-dark dark:to-accent-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index === 0}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(tech => (
          <span key={tech} className="tech-chip">
            {tech}
          </span>
        ))}
      </div>
      <p className="font-mono text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">// {project.role}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-mono font-medium text-secondary-light dark:text-secondary-dark hover:underline"
        >
          View Repository →
        </a>
      )}
    </motion.div>
  )
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [skills, setSkills] = useState<Skill[]>(defaultSkills);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let loadedProjects = defaultProjects;
      let loadedSkills = defaultSkills;
      try {
        const storedProjects = localStorage.getItem('admin_projects');
        if (storedProjects) {
          loadedProjects = JSON.parse(storedProjects);
        }
      } catch (e) {
        console.error('Error loading projects from localStorage:', e);
      }
      try {
        const storedSkills = localStorage.getItem('admin_skills');
        if (storedSkills) {
          loadedSkills = JSON.parse(storedSkills);
        }
      } catch (e) {
        console.error('Error loading skills from localStorage:', e);
      }
      setProjects(Array.isArray(loadedProjects) && loadedProjects.length > 0 ? loadedProjects : defaultProjects);
      setSkills(Array.isArray(loadedSkills) && loadedSkills.length > 0 ? loadedSkills : defaultSkills);
    }
  }, []);

  return (
    <div className="min-h-screen bg-grid">
      <nav className="fixed top-0 w-full bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md z-50 border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-mono font-bold text-secondary-light dark:text-secondary-dark">
              &lt;SC<span className="text-text-primary-light dark:text-text-primary-dark">/</span>&gt;
            </span>
            <div className="hidden sm:flex items-center space-x-4">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#achievements" className="nav-link">Achievements</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="/admin" className="nav-link">Admin</a>
              <ThemeToggle />
            </div>
            <div className="sm:hidden flex items-center space-x-2">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      
      <section id="about" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="status-badge mb-6">
                <span className="status-dot" />
                Available for opportunities
              </div>
              <p className="font-mono text-sm text-secondary-light dark:text-secondary-dark mb-3">
                $ whoami
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">Shaleen Chhabra</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-text-secondary-light dark:text-text-secondary-dark mb-8">
                AI &amp; Automation Engineer
              </h2>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl">
                Currently building AI-driven automation at Scoreme Solutions Pvt Limited.
                I work on agentic AI systems and web applications, with hands-on experience
                shipping real production tools, from automation pipelines to full-stack
                platforms used by real users.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="button-primary">Get in Touch</a>
                <a href="#projects" className="button-outline">View Projects</a>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="https://github.com/shaleen2004"
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-text-secondary-light dark:text-text-secondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                   aria-label="Visit my GitHub profile"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/feed/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-text-secondary-light dark:text-text-secondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                   aria-label="Visit my LinkedIn profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="mailto:schhabra50_be23@thapar.edu"
                   className="text-text-secondary-light dark:text-text-secondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors">
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-light to-accent-light dark:from-secondary-dark dark:to-accent-dark opacity-20 blur-3xl animate-pulse" />
                <Image
                  src="/profile.jpg"
                  alt="Shaleen Chhabra"
                  width={400}
                  height={400}
                  className="rounded-full relative z-10 animate-float"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="mono-label mb-3">~/experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-10 relative border-l border-border-light dark:border-border-dark pl-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute -left-[2.5rem] top-1.5 w-3 h-3 rounded-full bg-secondary-light dark:bg-secondary-dark ring-4 ring-background-light dark:ring-background-dark" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <span className="font-mono text-xs px-2 py-1 rounded-md bg-secondary-light/10 dark:bg-secondary-dark/10 text-secondary-light dark:text-secondary-dark w-fit">{item.duration}</span>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium mb-2">{item.company}</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="achievements" className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="mono-label mb-3">~/achievements</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Key <span className="gradient-text">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-light/10 dark:bg-secondary-dark/10 flex items-center justify-center text-secondary-light dark:text-secondary-dark mb-4">
                  <FaTrophy className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="projects" className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="mono-label mb-3">~/projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
              in web development and software engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length === 0 ? <p className="text-center text-gray-500">No projects to display.</p> : projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="mono-label mb-3">~/skills</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              I've developed a diverse set of skills throughout my journey as a software developer.
              Here's a comprehensive overview of my technical and soft skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.length === 0 ? <p className="text-center text-gray-500">No skills to display.</p> : skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-sm font-mono uppercase tracking-wide mb-4 text-secondary-light dark:text-secondary-dark">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: (groupIndex * skillGroup.items.length + index) * 0.05
                      }}
                      viewport={{ once: true }}
                      className="tech-chip"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="mono-label mb-3">~/contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out to me through any of the following channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label === "Location" ? "_blank" : undefined}
                rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col items-center text-center group hover:bg-surface-light dark:hover:bg-surface-dark"
              >
                <div className="w-12 h-12 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full flex items-center justify-center text-secondary-light dark:text-secondary-dark mb-4 group-hover:bg-secondary-light dark:group-hover:bg-secondary-dark group-hover:text-white dark:group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-2">{info.label}</h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark group-hover:text-secondary-light dark:group-hover:text-secondary-dark transition-colors duration-300">{info.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/shaleen2004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-background-dark hover:border-secondary-light dark:hover:border-secondary-dark transition-all duration-300"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-background-dark hover:border-secondary-light dark:hover:border-secondary-dark transition-all duration-300"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  )
}
