import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">
          © {new Date().getFullYear()} Shaleen Chhabra
        </span>
        <div className="flex items-center space-x-5">
          <a
            href="https://github.com/shaleen2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:schhabra50_be23@thapar.edu"
            aria-label="Email"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
