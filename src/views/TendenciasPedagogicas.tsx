import {
    AcademicCapIcon,
    ArrowLeftIcon,
    BookOpenIcon,
    CheckBadgeIcon,
    CpuChipIcon,
    GlobeAltIcon,
    LightBulbIcon,
    PlayCircleIcon,
    PresentationChartLineIcon,
    ScaleIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function TendenciasPedagogicas() {

    // DATOS: Presentaciones Genially para inyectar en Tendencias
    const recursosInteractivos = [
        { id: 1, titulo: "Tecnologías y Pedagogías Emergentes", url: "https://view.genially.com/67dc375f9b7a9dcfef51217f" },
        { id: 2, titulo: "Organizadores Gráficos", url: "https://view.genially.com/69114a6528be4ca11588e4a5" },
        { id: 3, titulo: "Infografía: Ciencia Vs Tecnología", url: "https://view.genially.com/65f0f38542dc7600146bc11e" },
    ];

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
                
                {/* 1. INTRODUCCIÓN Y METODOLOGÍA */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-16">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <AcademicCapIcon className="h-6 w-6 text-blue-600"/> Propósito del Curso
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Reflexionar sobre las tendencias pedagógicas como resultado de posturas teóricas y metodológicas en un contexto cultural concreto.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
                                <ScaleIcon className="h-5 w-5"/> Metodología Praxeológica
                            </h3>
                            <p className="text-blue-900/80 text-sm leading-relaxed">
                                El espacio privilegia un <strong>enfoque praxeológico pedagógico</strong> (teórico-práctico) para la transformación social.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. MATERIAL INTERACTIVO INYECTADO */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-xs">MULTIMEDIA</span>
                        <h2 className="text-2xl font-bold text-slate-900">Innovación en el Aula</h2>
                    </div>

                    <div className="grid gap-8">
                        {recursosInteractivos.map((rec) => (
                            <div key={rec.id} className="bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-slate-100 transition-all hover:shadow-xl">
                                <div className="flex items-center gap-3 mb-4 px-2">
                                    <PresentationChartLineIcon className="h-6 w-6 text-indigo-500" />
                                    <h3 className="text-lg font-bold text-slate-800">{rec.titulo}</h3>
                                </div>
                                <div className="w-full relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                                    <iframe 
                                        title={rec.titulo}
                                        className="absolute top-0 left-0 w-full h-full rounded-2xl bg-slate-100 shadow-inner"
                                        src={rec.url} 
                                        frameBorder="0" 
                                        allowFullScreen 
                                        scrolling="yes"
                                    ></iframe>
                                </div>
                                <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
                                    <PlayCircleIcon className="h-4 w-4" />
                                    <span>Haz clic para interactuar con el recurso</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TEMA 1: MODELOS */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs">TEMA 1</span>
                        <h2 className="text-2xl font-bold text-slate-900">Articulación de Tendencias</h2>
                    </div>

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

                {/* TEMA 2: TOPICOS DIGITALES */}
                <section className="mb-20">
                    <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                                    <GlobeAltIcon className="h-6 w-6"/> Transformación
                                </h3>
                                <ul className="space-y-4">
                                    <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <p className="font-bold text-sm">Escuela Nueva en Colombia</p>
                                        <p className="text-xs text-slate-300">Cambio social y educativo (Agustín Nieto Caballero).</p>
                                    </li>
                                    <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <p className="font-bold text-sm">Pedagogías Críticas</p>
                                        <p className="text-xs text-slate-300">Transformación social (Freire, McLaren).</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                                    <CpuChipIcon className="h-6 w-6"/> Competencias Digitales
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-teal-500 rounded-full"></div>
                                        <p className="text-sm"><strong>IA:</strong> Personalización del aprendizaje.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-blue-500 rounded-full"></div>
                                        <p className="text-sm"><strong>TICs:</strong> Integración de tecnología moderna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <div className="bg-slate-100 py-16 text-center mt-12 border-t border-slate-200 rounded-3xl">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Quieres innovar en tu práctica?</h2>
                        <Link to="/contacto" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                            Contactar Docente
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}