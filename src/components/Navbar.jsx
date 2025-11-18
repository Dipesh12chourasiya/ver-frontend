import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import adminIcon from "../assets/admin.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    setIsAdmin(!!admin);
  }, []);

  return (
    <nav className="bg-white shadow py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-600 font-medium">
            Projects
          </Link>
          <Link to="/clients" className="hover:text-blue-600 font-medium">
            Clients
          </Link>
          <Link
            to="/newsletter"
            className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 hover:shadow"
          >
            <span className="text-blue-600 font-semibold">Subscribe Us</span>
          </Link>

          {!isAdmin ? (
            <Link
              to="/admin/login"
              className="flex items-center bg-white rounded-lg px-3 py-2 border border-gray-200 hover:shadow"
            >
              <span className="text-[#465A86] font-semibold">Admin Login</span>
            </Link>
          ) : (
            <Link to="/admin/dashboard">
              <img
                src={adminIcon}
                alt="Admin"
                className="w-8 h-8 rounded-full border border-gray-300 hover:shadow"
              />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 border-t border-gray-200 pt-4">
          <Link to="/" className="block hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/projects" className="block hover:text-blue-600 font-medium">
            Projects
          </Link>
          <Link to="/clients" className="block hover:text-blue-600 font-medium">
            Clients
          </Link>
          <Link
            to="/newsletter"
            className="block text-blue-600 font-semibold hover:underline"
          >
            Subscribe Us
          </Link>

          {!isAdmin ? (
            <Link
              to="/admin/login"
              className="block text-[#465A86] font-semibold"
            >
              Admin Login
            </Link>
          ) : (
            <Link to="/admin/dashboard" className="flex items-center gap-2">
              <img
                src={adminIcon}
                alt="Admin"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="font-medium">Admin</span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
