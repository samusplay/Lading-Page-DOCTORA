import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer"; // Asegúrate de que la ruta sea correcta
import { Navbar } from "../components/Navbar"; // Asegúrate de que la ruta sea correcta

export default function MainLayout() {
    return (
        // 1. CONTENEDOR MAESTRO
        // 'min-h-screen': Ocupa toda la altura de la pantalla como mínimo.
        // 'flex flex-col': Organiza Navbar, Main y Footer en columna vertical.
        // 'bg-slate-50': El color de fondo base de toda la aplicación.
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-blue-200 selection:text-blue-900">

            {/* 2. NAVBAR (Sticky & Glassmorphism) */}
            {/* El componente Navbar ya tiene configurado su propio ancho y posición fija */}
            <Navbar />

            {/* 3. CONTENIDO PRINCIPAL (OUTLET) */}
            {/* 'flex-grow': Obliga a este div a ocupar todo el espacio disponible,
                empujando el Footer hacia el final de la pantalla si hay poco contenido. */}
            <main className="grow w-full flex flex-col">
                <Outlet />
            </main>

            {/* 4. FOOTER (Pie de página) */}
            <Footer />

        </div>
    );
}