'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm dark:bg-gray-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="flex space-x-1 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-3 text-xl font-bold dark:text-white">GDG Lagos</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Events
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Community
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Us
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            About
          </Link>
          <Link href="/events" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Events
          </Link>
          <Link href="/community" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Community
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Contact
          </Link>
          <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;