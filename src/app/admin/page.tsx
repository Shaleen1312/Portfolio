

"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';



export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUser === 'admin' && adminPass === 'admin123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminUser('');
    setAdminPass('');
    setLoginError('');
  };

  const [projects, setProjects] = useState<any[]>([]);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectTech, setProjectTech] = useState('');
  const [projectRole, setProjectRole] = useState('');
  const [projectImage, setProjectImage] = useState('');

  const [skills, setSkills] = useState<any[]>([]);
  const [skillCategory, setSkillCategory] = useState('');
  const [skillItems, setSkillItems] = useState('');

  useEffect(() => {
    const storedProjects = localStorage.getItem('admin_projects');
    if (storedProjects) setProjects(JSON.parse(storedProjects));
    const storedSkills = localStorage.getItem('admin_skills');
    if (storedSkills) setSkills(JSON.parse(storedSkills));
    if (localStorage.getItem('admin_logged_in') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('admin_projects', JSON.stringify(projects));
  }, [projects]);
  useEffect(() => {
    localStorage.setItem('admin_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('admin_logged_in', 'true');
    } else {
      localStorage.removeItem('admin_logged_in');
    }
  }, [isLoggedIn]);

  function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    setProjects([
      ...projects,
      {
        title: projectTitle,
        description: projectDescription,
        tech: projectTech.split(',').map(t => t.trim()),
        role: projectRole,
        image: projectImage,
      },
    ]);
    setProjectTitle('');
    setProjectDescription('');
    setProjectTech('');
    setProjectRole('');
    setProjectImage('');
  }

  function handleAddSkill(e: React.FormEvent) {
    e.preventDefault();
    setSkills([
      ...skills,
      {
        category: skillCategory,
        items: skillItems.split(',').map(s => s.trim()),
      },
    ]);
    setSkillCategory('');
    setSkillItems('');
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-end p-4 pt-20"><ThemeToggle /></div>
      <div className="min-h-[70vh] flex flex-col items-center justify-center pb-20 pt-4">
        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-sm flex flex-col gap-4">
            <div className="flex justify-center mb-2">
              <img src="/profile.jpg" alt="Admin" className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 dark:border-gray-700" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-center">Admin Login</h2>
            <input
              type="text"
              value={adminUser}
              onChange={e => setAdminUser(e.target.value)}
              placeholder="Username"
              className="p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400"
              required
            />
            <input
              type="password"
              value={adminPass}
              onChange={e => setAdminPass(e.target.value)}
              placeholder="Password"
              className="p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400"
              required
            />
            {loginError && <div className="text-red-500 text-sm text-center">{loginError}</div>}
            <button type="submit" className="button-primary">Login</button>
          </form>
        ) : (
          <div className="w-full max-w-2xl mx-auto py-12 px-4">
            <div className="flex justify-center mb-6">
              <img src="/profile.jpg" alt="Admin" className="w-28 h-28 object-cover rounded-full border-2 border-gray-300 dark:border-gray-700" />
            </div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <button onClick={handleLogout} className="text-sm px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">Logout</button>
            </div>
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
              <form onSubmit={handleAddProject} className="space-y-4">
                <input value={projectTitle} onChange={e => setProjectTitle(e.target.value)} required placeholder="Title" className="w-full p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400" />
                <textarea value={projectDescription} onChange={e => setProjectDescription(e.target.value)} required placeholder="Description" className="w-full p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400" />
                <input value={projectTech} onChange={e => setProjectTech(e.target.value)} required placeholder="Technologies (comma separated)" className="w-full p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400" />
                <input value={projectRole} onChange={e => setProjectRole(e.target.value)} required placeholder="Role" className="w-full p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400" />
                <input value={projectImage} onChange={e => setProjectImage(e.target.value)} placeholder="Image URL or path" className="w-full p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400" />
                <button type="submit" className="button-primary">Add Project</button>
              </form>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Current Projects</h3>
                <ul className="list-disc pl-5">
                  {projects.map((p, i) => (
                    <li key={i}><span className="font-bold">{p.title}</span> – {p.role}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-4">Add New Skill Category</h2>
              <form onSubmit={handleAddSkill} className="space-y-4">
                <input value={skillCategory} onChange={e => setSkillCategory(e.target.value)} required placeholder="Category (e.g. Programming)" className="w-full p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400" />
                <input value={skillItems} onChange={e => setSkillItems(e.target.value)} required placeholder="Skills (comma separated)" className="w-full p-2 border rounded dark:text-white dark:bg-gray-900 dark:placeholder-gray-400" />
                <button type="submit" className="button-primary">Add Skill Category</button>
              </form>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Current Skills</h3>
                <ul className="list-disc pl-5">
                  {skills.map((s, i) => (
                    <li key={i}><span className="font-bold">{s.category}</span>: {s.items.join(', ')}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
} 