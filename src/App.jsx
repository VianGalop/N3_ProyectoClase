import React, { useEffect, useState } from 'react'

import './index.css'
import { ListaLu } from './components/BotonList'

function App() {
  const [monto, setMonto] = useState('00.00')

  useEffect(() => {
    if(localStorage.getItem('monto')){
      setMonto(parseFloat(localStorage.getItem('monto')))
    }else{
      localStorage.getItem('monto', monto)
    }

    if(localStorage.getItem('entradas')){
      setMonto(parseFloat(localStorage.getItem('entradas')))
    }
    if(localStorage.getItem('salidas')){
      setMonto(parseFloat(localStorage.getItem('salidas')))
    }
    
  },[])


  return (
    <>
      <div className="cuerpo">
        <h1>Control de ingresos y gastos</h1>
        <div className="saldo">
          <h3 className="textSaldo">saldo</h3>
          <div className="numeroSaldo">
            <h3>$ {monto}</h3>
          </div>
        </div>
        <ListaLu monto={monto} setMonto={setMonto}/>

      </div>
    </>
  )
}

export default App