
import {
    AcademicCapIcon,
    ArrowLeftIcon,
    BookOpenIcon,
    BuildingLibraryIcon,
    ClockIcon,
    GlobeEuropeAfricaIcon,
    SparklesIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function HistoriaEducacion() {

    // DATOS: Línea de Tiempo (Hitos Históricos)
    const hitos = [
        {
            era: "Antigüedad Clásica",
            titulo: "La Paideia Griega",
            desc: "El ideal de formación humana. La educación no era solo adquirir conocimientos, sino moldear el carácter (Arete). Sócrates, Platón y Aristóteles sentaron las bases del pensamiento occidental.",
            icon: <BuildingLibraryIcon className="h-6 w-6 text-amber-600"/>,
            color: "border-amber-200 bg-amber-50"
        },
        {
            era: "Edad Media",
            titulo: "La Escolástica y las Universidades",
            desc: "Nace la universidad como institución. El Trivium (gramática, retórica, dialéctica) y el Quadrivium (aritmética, geometría, astronomía, música) dominan el currículo bajo la influencia teocéntrica.",
            icon: <BookOpenIcon className="h-6 w-6 text-indigo-600"/>,
            color: "border-indigo-200 bg-indigo-50"
        },
        {
            era: "Modernidad",
            titulo: "La Didáctica Magna",
            desc: "Juan Amós Comenio introduce el concepto de 'enseñar todo a todos'. Se estructura la escuela moderna, los grados escolares y se valora la ilustración y la razón.",
            icon: <GlobeEuropeAfricaIcon className="h-6 w-6 text-blue-600"/>,
            color: "border-blue-200 bg-blue-50"
        },
        {
            era: "Contemporaneidad",
            titulo: "La Escuela Nueva",
            desc: "Ruptura con el modelo tradicional. El niño pasa a ser el centro del proceso (Paidocentrismo). Dewey, Montessori y Piaget revolucionan la pedagogía activa.",
            icon: <SparklesIcon className="h-6 w-6 text-teal-600"/>,
            color: "border-teal-200 bg-teal-50"
        }
    ];

    // DATOS: Grandes Pedagogos
    const pedagogos = [
        { nombre: "Juan Amós Comenio", aporte: "Padre de la Didáctica. Propuso la educación universal y gradual.", tag: "Modernidad" },
        { nombre: "Jean-Jacques Rousseau", aporte: "Naturalismo pedagógico. El niño debe aprender de la naturaleza.", tag: "Ilustración" },
        { nombre: "Johann Heinrich Pestalozzi", aporte: "Educación popular. Integró cabeza, corazón y mano en el aprendizaje.", tag: "Escuela Activa" },
        { nombre: "Maria Montessori", aporte: "Ambiente preparado y autonomía del niño. Materiales didácticos concretos.", tag: "Siglo XX" },
        { nombre: "Lev Vygotsky", aporte: "Teoría Sociocultural. El aprendizaje es un proceso social (ZDP).", tag: "Constructivismo" },
        { nombre: "Paulo Freire", aporte: "Pedagogía Crítica. La educación como práctica de la libertad.", tag: "Latinoamérica" },
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans animate-fade-in">
            
            {/* 1. HERO SECTION */}
            <div className="bg-slate-900 text-white pt-24 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10 -ml-10 -mb-10"></div>
                
                <div className="container mx-auto max-w-5xl relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeftIcon className="h-4 w-4" /> Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Historia de la <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
                            Educación
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Un viaje por los hitos, pensadores y transformaciones que han moldeado la escuela moderna. Comprender el pasado para innovar el futuro.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* 2. INTRODUCCIÓN */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-16 relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-[1fr_200px] gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <ClockIcon className="h-6 w-6 text-amber-600"/> ¿Por qué estudiar historia?
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                La escuela no siempre fue como la conocemos hoy. Estudiar la historia de la educación nos permite entender que <strong>las prácticas pedagógicas son construcciones sociales</strong>. Analizar cómo se enseñaba en Grecia o en la Modernidad nos da herramientas críticas para cuestionar y mejorar nuestra labor docente actual.
                            </p>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <BuildingLibraryIcon className="h-32 w-32 text-slate-100"/>
                        </div>
                    </div>
                </section>

                {/* 3. LÍNEA DE TIEMPO (TIMELINE) */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Cronología</span>
                        <h2 className="text-2xl font-bold text-slate-900">Evolución del Pensamiento Pedagógico</h2>
                    </div>

                    <div className="relative border-l-4 border-slate-200 ml-4 md:ml-6 space-y-12">
                        {hitos.map((hito, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                {/* Punto en la línea */}
                                <div className="absolute -left-[11px] top-0 w-6 h-6 bg-white border-4 border-slate-300 rounded-full"></div>
                                
                                <div className={`p-6 rounded-2xl border ${hito.color} hover:shadow-md transition-shadow`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                {hito.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800">{hito.titulo}</h3>
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white/50 px-3 py-1 rounded-full w-fit">
                                            {hito.era}
                                        </span>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        {hito.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. GALERÍA DE PEDAGOGOS */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-xs uppercase">Autores</span>
                        <h2 className="text-2xl font-bold text-slate-900">Maestros que Transformaron el Mundo</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pedagogos.map((autor, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:-translate-y-1 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-50 text-slate-400 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        <UserGroupIcon className="h-6 w-6"/>
                                    </div>
                                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-bold uppercase">
                                        {autor.tag}
                                    </span>
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg mb-2">{autor.nombre}</h4>
                                <p className="text-sm text-slate-600 leading-snug">
                                    {autor.aporte}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. REFLEXIÓN FINAL / CTA */}
                <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <AcademicCapIcon className="h-12 w-12 mx-auto text-amber-400 mb-4"/>
                        <h2 className="text-2xl font-bold mb-4">La Historia Continúa...</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                            Hoy, tú eres parte de esta historia. Como docente del siglo XXI, estás escribiendo el capítulo de la educación digital y la inteligencia artificial.
                        </p>
                        <Link to="/identidad-maestro" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-amber-50 transition-colors">
                            Ver Identidad del Maestro
                        </Link>
                    </div>
                    {/* Decoración */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                </section>

            </div>
        </div>
    );
}