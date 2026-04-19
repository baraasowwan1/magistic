import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "من نحن" },
    { path: "/portfolio", label: "أعمالنا" },
    { path: "/contact", label: "اتصل بنا" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">

      {/* 🔥 Scroll Fix */}
      <ScrollToTop />

      {/* Header */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-50 border-b-2 border-yellow-600">

        <div className="max-w-6xl mx-auto px-8 py-4">

          <div className="flex items-center justify-between">

            {/* 🔥 Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/caslogo.png"
                alt="Majestic Logo"
                className="h-12 w-auto"
              />

              <div>
                <h1 className="text-2xl font-bold text-yellow-500">
                  MAJESTIC
                </h1>
                <p className="text-sm text-yellow-600">
                  INTERIOR DESIGN
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors hover:text-yellow-500 ${
                    isActive(item.path)
                      ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-900 rounded-lg transition-colors text-yellow-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-yellow-600">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-yellow-600 text-black"
                        : "text-white hover:bg-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}

        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-black text-white mt-16 border-t-2 border-yellow-600">
        <div className="container mx-auto px-4 py-8">

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-500">
                MAJESTIC INTERIOR DESIGN
              </h3>
              <p className="text-gray-300">
                نحن متخصصون في التصميم الداخلي والديكور الفاخر
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-500">خدماتنا</h4>
              <ul className="space-y-2 text-gray-300">
                <li>التصميم الداخلي</li>
                <li>جبس بورد</li>
                <li>مدافئ حجرية وغازية</li>
                <li>ديكور الحدائق</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-500">
                روابط سريعة
              </h4>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>© 2026 Majestic Interior Design. جميع الحقوق محفوظة</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
