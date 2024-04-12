import React, { useState } from 'react'
import { Modal } from './components/Modal'
import { Boton } from './components/Button'
import { FormEntrada, Salida } from './components/Entrada'
import { FormNewCategory, ListCategory } from './components/Form/Categoria'

function App() {
  const [isOpenEnt, setIsOpenEnt] = useState(false)
  const [isOpenSal, setIsOpenSal] = useState(false)
  const [isOpenCatego, setIsOpenCatego] = useState(false)
  const [isOpenListado, setIsOpenListado] = useState(false)

  return (
    <>
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
    </>
  )
}

export default App