
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 font-sans">
            <div className="container mx-auto px-4">
                
                {/* --- TOP SECTION: GRID DE 4 COLUMNAS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* COL 1: Marca y Misión */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                             {/* Pequeño icono visual */}
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                Corazón <span className="text-blue-500">Digital</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Formación académica para docentes que buscan integrar la identidad pedagógica con la innovación tecnológica.
                        </p>
                    </div>

                    {/* COL 2: Mapa del Sitio */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Explorar</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Inicio</a></li>
                            <li><a href="#trayectoria" className="hover:text-blue-400 transition-colors">Trayectoria Profesional</a></li>
                            <li><a href="#cursos" className="hover:text-blue-400 transition-colors">Catálogo de Cursos</a></li>
                            <li><a href="#recursos" className="hover:text-blue-400 transition-colors">Recursos Didácticos</a></li>
                        </ul>
                    </div>

                    {/* COL 3: Legal & Soporte */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Información</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Soporte Técnico</a></li>
                        </ul>
                    </div>

                    {/* COL 4: Contacto Directo */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>contacto@corazondigital.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Bogotá, Colombia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- BOTTOM SECTION: COPYRIGHT --- */}
                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>
                        © {currentYear} <strong>Angela Maria Vargas Gomez</strong>. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-4">
                        {/* Redes Sociales "mini" para el footer */}
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}