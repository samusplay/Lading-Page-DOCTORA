
export default function HomeView(){
    return (
    // Si el fondo se pone azul y el texto blanco, ¡Tailwind funciona!
    <div className="bg-blue-600 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">¡Hola Mundo!</h1>
      <p className="text-xl bg-black/30 p-4 rounded-lg">
        Si ves esto azul, tu configuración manual fue un éxito.
      </p>
    </div>
  )
}