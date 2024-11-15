import { ComponentChildren } from "preact";
import Navbar from "../islands/Navbar.tsx";

interface LayoutProps {
  children: ComponentChildren;
  // Add fullWidth prop to optionally disable max-width constraint
  fullWidth?: boolean;
  // Add className prop to allow additional styling from pages
  className?: string;
}

export default function Layout({
  children,
  fullWidth = false,
  className = "",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className={`flex-grow ${className}`}>
        {fullWidth
          ? (
            // Full width content
            <div className="px-4 py-6 md:py-8">
              {children}
            </div>
          )
          : (
            // Contained width content with responsive padding
            <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 w-full">
              {children}
            </div>
          )}
      </main>

      {/* Footer */}
      <footer className="bg-enl-gray mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Kontakt</h3>
              <address className="not-italic">
                <p>Studiestræde 24, 1.</p>
                <p>1455 København K</p>
                <p className="mt-2">Telefon: 33 93 33 24</p>
                <p>Email: info@enhedslisten.dk</p>
              </address>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Hurtige links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/bliv-medlem" className="hover:text-enl-red">
                    Bliv medlem
                  </a>
                </li>
                <li>
                  <a href="/politik" className="hover:text-enl-red">Politik</a>
                </li>
                <li>
                  <a href="/kontakt" className="hover:text-enl-red">Kontakt</a>
                </li>
                <li>
                  <a href="/presse" className="hover:text-enl-red">Presse</a>
                </li>
              </ul>
            </div>

            {/* Social media */}
            <div>
              <h3 className="font-bold text-lg mb-4">Følg os</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://facebook.com/enhedslisten"
                    className="hover:text-enl-red"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/enhedslisten"
                    className="hover:text-enl-red"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/enhedslisten"
                    className="hover:text-enl-red"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              Enhedslisten. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
