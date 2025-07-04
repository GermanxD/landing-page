import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo placeholder */}
        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-urbjj rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs md:text-sm">URBJJ</span>
        </div>
        
        {/* Título */}
        <h1 className="text-lg md:text-xl font-bold" style={{ color: 'var(--dim-gray)' }}>HOME</h1>
        
        {/* Espacio para futuro menú */}
        <div className="w-8 md:w-12"></div>
      </div>
    </header>
  );
}
