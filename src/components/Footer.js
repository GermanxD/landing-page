import Link from "next/link";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white px-4 py-8 w-full" style={{ backgroundColor: 'var(--dim-gray)' }}>
      {/* Contenedor principal responsive */}
      <div className="max-w-6xl mx-auto">
        {/* Layout Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-8 justify-items-center">
            {/* Columna 1: Logo y mensaje */}
            <div className="col-span-1">
                <div className="w-40 h-40 mb-4 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                        src="/urbjjlogo.png"
                        alt="Logo URBJJ"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div className="col-span-1">
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--peach)' }}>
                    Una comunidad para ti
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                    Unión Regional Bautista de Jóvenes Jerusalén - Más que una comunidad, somos una familia unida por la fe y los valores bautistas.
                </p>
            </div>

            {/* Columna 3: Información de contacto */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--peach)' }}>
                Contáctanos
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" style={{ color: 'var(--peach)' }} />
                  <div>
                    <p className="text-sm font-medium">Teléfono</p>
                    <a href="tel:+525551234567" className="text-sm opacity-90 hover:opacity-75 transition-opacity">
                      +52 555 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" style={{ color: 'var(--peach)' }} />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:contacto@urbjj.org" className="text-sm opacity-90 hover:opacity-75 transition-opacity">
                      contacto@urbjj.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: 'var(--peach)' }} />
                  <div>
                    <p className="text-sm font-medium">Ubicación</p>
                    <p className="text-sm opacity-90">Nuevo León, México</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 4: Redes sociales y estadísticas */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--peach)' }}>
                Síguenos
              </h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/urbjj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                  >
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--peach)' }} />
                  </a>
                  <a 
                    href="https://facebook.com/urbjj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                  >
                    <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--peach)' }} />
                  </a>
                  <a 
                    href="https://wa.me/525551234567" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--peach)' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-white border-opacity-20 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm opacity-75">
                © 2025 URBJJ - Unión Regional Bautista de Jóvenes Jerusalén. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacidad" className="opacity-75 hover:opacity-100 transition-opacity">
                  Privacidad
                </Link>
                <Link href="/terminos" className="opacity-75 hover:opacity-100 transition-opacity">
                  Términos
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Mobile */}
        <div className="md:hidden max-w-md mx-auto">
          <div className="space-y-6">
            {/* Logo y mensaje principal */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-urbjj rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">URBJJ</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--peach)' }}>
                Una comunidad para ti
              </h3>
              <p className="text-sm opacity-90">
                Unión Regional Bautista de Jóvenes Jerusalén
              </p>
            </div>

            {/* Enlaces rápidos */}
            <div className="grid grid-cols-3 gap-3">
              <Link href="/about" className="group">
                <div className="p-4 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10 text-center">
                  <Heart className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--peach)' }} />
                  <span className="text-xs font-medium block">Acerca de</span>
                </div>
              </Link>
              
              <Link href="/directorio" className="group">
                <div className="p-4 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10 text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--peach)' }} />
                  <span className="text-xs font-medium block">Ubicaciones</span>
                </div>
              </Link>
              
              <Link href="/actividades" className="group">
                <div className="p-4 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--peach)' }}>
                    <span className="text-sm font-bold" style={{ color: 'var(--dim-gray)' }}>A</span>
                  </div>
                  <span className="text-xs font-medium block">Actividades</span>
                </div>
              </Link>
            </div>

            {/* Información de contacto */}
            <div className="border-t border-white border-opacity-20 pt-4">
              <h4 className="text-sm font-semibold mb-3 text-center" style={{ color: 'var(--peach)' }}>
                Contáctanos
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: 'var(--peach)' }} />
                  <a href="tel:+525551234567" className="hover:opacity-75 transition-opacity">
                    +52 555 123 4567
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" style={{ color: 'var(--peach)' }} />
                  <a href="mailto:contacto@urbjj.org" className="hover:opacity-75 transition-opacity">
                    contacto@urbjj.org
                  </a>
                </div>
              </div>
            </div>
            
            {/* Redes sociales */}
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--peach)' }}>
                Síguenos
              </h4>
              <div className="flex justify-center gap-6 mb-4">
                <a 
                  href="https://instagram.com/urbjj" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--peach)' }} />
                </a>
                <a 
                  href="https://facebook.com/urbjj" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                >
                  <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--peach)' }} />
                </a>
                <a 
                  href="https://wa.me/525551234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--peach)' }} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white border-opacity-20 pt-4 text-center">
              <p className="text-xs opacity-75 mb-2">
                © 2025 URBJJ - Unión Regional Bautista de Jóvenes Jerusalén
              </p>
              <div className="flex justify-center gap-4 text-xs">
                <Link href="/privacidad" className="opacity-75 hover:opacity-100 transition-opacity">
                  Privacidad
                </Link>
                <Link href="/terminos" className="opacity-75 hover:opacity-100 transition-opacity">
                  Términos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
