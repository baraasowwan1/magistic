import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

export function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "من نحن" },
    { path: "/portfolio", label: "أعمالنا" },
    { path: "/contact", label: "اتصل بنا" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  return (
    <div className="min-h-screen bg-white" dir="rtl">

      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 border-b-2 border-yellow-600">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

          <Link to="/" className="flex items-center gap-3">
            <img src="/caslogo.png" className="h-12" />
            <div>
              <h1 className="text-2xl text-yellow-500 font-bold">MAJESTIC</h1>
              <p className="text-sm text-yellow-600">INTERIOR DESIGN</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={isActive(item.path) ? "text-yellow-500" : "text-gray-300"}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yellow-500"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {isMenuOpen && (
          <div className="md:hidden p-4 border-t border-yellow-600">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-black text-white text-center p-6 mt-10">
        © 2026 Majestic Interior Design
      </footer>

    </div>
  );
}
