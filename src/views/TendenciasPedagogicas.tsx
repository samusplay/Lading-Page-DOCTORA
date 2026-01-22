
import {
    AcademicCapIcon,
    ArrowLeftIcon,
    BookOpenIcon,
    CheckBadgeIcon,
    CpuChipIcon,
    FingerPrintIcon,
    GlobeAltIcon,
    LightBulbIcon,
    ScaleIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function TendenciasPedagogicas() {

    // DATOS: Modelos Pedagógicos (Tema 1)
    const modelos = [
        {
            title: "Pedagogía Tradicional",
            enfoque: "Enfoque en la fe y la disciplina.",
            autores: "Ignacio de Loyola, Watson, Skinner",
            icon: <BookOpenIcon className="h-8 w-8 text-slate-500" />,
            color: "border-slate-300"
        },
        {
            title: "Escuela Activa",
            enfoque: "Participación activa del estudiante.",
            autores: "Pestalozzi, Dewey, Montessori",
            icon: <UserGroupIcon className="h-8 w-8 text-blue-500" />,
            color: "border-blue-300"
        },
        {
            title: "Pedagogía Cognitivista",
            enfoque: "Procesos mentales y aprendizaje significativo.",
            autores: "Brunner, Ausubel",
            icon: <LightBulbIcon className="h-8 w-8 text-amber-500" />,
            color: "border-amber-300"
        },
        {
            title: "Pedagogía Humanista",
            enfoque: "Desarrollo personal y libertad.",
            autores: "Rogers, Maslow",
            icon: <CheckBadgeIcon className="h-8 w-8 text-teal-500" />,
            color: "border-teal-300"
        }
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans animate-fade-in">
            
            {/* HERO / HEADER */}
            <div className="bg-slate-900 text-white pt-24 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Tendencias Pedagógicas e <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400">
                            Innovación Educativa
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Reflexión pedagógica sobre las posturas teóricas modernas y contemporáneas, y cómo la innovación dinamiza la práctica educativa.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">
                
                {/* INTRODUCCIÓN Y METODOLOGÍA */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-16">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <AcademicCapIcon className="h-6 w-6 text-blue-600"/> Propósito del Curso
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Reflexionar sobre las tendencias pedagógicas como resultado de posturas teóricas y metodológicas en un contexto cultural concreto. Buscamos dinamizar la institución y la práctica pedagógica para una sociedad moderna.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
                                <ScaleIcon className="h-5 w-5"/> Metodología Praxeológica
                            </h3>
                            <p className="text-blue-900/80 text-sm leading-relaxed">
                                El espacio privilegia un <strong>enfoque praxeológico pedagógico</strong> (teórico-práctico). Se analizarán tendencias pasadas y se identificarán innovaciones actuales de cara a la transformación social, pedagógica y cultural.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TEMA 1: ARTICULACIÓN Y MODELOS */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs">TEMA 1</span>
                        <h2 className="text-2xl font-bold text-slate-900">Articulación de Tendencias y Modelos</h2>
                    </div>

                    {/* Diferencias Clave (Exactamente como el texto) */}
                    <div className="grid md:grid-cols-3 gap-4 mb-10">
                        <div className="bg-white border-l-4 border-slate-400 p-5 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Tendencia Pedagógica</h4>
                            <p className="text-xs text-slate-600">Corrientes que influyen en la educación.</p>
                        </div>
                        <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Enfoque Pedagógico</h4>
                            <p className="text-xs text-slate-600">Visión teórica que guía la práctica educativa.</p>
                        </div>
                        <div className="bg-white border-l-4 border-teal-500 p-5 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Modelo Pedagógico</h4>
                            <p className="text-xs text-slate-600">Implementación práctica de un enfoque pedagógico.</p>
                        </div>
                    </div>

                    {/* Modelos Pedagógicos */}
                    <h3 className="text-lg font-bold text-slate-700 mb-4">Principales Modelos</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {modelos.map((modelo, index) => (
                            <div key={index} className={`bg-white p-6 rounded-2xl border ${modelo.color} shadow-sm hover:shadow-md transition-all`}>
                                <div className="flex justify-between items-start mb-3">
                                    {modelo.icon}
                                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">Modelo</span>
                                </div>
                                <h4 className="text-lg font-bold text-slate-800 mb-1">{modelo.title}</h4>
                                <p className="text-sm text-slate-600 mb-3 italic">{modelo.enfoque}</p>
                                <div className="border-t border-slate-100 pt-3">
                                    <p className="text-xs text-slate-500 font-bold">Autores clave:</p>
                                    <p className="text-xs text-slate-600">{modelo.autores}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TEMA 2: INNOVACIÓN, TRANSFORMACIÓN Y DIGITAL */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-teal-100 text-teal-700 font-bold px-3 py-1 rounded-full text-xs">TEMA 2</span>
                        <h2 className="text-2xl font-bold text-slate-900">Innovación, Transformación y Competencias Digitales</h2>
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                        {/* Decoración */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            
                            {/* Columna Izquierda: Innovación y Transformación */}
                            <div>
                                <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                                    <GlobeAltIcon className="h-6 w-6"/> Innovación y Transformación
                                </h3>
                                <ul className="space-y-6">
                                    <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <p className="font-bold text-white text-sm">Escuela Nueva en Colombia</p>
                                        <p className="text-xs text-slate-300 mt-1">Cambio social y educativo.</p>
                                        <p className="text-[10px] text-teal-300 mt-1 uppercase font-bold">Agustín Nieto Caballero</p>
                                    </li>
                                    <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <p className="font-bold text-white text-sm">Pedagogías Críticas y Alternativas</p>
                                        <p className="text-xs text-slate-300 mt-1">Transformación social y crítica de sistemas tradicionales.</p>
                                        <p className="text-[10px] text-teal-300 mt-1 uppercase font-bold">Freire, McLaren</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Columna Derecha: Tópicos Clave y Digitales */}
                            <div>
                                <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                                    <CpuChipIcon className="h-6 w-6"/> Tópicos Digitales Clave
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-teal-500 rounded-full"></div>
                                        <div>
                                            <h4 className="font-bold text-sm">Inteligencia Artificial (IA)</h4>
                                            <p className="text-xs text-slate-400">Uso en personalización del aprendizaje y análisis educativo.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-teal-500 rounded-full"></div>
                                        <div>
                                            <h4 className="font-bold text-sm">Habilidades Digitales</h4>
                                            <p className="text-xs text-slate-400">Integración de tecnologías para mejorar competencias.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-blue-500 rounded-full"></div>
                                        <div>
                                            <h4 className="font-bold text-sm">TICs</h4>
                                            <p className="text-xs text-slate-400">Impacto en la educación moderna.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-pink-500 rounded-full"></div>
                                        <div>
                                            <h4 className="font-bold text-sm">DDHH y Responsabilidad Social</h4>
                                            <p className="text-xs text-slate-400">Educación en valores y justicia social en contexto digital.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TEMA 3: PRÁCTICAS E INNOVACIONES */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-xs">TEMA 3</span>
                        <h2 className="text-2xl font-bold text-slate-900">Prácticas e Innovaciones en Contextos</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Innovación Institucional */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <LightBulbIcon className="h-6 w-6 text-indigo-600"/>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Innovación Institucional</h3>
                            <p className="text-sm text-slate-600">
                                Implementación de IA y herramientas digitales para mejorar la enseñanza en las instituciones.
                            </p>
                        </div>

                        {/* Experiencias Glocales */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <GlobeAltIcon className="h-6 w-6 text-indigo-600"/>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Experiencias Glocales</h3>
                            <p className="text-sm text-slate-600">
                                Integración de enfoques globales en contextos locales, usando tecnología y habilidades digitales.
                            </p>
                        </div>

                        {/* Nuevas Formas */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FingerPrintIcon className="h-6 w-6 text-indigo-600"/>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Nuevas Formas de Innovar</h3>
                            <p className="text-sm text-slate-600">
                                Adaptación de metodologías activas y tecnología para enfrentar desafíos educativos contemporáneos.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

             {/* CTA FINAL */}
             <div className="bg-slate-100 py-16 text-center mt-12 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Te interesa profundizar en estos temas?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Agenda una asesoría para implementar estas tendencias y herramientas de IA en tu institución.
                    </p>
                    <Link to="/contacto" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                        Contactar Docente
                    </Link>
                </div>
            </div>
        </div>
    );
}