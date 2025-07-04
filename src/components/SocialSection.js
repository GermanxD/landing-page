import Image from "next/image";

export default function SocialSection() {
  return (
    <section className="px-4 py-8 w-full max-w-6xl mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Post de Instagram - Desktop: columna izquierda */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6" style={{ color: 'var(--cocoa-brown)' }}>
            Síguenos en redes
          </h4>
          
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
            <div className="text-center">
              <div className="w-full h-32 md:h-40 lg:h-48 rounded-lg mx-auto mb-4 overflow-hidden bg-gradient-to-br from-cocoa-brown via-peach to-baby-powder">
                <Image
                  src="/reunion-urbjj.jpg"
                  alt="Reunión de líderes de URBJJ en sesión de trabajo"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              
              <p className="text-sm md:text-base mb-4" style={{ color: 'var(--dim-gray)' }}>
                Mantente al día con nuestras actividades y reuniones
              </p>
              
              <button className="px-4 py-2 md:px-6 md:py-3 rounded-lg text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--cocoa-brown)' }}>
                Seguir en Instagram
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section - Desktop: columna derecha */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6" style={{ color: 'var(--cocoa-brown)' }}>
            Preguntas frecuentes
          </h4>
          
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--cocoa-brown)' }}>
                  <span className="text-white text-sm md:text-base font-bold">?</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base font-medium mb-2" style={{ color: 'var(--dim-gray)' }}>¿Cómo puedo unirme a URBJJ?</p>
                  <p className="text-xs md:text-sm opacity-80" style={{ color: 'var(--dim-gray)' }}>
                    Puedes contactarnos por WhatsApp o redes sociales. Te invitaremos a conocer nuestras instalaciones y actividades.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--cocoa-brown)' }}>
                  <span className="text-white text-sm md:text-base font-bold">?</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base font-medium mb-2" style={{ color: 'var(--dim-gray)' }}>¿Necesito ser bautista para unirme?</p>
                  <p className="text-xs md:text-sm opacity-80" style={{ color: 'var(--dim-gray)' }}>
                    Si bien somos una unión bautista, recibimos a jóvenes cristianos de diferentes denominaciones que comparten nuestros valores.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--cocoa-brown)' }}>
                  <span className="text-white text-sm md:text-base font-bold">?</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base font-medium mb-2" style={{ color: 'var(--dim-gray)' }}>¿Cuáles son los horarios de actividades?</p>
                  <p className="text-xs md:text-sm opacity-80" style={{ color: 'var(--dim-gray)' }}>
                    Tenemos estudios bíblicos los martes y jueves de 7:00 PM a 8:30 PM, y convivencias los sábados de 4:00 PM a 7:00 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ adicional solo en desktop */}
            <div className="hidden md:block bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--cocoa-brown)' }}>
                  <span className="text-white text-sm md:text-base font-bold">?</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base font-medium mb-2" style={{ color: 'var(--dim-gray)' }}>¿Hay límite de edad para participar?</p>
                  <p className="text-xs md:text-sm opacity-80" style={{ color: 'var(--dim-gray)' }}>
                    Recibimos jóvenes desde los 15 años hasta los 30. Nuestra comunidad está enfocada en jóvenes bautistas y cristianos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
