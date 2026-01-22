import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { AprendizajeDigital } from "./views/AprendizajeDigital";
import { EducaciónTic } from "./views/EducacionTic";
import { HistoriaEducacion } from "./views/HistoriaEducacion";
import HomeView from "./views/Home";
import { IdentidadMaestro } from "./views/IdentidadMaestro";
import { TendenciasPedagogicas } from "./views/TendenciasPedagogicas";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* El Layout envuelve a las demás rutas */}
        <Route element={<MainLayout />}>
          {/* Usa path="/" para la página principal */}
          <Route path="/" element={<HomeView />} index />
          <Route path="/home" element={<HomeView />} />
          <Route path="/aprendizaje-digital" element={<AprendizajeDigital />} />
          <Route path="/educacionTic" element={<EducaciónTic />} />
          <Route path="/historiaEducacion" element={<HistoriaEducacion />} />
          <Route path="/identidad-maestro" element={<IdentidadMaestro />} />
          <Route path="/tendencias-pedagogicas" element={<TendenciasPedagogicas />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
