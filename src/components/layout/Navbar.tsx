import { Link } from "react-router";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Task Manager</div>
        <div>
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2">
            Home
          </a>
          <Link
            to="/users"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Users
          </Link>
          <Link
            to="/tasks"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Tasks
          </Link>
        </div>
      </div>
    </nav>
  );
}
