import React, { useState } from 'react'
import { Modal } from './components/Modal'
import { Form, FormDos } from './components/Form'
import { Boton } from './components/Button'

function App() {
  const [isOpenEnt, setIsOpenEnt] = useState(false)
  const [isOpenSal, setIsOpenSal] = useState(false)
  return (
    <>
    <div className="container">
      <Boton tipo="button" className="button" idBoton='addContactBtn' setAccion={() => setIsOpenEnt(true)} label="Nueva Entrada" />
      <Boton tipo="button" className="button" idBoton='addContactBtn' setAccion={() => setIsOpenSal(true)} label="Nueva Salida" />
    </div>

    {
       isOpenEnt  &&
       <Modal title="Entrada" setIsOpen={() => setIsOpenEnt(false)}>
           <Form />
       </Modal>
    }

    {
       isOpenSal  &&
       <Modal title="Salida" setIsOpen={() => setIsOpenSal(false)}>
           <FormDos />
       </Modal>
    }
    </>
  )
}

export default App