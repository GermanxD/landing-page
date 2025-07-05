import { Users, Clock, Calendar, Lightbulb, Heart } from "lucide-react";

export default function HeroSection() {
    return (
        <section 
            className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 w-full max-w-6xl mx-auto"
            style={{
                backgroundImage: "url('/background-page.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '60vh'
            }}
        >
            {/* Overlay más sutil */}
            <div className="absolute inset-0 bg-white/30 sm:bg-white/20"></div>
            
            <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-6 md:space-y-0">
                {/* Título principal */}
                <div className="p-4 sm:p-6 bg-white/80 sm:bg-white/70 rounded-lg shadow-md mb-6 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--dim-gray)' }}>
                        Una comunidad para ti
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium" style={{ color: 'var(--cocoa-brown)' }}>
                        Un grupo en el que vas a poder encontrarte
                    </p>
                </div>
                {/* Cards de características */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="grid gap-3 sm:gap-4 md:gap-6">
                        {/* Card "Tardes de convivencia y buena vibra" */}
                        <div className="bg-white/95 sm:bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow mx-1 sm:mx-0" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight" style={{ color: 'var(--dim-gray)' }}>Tardes de convivencia y buena vibra</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-2 opacity-80 pl-6 sm:pl-8 md:pl-9" style={{ color: 'var(--dim-gray)' }}>
                                Únete a nuestras sesiones de convivencia donde la amistad cristiana y el buen ambiente son la prioridad.
                            </p>
                        </div>
                        
                        {/* Card "Actividades recreativas y eventos especiales" */}
                        <div className="bg-white/95 sm:bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow mx-1 sm:mx-0" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight" style={{ color: 'var(--dim-gray)' }}>Actividades recreativas y eventos especiales</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-2 opacity-80 pl-6 sm:pl-8 md:pl-9 block sm:hidden md:block" style={{ color: 'var(--dim-gray)' }}>
                                Eventos divertidos que fortalecen la comunidad y crean memorias duraderas.
                            </p>
                        </div>
                        
                        {/* Card "Consejos que si te sirven en la vida" */}
                        <div className="bg-white/95 sm:bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow mx-1 sm:mx-0" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: 'var(--peach)' }} />
                                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight" style={{ color: 'var(--dim-gray)' }}>Consejos que si te sirven en la vida</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-2 opacity-80 pl-6 sm:pl-8 md:pl-9 block sm:hidden md:block" style={{ color: 'var(--dim-gray)' }}>
                                Sabiduría bíblica y práctica compartida entre hermanos para crecer juntos en fe.
                            </p>
                        </div>
                        
                        {/* Card "Gente bonita y con buen corazón" */}
                        <div className="bg-white/95 sm:bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow mx-1 sm:mx-0" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight" style={{ color: 'var(--dim-gray)' }}>Gente bonita y con buen corazón</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-2 opacity-80 pl-6 sm:pl-8 md:pl-9 block sm:hidden md:block" style={{ color: 'var(--dim-gray)' }}>
                                Jóvenes auténticos que buscan crecer en valores cristianos y amistad sincera.
                            </p>
                        </div>
                        
                        {/* Card "Amigos que tu mamá si aprueba en casa" */}
                        <div className="bg-white/95 sm:bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow mx-1 sm:mx-0" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight" style={{ color: 'var(--dim-gray)' }}>Amigos que tu mamá si aprueba en casa</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-2 opacity-80 pl-6 sm:pl-8 md:pl-9 block sm:hidden md:block" style={{ color: 'var(--dim-gray)' }}>
                                Compañeros de confianza que comparten valores familiares y cristianos sólidos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}