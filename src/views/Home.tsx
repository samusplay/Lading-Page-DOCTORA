


export default function HomeView() {
  return (
    <div className="w-full bg-slate-50">
      
      {/* 1. HERO SECTION: Presentación Personal y Títulos */}
      <section className="relative bg-white overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Branding del sitio */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">Corazón Digital</span>
            </div>

            {/* Nombre y Propuesta de Valor */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Pedagogía con <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                sentido humano y digital.
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Un espacio para repensar la educación. Soy <strong>Angela Maria Vargas Gomez</strong>, y mi propósito es conectar la identidad del maestro con las nuevas realidades tecnológicas.
            </p>

            {/* Credenciales Académicas Destacadas (Sin fotos, puro texto de autoridad) */}
            <div className="grid md:grid-cols-3 gap-4 text-left mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Formación Base</p>
                    <h3 className="font-bold text-slate-800">Licenciada en Ciencias Sociales</h3>
                </div>
                <div className="p-4 border-l-4 border-teal-500 bg-white rounded-r-lg">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Especialización</p>
                    <h3 className="font-bold text-slate-800">Magíster en Educación y Tecnología</h3>
                </div>
                <div className="p-4 border-l-4 border-indigo-500 bg-white rounded-r-lg">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Máximo Grado</p>
                    <h3 className="font-bold text-slate-800">Doctora en Educación</h3>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-lg">
                Ver Cursos Disponibles
              </button>
              <button className="px-8 py-4 bg-white border border-slate-300 text-slate-700 font-bold rounded-full hover:bg-slate-50 transition-all">
                Conocer mi Trayectoria
              </button>
            </div>
          </div>
        </div>
        
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* 2. PROPÓSITO Y MATERIAS (El Core de Corazón Digital) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Oferta Académica</h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">Formación para el Maestro de Hoy</h3>
                <p className="mt-4 text-slate-600 text-lg">
                    Mis cursos y materias están diseñados para fortalecer tanto la identidad docente como las competencias digitales necesarias en el siglo XXI.
                </p>
            </div>

            {/* Grid de Materias */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                
                {/* Materia 1 */}
                <div className="group bg-slate-50 hover:bg-blue-50 p-8 rounded-2xl transition-colors duration-300 border border-slate-100 hover:border-blue-200">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        🧘‍♂️
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Identidad del Maestro</h4>
                    <p className="text-slate-600 text-sm">Reflexión sobre el ser docente, la vocación y el rol transformador en la sociedad actual.</p>
                </div>

                {/* Materia 2 */}
                <div className="group bg-slate-50 hover:bg-blue-50 p-8 rounded-2xl transition-colors duration-300 border border-slate-100 hover:border-blue-200">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        📜
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Historia de la Educación</h4>
                    <p className="text-slate-600 text-sm">Un recorrido por los hitos pedagógicos que han moldeado la escuela moderna.</p>
                </div>

                {/* Materia 3 */}
                <div className="group bg-slate-50 hover:bg-blue-50 p-8 rounded-2xl transition-colors duration-300 border border-slate-100 hover:border-blue-200">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        💡
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Tendencias Pedagógicas</h4>
                    <p className="text-slate-600 text-sm">Análisis de metodologías emergentes y nuevos paradigmas de enseñanza-aprendizaje.</p>
                </div>

                {/* Materia 4 */}
                <div className="group bg-slate-50 hover:bg-teal-50 p-8 rounded-2xl transition-colors duration-300 border border-slate-100 hover:border-teal-200">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        💻
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Aprendizaje Digital</h4>
                    <p className="text-slate-600 text-sm">Estrategias para crear entornos virtuales de aprendizaje efectivos y motivadores.</p>
                </div>

                 {/* Materia 5 (Destacada) */}
                 <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
                            🚀
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-2">Educación con TIC</h4>
                            <p className="text-blue-100 max-w-lg">Integración curricular de Tecnologías de la Información y la Comunicación para potenciar el aula del futuro.</p>
                        </div>
                        <button className="mt-4 md:mt-0 md:ml-auto px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                            Ver detalles
                        </button>
                    </div>
                    {/* Círculos decorativos */}
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                </div>

            </div>
        </div>
      </section>

      {/* 3. SECCIÓN REDES SOCIALES (Conecta con Ángela) */}
      <section className="bg-slate-900 py-16 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Sígueme en Redes Sociales</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                Comparto contenido diario sobre pedagogía, recursos digitales y reflexiones educativas. ¡Únete a la comunidad de Corazón Digital!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
                {/* Botón LinkedIn */}
                <a href="#" className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 backdrop-blur-sm group">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span className="font-medium">LinkedIn</span>
                </a>

                {/* Botón Instagram */}
                <a href="#" className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-pink-600 text-white rounded-xl transition-all duration-300 backdrop-blur-sm group">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span className="font-medium">Instagram</span>
                </a>

                {/* Botón YouTube / Otro */}
                <a href="#" className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-red-600 text-white rounded-xl transition-all duration-300 backdrop-blur-sm group">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    <span className="font-medium">YouTube</span>
                </a>
            </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-20 bg-slate-50 text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Lista para aprender?</h2>
            <p className="text-slate-600 mb-6">Agenda una consultoría o revisa el material disponible.</p>
            <button className="text-blue-600 font-bold hover:underline">
                Contáctame directamente &rarr;
            </button>
         </div>
      </section>

    </div>
  );
}