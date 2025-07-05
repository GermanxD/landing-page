"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Acerca", href: "/about" },
    { name: "Actividades", href: "/actividades" },
    { name: "Directorio", href: "/directorio" },
  ];

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "INICIO";
      case "/about":
        return "ACERCA";
      case "/actividades":
        return "ACTIVIDADES";
      case "/directorio":
        return "DIRECTORIO";
      default:
        return "URBJJ";
    }
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-urbjj rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xs md:text-sm">URBJJ</span>
            </div>
          </Link>
          
          {/* Título de página (móvil) */}
          <h1 className="text-lg md:text-xl font-bold md:hidden" style={{ color: 'var(--dim-gray)' }}>
            {getPageTitle()}
          </h1>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:scale-105 ${
                  pathname === item.href
                    ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Botón menú hamburguesa (móvil) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--dim-gray)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--dim-gray)' }} />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
