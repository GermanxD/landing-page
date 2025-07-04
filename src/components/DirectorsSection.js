import { MessageCircle } from 'lucide-react';

export default function DirectorsSection() {
  return (
    <section className="px-4 py-8 w-full max-w-6xl mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:items-center">
        {/* Mesa Directiva - Desktop: columna izquierda */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 py-2 md:py-3 rounded inline-block px-4 md:px-6" style={{ color: 'var(--dim-gray)', backgroundColor: 'var(--baby-powder)' }}>
            Mesa Directiva
          </h3>
          
          <div className="md:hidden mb-6">
            {/* Imagen placeholder para mesa directiva - Mobile */}
            <div className="w-full h-32 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--baby-powder)' }}>
              <span style={{ color: 'var(--dim-gray)' }}>Imagen Mesa Directiva</span>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm md:text-base lg:text-lg" style={{ color: 'var(--dim-gray)' }}>
              Ya somos más de 200 chavos
            </p>
            
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
                  <MessageCircle className="w-6 h-6 transition-transform" style={{ color: 'var(--peach)' }} />
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
        <div className="hidden md:block">
          <div className="space-y-6">
            {/* Imagen placeholder para mesa directiva - Desktop */}
            <div className="w-full h-64 lg:h-80 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: 'var(--baby-powder)' }}>
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--peach)' }}>
                  <span className="text-3xl lg:text-4xl">👥</span>
                </div>
                <span className="text-base lg:text-lg font-medium" style={{ color: 'var(--dim-gray)' }}>Mesa Directiva URBJJ</span>
                <p className="text-sm lg:text-base mt-2 opacity-75" style={{ color: 'var(--dim-gray)' }}>Líderes comprometidos con la comunidad cristiana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
