import React from 'react'
import TortaGrafico from './components/tortaGrafico'
import MapaCalorGrafico from './components/mapaCalorGrafico'
import BarraGrafico from './components/BarraGrafico'

export const App = () => {
  return (
    <div className='bg-gradient-to-b from-black to bg-slate-950 min-h-screen'>
      <header className='bg-gradient-to-t from-black to bg-slate-900 text-white p-4'>
        <h1 className='text-2xl font-bold text-center'>Ventas de Videojuegos</h1>
        <h2 className='text-lg font-semibold text-center'>¿Cuales son los géneros tendencia?</h2>
      </header>
    </div>
  )
}
