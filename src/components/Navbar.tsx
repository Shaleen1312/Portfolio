import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow z-50">
      <div className="font-bold text-xl">
        <Link href="/">Portfolio Admin</Link>
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
