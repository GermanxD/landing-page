import { MessageCircle } from 'lucide-react';

export default function DirectorsSection() {
  return (
    <section className="px-4 py-8 w-full max-w-6xl mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:items-center">
        {/* Mesa Directiva - Desktop: columna izquierda */}
        <div className="text-center md:text-left mb-6 md:mb-0 md:flex md:flex-col md:h-full">
          <div className="md:hidden mb-6">
            {/* Imagen real para mesa directiva - Mobile */}
            <div className="w-full h-32 rounded-lg mb-4 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--baby-powder)' }}>
              <img
                src="/mesa-directiva.jpeg"
                alt="Mesa Directiva"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">            
            <p className="text-xl md:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--cocoa-brown)' }}>
              ¿Te nos unes?
            </p>
            
            <div className="space-y-4 md:space-y-6">
              {/* Botón de mensaje principal */}
              <a
                href="https://wa.me/525551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full md:w-auto"
              >
                <button
                  className="flex items-center justify-center gap-2 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-sm md:text-base lg:text-lg w-full md:w-auto hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'var(--cocoa-brown)' }}
                  type="button"
                >
                  Mándanos un mensaje
                      <img
                      src="/whatsapp-white.svg"
                      alt="WhatsApp"
                      className="w-6 h-6"
                      style={{minWidth: '24px', minHeight: '24px', alignContent: 'center'}}
                      />
                </button>
              </a>
              <div className="hidden md:block space-y-3">
                <p className="text-sm lg:text-base opacity-80" style={{ color: 'var(--dim-gray)' }}>
                  Únete a nuestra comunidad de jóvenes cristianos comprometidos con la fe bautista y el servicio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen y contenido visual - Desktop: columna derecha */}
        <div className="hidden md:block md:flex md:items-center">
          <div className="space-y-6 w-full">
            {/* Imagen real para mesa directiva - Desktop */}
            <div className="w-full h-64 lg:h-80 rounded-xl flex items-center justify-center shadow-lg overflow-hidden" style={{ backgroundColor: 'var(--baby-powder)' }}>
              <img
                src="/mesa-directiva.jpeg"
                alt="Mesa Directiva URBJJ"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
