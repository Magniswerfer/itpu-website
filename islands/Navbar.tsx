import { useState } from "preact/hooks";
import { Menu, X } from "lucide-preact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-enl-red text-white">
      {/* Main navbar container */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo area */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">ENHEDSLISTEN</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:bg-white/10 px-3 py-2 rounded-md">
              Forside
            </a>
            <a
              href="/politik"
              className="hover:bg-white/10 px-3 py-2 rounded-md"
            >
              Politik
            </a>
            <a href="/om-os" className="hover:bg-white/10 px-3 py-2 rounded-md">
              Om os
            </a>
            <a
              href="/kalender"
              className="hover:bg-white/10 px-3 py-2 rounded-md"
            >
              Kalender
            </a>
            <a
              href="/kontakt"
              className="hover:bg-white/10 px-3 py-2 rounded-md"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10"
            >
              {isOpen
                ? <X className="h-6 w-6" />
                : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Forside
            </a>
            <a
              href="/politik"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Politik
            </a>
            <a
              href="/om-os"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Om os
            </a>
            <a
              href="/kalender"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Kalender
            </a>
            <a
              href="/kontakt"
              className="block px-3 py-2 rounded-md hover:bg-white/10"
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
