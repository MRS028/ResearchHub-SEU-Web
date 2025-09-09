// import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
     <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h5" />
                <path d="M7 17h7" />
              </svg>
              ResearchHub@SEU
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
              A centralized platform for managing, summarizing, and exploring research papers at Southeast University.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Quick Links</h3>
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors">Home</Link>
            <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors">Dashboard</Link>
            <Link to="/research" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors">Researches</Link>
            <Link to="/bookmarks" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors">Bookmarks</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors">About</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 py-1">Email: support@researchhub.seu.edu.bd</p>
            <p className="text-gray-600 dark:text-gray-300 py-1">Phone: +880 1234 567890</p>
            <p className="text-gray-600 dark:text-gray-300 py-1">Address: Southeast University, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ResearchHub@SEU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
