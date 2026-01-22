import {
    AcademicCapIcon,
    ArrowLeftIcon,
    BeakerIcon,
    BookOpenIcon,
    ChatBubbleLeftRightIcon,
    CheckBadgeIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClipboardDocumentCheckIcon,
    ClipboardDocumentListIcon,
    ComputerDesktopIcon,
    DocumentCheckIcon,
    EyeIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    PuzzlePieceIcon,
    UserGroupIcon,
    VideoCameraIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

type Presentacion = {
    id: number;
    titulo: string;
    url: string;
    color: string;
    ratio: string;
};

export function FundamentoEducativa() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const presentaciones: Presentacion[] = [
        { id: 1, titulo: "Introducción a Fundamentos", url: "https://view.genially.com/5e4e6cd4dcad0f3c15dc15d1", color: "bg-cyan-600", ratio: "56.25%" },
        { id: 2, titulo: "La Pedagogía", url: "https://view.genially.com/5f57d6741bb21b0d64b4f1ef", color: "bg-emerald-600", ratio: "57.48%" },
        { id: 3, titulo: "Creatividad", url: "https://view.genially.com/5e985c37ce11c50dff991f8e", color: "bg-purple-600", ratio: "56.25%" },
        { id: 4, titulo: "Definiciones Clave", url: "https://view.genially.com/5f4dbe756345a50da95480a3", color: "bg-amber-600", ratio: "112.44%" },
        { id: 5, titulo: "Presentación Sirenas", url: "https://view.genially.com/6601a21a0536e60014d736fe", color: "bg-blue-600", ratio: "56.25%" },
        { id: 6, titulo: "Nueva Forma de Aprender e Investigar", url: "https://view.genially.com/640538851475bd0012526351", color: "bg-indigo-600", ratio: "56.25%" }
    ];

    const conceptos = ["Educación", "Pedagogía", "Enseñanza", "Aprendizaje", "Saber", "Escuela", "Currículo", "Didáctica", "Maestro"];

    const acuerdos = [
        { id: 1, text: "Registro de asistencia a AULAS VIRTUALES.", icon: <ClipboardDocumentCheckIcon className="h-5 w-5" /> },
        { id: 2, text: "Lecturas asignadas para posterior evaluación.", icon: <BookOpenIcon className="h-5 w-5" /> },
        { id: 3, text: "Entrega de evidencias en AULA VIRTUAL (PDF/Formato asignado).", icon: <DocumentCheckIcon className="h-5 w-5" /> },
        { id: 4, text: "Actividades calificadas y publicadas en AULA VIRTUAL.", icon: <CheckBadgeIcon className="h-5 w-5" /> },
        { id: 5, text: "Grupo de WhatsApp para material y recursos digitales.", icon: <ChatBubbleLeftRightIcon className="h-5 w-5" /> },
        { id: 6, text: "Evaluaciones en formato FORMULARIO de Google.", icon: <ComputerDesktopIcon className="h-5 w-5" /> },
        { id: 7, text: "Exposiciones prácticas sobre temáticas inclusivas.", icon: <UserGroupIcon className="h-5 w-5" /> },
        { id: 8, text: "Realización de Wikis y grabaciones explicativas.", icon: <VideoCameraIcon className="h-5 w-5" /> },
        { id: 9, text: "Resultados de procesos evaluativos públicos.", icon: <EyeIcon className="h-5 w-5" /> },
        { id: 10, text: "Enfatizar en el amor y comprensión por los participantes.", icon: <HeartIcon className="h-5 w-5 text-pink-500" /> },
    ];

    const prevSlide = () => setCurrentIndex(currentIndex === 0 ? presentaciones.length - 1 : currentIndex - 1);
    const nextSlide = () => setCurrentIndex(currentIndex === presentaciones.length - 1 ? 0 : currentIndex + 1);
    const goToSlide = (slideIndex: number) => setCurrentIndex(slideIndex);

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans animate-fade-in pb-20">
            
            {/* 1. HERO SECTION */}
            <div className="bg-slate-900 text-white pt-24 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="container mx-auto max-w-5xl relative z-10 text-center md:text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Fundamentos de la <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400">Investigación Educativa</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">
                
                {/* 2. CARRUSEL */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-pink-100 text-pink-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Multimedia</span>
                        <h2 className="text-2xl font-bold text-slate-900">Material Interactivo</h2>
                    </div>
                    <div className="relative w-full group">
                        <div className="bg-white border border-slate-200 p-2 md:p-4 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all">
                            <div className="mb-4 px-2 flex items-center justify-between">
                                <h3 className="text-slate-900 font-bold text-lg">{presentaciones[currentIndex].titulo}</h3>
                                <span className="text-xs font-bold text-slate-400">{currentIndex + 1} / {presentaciones.length}</span>
                            </div>
                            <div style={{ position: 'relative', paddingBottom: presentaciones[currentIndex].ratio, height: 0, transition: 'all 0.5s ease' }}>
                                <iframe key={currentIndex} title={presentaciones[currentIndex].titulo} frameBorder={0} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }} src={presentaciones[currentIndex].url} allowFullScreen scrolling="yes" />
                            </div>
                        </div>
                        <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors z-10"><ChevronLeftIcon className="h-6 w-6" /></button>
                        <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors z-10"><ChevronRightIcon className="h-6 w-6" /></button>
                    </div>
                </section>

                {/* 3. REFLEXIÓN INICIAL */}
                <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <AcademicCapIcon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">El Docente como Investigador</h2>
                        <p className="text-slate-600 leading-relaxed italic">
                            "La pedagogía no se reduce a un escenario de transmisión de conocimientos... el docente debe ser un agente activo que plantee propuestas de intervención que respondan a las necesidades de las aulas."
                        </p>
                    </div>
                </section>

                {/* 4. EJES TEMÁTICOS */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <BeakerIcon className="h-6 w-6 text-cyan-600" />
                                <h3 className="font-bold text-slate-900 text-lg">1. Ciencia y Observación</h3>
                            </div>
                            <p className="text-sm text-slate-600">Implicaciones de la ciencia moderna y la episteme del sujeto cognoscente en el desarrollo de la investigación.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <MagnifyingGlassIcon className="h-6 w-6 text-emerald-600" />
                                <h3 className="font-bold text-slate-900 text-lg">2. El Sentido de Investigar</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {["¿Por qué?", "¿Cuándo?", "¿Cómo?", "¿Dónde?"].map(q => <span key={q} className="bg-slate-50 p-2 rounded-lg text-xs font-bold text-slate-500">{q}</span>)}
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                        <PuzzlePieceIcon className="h-20 w-20 absolute -bottom-5 -right-5 opacity-10" />
                        <h3 className="text-xl font-bold mb-6 text-cyan-400">3 & 4. La Propuesta de Investigación</h3>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex gap-2"><span>•</span> Articulación con la observación educativa.</li>
                            <li className="flex gap-2"><span>•</span> Generación de ideas: ¿De dónde surgen?</li>
                            <li className="flex gap-2"><span>•</span> Formulación de objetivos en escenarios reales.</li>
                        </ul>
                    </div>
                </div>

                {/* 5. EL PROBLEMA DE INVESTIGACIÓN */}
                <section className="mb-20 bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                    <h3 className="text-2xl font-bold text-emerald-900 mb-8 flex items-center gap-2">
                        <ClipboardDocumentListIcon className="h-7 w-7" /> 5 & 6. De la Realidad al Problema
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: "Lectura de Realidad", d: "Deseo de investigación en contextos pedagógicos." },
                            { t: "Pregunta e Hipótesis", d: "Formulación técnica y elaboración de supuestos." },
                            { t: "Tipos de Investigación", d: "Cualitativa, cuantitativa y métodos mixtos." },
                            { t: "Contextos Educativos", d: "Investigación aplicada al entorno escolar." },
                            { t: "Praxeología", d: "Hablemos de la investigación praxeológica." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. VOCABULARIO */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Vocabulario</span>
                        <h2 className="text-2xl font-bold text-slate-900">Conceptos Fundamentales</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {conceptos.map((concepto, index) => (
                            <div key={index} className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col items-center text-center">
                                <BookOpenIcon className="h-8 w-8 text-slate-300 mb-2"/>
                                <span className="font-bold text-slate-700 text-sm">{concepto}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. ACUERDOS */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-10">
                        <span className="bg-slate-900 text-white font-bold px-4 py-1.5 rounded-full text-xs tracking-wide uppercase">Normativa</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-4">Acuerdos de Clase</h2>
                        <p className="text-slate-500 mt-2">Pautas para el desarrollo armónico del curso</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {acuerdos.map((acuerdo) => (
                            <div key={acuerdo.id} className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-cyan-600 group-hover:bg-cyan-50 transition-colors">
                                    {acuerdo.icon}
                                </div>
                                <p className="text-sm text-slate-600 leading-snug pt-1">{acuerdo.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link to="/contacto" className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-cyan-700 transition-all">
                        Contactar Docente
                    </Link>
                </div>
            </div>
        </div>
    );
}