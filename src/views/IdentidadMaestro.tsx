
import {
    ArrowLeftIcon,
    BookOpenIcon,
    BuildingLibraryIcon,
    ChatBubbleLeftRightIcon,
    CheckBadgeIcon,
    ClipboardDocumentCheckIcon,
    ClockIcon,
    ComputerDesktopIcon,
    DocumentCheckIcon,
    EyeIcon,
    GlobeAmericasIcon,
    HeartIcon,
    MapPinIcon,
    UserGroupIcon,
    UserIcon,
    VideoCameraIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function IdentidadMaestro() {

    // DATOS: Acuerdos de Clase (Para renderizado limpio)
    //Luego migrarlo para componente
    const acuerdos = [
        { id: 1, text: "Registro de asistencia obligatorio en AULAS VIRTUALES.", icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-500"/> },
        { id: 2, text: "Lecturas asignadas fundamentales para posterior evaluación.", icon: <BookOpenIcon className="h-6 w-6 text-teal-500"/> },
        { id: 3, text: "Entrega de evidencias en AULA VIRTUAL (PDF o formato asignado).", icon: <DocumentCheckIcon className="h-6 w-6 text-indigo-500"/> },
        { id: 4, text: "Calificación y retroalimentación pública en AULA VIRTUAL.", icon: <CheckBadgeIcon className="h-6 w-6 text-green-500"/> },
        { id: 5, text: "Grupo de WhatsApp para recursos: Podcast, Mapas, Jamboard, Miro, etc.", icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-emerald-500"/> },
        { id: 6, text: "Evaluaciones mediante Formularios de Google.", icon: <ComputerDesktopIcon className="h-6 w-6 text-purple-500"/> },
        { id: 7, text: "Exposiciones prácticas sobre temáticas inclusivas.", icon: <UserGroupIcon className="h-6 w-6 text-amber-500"/> },
        { id: 8, text: "Creación de Wikis y grabación de explicaciones paso a paso.", icon: <VideoCameraIcon className="h-6 w-6 text-red-500"/> },
        { id: 9, text: "Transparencia: Notas y resultados compartidos públicamente.", icon: <EyeIcon className="h-6 w-6 text-cyan-500"/> },
        { id: 10, text: "Énfasis en el amor y comprensión por los participantes.", icon: <HeartIcon className="h-6 w-6 text-pink-500"/> },
        { id: 11, text: "Clases virtuales vía Teams para calificaciones y entregas (Correo institucional).", icon: <VideoCameraIcon className="h-6 w-6 text-blue-700"/> },
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans animate-fade-in">
            
            {/* 1. HERO SECTION */}
            <div className="bg-slate-900 text-white pt-24 pb-16 px-4 relative overflow-hidden">
                {/* Decoración de fondo */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 -ml-20 -mt-20"></div>
                
                <div className="container mx-auto max-w-5xl relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Identidad del <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
                            Maestro
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Un recorrido por la historia, el rol social y los retos actuales del docente como generador de ambientes de aprendizaje.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* --- SECCIÓN: EJES TEMÁTICOS --- */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-xs">SYLLABUS</span>
                        <h2 className="text-2xl font-bold text-slate-900">Ejes de Reflexión</h2>
                    </div>

                    <div className="grid gap-8">
                        
                        {/* TEMA 1: ORIGEN */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GlobeAmericasIcon className="h-24 w-24 text-indigo-900"/>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 text-sm">1</span>
                                Origen de la Figura del Maestro
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold">
                                        <GlobeAmericasIcon className="h-5 w-5"/> Contexto Internacional
                                    </div>
                                    <p className="text-sm text-slate-600">Análisis de cómo surge el concepto de maestro a nivel global y sus identidades históricas.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 text-teal-600 font-bold">
                                        <MapPinIcon className="h-5 w-5"/> Contexto Nacional
                                    </div>
                                    <p className="text-sm text-slate-600">La evolución del maestro en Colombia y su impacto en la construcción de nación.</p>
                                </div>
                            </div>
                        </div>

                        {/* TEMA 2: ROL Y CONTEXTOS */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm">2</span>
                                Rol del Maestro y Consolidación de Identidad
                            </h3>
                            
                            {/* Línea de tiempo histórica simplificada */}
                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Evolución Histórica</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Grecia Antigua', 'Judeo Cristianismo', 'Europa Occidental', 'Rev. Francesa', 'Rev. Industrial'].map((item) => (
                                        <span key={item} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Contextos de Actuación</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Político y Sociocultural</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Familiar y Escolar</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Investigativo y Tecnológico</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                    <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                                        <UserIcon className="h-4 w-4"/> Dimensiones del Ser
                                    </h4>
                                    <p className="text-sm text-slate-600 italic">
                                        "Reconocer al maestro también como <strong>estudiante</strong> y evocar al maestro como <strong>niño</strong>."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TEMA 3: TRANSFORMACIÓN */}
                        <div className="bg-linear-to-r from-slate-800 to-slate-900 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white text-sm">3</span>
                                Transformación y Retos Actuales
                            </h3>
                            <p className="text-slate-300 mb-6 max-w-2xl relative z-10">
                                ¿Cuál es el rol del maestro en la transformación de la Educación? Debemos trascender en el quehacer y la identidad.
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-4 relative z-10">
                                <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                                    <div className="text-teal-300 mb-2"><ClockIcon className="h-6 w-6"/></div>
                                    <h4 className="font-bold text-sm">Post-Pandemia</h4>
                                    <p className="text-xs text-slate-400 mt-1">El maestro después de la crisis sanitaria.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                                    <div className="text-teal-300 mb-2"><ComputerDesktopIcon className="h-6 w-6"/></div>
                                    <h4 className="font-bold text-sm">Modalidades</h4>
                                    <p className="text-xs text-slate-400 mt-1">El maestro en la presencialidad y la virtualidad.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                                    <div className="text-teal-300 mb-2"><BuildingLibraryIcon className="h-6 w-6"/></div>
                                    <h4 className="font-bold text-sm">Herramientas</h4>
                                    <p className="text-xs text-slate-400 mt-1">Didáctica: Juguetes, libros y tecnología.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- SECCIÓN: ACUERDOS DE CLASE --- */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-10">
                        <span className="bg-teal-100 text-teal-700 font-bold px-4 py-1.5 rounded-full text-xs tracking-wide uppercase">Normativa</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-4">Acuerdos de Clase</h2>
                        <p className="text-slate-500 mt-2">Compromisos para el éxito académico y la convivencia.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {acuerdos.map((acuerdo) => (
                            <div key={acuerdo.id} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="shrink-0 p-2 bg-slate-50 rounded-lg">
                                    {acuerdo.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                        {acuerdo.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

             {/* CTA FINAL */}
             <div className="bg-slate-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-slate-600 mb-6 font-medium italic">
                        "Enfatizamos en el amor y la comprensión por los participantes."
                    </p>
                    <Link to="/contacto" className="text-indigo-600 font-bold hover:text-indigo-800 hover:underline">
                        ¿Tienes dudas sobre los acuerdos? Contáctame &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

