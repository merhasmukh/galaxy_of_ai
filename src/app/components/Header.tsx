import { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  return (
    <header className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white mx-auto items-center justify-center">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Galaxy Of AI</span>
            <Image src="/favicon.ico" alt="Galaxy Of AI Logo" className="h-8 w-auto" width={32} height={32} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navbar */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 items-center">
          <Link href="/" className="text-sm font-semibold text-white">Home</Link>
          <Link href="/roadmaps" className="text-sm font-semibold text-white">Roadmaps</Link>
          <Link href="/tools" className="text-sm font-semibold text-white">Tools</Link>
          <Link href="/blog" className="text-sm font-semibold text-white">Blog</Link>
          <Link href="/about" className="text-sm font-semibold text-white">About</Link>

          {/* Contribute Button */}
          <Link href="/contribute">
            <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
              🚀 Contribute
            </button>
          </Link>
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-gradient-to-br from-[#0F172A] to-[#1E293B] px-6 py-6">
          
          {/* Close Button */}
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image src="/favicon.ico" alt="Galaxy Of AI Logo" className="h-8 w-auto" width={32} height={32} />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 text-white">
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="mt-6 space-y-4 flex flex-col items-center">
          {/* Navigation Links */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="w-full text-lg font-semibold text-white text-center py-3 hover:bg-gray-800 rounded-lg">
            Home
          </Link>
          <Link href="/roadmaps" onClick={() => setMobileMenuOpen(false)} className="w-full text-lg font-semibold text-white text-center py-3 hover:bg-gray-800 rounded-lg">
            Roadmaps
          </Link>
          <Link href="/tools" onClick={() => setMobileMenuOpen(false)} className="w-full text-lg font-semibold text-white text-center py-3 hover:bg-gray-800 rounded-lg">
            Tools
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="w-full text-lg font-semibold text-white text-center py-3 hover:bg-gray-800 rounded-lg">
            Blog
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="w-full text-lg font-semibold text-white text-center py-3 hover:bg-gray-800 rounded-lg">
            About
          </Link>

          {/* Contribute Button with Full Width on Mobile */}
          <Link href="/contribute" onClick={() => setMobileMenuOpen(false)} className="w-full flex justify-center">
            <button className="w-[90%] bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105 mt-4">
              🚀 Contribute
            </button>
          </Link>
        </div>



        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
