import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomeView from "./views/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* El Layout envuelve a las demás rutas */}
        <Route element={<MainLayout />}>
          {/* Usa path="/" para la página principal */}
          <Route path="/" element={<HomeView />} index />
          {/* Si quieres que sea /home, cámbialo aquí */}
          <Route path="/home" element={<HomeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
