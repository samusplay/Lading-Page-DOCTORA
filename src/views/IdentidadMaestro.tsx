import {
    ArrowLeftIcon,
    ClockIcon,
    ComputerDesktopIcon,
    GlobeAmericasIcon,
    MapPinIcon,
    PlayCircleIcon,
    PresentationChartLineIcon,
    PuzzlePieceIcon,
    UserIcon,
    VideoCameraIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function IdentidadMaestro() {

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans animate-fade-in">
            
            {/* 1. HERO SECTION */}
            <div className="bg-slate-900 text-white pt-24 pb-16 px-4 relative overflow-hidden">
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

                {/* --- SECCIÓN MULTIMEDIA INYECTADA --- */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-xs">MULTIMEDIA</span>
                        
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-slate-100">
                        <div className="mb-4 flex items-center gap-2 px-2">
                            <PresentationChartLineIcon className="h-6 w-6 text-indigo-500" />
                            <h3 className="font-bold text-slate-800">Presentación Interactiva</h3>
                        </div>
                        <div className="w-full relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                            <iframe 
                                title="POLITICAS EDU" 
                                className="absolute top-0 left-0 w-full h-full rounded-2xl bg-slate-100 shadow-inner"
                                src="https://view.genially.com/5e974f2414cde90e042b3e80" 
                                frameBorder="0" 
                                allowFullScreen 
                                scrolling="yes"
                            ></iframe>
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs text-center">
                            <PlayCircleIcon className="h-4 w-4" />
                            <span>Interactúa con la presentación para explorar las normativas</span>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN: EJES TEMÁTICOS --- */}
                <div className="mb-16">
                    

                    <div className="grid gap-8">
                        
                        {/* TEMA 1: ORIGEN */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 text-sm">1</span>
                                Origen y Concepto del Maestro
                            </h3>
                            <p className="text-slate-500 mb-6 text-sm">¿Cómo surge la figura del maestro en el contexto internacional y nacional?</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-sm">
                                        <GlobeAmericasIcon className="h-5 w-5"/> Contexto Internacional
                                    </div>
                                    <p className="text-sm text-slate-600 italic">El maestro y sus identidades globales.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-2 mb-2 text-teal-600 font-bold text-sm">
                                        <MapPinIcon className="h-5 w-5"/> Contexto Nacional
                                    </div>
                                    <p className="text-sm text-slate-600 italic">La construcción de la identidad docente en Colombia.</p>
                                </div>
                            </div>
                        </div>

                        {/* TEMA 2: ROL Y CONTEXTOS */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm">2</span>
                                El Rol en los Diferentes Contextos
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Evolución Histórica</h4>
                                    <div className="space-y-3">
                                        {['Grecia y Judeo-Cristianismo', 'Europa Occidental', 'Post Revolución Francesa e Industrial'].map((periodo) => (
                                            <div key={periodo} className="flex items-center gap-2 text-sm text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                                {periodo}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                                    <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                                        <UserIcon className="h-4 w-4"/> Identidades Cruzadas
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed italic">
                                        "Reconocer al maestro también como <strong>estudiante</strong> y evocar al maestro como <strong>niño</strong>."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TEMA 3: TRANSFORMACIÓN */}
                        <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
                            <PuzzlePieceIcon className="h-32 w-32 absolute -bottom-8 -right-8 opacity-10" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white text-sm">3</span>
                                Transformación y Retos Actuales
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6 relative z-10 mt-6">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                    <ClockIcon className="h-6 w-6 text-indigo-400 mb-2"/>
                                    <h4 className="font-bold text-sm mb-1">Post-Pandemia</h4>
                                    <p className="text-xs text-slate-400">Nuevos paradigmas educativos.</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                    <ComputerDesktopIcon className="h-6 w-6 text-blue-400 mb-2"/>
                                    <h4 className="font-bold text-sm mb-1">Hibridación</h4>
                                    <p className="text-xs text-slate-400">Presencialidad y Virtualidad.</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                    <VideoCameraIcon className="h-6 w-6 text-teal-400 mb-2"/>
                                    <h4 className="font-bold text-sm mb-1">Herramientas</h4>
                                    <p className="text-xs text-slate-400">Juguetes, libros y tecnología.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN: ACUERDOS DE CLASE --- */}
                

            </div>

             <div className="bg-slate-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-slate-600 mb-6 font-medium italic">"Enfatizamos en el amor y la comprensión por los participantes."</p>
                    <Link to="/contacto" className="text-indigo-600 font-bold hover:text-indigo-800 hover:underline">
                        ¿Tienes dudas sobre los acuerdos? Contáctame &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

