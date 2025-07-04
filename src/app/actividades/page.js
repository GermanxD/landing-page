import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calendar, Trophy, Users, Heart, Target, Clock } from "lucide-react";

export default function Actividades() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--baby-powder)' }}>
      <Header />
      
      <main className="px-4 py-8 max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--dim-gray)' }}>
            Actividades
          </h1>
          <p className="text-lg" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>
            Eventos, actividades y momentos especiales de nuestra comunidad
          </p>
        </div>

        {/* Próximas Actividades */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--cocoa-brown)' }}>
            <Calendar className="w-6 h-6" />
            Próximas Actividades
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4" style={{ borderColor: 'var(--peach)' }}>
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 mt-1" style={{ color: 'var(--cocoa-brown)' }} />
                <div className="flex-1">
                  <h3 className="font-semibold" style={{ color: 'var(--dim-gray)' }}>Campamento Bautista de Verano</h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>15-17 de Julio, 2025</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Campamento La Esperanza - Todo el fin de semana</p>
                  <span className="inline-block text-xs px-2 py-1 rounded mt-2" style={{ backgroundColor: 'var(--baby-powder)', color: 'var(--cocoa-brown)' }}>
                    Inscripciones Abiertas
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4" style={{ borderColor: 'var(--cocoa-brown)' }}>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 mt-1" style={{ color: 'var(--cocoa-brown)' }} />
                <div className="flex-1">
                  <h3 className="font-semibold" style={{ color: 'var(--dim-gray)' }}>Convivio Familiar</h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>22 de Julio, 2025</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Parque Central - 4:00 PM</p>
                  <span className="inline-block text-xs px-2 py-1 rounded mt-2" style={{ backgroundColor: 'var(--baby-powder)', color: 'var(--cocoa-brown)' }}>
                    Evento Gratuito
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4" style={{ borderColor: 'var(--peach)' }}>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 mt-1" style={{ color: 'var(--cocoa-brown)' }} />
                <div className="flex-1">
                  <h3 className="font-semibold" style={{ color: 'var(--dim-gray)' }}>Taller de Liderazgo Bautista</h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>29 de Julio, 2025</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Iglesia Bautista Central - 6:00 PM</p>
                  <span className="inline-block text-xs px-2 py-1 rounded mt-2" style={{ backgroundColor: 'var(--baby-powder)', color: 'var(--cocoa-brown)' }}>
                    Para Jóvenes 16+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actividades Regulares */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--cocoa-brown)' }}>
            <Clock className="w-6 h-6" />
            Actividades Regulares
          </h2>
          
          <div className="grid gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--dim-gray)' }}>Estudios Bíblicos</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Martes y Jueves</p>
              <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>7:00 PM - 8:30 PM</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--dim-gray)' }}>Tardes de Convivencia</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Todos los Sábados</p>
              <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>4:00 PM - 7:00 PM</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--dim-gray)' }}>Servicio Dominical</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Domingos</p>
              <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </section>

        {/* Galería de Eventos Pasados */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--cocoa-brown)' }}>
            <Heart className="w-6 h-6" />
            Eventos Pasados
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-full h-24 rounded mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--baby-powder)' }}>
                <span className="text-xs" style={{ color: 'var(--dim-gray)' }}>Foto Evento</span>
              </div>
              <h4 className="font-medium text-sm" style={{ color: 'var(--dim-gray)' }}>Campamento Bautista 2024</h4>
              <p className="text-xs" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Diciembre 2024</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-full h-24 rounded mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--baby-powder)' }}>
                <span className="text-xs" style={{ color: 'var(--dim-gray)' }}>Foto Evento</span>
              </div>
              <h4 className="font-medium text-sm" style={{ color: 'var(--dim-gray)' }}>Convención Regional Bautista</h4>
              <p className="text-xs" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Noviembre 2024</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-full h-24 rounded mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--baby-powder)' }}>
                <span className="text-xs" style={{ color: 'var(--dim-gray)' }}>Foto Evento</span>
              </div>
              <h4 className="font-medium text-sm" style={{ color: 'var(--dim-gray)' }}>Convivio Familiar</h4>
              <p className="text-xs" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Octubre 2024</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-full h-24 rounded mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--baby-powder)' }}>
                <span className="text-xs" style={{ color: 'var(--dim-gray)' }}>Foto Evento</span>
              </div>
              <h4 className="font-medium text-sm" style={{ color: 'var(--dim-gray)' }}>Inicio de Temporada</h4>
              <p className="text-xs" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Septiembre 2024</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
