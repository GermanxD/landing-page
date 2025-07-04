import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--baby-powder)' }}>
      <Header />
      
      <main className="px-4 py-8 w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dim-gray)' }}>
            Acerca de URBJJ
          </h1>
          <p className="text-lg md:text-xl" style={{ color: 'var(--dim-gray)', opacity: '0.8' }}>
            Unión Regional Bautista de Jóvenes Jerusalén
          </p>
        </div>

        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          <section className="bg-white rounded-lg p-6 md:p-8 lg:p-12 shadow-sm">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6" style={{ color: 'var(--cocoa-brown)' }}>
              Nuestra Historia
            </h2>
            <p className="leading-relaxed text-sm md:text-base lg:text-lg" style={{ color: 'var(--dim-gray)' }}>
              La Unión Regional Bautista de Jóvenes Jerusalén (URBJJ) nació de la necesidad de crear 
              un espacio donde jóvenes bautistas de diferentes iglesias de Nuevo León pudieran encontrarse, 
              crecer juntos en la fe y desarrollar amistades duraderas basadas en 
              los valores y principios bautistas que compartimos.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 lg:p-12 shadow-sm">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6" style={{ color: 'var(--cocoa-brown)' }}>
              Nuestra Misión
            </h2>
            <p className="leading-relaxed text-sm md:text-base lg:text-lg" style={{ color: 'var(--dim-gray)' }}>
              Crear un espacio seguro y divertido donde los jóvenes bautistas puedan desarrollar 
              su relación con Dios, fortalecer su fe, y construir una comunidad 
              auténtica basada en los valores del Evangelio y los principios bautistas de libertad religiosa y autonomía congregacional.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 md:p-8 lg:p-12 shadow-sm">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6" style={{ color: 'var(--cocoa-brown)' }}>
              ¿Qué Hacemos?
            </h2>
            <ul className="space-y-2 md:space-y-4 text-sm md:text-base lg:text-lg" style={{ color: 'var(--dim-gray)' }}>
              <li>• Estudios bíblicos y devocionales</li>
              <li>• Actividades recreativas y eventos especiales</li>
              <li>• Convivencias y salidas grupales</li>
              <li>• Desarrollo de liderazgo cristiano</li>
              <li>• Retiros espirituales y campamentos</li>
              <li>• Servicio comunitario y misiones</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
