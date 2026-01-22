import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        // 1. Contenedor Maestro:
        // 'min-h-screen' asegura que la página ocupe al menos el 100% de la altura de la ventana.
        // 'flex flex-col' organiza los hijos (Navbar, Main, Footer) en columna.
        // 'bg-slate-50' da un tono gris muy suave, ideal para la vista en sitios de lectura/educación.
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">

            {/* --- ZONA DEL NAVBAR --- */}
            {/* 'sticky top-0 z-50' mantiene el menú visible al hacer scroll.
                Aquí importarías tu componente: <Navbar /> */}
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Placeholder visual para que veas el espacio reservado */}
                    <span className="font-bold text-xl text-blue-600">CorazonDigital</span>
                    <div className="text-sm text-slate-400 italic">Aquí va el componente &lt;Navbar /&gt;</div>
                </div>
            </header>

            {/* --- ZONA DE CONTENIDO (OUTLET) --- */}
            {/* 'flex-grow' (o flex-1) es EL TRUCO: obliga a este div a expandirse para ocupar
                todo el espacio sobrante, empujando el footer hacia abajo. */}
            <main className="flex-grow w-full">
                {/* 'w-full' asegura que el contenido hijo tenga todo el ancho disponible */}
                <Outlet />
            </main>

            {/* --- ZONA DEL FOOTER --- */}
            {/* Aquí importarías tu componente: <Footer /> */}
            <footer className="bg-slate-900 text-slate-300 py-10 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-4 text-slate-500 italic">Aquí va el componente &lt;Footer /&gt;</div>
                    <p className="text-sm">© 2024 Educación Futura. Todos los derechos reservados.</p>
                </div>
            </footer>

        </div>
    );
}