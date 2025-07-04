import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Directorio() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--baby-powder)' }}>
      <Header />
      
      <main className="px-4 py-8 max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--dim-gray)' }}>
            Directorio
          </h1>
          <p className="text-lg" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>
            Ubicaciones y puntos de encuentro de nuestra comunidad
          </p>
        </div>

        <div className="space-y-6">
          {/* Ubicación Principal */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--cocoa-brown)' }}>
              <MapPin className="w-5 h-5" />
              Punto de Encuentro Principal
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" style={{ color: 'var(--dim-gray)', opacity: '0.7' }} />
                <div>
                  <p className="font-medium" style={{ color: 'var(--dim-gray)' }}>Iglesia Bautista Central</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Av. Constitución #456, Col. Centro</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Monterrey, Nuevo León, CP 64000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" style={{ color: 'var(--dim-gray)', opacity: '0.7' }} />
                <p style={{ color: 'var(--dim-gray)' }}>+52 555 123 4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" style={{ color: 'var(--dim-gray)', opacity: '0.7' }} />
                <p style={{ color: 'var(--dim-gray)' }}>contacto@urbjj.org</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1" style={{ color: 'var(--dim-gray)', opacity: '0.7' }} />
                <div>
                  <p className="font-medium" style={{ color: 'var(--dim-gray)' }}>Horarios de Actividades:</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Martes y Jueves: 7:00 PM - 9:00 PM</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Sábados: 4:00 PM - 7:00 PM</p>
                  <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Domingos: 10:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </section>

          {/* Otras Ubicaciones */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--cocoa-brown)' }}>
              Otros Puntos de Encuentro
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 pl-4" style={{ borderColor: 'var(--peach)' }}>
                <h3 className="font-semibold" style={{ color: 'var(--dim-gray)' }}>Iglesia Bautista Bethel Norte</h3>
                <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Av. Lincoln #789, Col. Moderna</p>
                <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Tel: +52 81 1234 5678</p>
              </div>
              
              <div className="border-l-4 pl-4" style={{ borderColor: 'var(--cocoa-brown)' }}>
                <h3 className="font-semibold" style={{ color: 'var(--dim-gray)' }}>Iglesia Bautista Emanuel Sur</h3>
                <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Blvd. Díaz Ordaz #321, Col. Residencial</p>
                <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>Tel: +52 81 9876 5432</p>
              </div>
            </div>
          </section>

          {/* Mapa Placeholder */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--cocoa-brown)' }}>
              Ubicación en Mapa
            </h2>
            
            <div className="w-full h-64 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--baby-powder)' }}>
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: 'var(--dim-gray)', opacity: '0.5' }} />
                <p style={{ color: 'var(--dim-gray)' }}>Mapa interactivo</p>
                <p className="text-sm" style={{ color: 'var(--dim-gray)', opacity: '0.6' }}>Próximamente</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
