import React from 'react'
import TortaGrafico from './components/tortaGrafico'
import MapaCalorGrafico from './components/mapaCalorGrafico'
import BarraGrafico from './components/BarraGrafico'

export const App = () => {
  return (
    <div className="bg-gradient-to-b from-black to-slate-950 min-h-screen text-white font-sans">
      <header className="bg-gradient-to-t from-black to-slate-900 p-8 shadow-md">
        <h1 className="text-5xl font-extrabold text-center mb-4 tracking-tight">Ventas de Videojuegos</h1>
        <h2 className="text-2xl font-medium text-center mb-10 text-slate-300">¿Cuáles son los géneros tendencia?</h2>

        <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg transition duration-300 hover:shadow-2xl flex flex-col md:flex-row items-center justify-center my-10 gap-8 hover:bg-slate-950">
          <div className="flex justify-center">
            <TortaGrafico />
          </div>
          <aside className="max-w-md text-left">
            <h2 className="text-2xl font-bold mb-3 text-slate-100">🎮 Los Géneros más vendidos</h2>
            <p className="text-slate-300 leading-relaxed">
              Este gráfico muestra los géneros con mayor volumen de ventas a nivel global, dándonos una idea clara de las preferencias actuales en el mercado gamer.
            </p>
          </aside>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg transition duration-300 hover:shadow-2xl flex flex-col md:flex-row items-center justify-center my-10 gap-8 hover:bg-slate-950">
          <div className="flex justify-center">
            <MapaCalorGrafico />
          </div>
          <aside className="max-w-md text-left">
            <h2 className="text-2xl font-bold mb-3 text-slate-100">🗺️ Géneros más vendidos por región</h2>
            <p className="text-slate-300 leading-relaxed">
              Observá cómo varían las preferencias de videojuegos en distintas partes del mundo, con un análisis visual de las regiones más fanáticas de cada género. Los números estan representado en millones de unidades vendidas.
            </p>
          </aside>
        </div>


        <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg transition duration-300 hover:shadow-2xl flex flex-col md:flex-row items-center justify-center my-10 gap-8 hover:bg-slate-950">
          <div className="flex justify-center">
            <BarraGrafico />
          </div>
          <aside className="max-w-md text-left">
            <h2 className="text-2xl font-bold mb-3 text-slate-100">🏢 Géneros desarrollados por empresa</h2>
            <p className="text-slate-300 leading-relaxed">
            Este gráfico muestra la cantidad de videojuegos desarrollados por cada empresa, clasificados según su género. Permite identificar qué compañías lideran la producción dentro de la industria del gaming en cada categoría.
            </p>
          </aside>
        </div>
      </header>
    </div>
  )
}
