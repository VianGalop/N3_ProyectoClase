import React, { useState } from 'react'
import { Modal } from './components/Modal'
import { Boton } from './components/Button'
import { FormEntrada, Salida } from './components/Entrada'
import { FormNewCategory, ListCategory } from './components/Form/Categoria'

import './index.css'
import { ListaLu } from './components/BotonList'

function App() {
  const [isOpenEnt, setIsOpenEnt] = useState(false)
  const [isOpenSal, setIsOpenSal] = useState(false)
  const [isOpenCatego, setIsOpenCatego] = useState(false)
  const [isOpenListado, setIsOpenListado] = useState(false)

  return (
    <>
<<<<<<< HEAD
    <div className="container">
      <Boton tipo="button" className="button" idBoton='addContactBtn' setAccion={() => setIsOpenEnt(true)} label="Nueva Entrada" />
      <Boton tipo="button" className="button" idBoton='addContactBtn' setAccion={() => setIsOpenSal(true)} label="Nueva Salida" />
      <Boton tipo="button" className="button" idBoton='addContactBtn' setAccion={() => setIsOpenCatego(true)} label="Categoria" />
      <Boton tipo="button" className="button" idBoton='addContactBtn' setAccion={() => setIsOpenListado(true)} label="Listado" />
    </div>

    {
       isOpenEnt  &&
       <Modal title="Entrada" setIsOpen={() => setIsOpenEnt(false)}>
           <FormEntrada />
       </Modal>
    }

    {
       isOpenSal  &&
       <Modal title="Salida" setIsOpen={() => setIsOpenSal(false)}>
           <Salida />
       </Modal>
    }

    {
       isOpenCatego  &&
       <Modal title="NuevaCategoria" setIsOpen={() => setIsOpenCatego(false)}>
           <FormNewCategory />
       </Modal>
    }

    {
       isOpenListado  &&
       <Modal title="Listado Categorias" setIsOpen={() => setIsOpenListado(false)}> 
           <ListCategory/>
       </Modal>
    }
=======
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
>>>>>>> yon1
    </>
  )
}

export default App