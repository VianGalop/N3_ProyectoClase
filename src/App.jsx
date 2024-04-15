import React, { useState } from 'react'

import './index.css'
import { ListaLu } from './components/BotonList'

function App() {
  return (
    <>
      <div className="cuerpo">
        <h1>Control de ingresos y gastos</h1>
        <div className="saldo">
          <h3 className="textSaldo">saldo</h3>
          <div className="numeroSaldo">
            <h3>$ 3000</h3>
          </div>
        </div>
        <ListaLu />

      </div>
    </>
  )
}

export default App