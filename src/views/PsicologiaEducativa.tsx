import {
    ArrowLeftIcon,
    BookOpenIcon,
    ChatBubbleLeftRightIcon,
    CheckBadgeIcon,
    ClipboardDocumentCheckIcon,
    ComputerDesktopIcon,
    DocumentCheckIcon,
    EyeIcon,
    HeartIcon,
    PlayCircleIcon,
    PresentationChartLineIcon,
    PuzzlePieceIcon,
    SparklesIcon,
    UserGroupIcon,
    VideoCameraIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function PsicologiaEducativa() {

    // DATOS: Presentaciones Genially
    const presentaciones = [
        { id: 1, titulo: "Psicología y Pedagogía", url: "https://view.genially.com/6668c754f9b5c400144672f5", ratio: "61.48%" },
        { id: 2, titulo: "Constructivismo", url: "https://view.genially.com/5e9f9f028695b90d874cc38a", ratio: "56.25%" },
        { id: 3, titulo: "Maria Montessori y Otros", url: "https://view.genially.com/6667c728a77a0400140cb90f", ratio: "67.42%" },
        { id: 4, titulo: "Mapa Conceptual: Aprendizaje Significativo", url: "https://view.genially.com/64a5ee738337d50019d529ba", ratio: "56.25%" },
        { id: 5, titulo: "El Sentido de la Vida", url: "https://view.genially.com/63e57b8595c1eb001a045d04", ratio: "56.25%" },
    ];

    // DATOS: Temas (Preguntas Orientadoras)
    const temas = [
        {
            titulo: "Fundamentos y Teorías",
            pregunta: "¿Qué aportes desde la conceptualización de la Psicología y las teorías del aprendizaje contribuyen al desarrollo integral?",
            icon: <PuzzlePieceIcon className="h-8 w-8 text-purple-500"/>,
            color: "border-purple-200 hover:border-purple-400 bg-purple-50/50"
        },
        {
            titulo: "Desarrollo Evolutivo",
            pregunta: "¿Cuáles son las características del desarrollo integral en las diferentes etapas evolutivas (psicológico, cognitivo, social)?",
            icon: <SparklesIcon className="h-8 w-8 text-pink-500"/>,
            color: "border-pink-200 hover:border-pink-400 bg-pink-50/50"
        },
        {
            titulo: "Contexto Psicosocial",
            pregunta: "¿Qué aspectos psicosociales debe comprender un maestro para diseñar propuestas pedagógicas pertinentes?",
            icon: <UserGroupIcon className="h-8 w-8 text-indigo-500"/>,
            color: "border-indigo-200 hover:border-indigo-400 bg-indigo-50/50"
        }
    ];

    const acuerdos = [
        { id: 1, text: "Registro de asistencia obligatorio en AULAS VIRTUALES.", icon: <ClipboardDocumentCheckIcon className="h-5 w-5 text-slate-500"/> },
        { id: 2, text: "Lecturas asignadas para posterior evaluación.", icon: <BookOpenIcon className="h-5 w-5 text-slate-500"/> },
        { id: 3, text: "Entrega de evidencias en AULA VIRTUAL (PDF/Formato asignado).", icon: <DocumentCheckIcon className="h-5 w-5 text-slate-500"/> },
        { id: 4, text: "Actividades calificadas y publicadas en AULA VIRTUAL.", icon: <CheckBadgeIcon className="h-5 w-5 text-slate-500"/> },
        { id: 5, text: "Grupo de WhatsApp para recursos multimedia.", icon: <ChatBubbleLeftRightIcon className="h-5 w-5 text-slate-500"/> },
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Psicología <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                            Educativa
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                        Comprender los procesos mentales, emocionales y sociales para transformar la enseñanza y potenciar el desarrollo humano integral.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* 2. INTRODUCCIÓN VISUAL */}
                <section className="grid md:grid-cols-[1fr_300px] gap-8 mb-16 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">El ser humano en el centro del aprendizaje</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Este curso explora cómo aprendemos y cómo nos desarrollamos a lo largo de la vida. Analizaremos desde los paradigmas psicológicos clásicos hasta las necesidades psicosociales actuales.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm flex items-center justify-center">
                        <HeartIcon className="h-32 w-32 text-purple-300 animate-pulse"/>
                    </div>
                </section>

                {/* --- SECCIÓN: MATERIAL INTERACTIVO (Inyectado) --- */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-xs">MULTIMEDIA</span>
                        <h2 className="text-2xl font-bold text-slate-900">Recursos y Mapas Conceptuales</h2>
                    </div>

                    <div className="grid gap-12">
                        {presentaciones.map((pres) => (
                            <div key={pres.id} className="bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-slate-100 transition-all hover:shadow-2xl">
                                <div className="flex items-center gap-3 mb-4 px-2">
                                    <PresentationChartLineIcon className="h-6 w-6 text-purple-500" />
                                    <h3 className="text-lg font-bold text-slate-800">{pres.titulo}</h3>
                                </div>
                                <div className="w-full relative" style={{ paddingBottom: pres.ratio, height: 0 }}>
                                    <iframe 
                                        title={pres.titulo}
                                        className="absolute top-0 left-0 w-full h-full rounded-2xl bg-slate-100 shadow-inner"
                                        src={pres.url} 
                                        frameBorder="0" 
                                        allowFullScreen 
                                        scrolling="yes"
                                    ></iframe>
                                </div>
                                <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
                                    <PlayCircleIcon className="h-4 w-4" />
                                    <span>Navega por la presentación para profundizar en el tema</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. TEMAS PRINCIPALES */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Ejes Temáticos</span>
                        <h2 className="text-2xl font-bold text-slate-900">Preguntas Orientadoras</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {temas.map((tema, index) => (
                            <div key={index} className={`p-6 rounded-2xl border ${tema.color} transition-all duration-300 hover:shadow-lg flex flex-col h-full`}>
                                <div className="mb-4 bg-white w-fit p-3 rounded-xl shadow-sm">
                                    {tema.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-3">{tema.titulo}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed italic grow">
                                    "{tema.pregunta}"
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. ACUERDOS DE CLASE */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-slate-900">Acuerdos de Convivencia</h2>
                        <p className="text-slate-500 mt-2">Pautas para un ambiente de aprendizaje respetuoso y efectivo.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {acuerdos.map((acuerdo) => (
                            <div key={acuerdo.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
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
                    <p className="text-slate-500 mb-6 italic">"Educar la mente sin educar el corazón, no es educar en absoluto." - Aristóteles</p>
                    <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-lg">
                        Contactar Docente
                    </Link>
                </div>

            </div>
        </div>
    );
}