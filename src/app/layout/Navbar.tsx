import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTheme, toggleTheme }) => {
  const [active, setActive] = useState('/');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Researches', path: '/research' },
    { name: 'Bookmarks', path: '/bookmarks' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
            onClick={() => setActive('/')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActive(link.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === link.path
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>

            {/* Dark/Light Mode Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {currentTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Auth Buttons */}
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="default" size="sm">
              Sign Up
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <Link
                    to="/"
                    onClick={() => setActive('/')}
                    className="flex items-center gap-2 text-lg font-bold text-blue-600 dark:text-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                    ResearchHub
                  </Link>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setActive(link.path)}
                      className={`block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                        active === link.path
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                    <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-full">
                      {currentTheme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
                    </Button>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                    <Button variant="default" className="w-full">
                      Sign Up
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
