import { Link } from "react-router-dom";
// npm install @heroicons/react
import {
  AcademicCapIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function HomeView() {
  return (
    <div className="w-full bg-slate-50">
      {/* 1. HERO SECTION: FONDO + LOGO + FRASE + PERFIL */}
      <section className="relative w-full min-h-screen flex flex-col pt-20 pb-12 border-b border-slate-200">
        {/* --- FONDO --- */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/fondo.jpeg')" }}
        ></div>
        {/* Gradiente para que el texto resalte sobre el dibujo */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/90 via-white/80 to-slate-50"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            {/* --- A. LOGO --- */}
            <div className="flex justify-center mb-6 animate-fade-in-down">
              <img
                src="/logo.jpeg"
                alt="Logo Corazón Digital"
                className="h-32 md:h-48 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* --- B. LA FRASE DESTACADA --- */}
            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-[0.2em] uppercase mb-8 drop-shadow-sm font-sans">
              Enseña con el <span className="text-blue-600">corazón</span> en un
              mundo <span className="text-teal-600">digital.</span>
            </h2>

            {/* --- D. INTRODUCCIÓN --- */}
            <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
              Soy la <strong>Dra. Angela Maria Vargas Gomez</strong>. Transformo
              la educación conectando la <strong>identidad del maestro</strong>{" "}
              con las nuevas realidades tecnológicas. <br />
            </p>

            {/* --- E. CREDENCIALES (CV) --- */}
            <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
              {/* Card 1 */}
              <div className="p-5 bg-white rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <AcademicCapIcon className="h-6 w-6" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Formación Base
                  </p>
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Lic.Ciencias Sociales
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Universidad Distrital
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 bg-white rounded-xl border border-teal-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-teal-50 text-teal-600 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <ComputerDesktopIcon className="h-6 w-6" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Especialización
                  </p>
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Mg.Educación y Tecnología
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Universidad Distrital
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 bg-white rounded-xl border border-indigo-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <LightBulbIcon className="h-6 w-6" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Máximo Grado
                  </p>
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Doctora en Educación{" "}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Universidad Cuauhtémoc{" "}
                </p>
              </div>
            </div>

            {/* --- F. BOTONES DE ACCIÓN --- */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cursos"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-slate-500/30 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <BookOpenIcon className="h-5 w-5" />
                Ver Cursos Disponibles
              </Link>
              <a
                href="https://www.linkedin.com/in/laprofeangela/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center justify-center gap-2 transform hover:scale-105"
              >
                Conectar en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFERTA ACADÉMICA */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
              <CursorArrowRaysIcon className="h-4 w-4" /> Oferta Académica
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Formación para el Maestro de Hoy
            </h3>
            <p className="mt-4 text-slate-600 text-lg">
              Cursos diseñados desde la experiencia investigativa y práctica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Materia 1 */}
            <Link
              to="/identidad-maestro"
              className="group bg-slate-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 block"
            >
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <UserIcon className="h-9 w-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600">
                Identidad del Maestro
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reflexión sobre el ser docente y la vocación.
              </p>
            </Link>

            {/* Materia 2 */}
            <div className="group bg-slate-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <BookOpenIcon className="h-9 w-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600">
                Historia de la Educación
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hitos pedagógicos que han moldeado la escuela moderna.
              </p>
            </div>

            {/* Materia 3 */}
            <div className="group bg-slate-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <LightBulbIcon className="h-9 w-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600">
                Tendencias Pedagógicas
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Metodologías emergentes y Neuroeducación.
              </p>
            </div>

            {/* Materia 4 */}
            <div className="group bg-slate-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <ComputerDesktopIcon className="h-9 w-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600">
                Aprendizaje Digital
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Creación de aulas virtuales en Moodle.
              </p>
            </div>

            {/* Destacado */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-700 to-indigo-800 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group hover:shadow-blue-900/50 transition-all">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <RocketLaunchIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-1 bg-amber-400 text-amber-900 rounded-full text-xs font-extrabold mb-3 tracking-wide">
                    NUEVO
                  </div>
                  <h4 className="text-3xl font-bold mb-3">
                    Educación con TIC e IA
                  </h4>
                  
                  <p className="text-blue-100 max-w-lg text-lg leading-relaxed">
                    Inteligencia Artificial aplicada a la educación.
                  </p>
                </div>
                <Link
                  to="/educacionTic"
                  className="mt-6 md:mt-0 md:ml-auto px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                >
                  Ver detalles
                </Link>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REDES SOCIALES (Con colores e íconos) */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10">
           Nuestras Redes Sociales
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {/* LinkedIn: Azul */}
            <a
              href="https://www.linkedin.com/in/laprofeangela/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#0077b5]/10 text-white rounded-full border border-[#0077b5]/30 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>

            {/* Instagram: Gradiente Rosa/Naranja */}
            <a
              href="https://www.instagram.com/corazondigital77/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-tr from-[#f09433]/10 to-[#bc1888]/10 text-white rounded-full border border-pink-500/30 hover:from-[#f09433] hover:to-[#bc1888] hover:border-transparent transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-medium">Instagram</span>
            </a>

            {/* YouTube: Rojo */}
            <a
              href="https://www.youtube.com/@corazondigital77"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#FF0000]/10 text-white rounded-full border border-[#FF0000]/30 hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span className="font-medium">YouTube</span>
            </a>

            {/* Facebook: Azul */}
            <a
              href="https://www.facebook.com/corazondigital77/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#1877F2]/10 text-white rounded-full border border-[#1877F2]/30 hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <span className="font-medium">Facebook</span>
            </a>

            {/* ORCID: Verde */}
            <a
              href="https://orcid.org/0009-0000-4256-7791"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#A6CE39]/10 text-white rounded-full border border-[#A6CE39]/30 hover:bg-[#A6CE39] hover:border-[#A6CE39] hover:text-slate-900 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 17h-2v-8h2v8zm-1-9.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm7 9.25h-2v-6c0-1.1-.9-2-2-2v-2c2.21 0 4 1.79 4 4v6z" />
              </svg>
              <span className="font-medium">ORCID</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            ¿Lista para aprender con una experta?
          </h2>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 text-lg transition-colors border-b-2 border-blue-600/20 hover:border-blue-600 pb-1"
          >
            Contáctame directamente <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
