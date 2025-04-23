import React from 'react'
import TortaGrafico from './components/tortaGrafico'
import MapaCalorGrafico from './components/mapaCalorGrafico'
import BarraGrafico from './components/BarraGrafico'

export const App = () => {
  return (
    <div>
      <TortaGrafico/>
      <MapaCalorGrafico/>
      <BarraGrafico/>
    </div>
  )
}
