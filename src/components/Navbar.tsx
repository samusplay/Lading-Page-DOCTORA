import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const materias = [
        { name: "Fundamentos de la investigacion", path: "/fundamento-educativa" },
        { name: "Psicología Educativa", path: "/psicologia-educativa" },
        { name: "Diseño Curricular", path: "/diseño-curricular" },
        { name: "Historia de la Educación", path: "/historiaEducacion" },
        { name: "Identidad del Maestro", path: "/identidad-maestro" },
        { name: "Tendencias Pedagógicas", path: "/tendencias-pedagogicas" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* 1. LOGO (IMAGEN REAL CIRCULAR) */}
                    <Link to="/" className="flex items-center gap-3 group">
                        {/* Aquí está el cambio: Img en lugar de Svg */}
                        <img 
                            src="/logo4.jpeg" 
                            alt="Logo Corazón Digital" 
                            className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-xl font-bold text-slate-800 tracking-tight">
                            Corazón <span className="text-blue-600">Digital</span>
                        </span>
                    </Link>

                    {/* 2. MENU DE ESCRITORIO */}
                    <div className="hidden md:flex items-center space-x-8">
                        
                        {/* Enlace Simple */}
                        <Link to="/" className="text-slate-600 font-medium hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
                            Inicio
                        </Link>

                        {/* --- DROPDOWN DE MATERIAS --- */}
                        <div className="relative group h-20 flex items-center">
                            <button className="flex items-center gap-1 text-slate-600 font-medium hover:text-blue-600 transition-colors text-sm uppercase tracking-wide focus:outline-none">
                                Materias
                                <svg className="w-4 h-4 fill-current opacity-70" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                            </button>
                            
                            {/* Submenú Flotante */}
                            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 bg-white border border-slate-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-2">
                                <div className="py-2">
                                    {materias.map((materia) => (
                                        <Link 
                                            key={materia.path} 
                                            to={materia.path}
                                            className="block px-6 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-600"
                                        >
                                            {materia.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Otros Enlaces */}
                        <Link to="/recursos" className="text-slate-600 font-medium hover:text-blue-600 transition-colors text-sm uppercase tracking-wide">
                            Recursos
                        </Link>

                        {/* CTA */}
                        <a href="#aula-virtual" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
                            Aula Virtual
                        </a>
                    </div>

                    {/* 3. BOTÓN HAMBURGUESA MOVIL */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 focus:outline-none p-2">
                            {isOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. MENÚ MÓVIL */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0 max-h-[80vh] overflow-y-auto">
                    <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg font-medium text-slate-600 hover:bg-slate-50">
                            Inicio
                        </Link>
                        
                        <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Materias Disponibles</p>
                            {materias.map((materia) => (
                                <Link
                                    key={materia.path}
                                    to={materia.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block pl-2 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 border-l-2 border-slate-200 hover:border-blue-500 transition-all"
                                >
                                    {materia.name}
                                </Link>
                            ))}
                        </div>

                        <Link to="/recursos" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg font-medium text-slate-600 hover:bg-slate-50">
                            Recursos
                        </Link>
                        
                        <a href="#aula-virtual" className="block w-full text-center mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg">
                            Entrar al Aula
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}