import {
    ArrowLeftIcon,
    BookOpenIcon,
    BuildingOfficeIcon,
    ChatBubbleLeftRightIcon,
    CheckBadgeIcon,
    ClipboardDocumentCheckIcon,
    ClipboardDocumentListIcon,
    ComputerDesktopIcon,
    DocumentCheckIcon,
    EyeIcon,
    GlobeAmericasIcon,
    HeartIcon,
    LightBulbIcon,
    PlayCircleIcon // Importado para el botón interactivo
    ,

    PresentationChartLineIcon,
    PuzzlePieceIcon,
    ScaleIcon,
    SwatchIcon,
    UserGroupIcon,
    VideoCameraIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function DiseñoCurricular() {

    // DATOS: Acuerdos de Clase
    const acuerdos = [
        { id: 1, text: "Registro de asistencia obligatorio en AULAS VIRTUALES.", icon: <ClipboardDocumentCheckIcon className="h-5 w-5 text-slate-500"/> },
        { id: 2, text: "Lecturas asignadas para posterior evaluación.", icon: <BookOpenIcon className="h-5 w-5 text-slate-500"/> },
        { id: 3, text: "Entrega de evidencias en AULA VIRTUAL (PDF/Formato asignado).", icon: <DocumentCheckIcon className="h-5 w-5 text-slate-500"/> },
        { id: 4, text: "Actividades calificadas y publicadas en AULA VIRTUAL.", icon: <CheckBadgeIcon className="h-5 w-5 text-slate-500"/> },
        { id: 5, text: "Grupo de WhatsApp para recursos (Podcast, Mapas, Jamboard, Miro).", icon: <ChatBubbleLeftRightIcon className="h-5 w-5 text-slate-500"/> },
        { id: 6, text: "Evaluaciones en formato FORMULARIO de Google.", icon: <ComputerDesktopIcon className="h-5 w-5 text-slate-500"/> },
        { id: 7, text: "Exposiciones prácticas sobre temáticas inclusivas.", icon: <UserGroupIcon className="h-5 w-5 text-slate-500"/> },
        { id: 8, text: "Realización de Wikis y grabaciones explicativas.", icon: <VideoCameraIcon className="h-5 w-5 text-slate-500"/> },
        { id: 9, text: "Notas y resultados compartidos públicamente.", icon: <EyeIcon className="h-5 w-5 text-slate-500"/> },
        { id: 10, text: "Énfasis en el AMOR y COMPRENSIÓN por los participantes.", icon: <HeartIcon className="h-5 w-5 text-pink-500"/> },
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans animate-fade-in">
            
            {/* 1. HERO SECTION */}
            <div className="bg-slate-900 text-white pt-24 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-10 -ml-10 -mb-10"></div>
                
                <div className="container mx-auto max-w-5xl relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Diseño y Desarrollo <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-200">
                            Curricular
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Planificación estratégica para la calidad educativa. Desde la fundamentación teórica hasta la innovación en el aula.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* 2. INTRODUCCIÓN */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <SwatchIcon className="h-6 w-6 text-orange-600"/> La Arquitectura de la Educación
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            El currículo no es solo un plan de estudios; es el corazón de la institución educativa. En este curso aprenderemos a diseñar propuestas pedagógicas que respondan a las necesidades reales del contexto.
                        </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 md:w-72 text-center">
                        <ClipboardDocumentListIcon className="h-12 w-12 text-orange-500 mx-auto mb-3"/>
                        <p className="font-bold text-orange-800 text-sm">Planificación + Acción</p>
                    </div>
                </section>

                {/* --- NUEVA SECCIÓN MULTIMEDIA --- */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Multimedia</span>
                        <h2 className="text-2xl font-bold text-slate-900">Recursos de Aprendizaje</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* YouTube Video */}
                        <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100">
                            <div className="mb-4 flex items-center gap-2 px-2">
                                <VideoCameraIcon className="h-5 w-5 text-red-600" />
                                <h3 className="font-bold text-slate-800">Conceptos de Currículo</h3>
                            </div>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/h_3T7J-sVhU" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Genially Presentation */}
                        <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100">
                            <div className="mb-4 flex items-center gap-2 px-2">
                                <PresentationChartLineIcon className="h-5 w-5 text-indigo-600" />
                                <h3 className="font-bold text-slate-800">Presentación: El Currículo</h3>
                            </div>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-inner bg-slate-100 relative">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://view.genially.com/63e9901bd806be001319bc12/presentation-curriculo" 
                                
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-4 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
                                <PlayCircleIcon className="h-4 w-4" />
                                <span>Interactúa con la presentación para ver el contenido</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. TEMA 1: FUNDAMENTOS TEÓRICOS */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Unidad 1</span>
                        <h2 className="text-2xl font-bold text-slate-900">Fundamentos Teóricos</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-orange-50 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    <ClipboardDocumentListIcon className="h-6 w-6"/>
                                </div>
                                <h3 className="font-bold text-slate-800">El Currículo</h3>
                            </div>
                            <p className="text-sm text-slate-600">Definiciones, relevancia en la planificación y su evolución histórica y conceptual.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-amber-50 rounded-lg text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                    <BuildingOfficeIcon className="h-6 w-6"/>
                                </div>
                                <h3 className="font-bold text-slate-800">El PEI</h3>
                            </div>
                            <p className="text-sm text-slate-600">Proyecto Educativo Institucional: Su rol central como brújula del diseño curricular.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <ScaleIcon className="h-6 w-6"/>
                                </div>
                                <h3 className="font-bold text-slate-800">Normativa</h3>
                            </div>
                            <p className="text-sm text-slate-600">Normas técnicas curriculares, regulación e impacto en la calidad educativa.</p>
                        </div>
                    </div>
                </section>

                {/* 4. TEMA 2: CONTEXTOS */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Unidad 2</span>
                        <h2 className="text-2xl font-bold text-slate-900">Contextos Socio-Educativos</h2>
                    </div>

                    <div className="bg-indigo-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                        <div className="grid md:grid-cols-2 gap-10 relative z-10">
                            <div>
                                <h3 className="text-xl font-bold text-orange-300 mb-6 flex items-center gap-2">
                                    <PuzzlePieceIcon className="h-6 w-6"/> Componentes del Currículo
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                        <span>Plan de Estudios y Plan de Aula</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                        <span>Proyectos de Área y Transversales</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-orange-300 mb-6 flex items-center gap-2">
                                    <LightBulbIcon className="h-6 w-6"/> Innovación y Práctica
                                </h3>
                                <div className="space-y-4 text-sm text-slate-200">
                                    <div className="flex gap-3 text-sm">
                                        <GlobeAmericasIcon className="h-5 w-5 text-indigo-300 shrink-0"/>
                                        <p><strong>Experiencias Pedagógicas:</strong> Análisis de casos nacionales e internacionales de éxito.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. ACUERDOS DE CLASE */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-10">
                        <span className="bg-orange-100 text-orange-700 font-bold px-4 py-1.5 rounded-full text-xs tracking-wide uppercase">Compromisos</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-4">Acuerdos de Convivencia</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {acuerdos.map((acuerdo) => (
                            <div key={acuerdo.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="shrink-0 mt-0.5">
                                    {acuerdo.icon}
                                </div>
                                <p className="text-sm text-slate-700 leading-snug">
                                    {acuerdo.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA FINAL */}
                <div className="mt-16 text-center">
                    <p className="text-slate-500 mb-6 italic">"El currículo es el camino que recorremos para aprender."</p>
                    <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30">
                        Contactar Docente
                    </Link>
                </div>

            </div>
        </div>
    );
}