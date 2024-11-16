import { useState } from "preact/hooks";
import { Menu, X } from "lucide-preact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  type MenuItem = {
    href: string;
    label: string;
  };

  // Menu items array
  const menuItems: MenuItem[] = [
    { href: "/aktuelle-sager", label: "Aktuelle Sager"},
    { href: "/politik", label: "Politik" },
    { href: "/om-os", label: "Om os" },
    { href: "/kalender", label: "Kalender" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="bg-enl-green-dark text-white">
      {/* Main navbar container */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo area */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold px-3 py-2 rounded-md inline-flex items-center">
              <img
                src="/images/LogoSquare.svg"
                alt="ITPU Logo"
                className="h-8 w-8 mr-2"  // made slightly smaller and added margin-right
              />
              ITPU
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={"px-3 py-2 rounded-md hover:bg-enl-green"}
                  >
                    {item.label}
                  </a>
                ))}
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
