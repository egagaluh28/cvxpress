// components/admin/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex">
      <nav className="bg-gray-800 text-white w-64 min-h-screen p-5">
        <h1 className="text-lg font-bold mb-5">Admin Panel</h1>
        <ul>
          <li className="mb-3">
            <Link href="/admin/dashboard">
              <a className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/admin/users">
              <a className="hover:bg-gray-700 p-2 rounded">Users</a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/admin/settings">
              <a className="hover:bg-gray-700 p-2 rounded">Settings</a>
            </Link>
          </li>
          {/* Tambahkan link lain sesuai kebutuhan */}
        </ul>
      </nav>
      <main className="flex-grow p-5">
        {/* Konten utama akan ditampilkan di sini */}
      </main>
    </div>
  );
};

export default Navbar;
