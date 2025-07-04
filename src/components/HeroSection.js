import { Users, Clock, Calendar, Lightbulb, Heart } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="px-4 py-8 w-full max-w-6xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
                {/* Título principal */}
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--dim-gray)' }}>
                        Una comunidad para ti
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium mb-6 md:mb-8" style={{ color: 'var(--cocoa-brown)' }}>
                        Un grupo en el que vas a poder encontrarte
                    </p>
                </div>

                {/* Cards de características */}
                <div className="space-y-4 md:space-y-6">
                    <div className="grid gap-4 md:gap-6">
                        {/* Card "Tardes de convivencia y buena vibra" */}
                        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-sm md:text-base" style={{ color: 'var(--dim-gray)' }}>Tardes de convivencia y buena vibra</span>
                            </div>
                            <p className="text-sm mt-2 opacity-80" style={{ color: 'var(--dim-gray)' }}>
                                Únete a nuestras sesiones de convivencia donde la amistad cristiana y el buen ambiente son la prioridad.
                            </p>
                        </div>

                        {/* Card "Actividades recreativas y eventos especiales" */}
                        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-sm md:text-base" style={{ color: 'var(--dim-gray)' }}>Actividades recreativas y eventos especiales</span>
                            </div>
                            <p className="hidden md:block text-sm mt-2 opacity-80" style={{ color: 'var(--dim-gray)' }}>
                                Eventos divertidos que fortalecen la comunidad y crean memorias duraderas.
                            </p>
                        </div>

                        {/* Card "Consejos que si te sirven en la vida" */}
                        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-3">
                                <Lightbulb className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--peach)' }} />
                                <span className="font-medium text-sm md:text-base" style={{ color: 'var(--dim-gray)' }}>Consejos que si te sirven en la vida</span>
                            </div>
                            <p className="hidden md:block text-sm mt-2 opacity-80" style={{ color: 'var(--dim-gray)' }}>
                                Sabiduría bíblica y práctica compartida entre hermanos para crecer juntos en fe.
                            </p>
                        </div>

                        {/* Card "Gente bonita y con buen corazón" */}
                        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-3">
                                <Heart className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-sm md:text-base" style={{ color: 'var(--dim-gray)' }}>Gente bonita y con buen corazón</span>
                            </div>
                            <p className="hidden md:block text-sm mt-2 opacity-80" style={{ color: 'var(--dim-gray)' }}>
                                Jóvenes auténticos que buscan crecer en valores cristianos y amistad sincera.
                            </p>
                        </div>

                        {/* Card "Amigos que tu mamá si aprueba en casa" */}
                        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'var(--baby-powder)', borderWidth: '1px' }}>
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--cocoa-brown)' }} />
                                <span className="font-medium text-sm md:text-base" style={{ color: 'var(--dim-gray)' }}>Amigos que tu mamá si aprueba en casa</span>
                            </div>
                            <p className="hidden md:block text-sm mt-2 opacity-80" style={{ color: 'var(--dim-gray)' }}>
                                Compañeros de confianza que comparten valores familiares y cristianos sólidos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
