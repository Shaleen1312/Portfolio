export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark py-4 px-6 text-center z-50">
      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
        © {new Date().getFullYear()} Shaleen Chhabra. All rights reserved.
      </span>
    </footer>
  );
}
